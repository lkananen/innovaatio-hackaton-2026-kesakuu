---
title: "H5: Arviointikehys"
description: Muunna kultaiset kysymyksesi automaattiseksi arvioinniksi, joka pisteyttää agentin tarkkuuden.
sidebar:
  order: 7
  label: "H5: Arviointikehys"
  badge:
    text: 30 min
    variant: tip
prev:
  link: ../challenge-4-guardrails/
  label: "H4: Turvarajat"
next:
  link: ../challenge-6-demo/
  label: "H6: Demon valmistelu"
---

:::note[Haasteen tiedot]
⏱️ **30 min** · 🧩 **Valinnainen** · 🤖 agentti: arvioinnin tekijä
:::

:::tip[Turvallista ohittaa]
Aloita tämä vain, jos **H4 läpäisee**. Tulos on yksi numero — agenttisi tarkkuus
kultaisella joukolla — sekä sen tuottanut kehys.
:::

## Tavoite

- **Tee nyt:** Mittaa tarkkuus arvaamisen sijaan.
- **Lähtötiedot:** 5 kultaista kysymystä + viitevastaukset (H2), turvallinen agentti (H4).
- **Tulos:** Toistettava arviointi, joka ajaa kultaisen joukon ja tulostaa **läpäisyasteen**.
- **Vaaditaan etenemiseen:** Kehys ajaa kaikki tapaukset ja raportoi pisteet.
- **Päätökset nyt:** Miten vastauksia verrataan (täsmällinen, joukko-samat, toleranssi).
- **Seuraavaksi:** H6 tuo pisteet demoosi.

## Liiketoimintahaaste

"Se toimi, kun kokeilin" ei ole näyttöä. **Arviointikehys** muuttaa kultaiset kysymyksesi
toistettavaksi pisteeksi, jotta voit muuttaa kehotetta ja **tietää**, paraniko vai
heikkenikö se — DataOps-kuri sovellettuna LLM-agenttiin.

## Tehtäväsi

1. Muuta kultaiset kysymyksesi ja odotetut vastaukset koneellisesti ajettavaksi arviointijoukoksi.
2. Rakenna agenttisi avulla ajuri, joka kullekin tapaukselle: kysyy agentilta → ajaa SQL:n turvarajojen kautta
   → vertaa tulosta odotettuun vastaukseen → kirjaa läpäisy/hylkäys.
3. Valitse järkevä **vertailu**: täsmällinen arvo, joukkojen yhtäsuuruus (järjestyksestä riippumattomat rivit) tai
   numeerinen toleranssi aggregoinneille.
4. Tulosta kokonais-**läpäisyaste** (esim. `4/5 = 80%`). Aja se kahdesti vakauden tarkistamiseksi.

## Keskeiset päätökset

- **Vertailun tiukkuus:** rivit voivat palautua missä tahansa järjestyksessä — vertaa joukkoina, älä listoina.
- **Determinismi:** LLM:t vaihtelevat ajosta toiseen; keskiarvoistatko N ajoa vai hyväksytkö yhden läpäisyn?
- **Virheen yksityiskohdat:** lokita jokaisen virheen tuotettu SQL, jotta vianetsintä on nopeaa.

## Tuotokset

- Koneellisesti ajettava kultainen joukko.
- Arviointiajuri, joka tulostaa läpäisyasteen.
- Nykyinen pistemäärä kirjattuna demoasi varten.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Automaattinen | Yksi komento pisteyttää kaikki kultaiset kysymykset | Ajurin näyttö |
| Reilu vertailu | Järjestyksestä riippumaton, tarvittaessa toleranssilla | Vertailulogiikka |
| Toimintaan ohjaava | Virheet näyttävät tuotetun SQL:n | Virheloki |

## Vinkit

<details>
<summary>Vertaa tuloksia, älä SQL-merkkijonoja</summary>

Kaksi erilaista SQL-kyselyä voi olla yhtä oikein. Arvioi **tulosjoukkoa** (rivien joukkona),
älä sitä, vastaako SQL viitetekstiäsi.

</details>

<details>
<summary>Käytä sitä palautesilmukkana</summary>

Jos onnistuneen arvioinnin jälkeen jää aikaa, säädä kehotekäytäntöä, aja uudelleen ja seuraa pistemäärää.
Tuo silmukka — muuta, mittaa, pidä tai palauta — on koko asian ydin.

</details>

## Huomioi nämä

- Älä vertaa rivilistoja sijainnin perusteella — vertaa joukkoina tai hylkäät oikeita vastauksia.
- Älä keskiarvoista pois todellista regressiota; jos tapaus muuttuu hylätyksi, tutki syy.
- Älä laajenna kultaista joukkoa kesken arvioinnin; jäädytä se, jotta pisteet ovat vertailukelpoisia.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Kultaiset kysymykset (H2) + turvallinen agentti (H4) |
| **Sinun tuotoksesi** | Toistettava arviointikehys + läpäisyaste |
| **Seuraava vaihe** | H6 käyttää pistemäärää laadun todisteena |

## Seuraava vaihe

Sinulla on numero. **H6** muuttaa kokonaisuuden ytimekkääksi demoksi.
