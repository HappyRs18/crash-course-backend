# crash-course-backend
FiPo24 - Crash Course 

Um das Projekt zu starten:

1. npm install
2. npm start

## References:

#### Node (JavaScript Interpreter)
[Node - Introduction (Official)](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

Kurzbeschreibung:  
- Wird genutzt um JavaScript unabhängig vom Browser auszuführen
- Kann auch Backend darstellen und als HTTP-Anwendung laufen
- Bildet Basis für jede moderne Web-Anwendung heutzutage

#### Express (WebServer) 
[NodeJS - Express (Official)](https://expressjs.com/)

Kurzbeschreibung:
- Framework fürs Web auf Basis von NodeJS
- Implementiert direkt das Routing für uns
- Enthält auch MiddlewareServices um z. B. bequem Google Anmeldung anzubinden
- Es ist grob gesagt ein Implementation von einem WebServer, worum wir uns nicht mehr kümmern müssen

#### Nodemon - Hot-Reload-Modul
[nodemon (Official)](https://nodemon.io/)

Kurzbeschreibung:
- Wurde früher genutzt um automatisch Anwendung neuzustarten (wird heute auch noch so genutzt, aber der Hauptzweck war Server-Reloads).
- Kann automatisiert Änderungen am Source-Code erkennen und automatisch den Server neustarten, wodurch Änderungen direkt reflektiert werden und es somit sehr bequem in der Entwicklung ist
- Lässt sich auch fein-granular anpassen an bestimmte Events oder sonstiges

##### Befehlreferenzen
- `mkdir <name>`
  - Erzeugt ein neuen Ordner im aktuellen Kontext
- `touch <name>`
  - Erzeugt eine neue Datei im aktuellen Kontext
- `npm -v | node -v`
  - Gibt die Version des aktuellen npm | node aus
- `npm init`
  - Initialisiert das node-projekt und erzeugt eine package-json, worin alles notwendige zum Projekt steht, sowie launch-scripts
- `npm install <package-name> | npm i <package-name>`
  - Installiert `package-name` via npm und schreibt es in die package.json als Referenz
- `npm install --save-dev`
  - Das `--save-dev` speichert es in einen bestimmten tag-tree, den devDependencies, das bedeutet, dass dieses Paket nur in der lokalen Entwicklung installiert und gebaut wird, im Deployment-Prozess aber nicht, das betrifft zum Beispiel Test-Packages oder Debugging-Packages 
- `npm start`
  - Beachte, dass hier ist ein custom-script, welches in package-json festgelegt ist, es muss nicht zwangsweise start heißen, es könnte auch "run" sein oder "boot" oder sonstiges, das wird in der package.json manuell festgelegt, hinter den scripts verbirgt sich meist ein Befehl wie `node index.js` oder `nodemon app.js`