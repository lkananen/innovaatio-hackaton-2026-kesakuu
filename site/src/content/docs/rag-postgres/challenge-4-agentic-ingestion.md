---
title: "H4: Agenttinen ingestio"
description: Rakenna DataOps-agenttisilmukka, joka hakee, pilkkoo, upottaa, tekee upsertin ja testaa itse uuden sisällön.
sidebar:
  order: 6
  label: "H4: Agenttinen ingestio"
  badge:
    text: 40 min
    variant: note
prev:
  link: ../challenge-3-customise-retrieval/
  label: "H3: Mukauta hakua"
next:
  link: ../challenge-5-operationalise/
  label: "H5: Vie tuotantokuntoon"
---

:::note[Haasteen tiedot]
⏱️ **40 min** · 🧩 **Ydin (palkinto)** · 🤖 agentti: putken rakentaja
:::

## Tavoite

- **Tee nyt:** Automatisoi tietopohjan pitäminen ajan tasalla.
- **Lähtötiedot:** Viritetty sovellus ja sen toimivat hakuvalinnat (H3).
- **Tulos:** Agenttinen ingestiosilmukka ingestoi **uuden** lähteen ja todistaa, että se toimi.
- **Vaaditaan etenemiseen:** Lisää yksi uusi URL/tiedosto → siitä tulee vastattavissa oleva → regressiokysymys läpäisee.
- **Päätökset nyt:** Idempotenssi, virheenkäsittely ja mitä “onnistuminen” tarkoittaa.
- **Seuraavaksi:** H5 (valinnainen) ajaa tämän ajastetusti.

## Liiketoimintahaaste

Todelliset tietopohjat muuttuvat. DataOpsin agenttinen osa on **silmukka**, joka voi ottaa uuden dokumentin ja integroida sen **ilman että ihminen vahtii jokaista vaihetta** — ja varmistaa, ettei mikään rikkoutunut. Tämä on polun keskipiste.

## Tehtäväsi

1. Kirjoita agenttisi kanssa `dataops_agent.py`, joka suorittaa päästä päähän:
   **haku → pilkkominen → upotus (embedding) → upsert → smoke-testin ajo → läpäisy/hylkäys lokiin**.
2. Tee siitä **idempotentti** — saman lähteen uudelleenajo ei saa luoda duplikaattikatkelmia (upsert vakaalla avaimella / sisältöhashilla).
3. Aja se **yhtä uutta lähdettä** vasten, joka tuo faktan, johon sovellus ei tällä hetkellä osaa vastata. Varmista, että sovellus osaa vastata siihen ajon jälkeen.
4. Lisää ajoon **regressiokysymys** (vanhempi tunnetusti toimiva fakta), jotta agentti epäonnistuu näkyvästi, jos ingestio korruptoi nykyistä hakua.

## Keskeiset päätökset

- **Idempotenssiavain:** sisältöhash, lähde-URL vai dokumentti-ID?
- **Virhekäytäntö:** jos upotus epäonnistuu puolivälissä, perutaanko ajo vai merkitäänkö se osittaiseksi?
- **Onnistumisen määritelmä:** uusi kysymys on vastattavissa **ja** regressiokysymys läpäisee edelleen.
- Kuinka paljon agentin pitäisi **päättää** ja kuinka paljon kovakoodaat? (esim. tekstikatkelman koko sisältötyypin mukaan)

## Tuotokset

- Ajettava, idempotentti ja itseään testaava ingestiosilmukka.
- Ajon loki, joka näyttää: uusi lähde ingestioitu, uuteen kysymykseen vastattu, regressio läpäisty.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Päästä päähän -silmukka | Yksi komento ingestoi ja varmistaa uuden lähteen | Ajon loki |
| Idempotentti | Uudelleenajo ei duplikoi dataa | Rivimäärät pysyvät vakaina 2. ajolla |
| Turvallinen | Regressiokysymys läpäisee edelleen ingestion jälkeen | Testituloste lokissa |

## Vinkit

<details>
<summary>Pidä se konkreettisena</summary>

Älä rakenna abstraktia “kehystä”. Tee siitä juuri tämä: **yksi uusi URL/tiedosto → pilkkominen → upotus (embedding) → upsert → kysy uusi kysymys → kysy yksi vanha kysymys → tulosta PASS/FAIL.** Konkreettinen ja demoamiskelpoinen voittaa nokkelan mutta keskeneräisen.

</details>

<details>
<summary>Anna agentin luonnostella, sinä ohjaat sopimusta</summary>

Kerro Copilotille haluamasi **syötteet, tulokset ja kaksi tarkistusta**, ja anna sen kirjoittaa liimakoodi. Tarkista upsert-logiikka itse — idempotenssivirheet piilevät siellä.

</details>

## Huomioi nämä

- Älä ohita idempotenssia — duplikaattikatkelmat heikentävät hakulaatua hiljaisesti.
- Älä anna silmukan “onnistua”, jos se tarkistaa vain uuden faktan; aja aina regressio uudelleen.
- Älä kovakoodaa yhtä demo-URL:ia niin syvälle, ettei komentosarja voi ottaa toista lähdettä.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Viritetty sovellus ja sen toimivat hakuvalinnat (H3) |
| **Sinun tuotoksesi** | Itseään testaava ingestiosilmukka ja onnistuneen ajon näyttö |
| **Seuraava vaihe** | H5 ajastaa tämän agentin GitHub Actionsissa |

## Seuraava vaihe

Sinulla on itseään testaava ingestioagentti — ydinkyvykkyys. Jos aikaa jää, H5 laittaa sen ajastukseen; muuten siirry **H6**:een valmistelemaan demo.
