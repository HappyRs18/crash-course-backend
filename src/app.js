const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const currentValue = 1000;
const inflationRate = 2;
const years = 5;

const inflationsrechnerEingaben = {
    currentValue,
    inflationRate,
    years,
}

class InflationInput {
    constructor(heutigerWert, inflationsRate, jahre) {
        this.heutigerWert = heutigerWert;
        this.inflationsRate = inflationsRate;
        this.jahre = jahre;
    }

    static createResponseFromBody(responseBody) {
        if (responseBody == null)
            return null;

        if (responseBody.inflationsRate == null ||
            responseBody.heutigerWert == null ||
            responseBody.jahre == null)
            return null;

        return new InflationInput(responseBody.heutigerWert, responseBody.inflationsRate, responseBody.jahre);
    }
}

function calculateFutureValue(currentValue, inflationsRate, years) {
    return currentValue / Math.pow((1 + (inflationsRate / 100)), years)
}

app.route('/inflationsrechner')
    .get((request, response) => {
        response.send(inflationsrechnerEingaben);
    })
    .post((request, response) => {
        if (request.body == null) {
            response.status(400).json({
                error: 'No request-params supplied'
            })
        }

        const model = InflationInput.createResponseFromBody(request.body);

        if (model == null) {
            response.status(400).json({
                error: 'Wrong request-params supplied'
            })
        }

        const currentValue = model.heutigerWert;
        const futureValue = calculateFutureValue(currentValue, model.inflationsRate, model.jahre)
        const diffNeededToCompensate = Math.abs(futureValue - currentValue)

        const inflationsrechnerErgebnisse = {
            wertHeute: currentValue,
            wertNachInflation: futureValue,
            wertBenoetigtNachInflation: currentValue + diffNeededToCompensate,
            wertBenoetigtFuerAusgleich: diffNeededToCompensate
        };

        response.send(inflationsrechnerErgebnisse);
    });

app.listen(port, () => {
    console.log("Listening on port " + port)
});