---
title: "H2: Lataa oma data"
description: Ingestoi oma datajoukkosi, luo upotukset (embedding) ja todista smoke-testillä, että haku toimii.
sidebar:
  order: 4
  label: "H2: Lataa oma data"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../challenge-1-provision/
  label: "H1: Resurssien käyttöönotto"
next:
  link: ../challenge-3-customise-retrieval/
  label: "H3: Mukauta hakua"
---

:::note[Haasteen tiedot]
⏱️ **35 min** · 🧩 **Ydin** · 🤖 agentti: ingestio ja testin kirjoittaja
:::

## Tavoite

- **Tee nyt:** Korvaa esimerkkidata **omalla** datajoukollasi ja varmista haku.
- **Lähtötiedot:** Käyttöön otetun sovelluksen päätepistetiedot (H1) + datajoukkosi kohdasta [Valmistelu](../setup/).
- **Tulos:** Oma data on ladattu, haettavissa ja suojattu läpäisevällä smoke-testillä.
- **Vaaditaan etenemiseen:** Sovellus vastaa kysymykseen **oman** sisältösi perusteella ja näyttää viittauksen.
- **Päätökset nyt:** Tekstikatkelman koko, tekstikatkelmien määrä ja mitkä kentät muuttuvat haettavaksi tekstiksi.
- **Seuraavaksi:** H3 hienosäätää, *miten* sisältö haetaan ja esitetään.

## Liiketoimintahaaste

RAG-sovellus on vain niin hyvä kuin sen taustalla oleva data. Sinun tehtäväsi on saada **omat** dokumenttisi sisään, upotettua ja todistettavasti haettaviksi — ja lukita tämä automaattisella tarkistuksella, jotta myöhemmät muutokset eivät voi rikkoa sitä huomaamatta.

## Tehtäväsi

1. Valmistele datajoukkosi polun sääntöjen mukaisesti: **ei-arkaluonteinen**, **≤ 50 MB**, **noin 50–200 tekstikatkelmaa**. (Eikö sinulla ole dataa? Käytä varavaihtoehtoa kohdasta [Valmistelu §3](../setup/#3-bring-your-own-data-or-use-a-fallback).)
2. Käytä repositorion ingestiokomentosarjaa (ja agenttiasi) tekemään **pilkkominen → upotus (embedding) → upsert** PostgreSQL:ään. Varmista rivimäärät `pgvector`-taulussa.
3. Kysy käyttöliittymässä **2–3 kysymystä**, joihin datasi pitäisi pystyä vastaamaan. Varmista, että vastaukset viittaavat lähteisiisi.
4. Pyydä agenttiasi tekemään smoke-testi: `pytest`, joka kutsuu `/chat`- (tai `/ask`-) päätepistettä **yhdellä tunnetulla kysymyksellä** ja tarkistaa, että vastaus sisältää **odotetun faktan tai lähdetiedoston nimen**. Varmista, että testi läpäisee.
5. Kirjaa lataamasi datan lähde, määrä, tekstikatkelmien koko ja upotusmalli talteen.

## Keskeiset päätökset

- **Tekstikatkelman koko vs. recall:** pienet katkelmat = tarkkoja mutta sirpaleisia; suuret = kontekstirikkaita mutta kohinaisia.
- Mitkä datasi **kentät** kannattaa upottaa ja mitkä säilyttää metadatasuodattimina?
- Mikä on **deterministinen** onnistumissignaali smoke-testille (fakta? lähteen nimi?)?
- Kuinka monta tekstikatkelmaa on “riittävästi”, jotta ratkaisu on hyödyllinen ilman että upotuskustannus tai -aika karkaa?

## Tuotokset

- Selkeä tieto siitä, mikä lähde ladattiin, kuinka paljon sisältöä siitä syntyi, millä tekstikatkelmakoolla ja millä upotusmallilla.
- Päätepistettä vasten läpäisevä smoke-testi.
- 2–3 kuvakaappaus-/transkriptiesimerkkiä lähteisiin perustuvista vastauksista viittauksineen.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Oma data sisällä | Haku palauttaa *omia* tekstikatkelmiasi, ei esimerkkiä | Käyttöliittymän vastaus viittaa lähteeseesi |
| Deterministinen testi | Yksi tunnettu K→V-pari tarkistetaan automaattisesti | `pytest` läpäisee |
| Toistettava lataus | Kuka tahansa näkee, mitä on ingestoitu | Ingestion yhteenveto |

## Vinkit

<details>
<summary>Tee smoke-testistä deterministinen</summary>

LLM:n tuotos vaihtelee, joten älä tarkista täsmällistä sanamuotoa. Tarkista jotain vakaata: sovelluksen viittaama **lähdetiedoston nimi** tai **tietty numero/nimi**, joka esiintyy vain sinun datassasi. Esimerkki: `assert "annual-report-2024" in response.json()["sources"]`.

</details>

<details>
<summary>Upotuskustannusten hallinta</summary>

Jos datajoukkosi on suuri, ingestoi tapahtumaa varten vain **ensimmäiset N dokumenttia/tekstikatkelmaa**. Tavoite on toimiva demo, ei täysi kattavuus. Kirjaa rajaus talteen.

</details>

## Huomioi nämä

- Älä ingestoi arkaluonteista dataa “vain kokeillaksesi” — kun se on upotettu, se on tietokannassa.
- Älä tarkista testissä koko vastaustekstiä; testistä tulee epävakaa.
- Älä unohda varmistaa **rivimääriä** — hiljainen upotusvirhe näyttää siltä kuin “tuloksia ei löytyisi”.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Käyttöön otetun sovelluksen päätepistetiedot (H1) + datajoukkosi |
| **Sinun tuotoksesi** | Haettava oma data ja läpäisevä smoke-testi |
| **Seuraava vaihe** | H3 muuttaa hakua ja kehotteita; smoke-testi suojaa regressioilta |

## Seuraava vaihe

Haku toimii. H3 tekee siitä *hyvän* — paremmat tekstikatkelmat, suodattimet ja toimialan tunteva järjestelmäkehote — ja smoke-testi havaitsee regressiot.
