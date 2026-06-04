---
title: "H4: Data-agentti"
description: Luo Fabric data agent, liitä tietolähteet, lisää ohjeet ja testaa luonnollisen kielen Q&A.
sidebar:
  order: 6
  label: "H4: Data-agentti"
  badge:
    text: 40 min
    variant: note
prev:
  link: ../challenge-3-semantic-model/
  label: "H3: Semanttinen malli"
next:
  link: ../challenge-5-ground-eval/
  label: "H5: Ankkurointi + arviointi"
---

:::note[Haasteen tiedot]
⏱️ **40 min** · 🧩 **Ydin** · 🤖 agentti: ankkurointivalmentaja
:::

## Tavoite

- **Tee nyt:** Luo Fabric data agent ja ankkuroi se semanttiseen malliisi + lakehouseen.
- **Lähtötiedot:** Toimiva semanttinen malli ja analytiikkavalmis lakehouse.
- **Tulos:** Toimiva Fabric data agent, jossa lähteet, valitut taulut, ohjeet, esimerkit ja testitulokset ovat kunnossa.
- **Vaaditaan etenemiseen:** Agentti vastaa vähintään kolmeen luonnollisen kielen kysymykseen ankkuroituina tuloksina.
- **Päätökset nyt:** Lähteiden reititys, taulujen rajaus, sanasto ja kuinka paljon raakaa lakehouse-käyttöä paljastetaan.
- **Seuraavaksi:** H5 vahvistaa ankkurointia ja muuntaa kysymykset pieneksi arviointijoukoksi.

## Liiketoimintahaaste

Tässä piilee hyöty: liiketoimintakäyttäjä kysyy tavallisen kysymyksen ja saa dataan perustuvan vastauksen
kirjoittamatta SQL:ää tai DAX:ia. Tehtäväsi on tehdä agentista hyödyllinen ja turvallinen valitsemalla lähteet,
rajaamalla taulut, lisäämällä selkeät ohjeet ja testaamalla, mitä se oikeasti tekee.

## Tehtäväsi

1. Luo työtilassa **Fabric data agent** kohdasta **+ New item**.
2. Lisää **Power BI:n semanttinen malli** tietolähteeksi; varmista, että sinulla on Read-käyttöoikeus.
3. Lisää **lakehouse** toiseksi lähteeksi ja valitse vain taulut, joita agentti tarvitsee.
4. Kirjoita **data-agentin ohjeet**: liiketoimintamääritelmät, lähteiden reititys, sallittu laajuus ja vastaustyyli.
5. Lisää esimerkkikysymys-/kyselypareja tuetuille SQL-lähteille, kuten lakehouselle, kun siitä on hyötyä.
6. Esitä 3–5 luonnollisen kielen kysymystä ja kirjaa vastaus, käytetty lähde ja luotu SQL/DAX, jos se näytetään.
7. Kirjaa määritys ja testinäyttö talteen jatkovaiheita varten.

## Keskeiset päätökset

- Milloin agentin pitäisi käyttää **semanttista mallia** (viralliset mittarit) ja milloin **lakehousea** (tutkiminen)?
- Mitkä taulut ovat rajauksen ulkopuolella, vaikka ne olisivat olemassa?
- Mitkä sanastotermit täytyy määritellä, jotta käyttäjät voivat kysyä liiketoimintakielellä?
- Mikä luotu kysely tai vastaus olisi demossa turvaton tai harhaanjohtava?

## Tuotokset

- Toimiva Fabric data agent, jonka lähteet, valitut taulut, ohjeet, esimerkkikysymykset ja testitulokset on varmistettu.
- Vähintään kolme läpäisevää luonnollisen kielen kysymystä, joista yksi käyttää semanttisen mallin mittaria.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Agentti luotu | Fabric data agent on olemassa työtilassa | Agenttikohteen nimi kirjattu |
| Ankkuroitu lähteisiin | Semanttinen malli + lakehouse liitetty ja rajattu | Lähde-/taululuettelo |
| Q&A toimii | 3+ kysymystä palauttaa uskottavia ankkuroituja vastauksia | Kehote + vastaus |

## Vinkit

<details>
<summary>Ohjeiden aloitus</summary>

Kokeile: *"Use the semantic model for official KPIs and measures. Use the lakehouse only for row-level
exploration over selected silver tables. If a question needs data outside these sources, say so.
Define revenue/trips/customers exactly as in your semantic model."*

</details>

<details>
<summary>Tarkista vaiheet</summary>

Fabric data agent voi näyttää välivaiheet ja luodun SQL:n/DAX:n. Käytä läpinäkyvyyttä
varmistaaksesi, valitsiko agentti oikean lähteen ja mittarin ennen kuin luotat vastaukseen.

</details>

## Huomioi nämä

- Data-agentit ovat vain luku -tilassa: ne luovat SQL-, DAX- tai KQL-kyselyitä datan hakemiseen, eivät muokkaa sitä.
- Voit lisätä enintään viisi tietolähdettä; pidä määrä pienempänä hackathonissa.
- Esimerkkikysely-/kysymysparit eivät tällä hetkellä ole tuettuja Power BI:n semanttisen mallin lähteille.
- Nykyiset vastaukset on suunniteltu tiiviiksi keskusteluvastauksiksi, eivät täydellisten datajoukkojen vientiin.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Toimiva semanttinen malli + analytiikkavalmis lakehouse |
| **Sinun tuotoksesi** | Toimiva Fabric data agent |
| **Seuraava vaihe** | H5 muuntaa testatut kysymyksesi ankkurointi-/arviointijoukoksi |

## Seuraava vaihe

Sinulla on ydindemo. **H5**:ssä teet siitä vaikeamman harhauttaa tiukentamalla ankkurointia ja lisäämällä
arviointijoukon.