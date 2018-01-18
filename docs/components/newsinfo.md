---
layout: docs
title: Startseite-News
description: Documentation und Beispiele fuer Startseite-News
group: components
---

## wiederverwenbares Element: Startseite-News
### Eigenschaften
* Weiterleitungselement zu temporär existierenden Informationen (Veranstaltungen, News)

### Anwendungsbereich
* Platzierung am Seitenanfang
* Nur einmalige Verwendung auf Seite

### Anpassungsmöglichkeiten
* Farbauswahl bei Button und Trennlinie (abhängig von bspw. dem Fachbereich)

<br/>

<!-- Startseite -->
 <section class="container">
  <h1>Startseite-News</h1>
</section>
<section>
  <section class="element-wrapper background-blue">
    <div class="container">
      <div class="row">
        <div class="major-NewsInfo-wrapper">
          <div class="col-xs-12 col-sm-6 col-md-6 no-padding">
            <div class="major-news-wrapper">
              <div id="major-news-title" class="header-title">
                <span class="title">Aktuelles</span>
              </div>
              <div id="major-news-body" class="body">
              </div>
              <div class="major-counter">
              </div>
              <a class="btn btn-blue" href="/hochschule/nachrichten">Alle News</a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 no-padding">
            <div class="major-infos-wrapper">
              <div id="major-infos-title" class="header-title">
                <span class="title">Veranstaltungen</span>
              </div>
              <div id="major-infos-body" class="body">
              </div>
              <div class="major-counter">
              </div>
              <a class="btn btn-blue" href="#">Alle Termine</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <br/>

  <section class="container">
    {% highlight html %}
    <section class="element-wrapper background-blue">
      <div class="container">
        <div class="row">
          <div class="major-NewsInfo-wrapper">
            <div class="col-xs-12 col-sm-6 col-md-6 no-padding">
              <div class="major-news-wrapper">
                <div id="major-news-title" class="header-title">
                  <span class="title">Aktuelles</span>
                </div>
                <div id="major-news-body" class="body">
                </div>
                <div class="major-counter">
                </div>
                <a class="btn btn-blue" href="/hochschule/nachrichten">Alle News</a>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 no-padding">
              <div class="major-infos-wrapper">
                <div id="major-infos-title" class="header-title">
                  <span class="title">Veranstaltungen</span>
                </div>
                <div id="major-infos-body" class="body">
                </div>
                <div class="major-counter">
                </div>
                <a class="btn btn-blue" href="#">Alle Termine</a>
              </div>
            </div>
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
  <section class="element-wrapper newsinfo-fc-{{ color.shortname }}">
    <div class="container">
      <div class="row">
        <div class="newsinfo-wrapper">
          <div class="col-xs-12 col-sm-6 col-md-6 no-padding">
            <div class="newsinfo-news-wrapper">
              <div class="newsinfo-title" id="newsinfo-news-title">
                <span class="text">Aktuelles</span>
              </div>
              <div class="newsinfo-body" id="newsinfo-news-body">
              </div>
              <div class="newsinfo-news-counter">
              </div>
              <a class="btn btn-fc-{{ color.shortname }}" href="#">Alle News</a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 no-padding">
            <div class="newsinfo-infos-wrapper">
              <div class="newsinfo-title" id="newsinfo-infos-title">
                <span class="text">Veranstaltungen</span>
              </div>
              <div class="newsinfo-body" id="newsinfo-infos-body">
              </div>
              <div class="newsinfo-info-counter">
              </div>
              <a class="btn btn-fc-{{ color.shortname }}" href="#">Alle Termine</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <br/>

  <section class="container">
    {% highlight html %}
    <section class="element-wrapper newsinfo-fc-{{ color.shortname }}">
      <div class="container">
        <div class="row">
          <div class="newsinfo-wrapper">
            <div class="col-xs-12 col-sm-6 col-md-6 no-padding">
              <div class="newsinfo-news-wrapper">
                <div class="newsinfo-title" id="newsinfo-news-title">
                  <span class="text">Aktuelles</span>
                </div>
                <div class="newsinfo-body" id="newsinfo-news-body">
                </div>
                <div class="newsinfo-news-counter">
                </div>
                <a class="btn btn-fc-{{ color.shortname }}" href="#">Alle News</a>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 no-padding">
              <div class="newsinfo-infos-wrapper">
                <div class="newsinfo-title" id="newsinfo-infos-title">
                  <span class="text">Veranstaltungen</span>
                </div>
                <div class="newsinfo-body" id="newsinfo-infos-body" >
                </div>
                <div class="newsinfo-info-counter">
                </div>
                <a class="btn btn-fc-{{ color.shortname }}" href="#">Alle Termine</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {% endhighlight %}
  </section>
</section>
{% endfor %}
