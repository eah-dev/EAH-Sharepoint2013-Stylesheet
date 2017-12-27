---
layout: default
title: Überschrift mit einer darunterliegenden Line (als Block)
description: Documentation und Beispiele fuer &Uuml;berschrift mit einer darunterliegenden Line (als Block)
group: components
---

<!-- eah green -->
<section>
  <section class="element-wrapper headingUnderline-default">
    <div class="container">
      <div class="row">
        <div class="headingUnderline-wrapper">
          <span class="title">&Uuml;berschrift - EAH</span>
        </div>
      </div>
    </div>
  </section>
</section>

<!-- Fachbereiche -->
{% for color in site.data.fc-short %}
<section>
  <section class="element-wrapper headingUnderline-{{ color.shortname }}">
    <div class="container">
      <div class="row">
        <div class="headingUnderline-wrapper">
          <span class="title">&Uuml;berschrift - {{ color.longname }}</span>
        </div>
      </div>
    </div>
  </section>
</section>
{% endfor %}
