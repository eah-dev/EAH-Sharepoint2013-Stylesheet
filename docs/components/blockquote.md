---
layout: default
title: zitat
description: Documentation und Beispiele fuer zitat
group: components
---

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
</section>
{% endfor %}
