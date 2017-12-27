---
layout: default
title: Trennline
description: Documentation und Beispiele fuer Trennline
group: components
---

<!-- trennline -->
<section>
  <h2>Startseite Trennline</h2>
  <section class="element-wrapper line-default">
    <div class="container">
      <div class="row">
        <div class="line-wrapper">
        </div>
      </div>
    </div>
  </section>
</section>

<!-- Fachbereiche -->
 {% for color in site.data.fc-short %}
<section>
  <h2>Fachbereich: {{ color.longname }}</h2>
  <section class="element-wrapper line-fc-{{ color.shortname }}">
    <div class="container">
      <div class="row">
        <div class="line-wrapper">
        </div>
      </div>
    </div>
  </section>
</section>
 {% endfor %}
