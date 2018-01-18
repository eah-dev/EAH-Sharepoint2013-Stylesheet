---
layout: docs
title: Trennline
description: Documentation und Beispiele fuer Trennline
group: components
---

## wiederverwenbares Element: Trennline
### Eigenschaften
* Element zur Abtrennung unterschiedlich inhaltlicher Seitenelemente

### Anwendungsbereich
* Kann überall auf der Seite platziert werden
* Übermäßige Nutzung von Trennlinien vermeiden

### Anpassungsmöglichkeiten
* Farbauswahl (eah-grün, Fachbereichsfarben)

<br/>

<!-- trennline -->
<section class="container">
  <h2>Startseite Trennline</h2>
</section>
<section>
  <section class="element-wrapper line-default">
    <div class="container">
      <div class="row">
        <div class="line-wrapper">
        </div>
      </div>
    </div>
  </section>

  <br/>

  <section class="container">
    {% highlight html %}
    <section class="element-wrapper line-default">
      <div class="container">
        <div class="row">
          <div class="line-wrapper">
          </div>
        </div>
      </div>
    </section>
    {% endhighlight %}
  </section>
</section>

<!-- Fachbereiche -->
 {% for color in site.data.fc-short %}
 <section class="container">
  <h1>Fachbereich: {{ color.longname }}</h1>
</section>
<section>
  <section class="element-wrapper line-fc-{{ color.shortname }}">
    <div class="container">
      <div class="row">
        <div class="line-wrapper">
        </div>
      </div>
    </div>
  </section>
  {% highlight html %}
  <section class="element-wrapper line-fc-{{ color.shortname }}">
    <div class="container">
      <div class="row">
        <div class="line-wrapper">
        </div>
      </div>
    </div>
  </section>
  {% endhighlight %}
</section>
 {% endfor %}
