---
title: "H2: Bronze-tuonti"
description: Tuo raakadatasi muuttamattomana lakehousen bronze-kerrokseen jäljitettäväksi pohjaksi.
sidebar:
  order: 4
  label: "H2: Bronze-tuonti"
  badge:
    text: 30 min
    variant: note
prev:
  link: ../challenge-1-readiness/
  label: "H1: Valmius"
next:
  link: ../challenge-3-silver/
  label: "H3: Silver + AI"
---

:::note[Haasteen tiedot]
⏱️ **30 min** · 🧩 **Ydin** · 🤖 agentti: datan tuonnin tekijä
:::

## Tavoite

- **Tee nyt:** Vie raakadatasi lakehouseen **sellaisenaan**.
- **Lähtötiedot:** Varmistettu lakehouse (H1) + datajoukkosi.
- **Tulos:** Toimiva `bronze` Delta -taulu, jonka lähde, rivimäärä ja skeema ovat jäljitettävissä.
- **Vaaditaan etenemiseen:** Bronze-taulu on kyseltävissä; rivimäärä vastaa lähdettä.
- **Päätökset nyt:** Tiedostomuoto, osiointi (tai ei), mikä lasketaan "raakadataksi".
- **Seuraavaksi:** H3 puhdistaa ja AI-rikastaa tämän silver-kerrokseen.

## Liiketoimintahaaste

Bronze-kerros on **muuttumaton laskeutumisalue** — raakadata täsmälleen sellaisena kuin se saapui, jotta voit aina käsitellä sen uudelleen. Tämän vaiheen kurinalaisuus on: **älä muunna vielä**. Tallenna uskollisesti, varmista alkuperän jäljitettävyys ja jatka eteenpäin.

## Tehtäväsi

1. Lataa CSV/Parquet **bronze** Delta -tauluun lakehousessa (notebook tai Dataflow/pipeline — valitse itse).
2. Pidä se **raakana**: ei puhdistusta eikä tyyppimuunnoksia enempää kuin lataaminen edellyttää.
3. Varmista: `count(*)` vastaa lähdettä; tarkista muutama rivi pistokokein.
4. Varmista agenttisi kanssa, että latauksen lähde, latausaika, rivimäärä, sarakelista ja kohdetaulun nimi ovat tiedossa.

## Keskeiset päätökset

- **Muoto:** Delta on lakehousen oletus — käytä sitä, ellei sinulla ole syytä olla käyttämättä.
- **Osiointi:** osioi vain, jos data on riittävän suurta perustelemaan sen.
- **Schema-on-read vs. pakotettu skeema:** bronzeen kannattaa suosia sallivaa datan tuontia.

## Tuotokset

- `bronze` Delta -taulu lakehousessa.
- Jäljitettävä lataus: lähde, latausaika, rivimäärä, sarakelista ja kohdetaulu ovat selvillä.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Uskollinen laskeutuminen | Rivimäärä vastaa lähdettä; dataa ei muutettu | `count(*)` + lähteen määrä |
| Kyseltävissä | Bronze-taulu luetaan oikein takaisin | `SELECT`-esikatselu |
| Jäljitettävä | Latauksen alkuperä, rivimäärä ja kohdetaulu ovat selvillä | Muistiinpano |

## Vinkit

<details>
<summary>Vastusta halua puhdistaa</summary>

Jokainen "pieni korjaus", jonka teet bronzessa, on muunnos, jota et voi perua ilman uudelleentuontia. Pidä bronze raakana; **silver** (H3) on oikea paikka puhdistukselle.

</details>

<details>
<summary>Anna agentin kuvata toteutunut lataus taulusta</summary>

Pyydä Copilotia lukemaan ladatun taulun skeema ja rivimäärä, jotta latauksen kuvaus perustuu toteumaan eikä vain aikomukseesi.

</details>

## Huomioi nämä

- Älä tee muunnoksia bronzessa — kadut sitä, kun tarvitset uudelleenkäsittelyä.
- Älä hukkaa lähteen alkuperätietoa; latauksen pitää olla jäljitettävä.
- Älä tuo arkaluonteisia sarakkeita, joita et tarvitse — poista ne jo lähteessä.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Varmistettu lakehouse (H1) |
| **Sinun tuotoksesi** | Kyseltävä `bronze`-taulu ja jäljitettävä lataus |
| **Seuraava vaihe** | H3 lukee bronzen, puhdistaa sen ja lisää AI-rikastetut sarakkeet |

## Seuraava vaihe

Raakadata on tuotu. **H3** — tämän polun ydin — puhdistaa sen ja **rikastaa sen AI Functions -toiminnoilla** silver-kerrokseen.
