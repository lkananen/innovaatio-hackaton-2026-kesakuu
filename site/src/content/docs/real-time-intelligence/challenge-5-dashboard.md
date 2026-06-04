---
title: "H5: Real-Time Dashboard -koontinäyttö"
description: Rakenna Real-Time Dashboard, jossa on automaattisesti päivittyviä ruutuja varmistetuista KQL-kyselyistäsi.
sidebar:
  order: 7
  label: "H5: Koontinäyttö (dashboard)"
  badge:
    text: 25 min
    variant: tip
prev:
  link: ../challenge-4-activator/
  label: "H4: Activator"
next:
  link: ../challenge-6-demo/
  label: "H6: Demon valmistelu"
---

:::note[Haasteen tiedot]
⏱️ **25 min** · 🧩 **Valinnainen** · 🤖 agentti: koontinäytön (dashboard) suunnittelija
:::

:::tip[Turvallista ohittaa]
Aloita tämä vain, jos **H4 on valmis**. Ydindemo on jo valmis. Tämä haaste tekee siitä
visuaalisemman, ei pätevämpää.
:::

## Tavoite

- **Tee nyt:** Muuta KQL-kyselysi Real-Time Dashboardiksi.
- **Lähtötiedot:** Toimivat KQL-kyselyt ja Activator-hälytyksen signaali.
- **Tulos:** Reaaliaikainen koontinäyttö, jonka ruudut, kyselyt ja päivityskäyttäytyminen toimivat yhdessä.
- **Vaaditaan etenemiseen:** Vähintään kaksi koontinäytön (dashboard) ruutua latautuu KQL Database -kohteestasi.
- **Päätökset nyt:** Mitkä ruudut kertovat tarinan nopeimmin demossa?
- **Seuraavaksi:** H6 paketoi live-koontinäytön ja hälytyksen lyhyeksi tarinaksi.

## Liiketoimintahaaste

Hälytykset ovat toimintaa varten; koontinäytöt (dashboard) ovat yhteistä tilannekuvaa varten. Hyvä Real-Time
Dashboard antaa sidosryhmien nähdä live-järjestelmän tilan avaamatta KQL-editoria.

## Tehtäväsi

1. Luo **Real-Time Dashboard**, joka on yhdistetty KQL Database -kohteeseesi.
2. Lisää pääruutu samalle metriikalle tai ehdolle, jota Activator käyttää.
3. Lisää uusimman tilan ruutu: tärkeimmät objektit, nykyiset tilat tai uusimmat tapahtumat.
4. Lisää aikasarjaruutu H3:n `bin()`-kyselystä.
5. Aseta tapahtumatahtiin ja tapahtumapäivän kapasiteettiin sopiva automaattinen päivitysväli.
6. Varmista, että ruutujen nimet, taustalla olevat kyselyt, visualisointityypit ja päivitysmuistiinpanot ovat selvästi saatavilla.

## Keskeiset päätökset

- **Yleisö:** operaattorinäkymä, johdon näkymä vai tekninen diagnostiikka?
- **Ruutujen määrä:** mikä on pienin koontinäyttö (dashboard), joka kertoo tarinan?
- **Päivitys:** kuinka usein visualisointien pitäisi päivittyä tuhlaamatta kapasiteettia?
- **Hälytyksen linjaus:** vastaako pääruutu Activator-sääntöä?

## Tuotokset

- Reaaliaikainen koontinäyttö, jonka osalta on selvillä:
  - koontinäytön (dashboard) nimi ja linkitetty KQL Database -kohde;
  - ruutuluettelo kyselynimineen ja visualisointityyppeineen;
  - automaattisen päivityksen asetus;
  - näyttökuva tai lyhyt kuvaus lopullisesta asettelusta;
  - mahdolliset ruudut, jotka ohitettiin, koska ne eivät olleet demon kannalta kriittisiä.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Koontinäyttö on olemassa | Real-Time Dashboard avautuu ja latautuu | Koontinäytön linkki tai näyttökuva |
| Ruudut ovat live-tilassa | Vähintään kaksi ruutua kyselee KQL-dataa | Päivittyvät ruututulokset |
| Määritys selvä | Kyselyjen ja ruutujen vastaavuus on ymmärrettävä | Muistiinpano tai ruutujen asetukset |

## Vinkit

<details>
<summary>Suunnittele lyhyttä demoa varten</summary>

Käytä yhtä KPI-/card-ruutua, yhtä trendiä ja yhtä uusimman tilan taulua. Useampi ruutu tekee tarinasta yleensä
vaikeamman, ei paremman.

</details>

<details>
<summary>Vie KQL:stä, kun se on mahdollista</summary>

Real-Time Dashboard voi käyttää KQL-kyselyjä visualisointeina. Aloita kyselyistä, jotka jo toimivat, ja
säädä muotoilua koontinäytössä sen sijaan, että kirjoittaisit logiikan alusta.

</details>

## Huomioi nämä

- Älä aseta aggressiivista päivitysväliä vain näyttääksesi live-tilaa; se voi tuhlata kapasiteettia.
- Älä rakenna ruutuja varmistamattomista kyselyistä — tee vianetsintä ensin KQL:ssä.
- Älä anna koontinäytön täydellisyyden estää H6:ta. Yksinkertainen koontinäyttö plus todellinen hälytys voittaa.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Toimivat KQL-kyselyt ja Activator-hälytys |
| **Sinun tuotoksesi** | Reaaliaikainen koontinäyttö |
| **Seuraava vaihe** | H6 käyttää koontinäyttöä demon visuaalisena selkärankana |

## Seuraava vaihe

Tarina näkyy. **H6**:ssa harjoittelet live-hälytyshetken.
