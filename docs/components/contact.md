---
layout: docs
title: Ansprechpartner
description: Documentation und Beispiele fuer Ansprechpartner
group: components
---

## wiederverwenbares Element: Ansprechpartner
### Eigenschaften
* Darstellung einer Kontaktperson zum entsprechenden Seiteninhalt
* Angabe relevanter Kontaktinformationen (Name, Telefon, Mail, Raumnummer)

### Anwendungsbereich
* Platzierung auf rückfrageintensiven Seiten
* Platzierung auf Seiten, die persönlichen Informationsaustausch zwischen User und Ansprechpartner fokussiert
* Der Ansprechpartner sollte erst am Ende der Seite, nach Darstellung des relevanten Inhaltes, ausgegeben werden

### Anpassungsmöglichkeiten
* 2 - spaltige Ansprechpartner
* Farbauswahl (abhängig von Fach-/ Hochschulbereich)

<br/>

<!-- eine Spalte - default -->
<section class="container">
  <h1>Ansprechpartner</h1>
</section>
<section>
  <section class="element-wrapper contact-color">
    <div class="container">
      <div class="row">
        <div class="contact-wrapper">
          <div class="title">
            <span class="spantitle">Ihr Ansprechpartner</span>
          </div>
          <div class="contact-picture-wrapper">
            <div class="col-xs-12 col-md-3 col-md-offset-3">
              <div class="contact-picture-content">
                <div class="defaulticon"></div>
              </div>
            </div>
          </div>
          <a class="contact-selector-button" href="#">Ansprechpartner auswählen</a>
          <div class="contact-details-wrapper">
          </div>
        </div>
      </div>
    </div>
  </section>

  <br/>

  <section class="container">
    {% highlight html %}
    <section class="element-wrapper contact-color">
      <div class="container">
        <div class="row">
          <div class="contact-wrapper">
            <div class="title">
              <span class="spantitle">Ihr Ansprechpartner</span>
            </div>
            <div class="contact-picture-wrapper">
              <div class="col-xs-12 col-md-3 col-md-offset-3">
                <div class="contact-picture-content">
                  <div class="defaulticon"></div>
                </div>
              </div>
            </div>
            <a class="contact-selector-button" href="#">Ansprechpartner auswählen</a>
            <div class="contact-details-wrapper">
            </div>
          </div>
        </div>
      </div>
    </section>
    {% endhighlight %}
  </section>
</section>

<section class="container">
  <h1>Ansprechpartner in der Sidebar</h1>
</section>
{% highlight html %}
  <section class="contact-sidebar-wrapper contact-sidebar-default">
    <div class="contact-header"><span class="title">Titel</span></div>
    <a class="contact-selector-button" href="#">Ansprechpartner auswählen</a>
    <div class="contact-details-wrapper" data-contact-showimg="true"></div>
  </section>
{% endhighlight %}

<!-- zwei Spalten - default -->
<section class="container">
  <h1>Ansprechpartner - 2 Spalten</h1>
</section>
<section>
  <section class="element-wrapper contact-color">
    <div class="container">
      <div class="row">
        <div class="contacts-wrapper">
          <div class="title">
            <span class="spantitle">Ihre Ansprechpartner</span>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="contact-wrapper">
              <div class="contact-picture-wrapper">
                <div class="col-xs-12 col-md-6">
                  <div class="contact-picture-content">
                    <div class="defaulticon"></div>
                  </div>
                </div>
              </div>
              <a class="contact-selector-button" href="#">Ansprechpartner auswählen</a>
              <div class="contact-details-wrapper">
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="contact-wrapper">
              <div class="contact-picture-wrapper">
                <div class="col-xs-12 col-md-6">
                  <div class="contact-picture-content">
                    <div class="defaulticon"></div>
                  </div>
                </div>
              </div>
              <a class="contact-selector-button" href="#">Ansprechpartner auswählen</a>
              <div class="contact-details-wrapper">
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
    <section class="element-wrapper contact-color">
      <div class="container">
        <div class="row">
          <div class="contacts-wrapper">
            <div class="title">
              <span class="spantitle">Ihre Ansprechpartner</span>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="contact-wrapper">
                <div class="contact-picture-wrapper">
                  <div class="col-xs-12 col-md-6">
                    <div class="contact-picture-content">
                      <div class="defaulticon"></div>
                    </div>
                  </div>
                </div>
                <a class="contact-selector-button" href="#">Ansprechpartner auswählen</a>
                <div class="contact-details-wrapper">
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="contact-wrapper">
                <div class="contact-picture-wrapper">
                  <div class="col-xs-12 col-md-6">
                    <div class="contact-picture-content">
                      <div class="defaulticon"></div>
                    </div>
                  </div>
                </div>
                <a class="contact-selector-button" href="#">Ansprechpartner auswählen</a>
                <div class="contact-details-wrapper">
                </div>
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
{% for color in site.data.fc-full %}
<section class="container">
  <h1>Fachbereich: {{ color.longname }}</h1>
</section>
<section>
  <section class="element-wrapper contact-fc-{{ color.shortname }}">
    <div class="container">
      <div class="row">
        <div class="contact-wrapper">
          <div class="title">
            <span class="spantitle">Ihr Ansprechpartner</span>
          </div>
          <div class="contact-picture-wrapper">
            <div class="col-xs-12 col-md-3 col-md-offset-3">
              <div class="contact-picture-content">
                <div class="defaulticon"></div>
              </div>
            </div>
          </div>
          <div class="contact-details-wrapper">
            <div class="col-xs-12 col-md-6">
              <div class="row">
                <span class="contact-name">Prof. Dr. rer. nat. Vor Name</span>
              </div>
              <div class="row">
                <span class="contact-institution">Abteilung</span>
              </div>
              <div class="row">
                <span class="contact-jobtitle">WasIchHierMache</span>
              </div>
              <div class="row">
                <span class="contact-workphone">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span class="text">+49 3641 205 000</span>
                </span>
              </div>
              <div class="row">
                <span class="contact-workfax">
                  <i class="fa fa-fax" aria-hidden="true"></i>
                  <span class="text">+49 3641 205 000</span>
                </span>
              </div>
              <div class="row">
                <span class="contact-email">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  <span class="text">
                    <a href="mailto:feedback@eah-jena.de">feedback@eah-jena.de</a>
                  </span>
                </span>
              </div>
              <div class="row">
                <span class="contact-roomnumber">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span class="text">00.00.00</span>
                </span>
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
    <section class="element-wrapper contact-fc-{{ color.shortname }}">
      <div class="container">
        <div class="row">
          <div class="contact-wrapper">
            <div class="title">
              <span class="spantitle">Ihr Ansprechpartner</span>
            </div>
            <div class="contact-picture-wrapper">
              <div class="col-xs-12 col-md-3 col-md-offset-3">
                <div class="contact-picture-content">
                  <div class="defaulticon"></div>
                </div>
              </div>
            </div>
            <a class="contact-selector-button" href="#">Ansprechpartner auswählen</a>
            <div class="contact-details-wrapper">
            </div>
          </div>
        </div>
      </div>
    </section>
    {% endhighlight %}
  </section>
</section>
{% endfor %}
