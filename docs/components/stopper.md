---
layout: docs
title: Störer mit Bild links/ rechts
description: Documentation und Beispiele fuer Störer mit Bild links/ rechts
group: components
---

## wiederverwenbares Element: Störer mit Bild links/ rechts
### Eigenschaften
* Informationsbereitstellung mit Bildelement
* Bildinhalt kann informativer oder visuell unterstützender Natur sein

### Anwendungsbereich
* Platzierung bei dauerhaft bestehenden Informationen
* Sollte im Anfangsbereich der Seite platziert sein
* Bild sollte mit ausreichend Text verbunden sein
* Bild links / rechts sollte abwechselnd verwendet werden


### Anpassungsmöglichkeiten
* Hintergrund blau
* Bildelement links, mittig oder rechts

### Kombinationsmöglichkeiten
* Kombinierbar mit Button und Links

<br/>

<!-- Artikel -->
<section class="container">
  <h1>Artikel mit Bild links (und Hindergrund Blau) und Button</h1>
</section>
<section>
  <section class="element-wrapper article-blue">
    <div class="container">
      <div class="row">
        <div class="article-wrapper">
          <div class="col-xs-12 col-sm-6 article-img hidden-xs">
            <img src="{{ site.baseurl }}/assets/eah-jena/images/blankslide400x400.png" alt="" />
          </div>
          <div class="col-xs-12 col-sm-6 article-text">
            <div class="title">Überschrift</div>
            <div class="article-content content-text-left">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet.
              <div class="button-wrapper">
                <a class="btn btn-blue" role="button" href="#">
                  Mehr Erfahren
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <br/>

  <section class="container">
  {% highlight html %}
  <section class="element-wrapper article-blue">
    <div class="container">
      <div class="row">
        <div class="article-wrapper">
          <div class="col-xs-12 col-sm-6 article-img hidden-xs">
            <img src="/_catalogs/masterpage/layouts/eah-jena/images/blankslide400x400.png" alt="" />
          </div>
          <div class="col-xs-12 col-sm-6 article-text">
            <div class="title">Überschrift</div>
            <div class="article-content content-text-left">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet.
              <div class="button-wrapper">
                <a class="btn btn-blue" role="button" href="#">
                  Mehr Erfahren
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {% endhighlight %}
</section>

<!-- Artikel -->
<section class="container">
  <h1>Artikel mit Bild rechst (und Hindergrund Blau) und Button</h1>
</section>
<section>
  <section class="element-wrapper article-blue">
    <div class="container">
      <div class="row">
        <div class="article-wrapper">
          <div class="col-xs-12 col-sm-6 article-text">
            <div class="title">Überschrift</div>
            <div class="article-content content-text-left">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet.
              <div class="button-wrapper">
                <a class="btn btn-blue" role="button" href="#">
                  Mehr Erfahren
                </a>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 article-img hidden-xs">
            <img src="{{ site.baseurl }}/assets/eah-jena/images/blankslide400x400.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <br/>

  <section class="container">
    {% highlight html %}
    <section class="element-wrapper article-blue">
      <div class="container">
        <div class="row">
          <div class="article-wrapper">
            <div class="col-xs-12 col-sm-6 article-text">
              <div class="title">Überschrift</div>
              <div class="article-content content-text-left">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea takimata sanctus est Lorem ipsum dolor sit amet.
                <div class="button-wrapper">
                  <a class="btn btn-blue" role="button" href="#">
                    Mehr Erfahren
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 article-img hidden-xs">
              <img src="/_catalogs/masterpage/layouts/eah-jena/images/blankslide400x400.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {% endhighlight %}
  </section>

</section>
