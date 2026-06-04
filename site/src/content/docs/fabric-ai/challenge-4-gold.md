---
title: "H4: Gold + raportti"
description: Kuratoi silver gold-malliksi ja rakenna yksi raportti tai semanttinen malli AI-rikastetun datan päälle.
sidebar:
  order: 6
  label: "H4: Gold + raportti"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../challenge-3-silver/
  label: "H3: Silver + AI"
next:
  link: ../challenge-5-operationalise/
  label: "H5: Operationalisointi"
---

:::note[Haasteen tiedot]
⏱️ **35 min** · 🧩 **Ydin** · 🤖 agentti: datamallintaja
:::

## Tavoite

- **Tee nyt:** Muunna rikastettu silver liiketoimintavalmiiksi gold-malliksi + raportiksi.
- **Lähtötiedot:** AI-rikastettu `silver`-taulu ja fallback-polku (H3).
- **Tulos:** Kuratoitu `gold`-taulu tai -näkymä sekä **yksi** raportti tai semanttinen malli, joka hyödyntää rikastusta.
- **Vaaditaan etenemiseen:** Raporttivisuaali, joka käyttää **rikastettua sarakettasi** (AI-polku tai fallback).
- **Päätökset nyt:** Aggregoinnin raekoko, mikä rikastettu dimensio nostetaan esiin.
- **Seuraavaksi:** H5 (valinnainen) operationalisoi koko putken.

## Liiketoimintahaaste

Gold on **käyttökerros** — muotoiltu analytiikkaa, ei teknistä toteutusta varten. Tämän haasteen tarkoitus on **sulkea ympyrä**: näytä, miten H3:n AI-johdettu sarake ohjaa todellista liiketoimintanäkymää (esim. "tikettien määrä AI-luokitellun kategorian mukaan ajan yli").

## Tehtäväsi

1. Rakenna **gold**-taulu tai -näkymä: aggregoi/kuratoi silver raportin tarvitsemaan raekokoon.
2. Varmista, että gold-malli **nostaa esiin AI-rikastetun sarakkeesi** (dimensiona tai mittarina).
3. Rakenna **yksi** raportti tai semanttinen malli Fabricissa/Power BI:ssä goldin päälle.
4. Lisää **yksi visuaali**, joka on mahdollinen vain AI-rikastuksen ansiosta (esim. jakauma AI-luokiteltujen kategorioiden yli).
5. Varmista agenttisi kanssa, että taulut, raekoko, mittarit ja raportin tarkoitus ovat selkeitä.

## Keskeiset päätökset

- **Raekoko:** mitä yksi gold-rivi edustaa? (Per kategoria? Per päivä? Per entiteetti?)
- **Esiin nostettava rikastus:** mikä AI-johdettu kenttä kertoo parhaan tarinan?
- **Malli vs. raportti:** nopea raportti riittää; semanttinen malli on lisähaaste.

## Tuotokset

- `gold`-taulu/näkymä.
- Selkeä gold-mallin tarkoitus: taulut, raekoko, mittarit ja raportin käyttötapa ovat ymmärrettäviä.
- Yksi raportti, jossa on AI-rikastetun sarakkeen ohjaama visuaali.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Kuratoitu | Gold on järkevässä analyyttisessä raekoossa | Skeema + muistiinpano |
| Ympyrä suljettu | Visuaali käyttää AI-johdettua saraketta | Raporttivisuaali |
| Ymmärrettävä | Mallin + raportin tarkoitus on selkeä | Muistiinpano |

## Vinkit

<details>
<summary>Yksi erinomainen visuaali voittaa dashboardin</summary>

Et tarvitse viimeisteltyä dashboardia. Yksi kaavio — *"määrä AI-luokitellun kategorian mukaan"* — joka selvästi riippuu H3:n rikastuksesta, tekee koko medallion-tarinasta ymmärrettävän.

</details>

<details>
<summary>Rakenna gold kysymystä, älä dataa varten</summary>

Muotoile gold **liiketoimintakysymyksen** ympärille, johon demosi vastaa. Aggregoi täsmälleen siihen raekokoon; älä kaada mukaan silver-sarakkeita, joita raportti ei käytä.

</details>

## Huomioi nämä

- Älä nosta esiin visuaalia, jonka mikä tahansa ei-AI-sarake voisi tuottaa — näytä rikastuksen arvo.
- Älä ylimallinna; tavoitteena on yksi raportti puhtaan gold-taulun päällä.
- Älä unohda mallin tarkoitusta — sen avulla tuomarit ymmärtävät ratkaisusi lukematta notebookia.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | `silver`-taulu (H3) |
| **Sinun tuotoksesi** | Kuratoitu `gold`-taulu/näkymä ja rikastusta hyödyntävä raportti |
| **Seuraava vaihe** | H5 ajastaa bronze→silver→gold-putken |

## Seuraava vaihe

Medallion on valmis päästä päähän. Jos aikaa jää, **H5** operationalisoi sen; muuten siirry **H6**:een valmistelemaan demo.
