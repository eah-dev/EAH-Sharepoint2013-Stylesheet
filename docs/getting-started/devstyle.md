---
layout: home
title: Entwicklung - Stylesheet
description: Allgemeine Informationen, die fuer die Weiterentwicklung an dem Stylesheet notwendig sind.
group: getting-started
redirect_from: "/docs/getting-started/"
---

# Anleitung zum Mitmachen

## Voraussetzungen
* Einen eigenen GitHub Account
* Git ([Link zum download](https://git-scm.com/downloads)
* Node.js ([Info-Link](https://de.wikipedia.org/wiki/Node.js)) (minimum Version: v7.2.0) ([Link zum download](https://nodejs.org/en/download/))
  * Node.js mit npm package manager muss auf dieser Maschine installiert sein.
  * Gulp muss global installiert sein (nur für Entwickler) -> Befehl: "npm install gulp -g"

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
