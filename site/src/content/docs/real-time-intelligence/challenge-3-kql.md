---
title: "H3: KQL-kyselyt"
description: Käytä Copilotia tai agenttia KQL:n laatimiseen ja varmistamiseen uusimmalle tilalle, trendeille, poikkeamille ja kaavioiden visualisoinnille.
sidebar:
  order: 5
  label: "H3: KQL-kyselyt"
  badge:
    text: 40 min
    variant: note
prev:
  link: ../challenge-2-eventstream/
  label: "H2: Eventstream"
next:
  link: ../challenge-4-activator/
  label: "H4: Activator"
---

:::note[Haasteen tiedot]
⏱️ **40 min** · 🧩 **Ydin** · 🤖 agentti: KQL-pariohjelmoija
:::

## Tavoite

- **Tee nyt:** Rakenna toimivat KQL-kyselyt tapahtumataulusi päälle.
- **Lähtötiedot:** Live-suoratoistopolku ja taulu, jossa on tuoreita rivejä.
- **Tulos:** Vähintään neljä ajettavaa KQL-kyselyä, jotka selittävät tilan, trendin, poikkeaman ja visualisoinnin.
- **Vaaditaan etenemiseen:** Vähintään neljä kyselyä toimii onnistuneesti KQL Database -kohteessa.
- **Päätökset nyt:** Mikä kenttä edustaa aikaa, objektia, metriikkaa ja hälytyskynnystä?
- **Seuraavaksi:** H4 muuntaa yhden kyselyn/ehdon Activator-hälytykseksi.

## Liiketoimintahaaste

Suoratoistodata on arvokasta vain, kun ihmiset voivat kysyä operatiivisia kysymyksiä nopeasti: *mitä juuri
tapahtui, mihin suuntaan se kehittyy ja mikä ansaitsee huomiota?* Tämä on polun kohokohtahaaste:
agenttisi auttaa muuttamaan raakatapahtumataulun selkeäksi analytiikkasopimukseksi.

## Tehtäväsi

1. Liitä suoratoistopolun tiedot ja tauluskeema Copilotiin tai koodausagenttiisi.
2. Pyydä sitä luonnostelemaan KQL-kyselyt toimialallesi.
3. Sisällytä nämä mallit ja sovita sarakenimet tauluusi:

```kusto
Events
| take 10
```

```kusto
Events
| where Timestamp > ago(15m)
| summarize arg_max(Timestamp, *) by ObjectId
```

```kusto
Events
| where Timestamp > ago(1h)
| summarize Events=count(), AvgMetric=avg(todouble(Metric)) by bin(Timestamp, 5m)
| order by Timestamp asc
```

```kusto
Events
| where Timestamp > ago(1h)
| summarize AvgMetric=avg(todouble(Metric)) by bin(Timestamp, 5m), ObjectId
| render timechart
```

4. Lisää yksi toimialakohtainen poikkeama-, kynnys- tai aggregointikysely.
5. Aja jokainen kysely KQL Database -kohteessa. Korjaa nimet, tyypit ja aikaikkunat, kunnes ne toimivat.
6. Viimeistele toimivat kyselyt ja pidä lyhyet selitykset talteen jokaisen kyselyn yhteydessä.

## Keskeiset päätökset

- **Tuoreus:** mikä `ago(...)`-ikkuna sopii nykyiseen tapahtumatahtiin?
- **Raekoko:** teetkö yhteenvedon tapahtuman, objektin, aseman, laitteen, tilin vai alueen mukaan?
- **Metriikan tyypitys:** tarvitsevatko numeeriset kentät `todouble()` / `tolong()`, koska ne saapuivat merkkijonoina?
- **Kaaviokysely:** mistä kyselystä tulee koontinäytön (dashboard) ja hälytyksen lähde?

## Tuotokset

- Toimivat KQL-kyselyt, jotka sisältävät:
  - uusimman tilan kyselyn;
  - aikasarjakyselyn, jossa on `bin()`;
  - poikkeama-/kynnys- tai aggregointikyselyn;
  - yhden kyselyn, joka päättyy `render timechart`, `render barchart` tai muuhun tuettuun visualisointiin;
  - varmistusmuistiinpanot ja mahdolliset skeemaoletukset.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| KQL toimii | Kaikki kyselyt suoritetaan ilman virheitä | Kyselytulokset KQL Database -kohteessa |
| Aikasarja toimii | Käyttää `summarize ... by bin(Timestamp, ...)` | Trendituloksessa on aikavälejä |
| Uudelleenkäytettävät kyselyt | Kyselyt on nimetty ja selitetty | Kyselyt ja lyhyet selitykset |

## Vinkit

<details>
<summary>Aloita laajasti ja tiukenna sitten aikaikkunaa</summary>

Jos kysely ei palauta rivejä, kokeile `ago(24h)` tai poista aikasuodatin hetkeksi. Kun tunnet
aikaleimasarakkeen ja ingestion-viiveen, kavenna ikkuna takaisin.

</details>

<details>
<summary>Käytä KQL-operaattoreita oikeassa järjestyksessä</summary>

Suodata aikaisin `where`-operaattorilla, muotoile `project`-operaattorilla, aggregoi `summarize`-operaattorilla ja laita `render`
viimeiseksi. Render-operaattori merkitsee tuloksen visualisointia varten; sen pitää olla viimeinen rivi.

</details>

## Huomioi nämä

- `bin()` pyöristää aikaleimat alaspäin aikaväleihin; valitse tapahtumatahtiin sopiva aikavälin koko.
- `render timechart` tarvitsee datetime-tyyppisen x-akselin ja numeeriset y-arvot.
- Älä anna agentin keksiä sarakenimiä — kopioi ne KQL-taulun skeemasta.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Live-suoratoistopolku ja KQL-taulu |
| **Sinun tuotoksesi** | Toimivat KQL-kyselyt |
| **Seuraava vaihe** | H4 valitsee yhden varmistetun kyselyn/ehdon Activator-hälytykseen |

## Seuraava vaihe

Voit nyt selittää suoratoiston KQL:llä. **H4**:ssä laitat datan valvomaan itseään.
