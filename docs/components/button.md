---
layout: docs
title: Button
description: Documentation und Beispiele fuer Button
group: components
---

## wiederverwenbares Element: Button
### Eigenschaften
* Weiterleitung zu anderer Seite

### Anwendungsbereich
* Platzierung auf Seitenanfang oder in anderen Bereichen der Seite
* Mittels (Kurz)text sollte vorab auf Ziel des Buttons hingewiesen werden (z.B. Artikel, Artikelblock usw.)

### Anpassungsmöglichkeiten
* Farbauswahl, Linktext

### Kombinationsmöglichkeiten
* Kombinierbar mit Artikel, Artikelblock

<br/>

<!-- buttons -->
<section class="container">
  <h1>Buttons - blau - Mehr Erfahren</h1>
</section>
<section>
  <section class="element-wrapper">
    <div class="container">
      <div class="row">
        <div class="button-wrapper">
          <a class="btn btn-blue" role="button" href="#">
            Mehr Erfahren
          </a>
        </div>
      </div>
    </div>
  </section>
</section>

<!-- buttons -->
<section class="container">
  <h1>Buttons - weiss-blau - Mehr Erfahren</h1>
</section>
<section>
  <section class="element-wrapper">
    <div class="container">
      <div class="row">
        <div class="button-wrapper">
          <a class="btn btn-white-blue" role="button" href="#">
            Mehr Erfahren
          </a>
        </div>
      </div>
    </div>
  </section>
</section>

<!-- buttons -->
<section class="container">
  <h1>Buttons - Jetzt bewerben</h1>
</section>
<section>
  <section class="element-wrapper">
    <div class="container">
      <div class="row">
        <div class="button-wrapper">
          <a class="btn btn-blue" role="button" href="#">
            Jetzt bewerben
          </a>
        </div>
      </div>
    </div>
  </section>
</section>

<br/>

<!-- Fachbereiche -->
<section class="container">
  <h1>Button - Nach Fachbereiche</h1>
</section>
<section>
  <section class="element-wrapper">
    <div class="container">
      <div class="row">
        {% for color in site.data.fc-full %}
          <div class="button-wrapper">
            <a role="button" class="btn btn-fc-{{ color.shortname }}" href="#">
              {{ color.longname }}
            </a>
          </div>
        {% highlight html %}
          <div class="button-wrapper">
            <a role="button" class="btn btn-fc-{{ color.shortname }}" href="#">
              {{ color.longname }}
            </a>
          </div>
        {% endhighlight %}
        {% endfor %}
      </div>
    </div>
  </section>
</section>
