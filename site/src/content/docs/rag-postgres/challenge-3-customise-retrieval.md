---
title: "H3: Mukauta hakua"
description: Säädä pilkkomista, suodatusta ja toimialan järjestelmäkehotetta, jotta vastaukset ovat tarkkoja ja brändin mukaisia.
sidebar:
  order: 5
  label: "H3: Mukauta hakua"
  badge:
    text: 40 min
    variant: note
prev:
  link: ../challenge-2-load-data/
  label: "H2: Lataa oma data"
next:
  link: ../challenge-4-agentic-ingestion/
  label: "H4: Agenttinen ingestio"
---

:::note[Haasteen tiedot]
⏱️ **40 min** · 🧩 **Ydin** · 🤖 agentti: haun virittäjä
:::

## Tavoite

- **Tee nyt:** Paranna vastausten laatua **omalla** toimialallasi.
- **Lähtötiedot:** Toimiva sovellus + läpäisevä smoke-testi (H2).
- **Tulos:** Päivitetty sovellus, jonka hakuvalinnat parantavat vastausten laatua mitattavasti.
- **Vaaditaan etenemiseen:** Mitattava laadun parannus testikysymyksissäsi, smoke-testi menee yhä läpi.
- **Päätökset nyt:** Top-k, metadatasuodattimet, hybridi vs. puhdas vektorihaku, järjestelmäkehotteen persoona.
- **Seuraavaksi:** H4 automatisoi tietopohjan pitämisen ajan tasalla.

## Liiketoimintahaaste

Valmis RAG antaa uskottavia mutta yleisluonteisia vastauksia. Jotta se olisi luotettava omalla toimialallasi, se tarvitsee oikean **haun muodon** (mitä haetaan) ja oikeat **ohjeet** (miten vastataan, mistä kieltäydytään ja miten viitataan). Tässä haasteessa Copilot ansaitsee paikkansa.

## Tehtäväsi

1. Valitse nykyisistä vastauksista **kaksi heikkoutta** (esim. väärät tekstikatkelmat haetaan, viittaukset puuttuvat, väärä sävy, hallusinaatio kun data puuttuu).
2. Muuta agenttisi kanssa **vähintään kahta** seuraavista: pilkkomisstrategia, `top_k`, metadatasuodatin, hybridi-haku (vektori + avainsana) tai **järjestelmäkehote** (toimialapersoona + “sano ettet tiedä” -sääntö).
3. Kysy H2-kysymyksesi uudelleen sekä **uusi vaikea kysymys**, johon data *ei* voi vastata — varmista, että sovellus kieltäytyy hallitusti eikä keksi.
4. Pidä smoke-testi läpäisevänä. Kirjaa jokainen muutos ja sen perustelu muistiin.

## Keskeiset päätökset

- **Top-k:** enemmän kontekstia vs. enemmän kohinaa ja token-kustannusta.
- **Hybridi-haku:** korjaako avainsanahaku “selvät ohihaut”?
- **Kieltäytymiskäytäntö:** miten sovelluksen pitäisi toimia, kun haku ei palauta mitään olennaista?
- **Viittaukset:** näkyvätkö lähteet tavalla, johon sidosryhmä luottaisi?

## Tuotokset

- Selkeä käsitys jokaisesta haun muutoksesta, sen syystä ja vaikutuksesta ennen/jälkeen-testikysymyksissäsi.
- Päivitetty ja uudelleen käyttöön otettu sovellus (`azd deploy`).
- Näyttö siitä, että “vastaamaton” kysymys käsitellään nyt turvallisesti.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Parempi haku | Oikeat tekstikatkelmat vaikeisiin kysymyksiisi | Ennen/jälkeen-transkripti |
| Turvallinen epäonnistuminen | Ei hallusinaatiota vastaamattomiin kysymyksiin | “En tiedä” -vastaus näkyy |
| Ei regressiota | Tunnetusti toimiva kysymys toimii edelleen | Smoke-testi läpäisee |

## Vinkit

<details>
<summary>Järjestelmäkehote on suurin vipusi</summary>

Pyydä agenttia luonnostelemaan toimialakohtainen järjestelmäkehote, joka määrittää avustajan roolin, vaatii vastausten perustuvan haettuun kontekstiin, **vaatii lähdeviittaukset** ja ohjeistaa sanomaan, ettei se tiedä, kun konteksti ei riitä. Pienet sanamuutokset tässä päihittävät usein haun virittämisen.

</details>

<details>
<summary>Mittaa, älä fiilistele</summary>

Pidä pieni taulukko testikysymyksistäsi ja merkitse läpäisy/hylkäys ennen ja jälkeen jokaisen muutoksen. Tästä tulee näyttöä demoon ja siemen H4:n regressiotarkistukselle.

</details>

## Huomioi nämä

- Älä muuta viittä asiaa kerralla — et tiedä, mikä auttoi.
- Älä anna “parannusten” rikkoa hiljaisesti H2:n tunnetusti toimivaa kysymystä.
- Älä poista viittauksia, jotta vastaukset näyttäisivät siistimmiltä; luottamus > viimeistely.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Sovellus + läpäisevä smoke-testi (H2) |
| **Sinun tuotoksesi** | Paremmaksi viritetty ja uudelleen käyttöön otettu hakukokemus |
| **Seuraava vaihe** | H4 paketoi ingestion ja smoke-testisi automatisoiduksi agenttisilmukaksi |

## Seuraava vaihe

Sovelluksesi on tarkka ja rehellinen. H4 tekee siitä **itse päivittyvän**: agentti ingestoi uutta sisältöä ja ajaa testisi automaattisesti uudelleen.
