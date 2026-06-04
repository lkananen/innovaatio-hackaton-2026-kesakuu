---
title: "H5: Operationalisointi"
description: Kytke bronze→silver→gold Fabric-putkeen ja suorita se kerran päästä päähän.
sidebar:
  order: 7
  label: "H5: Operationalisointi"
  badge:
    text: 25 min
    variant: tip
prev:
  link: ../challenge-4-gold/
  label: "H4: Gold + raportti"
next:
  link: ../challenge-6-demo/
  label: "H6: Demon valmistelu"
---

:::note[Haasteen tiedot]
⏱️ **25 min** · 🧩 **Valinnainen** · 🤖 agentti: pipeline-tekijä
:::

:::tip[Turvallinen ohittaa]
Aloita tämä vain, jos **H4 on valmis**. Tavoitteena on **orkestroida kerrokset yhdeksi putkeksi ja suorittaa se kerran** — ei odottaa ajastettua ajoa tapahtuman aikana.
:::

## Tavoite

- **Tee nyt:** Orkestroi medallion yhdeksi toistettavaksi putkeksi.
- **Lähtötiedot:** Toimivat bronze→silver→gold-notebookit (H2–H4).
- **Tulos:** Fabric **Data Pipeline**, joka suorittaa yhden onnistuneen päästä päähän -ajon.
- **Vaaditaan etenemiseen:** Yksi onnistunut päästä päähän -ajo, joka rakentaa goldin uudelleen bronzesta.
- **Päätökset nyt:** Orkestrointijärjestys, parametrit, mitä ajastetaan.
- **Seuraavaksi:** H6 muuttaa tämän "alusta, ei notebook" -demopisteeksi.

## Liiketoimintahaaste

Kolme käsin ajettavaa notebookia ei ole putki. Niiden ketjuttaminen **Fabric Data Pipeline** -putkeksi (valinnaisella ajastuksella) on DataOps-tarina: yksi orkestroitu, havainnoitava ja toistettava päivitys raakadatasta raporttiin.

## Tehtäväsi

1. Luo **Fabric Data Pipeline**, joka suorittaa bronze → silver → gold **järjestyksessä**.
2. Parametrisoi siellä, missä siitä on hyötyä (esim. riviraja AI-rikastusvaiheelle).
3. **Suorita se kerran** päästä päähän. Varmista, että gold rakentuu uudelleen ja raportti näyttää uuden datan.
4. Lisää halutessasi **ajastus**. Varmista, että ajon tunnus, kesto ja vaihekohtainen tila ovat nähtävissä onnistuneesta ajosta.

## Keskeiset päätökset

- **Rakeisuus:** yksi putki vaiheilla vai erilliset putket per kerros?
- **Virheenkäsittely:** pysäyttääkö silverin epäonnistuminen goldin vai jatketaanko viimeisellä toimivalla versiolla?
- **Kustannus:** AI-vaihe hallitsee kustannusta — pidä rikastuksen riviraja myös ajastetuissa ajoissa.

## Tuotokset

- Fabric Data Pipeline, joka ketjuttaa kolme kerrosta.
- Yksi onnistunut päästä päähän -ajo, jonka tunnus, kesto ja vaihekohtainen tila ovat nähtävissä.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Orkestroitu | Yksi putki suorittaa kaikki kolme kerrosta järjestyksessä | Putkikaavio |
| Todistettu | Yksi ajo rakentaa goldin onnistuneesti uudelleen | Ajon näyttö |
| Havainnoitava | Vaihekohtainen tila näkyy | Ajohistorian näyttökuva |

## Vinkit

<details>
<summary>Suorita pyynnöstä; käytä ajastusta näyttönä</summary>

Käynnistä putki manuaalisesti, jotta voit todistaa sen paikan päällä. Ajastus näyttää aikomuksen, mutta **manuaalinen ajo** on todisteesi — älä odota cron-ajoa.

</details>

<details>
<summary>Pidä AI-vaihe rajattuna automaatiossa</summary>

Ajastettu putki, joka rikastaa koko datajoukon joka yö uudelleen, käy nopeasti kalliiksi. Pidä H3:n riviraja parametrisoituna ja maltillisena automatisoidussa polussa.

</details>

## Huomioi nämä

- Älä anna putken rikastaa kaikkea jokaisella ajolla, jos datasi on suurta — kustannukset kasvavat nopeasti.
- Älä luota siihen, että ajastus käynnistyy tapahtuman aikana; suorita käsin.
- Älä ohita näyttöä — ajon tunnus ja vaihekohtainen tila todistavat toimivuuden.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | bronze→silver→gold-notebookit (H2–H4) |
| **Sinun tuotoksesi** | Toimiva Data Pipeline ja onnistunut päästä päähän -ajo |
| **Seuraava vaihe** | H6 käyttää orkestroitua ajoa operatiivisena todisteena |

## Seuraava vaihe

Medallion toimii yhtenä putkena. **H6** paketoi tarinan napakaksi demoksi.
