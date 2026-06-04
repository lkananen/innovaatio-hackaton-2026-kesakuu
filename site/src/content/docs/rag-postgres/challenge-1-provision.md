---
title: "H1: Resurssien käyttöönotto"
description: Käytä azd:tä koko RAG-pinon käyttöönottoon omassa tilauksessasi ja tutki infraa Copilotin kanssa.
sidebar:
  order: 3
  label: "H1: Resurssien käyttöönotto"
  badge:
    text: 25–45 min
    variant: note
prev:
  link: ../setup/
  label: Valmistelu ja valmiustarkistus
next:
  link: ../challenge-2-load-data/
  label: "H2: Lataa oma data"
---

:::note[Haasteen tiedot]
⏱️ **25 min, jos valmistelut on tehty; 45+ min ensimmäisessä käyttöönotossa** · 🧩 **Ydin** · 🤖 agentti: infran selittäjä
:::

## Tavoite

- **Tee nyt:** Ota RAG-pino käyttöön ja tallenna toimiva päätepiste.
- **Lähtötiedot:** Oma kopiosi perusrepositoriosta kohdasta [Valmistelu](../setup/).
- **Tulos:** Käyttöön otettu sovellus, jonka päätepiste ja keskeiset resurssit ovat tiedossa.
- **Vaaditaan etenemiseen:** Saavutettava chat-päätepiste (vaikka data olisi vielä tyhjä).
- **Päätökset nyt:** Alue, ympäristön nimi ja käyttöön otettavat mallit.
- **Seuraavaksi:** H2 lataa datasi tässä luotuun PostgreSQL:ään.

Jos valmistelun `azd provision` onnistui jo, tästä tulee **varmistus + tutkiminen**, ei “käyttöönoton odottelu”.

## Liiketoimintahaaste

Tiimisi tarvitsee tuotantomaisen RAG-alustan **tänään**, ei muistikirjaa. Nopein uskottava reitti on `azd`-kiihdytin, joka kytkee yhteen Container Apps, PostgreSQL:n `pgvector`-laajennuksella ja Azure OpenAI:n Managed Identity -tunnistautumisella — näin käytät päivän **dataan ja agenttiseen toimintaan**, et putkitöihin.

## Tehtäväsi

1. Aja repositoriostasi `azd auth login` ja sitten `azd up`. Valitse alue ja ympäristö.
2. Kun käyttöönotto on käynnissä, avaa `infra/` ja pyydä agenttiasi **selittämään Bicep**: mitä kukin resurssi tekee, miten sovellus tunnistautuu OpenAI:hin ja PostgreSQL:ään sekä missä salaisuudet sijaitsevat.
3. Kun `azd up` valmistuu, avaa sovelluksen URL ja varmista, että chat-käyttöliittymä latautuu.
4. Ota päätepiste ja resurssien nimet talteen (`azd` tulostaa ne; voit myös ajaa `azd env get-values`).

## Keskeiset päätökset

- Millä **alueella** on kiintiö *sekä* chat- että upotus (embedding) -malleillesi?
- **Managed Identity vai avaimet** — kumpaa sovellus käyttää, ja miksi sillä on merkitystä operoinnissa?
- Millainen on juuri käyttöön ottamiesi resurssien **kuukausikustannusten muoto** (Container Apps + PG + OpenAI)?
- Mitkä resurssit ovat **tilallisia** (varmuuskopioitava) ja mitkä **tilattomia** (uudelleen luotavissa)?

## Tuotokset

- Saavutettava sovelluksen päätepiste ja tunnistetut keskeiset resurssit (esim. endpoint, resurssiryhmä, PostgreSQL ja OpenAI).
- Yhden kappaleen huomio muistiin siitä, mitä agentti opetti sinulle infrasta.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Käynnissä oleva sovellus | Chat-käyttöliittymä latautuu julkisessa URL-osoitteessa | Päätepiste avautuu selaimessa |
| Infran ymmärrys | Osaat selittää tunnistautumisen ja datavirran 2 virkkeessä | Infran selitys |
| Käyttöönoton tiedot hallussa | Päätepiste ja resurssien nimet ovat löydettävissä | Päätepiste ja resurssilista |

## Vinkit

<details>
<summary>Käyttöönotto on hidas — käytä odotusaika hyödyksi</summary>

`azd up` voi kestää kylmäkäynnistyksellä noin 15–20 min. Älä tuijota pyörivää kuvaketta — pyydä agenttia käymään läpi `infra/main.bicep` ja sovelluksen datan käsittelykoodi, jotta ymmärrät, mitä olet toimittamassa. Kysy siltä: *"Trace one user question from the browser to PostgreSQL and back."*

</details>

<details>
<summary>azd-komentojen lunttilappu</summary>

```bash
azd auth login
azd up                 # provision + deploy
azd env get-values     # endpoint, resource names
azd deploy             # redeploy app code only (faster than azd up)
azd down               # tear everything down at the end of the day
```

</details>

## Huomioi nämä

- Älä valitse aluetta viiveen perusteella — valitse alue, jossa sinulla **on mallikiintiötä**.
- Älä hukkaa päätepistettä ja resurssien nimiä; myöhemmät haasteet tarvitsevat niitä.
- Älä commitoi salaisuuksia — `azd` pitää ne `.azure/`-kansiossa, joka on git-ignored. Pidä se sellaisena.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Perusrepositoriosi ([Valmistelu](../setup/)) |
| **Sinun tuotoksesi** | Käyttöön otettu RAG-sovellus ja talteen otetut päätepistetiedot |
| **Seuraava vaihe** | H2 yhdistää tässä käyttöön otettuun PostgreSQL:ään ja lataa datasi |

## Seuraava vaihe

Sinulla on käynnissä oleva mutta tyhjä RAG-sovellus. H2 tekee siitä *sinun omasi* lataamalla datasi ja todistamalla, että haku toimii.
