---
layout: docs
title: Überschrift mit einer darunterliegenden Line (als Block)
description: Documentation und Beispiele fuer &Uuml;berschrift mit einer darunterliegenden Line (als Block)
group: components
---

## wiederverwenbares Element: Überschrift mit einer darunterliegenden Line (als Block)
### Eigenschaften
*

### Anwendungsbereich
*

### Anpassungsmöglichkeiten
*

### Kombinationsmöglichkeiten
*

<br/>

<!-- eah green -->
<section>
  <section class="element-wrapper headingUnderline-default">
    <div class="container">
      <div class="row">
        <div class="headingUnderline-wrapper">
          <span class="title">Heading - EAH</span>
        </div>
      </div>
    </div>
  </section>
</section>

<br/>

<section class="container">
  {% highlight html %}
  <section>
    <section class="element-wrapper headingUnderline-default">
      <div class="container">
        <div class="row">
          <div class="headingUnderline-wrapper">
            <span class="title">Heading - EAH</span>
          </div>
        </div>
      </div>
    </section>
  </section>
  {% endhighlight %}
</section>

<!-- Fachbereiche -->
{% for color in site.data.fc-short %}
<section>
  <section class="element-wrapper headingUnderline-{{ color.shortname }}">
    <div class="container">
      <div class="row">
        <div class="headingUnderline-wrapper">
          <span class="title">Heading - {{ color.longname }}</span>
        </div>
      </div>
    </div>
  </section>
</section>

<br/>

<section class="container">
  {% highlight html %}
  <section>
    <section class="element-wrapper headingUnderline-{{ color.shortname }}">
      <div class="container">
        <div class="row">
          <div class="headingUnderline-wrapper">
            <span class="title">Heading - {{ color.longname }}</span>
          </div>
        </div>
      </div>
    </section>
  </section>
  {% endhighlight %}
</section>

{% endfor %}
