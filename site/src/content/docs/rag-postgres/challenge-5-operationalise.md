---
title: "H5: Vie tuotantokuntoon"
description: Kytke DataOps-agentti ajastettuun GitHub Actions -työnkulkuun ja todista, että se toimii CI:ssä.
sidebar:
  order: 7
  label: "H5: Vie tuotantokuntoon"
  badge:
    text: 25 min
    variant: tip
prev:
  link: ../challenge-4-agentic-ingestion/
  label: "H4: Agenttinen ingestio"
next:
  link: ../challenge-6-demo/
  label: "H6: Demon valmistelu"
---

:::note[Haasteen tiedot]
⏱️ **25 min** · 🧩 **Valinnainen** · 🤖 agentti: CI:n tekijä
:::

:::tip[Turvallista ohittaa]
Aloita tämä vain, jos **H4 läpäisee**. Tavoite on **commitoida toimiva määritys ja ajaa se kerran käsin** — ei odottaa ajastettua ajoa tapahtuman aikana.
:::

## Tavoite

- **Tee nyt:** Aja ingestioagentti ajastetusti CI:n kautta.
- **Lähtötiedot:** Toimiva ingestioagentti (H4).
- **Tulos:** Ingestioagentti ajaa CI:ssä käsin käynnistettynä ja on valmis ajastettuihin ajoihin.
- **Vaaditaan etenemiseen:** Onnistunut työnkulun ajo, joka suoritti agenttisi.
- **Päätökset nyt:** Salaisuuksien käsittely, ajastuksen tiheys, virheilmoitus.
- **Seuraavaksi:** H6 muuttaa kaiken tämän ytimekkääksi demoksi.

## Liiketoimintahaaste

Putki, joka toimii vain omalla koneellasi, ei ole operoitava. Agentin siirtäminen CI:hin näyttää **DataOps**-tarinan: ajastetut, tunnistetietojen hallitsemat ja havainnoitavat tietopohjan päivitykset — ero demon ja alustan välillä.

## Tehtäväsi

1. Luo agenttisi kanssa GitHub Actions -työnkulku, joka ajaa `dataops_agent.py`-tiedoston **`workflow_dispatch`**-triggerillä **ja** **`schedule`**-ajastuksella (esim. päivittäinen cron).
2. Tallenna OpenAI- ja tietokantatunnistetiedot **GitHub Actions secrets** -salaisuuksiksi — älä koskaan YAMLiin.
3. Käynnistä se **kerran käsin** (`workflow_dispatch`) ja varmista, että se ajaa agenttisi ja raportoi läpäisyn/hylkäyksen.
4. Lisää yksinkertainen **virhesignaali** (job epäonnistuu tai vaihe lähettää viestin).

## Keskeiset päätökset

- **Salaisuudet:** mitkä arvot ovat salaisia, ja miten työnkulku syöttää ne?
- **Ajastus:** kuinka usein tämän pitäisi realistisesti ajaa sinun datallesi?
- **Verkko:** pääseekö runner tietokantaasi/päätepisteeseesi (palomuuri, yksityinen verkko)?
- **Idempotenssi taas:** ajastettujen uudelleenajojen täytyy pysyä turvallisina — kestääkö H4:n suunnitelma?

## Tuotokset

- GitHub Actions -työnkulku, joka suorittaa ingestioagentin käsin käynnistettynä ja ajastetusti.
- Linkki/kuvakaappaus yhdestä **onnistuneesta käsin käynnistetystä ajosta**.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Ajetaan CI:ssä | Agentti suoritetaan runnerilla, ei omalla koneellasi | Onnistunut Actions-ajo |
| Turvallinen | Repositoriossa ei ole salaisuuksia | Työnkulku lukee Actions secrets -salaisuuksista |
| Ajastettu | Cron-trigger on olemassa tulevia ajoja varten | Ajastustrigger näkyy työnkulussa |

## Vinkit

<details>
<summary>Älä odota cronia</summary>

Ajastetut triggerit voivat viivästyä. Sisällytä aina `workflow_dispatch`, jotta voit todistaa sen toimivan pyynnöstä samassa huoneessa. Cron-rivi on näyttö aikomuksesta; käsin käynnistetty ajo on todisteesi.

</details>

<details>
<summary>Eikö runner pääse tietokantaan?</summary>

Jos PostgreSQL estää GitHubin ylläpitämän runnerin, se on realistinen havainto — mainitse se demossasi ja kuvaa korjaus (itse ylläpidetty runner, yksityinen verkko tai tilapäinen palomuurisääntö). Älä polta koko aikaa sen kanssa taistelemiseen.

</details>

## Huomioi nämä

- Älä liitä avaimia YAMLiin — käytä `secrets.*`.
- Älä luota siihen, että ajastus ehtii laueta tapahtuman aikana; käynnistä käsin.
- Älä anna CI:n ajaa **ei-idempotenttia** agenttia ajastetusti — muuten duplikoit dataa joka yö.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Toimiva ingestioagentti (H4) |
| **Sinun tuotoksesi** | CI:ssä ajettava ingestiosilmukka ja onnistuneen ajon näyttö |
| **Seuraava vaihe** | H6 esittää tämän demossa “operoinnin” todisteena |

## Seuraava vaihe

Päivityssilmukkasi on ajastettu ja turvallinen. H6 paketoi koko tarinan napakaksi demoksi.
