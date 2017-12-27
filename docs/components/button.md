---
layout: default
title: buttons
description: Documentation und Beispiele fuer buttons
group: components
---

<!-- buttons -->
<section>
  <h1>Buttons - blau - Mehr Erfahren</h1>
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
<section>
  <h1>Buttons - weiss-blau - Mehr Erfahren</h1>
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

<!-- Fachbereiche -->
<section>
  <h1>Button - Nach Fachbereiche</h1>
  <section class="element-wrapper">
    <div class="container">
      <div class="row">
        {% for color in site.data.fc-full %}
        <div class="button-wrapper">
          <a role="button" class="btn btn-fc-{{ color.shortname }}" href="#">
            {{ color.longname }}
          </a>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>
</section>
