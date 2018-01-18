---
layout: docs
title: Panel
description: Documentation und Beispiele fuer Panel
group: components
---

## wiederverwenbares Element: Panel
### Eigenschaften
* Element mit Drop - Funktion zur Aufrufung weiterer Informationen

### Anwendungsbereich
* Kann überall auf der Seite platziert werden
* Panel - Titel sollte eindeutig dem versteckten Informationsinhalt zuzuordnen sein
* Anwendung bei Seiten mit großem Informationsgehalt


### Anpassungsmöglichkeiten
* Farbauswahl: Blau, Grün, Grau

<br/>
{% for color in site.data.default-color %}


<!-- panel -->
<section class="container">
  <h1>Panel {{ color.titlenameuppercase }}</h1>
</section>
<section>
  <div class="container">
    <div class="row">
      <div class="panel panel-{{ color.cssshortname }}">
        <div class="panel-heading panel-collapsed">
          <span class="panel-title">Panel {{ color.titlenameuppercase }}</span>
          <span class="pull-right clickable">
            <i class="fa fa-angle-down"></i>
          </span>
        </div>
        <div class="panel-body" style="display: none;">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          eli
        </div>
      </div>
    </div>
  </div>

  <br/>

  <section class="container">
  {% highlight html %}
  <div class="container">
    <div class="row">
      <div class="panel panel-{{ color.cssshortname }}">
        <div class="panel-heading panel-collapsed">
          <span class="panel-title">Panel {{ color.titlenameuppercase }}</span>
          <span class="pull-right clickable">
            <i class="fa fa-angle-down"></i>
          </span>
        </div>
        <div class="panel-body" style="display: none;">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          eli
        </div>
      </div>
    </div>
  </div>
  {% endhighlight %}
  </section>

</section>
{% endfor %}


</section>
