# NodeJS Ramon

Liveserver starten im Terminal starten

```bash
cd /ins_verzeichnis/
liveserver .
```

Falls liveserver nicht läuft dann, mit python lokalen Server starten:
```bash
cd /ins_verzeichnis/
python -m SimpleHTTPServer
```

Nodeserver starten (läuft auf Port 3000):

```bash
node nodeserver.js
```

Im Browser beide URLs öffnen:

```html
http://localhost:8000/index.html
http://localhost:8000/screen2.html
```
 
## Ablauf

  - index.html im Browser öffnen
  - Button-Druck triggert ein socket messages. 
  - Socket.io schickt messages über events (https://socket.io/docs/ Sending and receiving events)
  - nodeserver.js bekommt Message und schickt an alle Clients die aktuelle Nummer