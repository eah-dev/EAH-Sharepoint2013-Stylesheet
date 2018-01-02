---
layout: home
title: Übersicht
description: Allgemeine Informationen über das Projekt.
group: getting-started
redirect_from: "/docs/getting-started/"
---

## Übersicht
===============

[Diese Dokumentation-Seite](https://eah-dev.github.io/EAH-Sharepoint2013-Stylesheet/) wurde erstellt mit Jekyll als ein [GitHub Pages](https://pages.github.com/) und hochgeladen auf GitHub.

Der Sourcecode befindet sich hier [https://github.com/eah-dev/EAH-Sharepoint2013-Stylesheet/](https://github.com/eah-dev/EAH-Sharepoint2013-Stylesheet/).

Bitte [Meldungen und Verbesserungen hier schreiben](https://github.com/eah-dev/EAH-Sharepoint2013-Stylesheet/issues).


## Voraussetzungen
* Git ([Link zum download](https://git-scm.com/downloads)
* Node.js ([Info-Link](https://de.wikipedia.org/wiki/Node.js)) (minimum Version: v7.2.0) ([Link zum download](https://nodejs.org/en/download/))
* * Node.js mit npm package manager muss auf dieser Maschine installiert sein.
* * Gulp muss global installiert sein (nur fuer Entwickler) -> Befehl: "npm install gulp -g"
* Einen eigenen GitHub Account

## Stylsheet bearbeiten
[eine seperate Anleitung zum Mitmachen finden Sie hier](CONTRIBUTING)

# Dokumentation (Jekyll)
Die Dokumentation wird mit [Jekyll](https://jekyllrb.com/) erstellt.
Zum Bearbeiten der Dokumentation wird [Ruby](https://www.ruby-lang.org/en/downloads/) benoetigt.

Anmerkung: Fuer Windows [rubyinstaller](https://rubyinstaller.org/) verwenden und mit allen Optionen installieren. Anschliessend ueberpruefen ob der Pfad (default: 'c:\Ruby24-x64') in der Windows Systemvariable drin steht (Start-> 'systemumgebungsvariablen bearbeiten' eingeben -> [Umgebungsvariablen] -> 'Systemvariable' -> 'Path' anklicken und [Bearbeiten] druecken), falls nicht dann hinzufuegen.

Wichtige Jekyll-Links:
* [Jekyll Doku](https://jekyllrb.com/docs/home/)
* [Liquid for Designers](https://github.com/Shopify/liquid/wiki/liquid-for-designers)


# Verzeichnis-Aufbau
```sh
----+ EAH-Sharepoint2013-Stylesheet
    |----- assets             # Dokumentation: externe javascript, css bibliothek
    |----+ dist               # kompilierten / fertigen Stylesheet Dateien
    |    |-- js               # alle Javascript Dateien
    |    `-- css              # alle css Dateien
    |----- docs               # Dokumentation (Markdown)
    |----+ jekyll             # Jekyll
    |    |-- _data            # Daten (YAML Front Matter)
    |    |-- _includes        # html
    |    |-- _layout          # layout
    |    \-- _plugin          # plugin
    |----+ src                # Entwicklungs-Dateien
    |    |-- js               # alle Javascript Dateien
    |    `-- sass             # alle sass Dateien
    \--- task                 # hier sind alle gulp-task befehle drin
```

# LICENSE

Der SourceCode ist open sourced und unterliegt der [MIT license](https://github.com/eah-dev/EAH-Sharepoint2013-Stylesheet/blob/doc/LICENSE).
