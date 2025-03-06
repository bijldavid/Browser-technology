# Browser technologies <br> David Bijl

---

> ## Week 1
> **<sub><sup>24 feb t/m 28 feb</sup></sub>**

**Assignment:** <br>Belasting formulier bouwen in de huisstijl van NS

**Nieuw voor mij:** <br>
<ul>
<li>Width & height in html = good practise</li>
<li><code>:target</code></li>
<li><code>fieldset</code> & <code>legend</code></li>
<li>De verschiilende input types</li>
<li><code>details name="naam"</code></li>
<li><code>::backdrop</code></li>
<li>Data attribute's toevoegen</li>
</ul>

**Progressie:** <br>
Deze week ben ik begonnen met een eerste opzet van het formulier. Hierdoor kwam ik in aanraking met de <code>fieldset</code>'s en <code>legend</code>'s. Ik denk dat ik nu beter begrijp hoe en wanneer ik deze tags moet gebruiken.

Tot nu toe ben ik nog niet bezig met de meer geavanceerde aspecten, zoals progressive enhancement. In plaats daarvan richt ik me op het oriënteren, begrijpen van de opdracht en het opbouwen van de eenvoudigere inputvelden.

Daarnaast heb ik de styleguide van NS gevonden en de NS Sans-font alvast aan mijn document gekoppeld.

---

> ## Week 2
> **<sub><sup>3 t/m 7 mar</sup></sub>**

**Nieuw voor mij:** <br>
<ul>
    <li><code>legend</code> tag stylen (is nogsteeds niet helemaal duidelijk)</li>
    <li>De <code>select</code> tag en de <code>optgroup</code> tag</li>
    <li>De volgende input types:
    <ul>
        <li><code>range</code></li>
        <li><code>file</code></li>
        <li><code>image</code></li>
    </ul>
    </li>
    <li>De <code>textarea</code> tag</li>
</ul>

**Progressie:** <br>
Ik ben deze week verder gegaan met het uitwerken van de eerste paar invoervelden (1a, 1b en 1c). Deze waren relatief simpel, maar een goede oefening om kennis te maken met de verschillende inputtypes. Ik heb al een aantal voorbeelden van progressive enhancement kunnen verwerken, namelijk: <sub><sup>*Nee. Ga verder met vraag 1c.*</sup></sub> & <sub><sup>*Stuur een kopie van de akte mee met de aangifte.*</sup></sub>. Deze heb ik werkend gemaakt met de <code>:has</code>-selector.

```
  .one-b:has(.skip:checked)>*:nth-of-type(n + 2) {
    opacity: .3;
    pointer-events: none;
  }
```

Ergens waar ik tegenaan liep deze week was:
Het stylen van <code>legend</code> elementen. Ik ben erachter gekomen dat het (in chrome in ieder geval) best lastig is om een <code>legend</code> te positioneren met bijvoorbeeld flex of grid. Het element lijkt niet te luisteren en blijft altijd een regel boven de andere content staan.
Na wat rond te zoeken vond ik een paar workarounds:
1. Ik kan de <code>legend</code> tag <code>display: contents;</code> geven. Van wat ik begrijp, is dit een soort alternatief voor <code>display: none;</code>, maar dan blijft het element visueel zichtbaar(?). In ieder geval zorgt het ervoor dat het zich houdt aan de <code>display: grid;</code> van de parent. Het probleem is echter dat de tag (volgens MDN en ‘Chad’) zijn semantische waarde verliest. Dit leek me dus geen goede optie.
2. De <code>legend</code> wrappen in een <code>span</code> of ander container-element en deze positioneren. Dit werkt ook, maar hierdoor is de <code>legend</code> geen direct kind meer van de <code>fieldset</code>. Ik vroeg me af of dit de semantische waarde van de <code>legend</code> verpest? Zo ja, is er een betere manier om de layout te bouwen?<br>

Dit is de layout die ik probeer na te bouwen:<br>
<img width="482" height="218" src="images/readme-images/layout-voorbeeld.png"><br>

Uiteindelijk heb ik ervoor gekozen om de <code>legend</code>-elementen te wrappen en ze op die manier te stylen. Dit ging verder goed, en nu heb ik een overzichtelijkere structuur in mijn document.<br>
<img width="490" height="398" src="images/readme-images/progressie-week2.png"><br>

---

> ## Week 3
> **<sub><sup>10 t/m 14 mar</sup></sub>**

**Updates:** <br>updates hier...

---

> ## Week 4
> **<sub><sup>17 t/m 21 mar</sup></sub>**

**Updates:** <br>updates hier...

---

> ## Bronnen

<ul>
    <li>ChadGPT -> voor allerlei kleine HTML en CSS controles een vraagjes & voor hulp met javascript (staat aangegeven in de JS comments)</li>
    <li>https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia -> om @media queries in javascript te kunnen checken</li>
    <li>https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer -> informatie over de @media query die luisterd naar de pointer van de gebruiker</li>
    <li>https://www.w3schools.com/html/html_form_input_types.asp -> een lijst van alle input types</li>
</ul>



---