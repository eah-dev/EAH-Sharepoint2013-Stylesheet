---
layout: default
title: Zitat mit vertikaler Trennlinie
description: Documentation und Beispiele fuer Zitat mit vertikaler Trennlinie
group: components
---

## wiederverwenbares Element: Zitat mit vertikaler Trennlinie
### Eigenschaften
* Element zur Seitengestaltung (bspw. Zitat berühmter Wissenschaftler) oder Rezitation (Erfahrungsbericht, Meinung, ...)

### Anwendungsbereich
* Kann in allen Bereichen der Seite verwendet werden
* Übermäßige Nutzung vermeiden

### Anpassungsmöglichkeiten
* Farbauswahl bei Trennlinie (abhängig von bspw. dem Fachbereich)

### Kombinationsmöglichkeiten
* Link oder Button (nach Rezitationsende)

<!-- zitat -->
<section>
  <h1>Startseite: Zitat gruener Hintergrund</h1>
  <section class="element-wrapper blockquote-gray">
    <div class="container">
      <div class="row">
        <div class="blockquote-wrapper">
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <footer>Donald Franz</footer>
          </blockquote>
          ​​​ </div>
      </div>
    </div>
  </section>
  {% highlight html %}
  <section class="element-wrapper blockquote-gray">
    <div class="container">
      <div class="row">
        <div class="blockquote-wrapper">
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <footer>Donald Franz</footer>
          </blockquote>
          ​​​ </div>
      </div>
    </div>
  </section>
  {% endhighlight %}
</section>

<!-- Fachbereiche -->
{% for color in site.data.fc-short %}
<section>
  <h1>Fachbereich: {{ color.longname }}</h1>
  <section class="element-wrapper blockquote-fc-{{ color.shortname }}">
    <div class="container">
      <div class="row">
        <div class="blockquote-wrapper">
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <footer>Donald Franz</footer>
          </blockquote>
          ​​​ </div>
      </div>
    </div>
  </section>
  {% highlight html %}
  <section class="element-wrapper blockquote-fc-{{ color.shortname }}">
    <div class="container">
      <div class="row">
        <div class="blockquote-wrapper">
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <footer>Donald Franz</footer>
          </blockquote>
          ​​​ </div>
      </div>
    </div>
  </section>
  {% endhighlight %}
</section>
{% endfor %}
