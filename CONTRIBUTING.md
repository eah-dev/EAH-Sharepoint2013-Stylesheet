---
layout: home
title: EAH-Sharepoint2013-Stylesheet
description: Documentation
---

# Anleitung zum Mitmachen
## Einrichten der Entwicklungsumgebung (IDE)
Es ist egal was für eine IDE sie benutzten.
Empfehlung: [Visual Studio Code](https://code.visualstudio.com/) kurz VSC, gibt es für die verschiedensten Betriebssysteme und hat sehr grosse Auswahl von Plugins.
Alternative: [ATOM](https://atom.io/)

Für Visual Studio Code sollten folgende Plugins installieren werden
- EditorConfig for VS Code
- Sass
- stylint

## Mitmachen / Entwickeln
1) auf Github einlogen und das [orginal Projekt](https://eah-dev.github.io/EAH-Sharepoint2013-Stylesheet/) klonen.

2) zum eigenen Klon wechseln und diesen anschliessend herrunterladen (Anmerkung: XXXXXXX durch den eigenen GitHub Account Namen ersetzen)
```bash
git clone https://github.com/XXXXXXX/EAH-Sharepoint2013-Stylesheet.git
cd EAH-Sharepoint2013-Stylesheet
```

3) Abhänigkeiten installieren
```bash
npm install
```

4) Erstellen Sie ein extra Branch für ihre Änderung / Erweiterung.
```bash
$ git checkout -b [name_of_your_new_branch]
```

5) Dateien anpassen anschliessend eingeben
```bash
npm run build
```

6) Nachdem Sie ihre Änderung getestet haben, stellen Sie ein Merge-Requests.
Am einfachsten geschieht dies über die Graphische Oberfläche von Github.

7) Dieser Merge-Requests wird nach einer Uberprüfung, zugestimmt d.h. er wird in den öffentlichen Branch integriert.

## Entwicklung

einer der folgenden Task sollte während der Entwicklung im Terminal laufen.
- gulp watchDev
  es werden bei Äanderungen an SCSS oder Javascript Dateien diese erst kompiliert (nur bei SCSS) und anschliessend auf das Testsytem kopiert.
  Müssen änschliessend noch als Hauptversion freigegeben werden.

- gulp watch
  es werden bei Änderungen an SCSS oder Javascript Dateien diese erst kompiliert (nur bei SCSS) und anschliessend auf das Livesystem kopiert.
  Müssen änschliessend noch als Hauptversion freigegeben werden.

Die endgültige Version wird mit den 2 Befehlen auf das Livesystem übertragen:
- gulp prod
- gulp copyToSharePoint

Hierbei wird nochmal eine Codeanayle ausgeführt (er'/build/reports'), die CSS-Dokumentation ('/build/sassdoc') erstellt und alle Datein minimiert.


## Hochladen der Dateien auf den Sharepoint-Server
Auf den Server müssen die folgenden Dateien hochgeladen werden.
1) build/css/eah-jena-style.css -> '_catalogs/masterpage/layouts/eah-jena/css/'
2) build/js/*.js -> '_catalogs/masterpage/layouts/eah-jena/js/'

### auf den Test-Server
Alle Dateien (Javascript und CSS) werden mit folgendem Befehl auf den Sharepoint-Server hochgeladen:
- gulp copyToSharePointDev

### auf den Live-Server
Alle Dateien (Javascript und CSS) werden mit folgendem Befehl auf den Sharepoint-Server hochgeladen:
- gulp copyToSharePoint
