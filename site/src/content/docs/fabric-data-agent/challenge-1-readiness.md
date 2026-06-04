---
title: "H1: Valmiuden varmistus"
description: Varmista kapasiteetti, työtila, lakehouse, semanttisen mallin käyttöoikeus ja Fabric data agentin näkyvyys ennen rakentamista.
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
  link: ../challenge-2-lakehouse/
  label: "H2: Lakehouse-perusta"
---

:::note[Haasteen tiedot]
⏱️ **20 min** · 🧩 **Ydin (portti)** · 🤖 agentti: ympäristön tarkistaja
:::

:::caution[Huomioi]
Maksullinen kapasiteetti ja tenant-asetukset ovat tämän polun edellytys. Jos jokin kohta ei täyty eikä sinulla ole
ylläpito-oikeuksia, siirry kollegan F2+-työtilaan tai toiselle polulle.
:::

## Tavoite

- **Tee nyt:** Varmista, että ympäristö voi oikeasti luoda ja käyttää Fabric data agentia.
- **Lähtötiedot:** Valmis ympäristö (F2+-kapasiteetti, tenant-asetukset, työtila, tili).
- **Vaaditaan etenemiseen:** Käynnissä oleva kapasiteetti, lakehousen luonti toimii ja data-agenttikohde on saatavilla.
- **Päätökset nyt:** Työtila, kapasiteetti, datajoukon polku ja semanttisen mallin käyttöoikeuksien omistaja.
- **Seuraavaksi:** H2 vie analyyttisen datan varmistettuun lakehouseen.

## Liiketoimintahaaste

Nopein tapa pilata Fabric-hackathon on huomata klo 11.00, ettei ominaisuus, jonka varaan rakensit,
ole käytössä. Tämä haaste nostaa riskin alkuun: varmista kapasiteetti, työtila,
käyttöoikeudet ja data-agenttikohde ennen kuin kosket dataan.

## Tehtäväsi

1. Varmista Fabricin / kapasiteettiasetusten kautta, että **kapasiteettisi on F2+ ja Running**.
2. Avaa **kohdetyötila** ja varmista, että se on liitetty kyseiseen maksulliseen kapasiteettiin.
3. Luo tai avaa **Lakehouse** ja varmista, että voit lisätä yksinkertaisen taulun tai esimerkkikohteen.
4. Varmista, että voit luoda **Power BI:n semanttisen mallin** tai käyttää sellaista ja että sinulla on Read-käyttöoikeus.
5. Hae kohdassa **+ New item** nimellä **Fabric data agent** ja varmista, että se näkyy ja on valittavissa.
6. Kirjaa jokainen tarkistus talteen, mukaan lukien kuvakaappaukset tai lyhyet näyttömuistiinpanot.

## Keskeiset päätökset

- **Työtila:** oma F2+-työtila vai tiimikaverin/fasilitaattorin työtila?
- **Käyttöoikeudet:** kuka voi myöntää Read-käyttöoikeuden semanttiseen malliin ja lähde-lakehouseen?
- **Datapolku:** oma datajoukko vai varaesimerkki?
- **Laajuus:** vain yksi liiketoiminta-alue vai pieni monen taulun malli?

## Tuotokset

- Varmistettu valmiustila, jossa jokaiselle kohdalle on pass/fail ja mahdollisille esteille nimetyt omistajat.
- Näyttö siitä, että data-agenttikohde on saatavilla työtilassa.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Kapasiteetti valmis | F2+ Running ja työtila liitetty | Kapasiteetin/työtilan kuvakaappaus tai muistiinpano |
| Fabric-kohteet toimivat | Lakehouse ja semanttisen mallin käyttöoikeus varmistettu | Kohteiden nimet kirjattu |
| Data-agentin portti auki | Fabric data agent voidaan luoda | Kohde näkyy, ei harmaana |

## Vinkit

<details>
<summary>Pidä tämä porttina, älä projektina</summary>

Jos kaikki on kunnossa 10 minuutissa, jatka eteenpäin. Tarkoitus on poistaa alustariski, ei
tuottaa kaunista valmiusraporttia.

</details>

<details>
<summary>Pyydä agenttiasi kirjoittamaan tarkistuslista</summary>

Pyydä koodausagenttia luomaan pieni Markdown-tarkistuslista yllä olevista tehtävistä ja täytä se
samalla, kun varmistat jokaisen kohdan. Se on nopeampaa kuin proosan kirjoittaminen tyhjästä.

</details>

## Huomioi nämä

- Älä sekoita Fabric **Trial** -työtilaa maksulliseen F2+-työtilaan.
- Älä oleta, että Build-käyttöoikeus vaaditaan data-agentin Q&A:han semanttisen mallin yli; Read on keskeinen tarkistus.
- Älä ohita data-agentin näkyvyystarkistusta — se paljastaa tenant-asetusongelmat aikaisin.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Valmis ympäristö |
| **Sinun tuotoksesi** | Varmistettu ja läpäisty valmiusportti |
| **Seuraava vaihe** | H2 luo lakehouse-taulut varmistettuun työtilaan |

## Seuraava vaihe

Ympäristö varmistettu. **H2**:ssa viet datasi lakehouseen ja teet siitä analytiikkavalmista.