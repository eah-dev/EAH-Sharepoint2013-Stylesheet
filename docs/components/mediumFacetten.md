---
layout: home
title: Facetten
description: Allgemeine Informationen über alle das Elemente zur Darstellung der Facetten (Hochschulzeitung der EAH).
group: components
---

## wiederverwenbares Element: Facetten
### Eigenschaften
* Alle Facetten sollten in einer List angezeigt werden.

### Anwendungsbereich
* einmalig
* nur auf der Seite wo die Facetten angezeigt werden soll

### Technische Informationen
* Die Informationen kommen aus einer Sharepoint-Liste und werden per JavaScript ausgelesen und anschliessend angezeigt.
* Es werden folgende Spalten ausgegeben: Nr, Jahr, Monat, Inhalt, Download-Link.
* Es wird von oben nach unten absteigend sortiert d.h. oben steht immer die neuste Ausgabe.

<section>
  <section class="element-wrapper mediumFacetten-default">
    <div class="container-fluid">

        <div class="mediumFacetten-wrapper">
          <div class="mediumFacetten-header">
            <div class="entry">
              <div class="number">
                Nummer
              </div>
              <div class="year">
                Jahr
              </div>
              <div class="month">
                Monat
              </div>
              <div class="topics">
                Inhalt
              </div>
              <div class="dllink">
                Link zum Download
              </div>
            </div>
          </div>
          <div class="mediumFacetten-body">
            <div class="entry">
              <div class="number">
                34
              </div>
              <div class="year">
                2017
              </div>
              <div class="month">
                März
              </div>
              <div class="topics">
                25 Jahre EAH Jena (Rückblick und Ausblick), Internatinal (16 internationale Studierende)
              </div>
              <div class="dllink">
                <a href="https://www.eah-jena.de/de-de/Documents/hochschulzeitung-eah-jena-facetten-034-2017.pdf" alt="hochschulezeitung" title=""><i class="fa fa-download" aria-hidden="true"></i> Link</a>
              </div>
            </div>
            <div class="entry">
              <div class="number">
                33
              </div>
              <div class="year">
                2016
              </div>
              <div class="month">
                Oktober
              </div>
              <div class="topics">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat dolore obcaecati! Magnam recusandae corrupti cumque necessitatibus culpa ratione assumenda eius commodi iste ex veniam, et sint voluptate doloremque soluta?
              </div>
              <div class="dllink">
                <a href="https://www.eah-jena.de/de-de/Documents/hochschulzeitung-eah-jena-facetten-033-2016.pdf" alt="hochschulezeitung" title=""><i class="fa fa-download" aria-hidden="true"></i> Link</a>
              </div>
            </div>
            <div class="entry">
              <div class="number">
                32
              </div>
              <div class="year">
                2016
              </div>
              <div class="month">
                März
              </div>
              <div class="topics">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias, saepe, dignissimos fugit velit dolorum quod laborum recusandae consequuntur repellat, quia asperiores nam alias excepturi optio enim delectus non tempora!
              </div>
              <div class="dllink">
                <a href="https://www.eah-jena.de/de-de/Documents/hochschulzeitung-eah-jena-facetten-032-2016.pdf" alt="hochschulezeitung" title=""><i class="fa fa-download" aria-hidden="true"></i> Link</a>
              </div>
            </div>
            <div class="entry">
              <div class="number">
                31
              </div>
              <div class="year">
                2015
              </div>
              <div class="month">
                Oktober
              </div>
              <div class="topics">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia assumenda repellendus unde voluptate in, eos cupiditate veniam quae, placeat fuga delectus corrupti!
              </div>
              <div class="dllink">
                <a href="https://www.eah-jena.de/de-de/Documents/hochschulzeitung-eah-jena-facetten-031-2015.pdf" alt="hochschulezeitung" title="hochschulzeitung-eah-jena-facetten-031-2015"><i class="fa fa-download" aria-hidden="true"></i> Link</a>
              </div>
            </div>
            <div class="entry">
              <div class="number">
                30
              </div>
              <div class="year">
                2015
              </div>
              <div class="month">
                März
              </div>
              <div class="topics">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta cupiditate commodi?
              </div>
              <div class="dllink">
                <a href="https://www.eah-jena.de/de-de/Documents/hochschulzeitung-eah-jena-facetten-030-2015.pdf" alt="/hochschulzeitung-eah-jena-facetten-030-2015" title="/hochschulzeitung-eah-jena-facetten-030-2015"><i class="fa fa-download" aria-hidden="true"></i> Link</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>

  {% highlight html %}
  <section class="element-wrapper mediumFacetten-default">
    <div class="container-fluid">
      <div class="mediumFacetten-wrapper">
      </div>
    </div>
  </section>
  {% endhighlight %}
</section>
