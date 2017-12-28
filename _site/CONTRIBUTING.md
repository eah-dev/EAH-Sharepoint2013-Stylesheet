# Anleitung zum Mitmachen
## Einrichten der Entwicklungsumgebung (IDE)
Es ist egal was fuer eine IDE sie benutzten.
Empfehlung: [Visual Studio Code](https://code.visualstudio.com/) kurz VSC, gibt es fuer die verschiedensten OS und hat sehr grosse Auswahl von Plugins.
Alternative: [ATOM] (]https://atom.io/)

Fuer Visual Studio Code sollten folgende Plugins installieren werden
- EditorConfig for VS Code
- Sass
- stylint

## Mitmachen / Entwickeln
1) Klonen des Projektes
```bash
git clone the repo
cd EAH-Sharepoint2013-Stylesheet
```
2) Erstellen Sie ein extra Branch fuer ihre Aenderung / Erweiterung.
```bash
$ git checkout -b [name_of_your_new_branch]
```
3) Nachdem Sie ihre Aenderung getestet haben, stellen Sie ein Merge-Requests.
Am einfachsten geschieht dies ueber die Graphische Oberflaesche von Github.

4) Dieser Merge-Requests wird nach einer Uberpruefung, zugestimmt d.h er wird in den oeffentlichen Branch integriert.

## Entwicklung

einer der folgenden Task sollte waehrend der Entwicklung im Terminal laufen.
- gulp watchDev
  es werden bei Aeanderungen an scss oder javascript Dateien diese erst kompiliert (nur bei scss) und anschliessend auf das Testsytem kopiert.
  Muessen Anschliessend noch als Hauptversion freigeben werden.

- gulp watch
  es werden bei Aenderungen an scss oder javascript Dateien diese erst kompiliert (nur bei scss) und anschliessend auf das Livesystem kopiert.
  Muessen Anschliessend noch als Hauptversion freigeben werden.

Die endgueltige Version wird mit den 2 Befehlen auf das Livesystem uebertragen:
- gulp prod
- gulp copyToSharePoint

Hierbei wird nochmal eine Codeanayle ausgefuhrt (er'/build/reports'), die Css-Dokumentation ('/build/sassdoc') erstellt und alle Datein minimiert.


## Hochladen der Dateien auf den Sharepoint-Server
Auf den Server muessen die folgenden Dateien hochgeladen werden.
1) build/css/eah-jena-style.css -> '_catalogs/masterpage/layouts/eah-jena/css/'
2) build/js/*.js -> '_catalogs/masterpage/layouts/eah-jena/js/'

### auf den Test-Server
Alle Dateien (Javascript und Css) werden mit folgenden Befehl auf den Sharepoint-Server hochgeladen:
- gulp copyToSharePointDev

### auf den Live-Server
Alle Dateien (Javascript und Css) werden mit folgenden Befehl auf den Sharepoint-Server hochgeladen:
- gulp copyToSharePoint