---
title: "H2: Sanasto ja kultaiset kysymykset"
description: Määritä liiketoimintamerkitys, jota skeema ei voi ilmaista, ja lukitse viisi kultaista kysymystä tavoitteeksi.
sidebar:
  order: 4
  label: "H2: Sanasto ja kultaiset kysymykset"
  badge:
    text: 30 min
    variant: note
prev:
  link: ../challenge-1-database/
  label: "H1: Tietokanta ja profiili"
next:
  link: ../challenge-3-nl-to-sql/
  label: "H3: NL→SQL-sopimus"
---

:::note[Haasteen tiedot]
⏱️ **30 min** · 🧩 **Ydin** · 🤖 agentti: toimialamallintaja
:::

## Tavoite

- **Tee nyt:** Koodaa toimialatieto, jota pelkkä skeema ei välitä.
- **Lähtötiedot:** Tarkistettu skeemakäsitys (H1).
- **Tulos:** Agentti tuntee keskeiset liiketoimintatermit, ja sinulla on jäädytetty lista **5 kultaisesta kysymyksestä** odotettuine vastauksineen.
- **Vaaditaan etenemiseen:** Jokaisella kultaisella kysymyksellä on tunnetusti oikea vastaus, jonka laskit käsin/SQL:llä.
- **Päätökset nyt:** Mitä "active customer", "revenue" ja "last quarter" oikeasti tarkoittavat datassasi.
- **Seuraavaksi:** H3 syöttää sanaston + profiilin NL→SQL-kehotteeseen.

## Liiketoimintahaaste

Sarake nimeltä `status = 'A'` ei tarkoita LLM:lle mitään. **Liiketoimintamerkitys** — mikä lasketaan
mukaan, mikä lippu tarkoittaa aktiivista, miten tilikausi määritellään — elää ihmisten päissä.
Sen talteen ottaminen erottaa lelun hyödyllisestä agentista.

## Tehtäväsi

1. Määritä agenttisi avulla keskeiset termit, mittarimääritelmät, enum-arvojen merkitykset
   (`status`-koodit) ja ei-ilmeiset liitospolut.
2. Viimeistele **5 kultaista kysymystäsi** (valmisteltu etukäteen). Kata kysymyksillä vaikeustaso helpoista monen taulun kysymyksiin.
3. Laske **jokaiselle** kultaiselle kysymykselle **oikea vastaus itse** (kirjoita SQL
   käsin) ja kirjaa se. Tämä on H5:n arvioinnin vertailuarvo.
4. Merkitse kysymykset, joihin data **ei** voi vastata, ja muokkaa niitä — kultaisten kysymysten täytyy olla vastattavissa.

## Keskeiset päätökset

- **Mittarimääritelmät:** lukitse tarkat kaavat (esim. revenue = `sum(qty * unit_price)` ilman hyvityksiä).
- **Ajan semantiikka:** mitä kalenteria "last month/quarter" käyttää?
- **Monitulkintaisuus:** jos termi vastaa kahta saraketta, päätä kumpi on kanoninen.

## Tuotokset

- Yhteinen liiketoimintasanasto: termit, mittarit, enumit ja liitosvinkit.
- 5 kultaista kysymystä, joista jokaisella on käsin varmistettu odotettu vastaus + viite-SQL.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Sanasto hyödyllinen | Määrittelee jokaisen ei-ilmeisen termin, jota kysymys tarvitsee | Sanasto kattaa kultaiset kysymykset |
| Kultaiset kysymykset toimivia | Kaikki 5 ovat vastattavissa ja kattavat vaikeustasoja | 5 kysymystä |
| Totuusarvo | Jokaisella on varmistettu odotettu vastaus | Viite-SQL + tulos |

## Vinkit

<details>
<summary>Kirjoita viite-SQL nyt — kiität itseäsi H5:ssä</summary>

Tässä kirjoittamasi viite-SQL **on** arvioinnin vertailuarvo. Käytä aikaa sen
saamiseen oikein; kaikki myöhempi mitataan sitä vasten.

</details>

<details>
<summary>Kata vaikeuskäyrä</summary>

Tavoittele noin 2 helppoa (yksi taulu, suodatus/laskenta), noin 2 keskitasoa (yksi liitos + aggregointi) ja noin 1 vaikea
(moniliitos tai ikkuna). Tämä paljastaa, missä agentti rikkoutuu.

</details>

## Huomioi nämä

- Älä valitse kultaisia kysymyksiä, joihin data ei oikeasti voi vastata — muuten taistelet aaveita vastaan H5:ssä.
- Älä jätä mittarimääritelmiä epämääräisiksi; agentti valitsee eri tulkinnan joka ajolla.
- Älä ohita käsin kirjoitettua viite-SQL:ää — ilman sitä ei ole mitään, mitä arvioida.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Tarkistettu skeemakäsitys (H1) |
| **Sinun tuotoksesi** | Liiketoimintasanasto + 5 kultaista kysymystä (+ viite-SQL) |
| **Seuraava vaihe** | H3 syöttää molemmat kehotteeseen; H5 arvioi vastaukset näitä vasten |

## Seuraava vaihe

Sinulla on merkitys ja tavoite. **H3**:ssa rakennat agentin, joka muuttaa kysymykset SQL:ksi.
