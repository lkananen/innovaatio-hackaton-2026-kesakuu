---
title: "H1: Valmiuden varmistus"
description: Varmista Fabric-kapasiteetti, workspace, lakehouse ja AI Functions -näkyvyys ennen rakentamista.
sidebar:
  order: 3
  label: "H1: Valmius"
  badge:
    text: 20 min
    variant: note
prev:
  link: ../setup/
  label: Valmistelu ja valmiustarkistus
next:
  link: ../challenge-2-bronze/
  label: "H2: Bronze-tuonti"
---

:::note[Haasteen tiedot]
⏱️ **20 min** · 🧩 **Ydin (portti)** · 🤖 agentti: ympäristön tarkistaja
:::

:::caution[Huomioi]
Maksullinen kapasiteetti on tämän polun edellytys. Jos jokin kohta ei täyty eikä sinulla ole kapasiteetin ylläpitäjän oikeuksia, siirry kollegan F2+-workspaceen tai suunnittele **PySpark fallback** H3:ssa.
:::

## Tavoite

- **Tee nyt:** Varmista, että ympäristö pystyy oikeasti käyttämään AI Functions -toimintoja.
- **Lähtötiedot:** Valmis ympäristö (F2+-kapasiteetti, tenant-kytkimet, työtila).
- **Vaaditaan etenemiseen:** Notebook suorittaa AI Function -kutsun (tai olet sitoutunut fallbackiin).
- **Päätökset nyt:** AI Functions -polku vai PySpark fallback -polku.
- **Seuraavaksi:** H2 tuo raakadatasi bronze-kerrokseen.

## Liiketoimintahaaste

Alustahackathonin kallein epäonnistuminen on huomata klo 11.00, ettei keskeinen ominaisuus ole käytössä. Tämä haaste **ottaa riskin etupainotteisesti haltuun**: varmista kaikki ja valitse polkusi **ennen** rakentamista.

## Tehtäväsi

1. Varmista, että **kapasiteettisi on F2+ ja Running** (Fabric-ylläpito / kapasiteettiasetukset).
2. Avaa **workspace** ja varmista, että se on **liitetty kyseiseen kapasiteettiin**.
3. Luo (tai avaa) **lakehouse** ja suorita notebookissa yksinkertainen **PySpark**-solu.
4. Suorita **yhden rivin AI Function -savukoe** (esim. `ai.classify` kiinteälle merkkijonolle).
5. Varmista tulosten perusteella valittu polku. Jos AI-savukoe epäonnistuu, **valitse fallback-polku** ja jatka — polku valmistuu silti PySpark-säännöillä H3:ssa.

## Keskeiset päätökset

- **Polku:** AI Functions (suositus) vai PySpark-sääntöpohjainen fallback?
- **Workspace:** oma kapasiteetti vai tiimikaverin F2+-workspace?
- **Alue:** tukeeko kapasiteettisi alue tarvitsemaasi AI-ominaisuutta?

## Tuotokset

- Todennettu ympäristövalmius ja selkeä päätös AI Functions -polusta tai fallbackista.
- Näyttö onnistuneesta PySpark-solusta (ja AI Function -kutsusta, jos käytettävissä).

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Kapasiteetti valmis | F2+ Running, workspace liitetty | Kapasiteetin/workspacen näyttökuva |
| Compute toimii | PySpark-solu suoritetaan notebookissa | Solun tuloste |
| AI-polku päätetty | AI Function toimii **tai** fallback valittu | Savukokeen tulos |

## Vinkit

<details>
<summary>Testaa AI Functions ensin kiinteällä merkkijonolla</summary>

Ennen kuin kosket dataasi, kutsu AI Function -toimintoa kovakoodatulla merkkijonolla (esim. luokittele `"the train was late again"`). Jos se toimii, ominaisuus on käytössä; jos ei, kyse on ympäristöongelmasta eikä dataongelmasta — siirry fallback-polulle hallitusti.

</details>

<details>
<summary>Valmis ja eteenpäin</summary>

Tavoitteena on **nopea** portti. Jos kaikki on kunnossa 10 minuutissa, siirry H2:een etuajassa. Älä jää hiomaan valmiuden kirjaamista liikaa.

</details>

## Huomioi nämä

- Älä yritä korjata kapasiteetin varausta nyt — se kuuluu etukäteisvalmisteluun; siirry mieluummin fallbackiin.
- Älä oleta, että tiimikaverin onnistuminen tarkoittaa oman tenantisi olevan käytössä — varmista omasi.
- Älä ohita PySpark-solua — jos compute on rikki, AI Functions ei auta.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Valmis ympäristö |
| **Sinun tuotoksesi** | Varmistettu ympäristö ja valittu toteutuspolku |
| **Seuraava vaihe** | H2 tuo dataa varmistettuun lakehouseen |

## Seuraava vaihe

Ympäristö varmistettu. **H2** tuo raakadatasi **bronze**-kerrokseen.
