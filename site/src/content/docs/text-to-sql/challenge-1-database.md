---
title: "H1: Tietokanta ja skeemaprofiili"
description: Lataa relaatiodatasi ja varmista, että agentilla on luotettava käsitys skeemasta, jonka pohjalta se voi päätellä.
sidebar:
  order: 3
  label: "H1: Tietokanta ja profiili"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../setup/
  label: Valmistelu ja valmiustarkistus
next:
  link: ../challenge-2-glossary/
  label: "H2: Sanasto ja kultaiset kysymykset"
---

:::note[Haasteen tiedot]
⏱️ **35 min** · 🧩 **Ydin** · 🤖 agentti: skeemaprofiloija
:::

## Tavoite

- **Tee nyt:** Vie data PostgreSQL-tietokantaan ja kuvaa se agentille.
- **Lähtötiedot:** Relaatiodatajoukkosi + vain luku -käyttäjä (valmisteltu etukäteen).
- **Tulos:** Agentilla on tarkka ja tarkistettu käsitys tauluista, sarakkeista, tyypeistä, avaimista ja suhteista.
- **Vaaditaan etenemiseen:** Kysely käyttäjänä `agent_ro` palauttaa rivejä; profiili listaa jokaisen taulun.
- **Päätökset nyt:** Mitkä taulut kuuluvat rajaukseen, miten suhteet kuvataan.
- **Seuraavaksi:** H2 lisää liiketoimintamerkityksen tämän rakenteen päälle.

## Liiketoimintahaaste

Agentti ei voi kirjoittaa oikeaa SQL:ää skeemalle, jota se ei näe. Ennen yhtään LLM-kutsua tarvitset
**tarkan, koneellisesti luettavan kartan** tietokannastasi — ja todisteen siitä, että agentin **vain luku**
-identiteetti voi oikeasti kysellä sitä.

## Tehtäväsi

1. **Jos latasit datan etukäteen:** varmista rivimäärät ja siirry vaiheeseen 2. **Muuten:**
   lataa datajoukkosi (tai varavaihtoehto) PostgreSQL-tietokantaan nyt ja varmista, että rivimäärät näyttävät oikeilta.
2. Varmista, että **`agent_ro`**-käyttäjä voi tehdä `SELECT`-kyselyjä — eikä voi tehdä `INSERT`/`UPDATE`/`DELETE`-toimintoja.
3. Kuvaa agentillasi jokaisesta taulusta sarakkeet + tyypit, pääavaimet, viiteavaimet ja yhden rivin kuvaus.
4. Tarkista profiili pistokokein oikeaa skeemaa vasten (`\d+` psql:ssä) — korjaa poikkeamat.

## Keskeiset päätökset

- **Rajaus:** otatko mukaan kaikki taulut vai vain ne 2–5, joita kultaiset kysymykset koskevat?
- **Suhteet:** tallenna viiteavaimet eksplisiittisesti, jotta malli tietää, miten taulut liitetään.
- **Kuvaukset:** luotko automaattisesti ja korjaat, vai kirjoitatko käsin tarkkuuden vuoksi?

## Tuotokset

- Ladattu tietokanta, jossa on järkevät rivimäärät.
- Tarkistettu skeemakäsitys, joka kattaa jokaisen rajaukseen kuuluvan taulun.
- Merkintä, joka vahvistaa, että `agent_ro` on vain luku -käyttäjä (estetty kirjoitus todistaa sen).

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Data ladattu | Taulut ovat olemassa ja rivimäärät ovat odotetut | `SELECT count(*)` -tulos |
| Vain luku varmistettu | Kirjoitusyritys käyttäjänä `agent_ro` estetään | `permission denied` -virhe |
| Profiili tarkka | Avaimet ja viiteavaimet vastaavat oikeaa skeemaa | Vertailu `\d+`-tulokseen |

## Vinkit

<details>
<summary>Luo profiili katalogista, älä muistista</summary>

Pyydä agenttiasi kyselemään `information_schema` / `pg_catalog` -näkymiä profiilin rakentamiseksi sen sijaan,
että se arvaisi DDL:stä. Näin kuvaus heijastaa sitä, mitä tietokannassa **oikeasti** on.

</details>

<details>
<summary>Todista vain luku tarkoituksella</summary>

Suorita `INSERT INTO <table> ...` käyttäjänä `agent_ro` ja ota kuvakaappaus estosta. Esto on
näyttö — se on jokaisen myöhemmän turvarajan perusta.

</details>

## Huomioi nämä

- Älä yhdistä agenttia pääkäyttäjänä "vain jotta pääset alkuun" — aloita vain luku -käyttäjällä heti ensimmäisestä minuutista.
- Älä anna profiilin ajautua irti todellisuudesta; malli luottaa siihen kirjaimellisesti.
- Älä sisällytä tauluja, jotka ovat täynnä henkilötietoja, vaikka ne näyttäisivät synteettisiltä — varmista alkuperä.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Valmis datajoukko + `agent_ro` |
| **Sinun tuotoksesi** | Tarkistettu skeemakäsitys agentin käyttöön |
| **Seuraava vaihe** | H2 lisää liiketoimintasanaston näiden taulujen/sarakkeiden päälle |

## Seuraava vaihe

Agentti näkee nyt skeemasi. **H2**:ssa annat sille *liiketoimintamerkityksen* ja lukitset
viisi kultaista kysymystä.
