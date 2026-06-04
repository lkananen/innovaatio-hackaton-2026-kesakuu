---
title: "H4: Turvarajat"
description: Koveta suorituskerros niin, että tuotettu SQL on vain luku, rajattu ja validoitu ennen ajoa.
sidebar:
  order: 6
  label: "H4: Turvarajat"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../challenge-3-nl-to-sql/
  label: "H3: NL→SQL-sopimus"
next:
  link: ../challenge-5-eval/
  label: "H5: Arviointikehys"
---

:::note[Haasteen tiedot]
⏱️ **35 min** · 🧩 **Ydin (turvallisuushyöty)** · 🤖 agentti: turvallisuusinsinööri
:::

## Tavoite

- **Tee nyt:** Tee agentille mahdottomaksi suorittaa vaarallisia tai hallitsemattomia kyselyjä.
- **Lähtötiedot:** Toimiva agentti (H3) + vain luku -käyttäjä `agent_ro`.
- **Tulos:** Agentin SQL-suoritus kulkee validointi- ja turvarajakerroksen läpi.
- **Vaaditaan etenemiseen:** Haitallinen/tuhoisa kysymys **torjutaan**; kultaiset kysymykset läpäisevät edelleen.
- **Päätökset nyt:** Sallittujen lista vs. estolista, rivikatto, aikakatkaisu, mitä rikkomuksessa tehdään.
- **Seuraavaksi:** H5 mittaa tarkkuuden nyt, kun suoritus on turvallinen.

## Liiketoimintahaaste

Vain luku -käyttäjä (valmisteltu etukäteen) estää kirjoitukset tietokannassa. Haluat silti **syvyyssuuntaista
puolustusta**: hylkää selvästi vaarallinen SQL *ennen* ajoa, rajaa tuloksen koko ja aseta suoritukselle aikaraja,
jotta yksittäinen kysymys ei kaada tietokantaa. Tämä kerros tekee agentista
**tuotantomaisen**.

## Tehtäväsi

1. Rakenna agenttisi avulla `sql_guardrails.py`, joka ennen minkä tahansa tuotetun SQL:n suorittamista:
   - **Hylkää muut kuin `SELECT`**-lauseet (ei DDL/DML — sallittujen lista, ei estolista).
   - **Hylkää useat lauseet** (ei `;`-ketjutusta).
   - **Lisää/pakottaa `LIMIT`-ehdon** (esim. 1000 riviä), jos se puuttuu.
   - **Asettaa `statement_timeout`-asetuksen** istunnolle (esim. 5 s).
2. Rikkomuksen yhteydessä **kieltäydy selkeällä viestillä** — älä muunna hiljaa joksikin vääräksi.
3. Testaa hyökkäävillä kehotteilla: *"delete all customers"*, *"drop the orders table"*,
   *"select everything from every table"*. Varmista, että jokainen estetään.
4. Aja 5 kultaista kysymystä uudelleen — turvarajat eivät saa rikkoa kelvollisia kyselyjä.

## Keskeiset päätökset

- **Sallittujen lista -ajattelu:** vain `SELECT` läpäisee; kaikki muu hylätään oletuksena.
- **Rivikatto ja aikakatkaisu:** arvot, jotka suojaavat tietokantaa katkaisematta oikeita vastauksia.
- **Virhekokemus:** kieltäydytkö ja selität, vai kieltäydytkö ja pyydät käyttäjää muotoilemaan uudelleen?
- **Jäsentäminen:** kevyt tarkistus vai oikea SQL-jäsennin (`sqlglot`) — kuinka vankka sen täytyy olla?

## Tuotokset

- Turvarajakerros kytkettynä agentin suorituspolkuun.
- Hyökkäävä testiloki, joka näyttää vaarallisten kyselyjen torjunnan.
- Uudelleen ajetut kultaisten kysymysten tulokset (edelleen ≥ 3/5).

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Vain luku pakotettu | Ei-SELECT torjutaan ennen tietokantaan osumista | Hyökkäävä testiloki |
| Rajattu | LIMIT + aikakatkaisu käytössä jokaisessa kyselyssä | Koodi + rajattu tulos |
| Ei regressiota | Kultaiset kysymykset läpäisevät edelleen | Uudelleenajon tulokset |

## Vinkit

<details>
<summary>Sallittujen lista, ei estolista</summary>

Älä yritä luetella jokaista vaarallista avainsanaa. **Salli vain `SELECT`** (yksi lause)
ja hylkää kaikki muu. Estolistoilta jää aina jokin tapaus huomaamatta; sallittujen listat epäonnistuvat turvallisesti.

</details>

<details>
<summary>Käytä SQL-jäsennintä, jos voit</summary>

`sqlglot` voi jäsentää lauseen ja kertoa sen tyypin ja lausemäärän paljon
luotettavammin kuin merkkijonohaku. Pyydä agenttiasi käyttämään sitä ja pakottamaan yhden lauseen,
vain SELECT -säännön jäsennettyyn puuhun.

</details>

## Huomioi nämä

- Älä luota pelkkään kehotteeseen SQL:n turvallisuuden varmistamisessa — malli **noudattaa** toisinaan
  ohitusyritystä. Turvaraja on todellinen puolustus.
- Älä poista käyttäjän eksplisiittisesti pyytämää `LIMIT`-ehtoa, jos se on pienempi kuin oma kattosi.
- Älä riko kelvollisia CTE:itä/alakyselyjä liian innokkaalla regexillä — testaa oikeat kultaiset kysymykset.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Toimiva agentti (H3) |
| **Sinun tuotoksesi** | Toimivat SQL-turvarajat + hyökkäävä testiloki |
| **Seuraava vaihe** | H5 ajaa nyt turvallisen agentin koko arviointijoukon läpi |

## Seuraava vaihe

Agenttisi on turvallinen. **H5**:ssä (valinnainen) todistat sen *tarkkuuden* arviointikehyksellä.
