# Sharepoint 2013 Template fuer die EAH-Jena

# Überblick
* Voraussetzungen
* Template
* Allgemeines
* Verzeichnis-Aufbau

# Voraussetzungen
* Node.js ([Info-Link](https://de.wikipedia.org/wiki/Node.js)) (minimum Version: v7.2.0) ([Link zum download](https://nodejs.org/en/download/))
* * Node.js mit npm package manager muss auf dieser Maschine installiert sein.
* * Gulp muss global installiert sein (nur fuer Entwickler) -> Befehl: "npm install gulp -g" 

# Template (einrichten, bearbeiten anschliessend auf Server hochladen)
## Template herunterladen und einrichten

```bash
git clone the repo
cd EAH-Sharepoint2013-Stylesheet
npm install
npm run prod
```

## Stylsheet anpassen / erweitern
[eine seperate Anleitung zum Mitmachen finden Sie hier](CONTRIBUTING.md)

## Auf Sharepoint hochladen
Methode 1 (manuell per VPN)
* (einmalig) die Datei 'spsave-settings.js' mit einem Editor oeffnen und Benutzername (UserID) und Password eintragen anschliessend diese Datei speichern
* EAH-VPN starten
* automatisches Hochladen
* * fuer den Test-Server folgenden Befehl verwenden: 'gulp copyToSharePointDev'
* * fuer den Live-Server folgenden Befehl verwenden: 'gulp copyToSharePoint' 
* alle veränderten Datei als Hauptversion veröffentlichen


## wichtigsten Befehle
* 'npm install' -> dies lädt und installiert die benötigten node-Module in das lokale Verzeichnis.
* 'npm run build' -> Erstellt ein Build-Verzeichnis ('./build') mit 2 Unterordnern (css und js).  
* 'gulp serve' -> startet einen Browser mit der TestSeite anschliessend überwacht dieser Task alle sass-Dateien und kompiliert bei Veränderung diese automatisch neu und startet den browser neu (reload) 

# Allgemeines
## Wichtige Dateien
**lokale Master SCSS Datei**
```sh
src/sass/eah-jena-style.scss
```
Hinweis: aus dieser Style-SCSS-Datei wird eine CSS-Datei gebaut 'eah-jena-style.css' (enthaelt bootstrap, font-awesome, ionicons, Roboto-Google-Fonts, eigener Anpassungen)

## Fonts
es sind folgende Fonts installiert / eingebunden
[Font Awesome](http://fontawesome.io)
[ionicons](http://ionicons.com)
[Roboto - Google Fonts](https://fonts.google.com/specimen/Roboto)

# Verzeichnis-Aufbau
```sh
---+ EAH-Sharepoint2013-Stylesheet
    |---+ src                 # Entwicklungs-Dateien
    |    |-- js               # alle Javascript Dateien
    |    `-- sass             # alle sass Dateien
    |--- task                 # hier sind alle gulp-task befehle drin
    `---+ test                # html Datei mit allen html-code-schnippseln
```

# LICENSE
MIT
