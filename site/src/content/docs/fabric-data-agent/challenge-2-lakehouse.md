---
title: "H2: Lakehouse-perusta"
description: Luo lakehouse, lataa analyyttinen data ja varmista taulujen analytiikkavalmius.
sidebar:
  order: 4
  label: "H2: Lakehouse"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../challenge-1-readiness/
  label: "H1: Valmius"
next:
  link: ../challenge-3-semantic-model/
  label: "H3: Semanttinen malli"
---

:::note[Haasteen tiedot]
⏱️ **35 min** · 🧩 **Ydin** · 🤖 agentti: datan latauksen selittäjä
:::

## Tavoite

- **Tee nyt:** Lataa oma tai varavaihtoehtona käytettävä analyyttinen data Fabric lakehouseen.
- **Lähtötiedot:** Läpäisty valmiusportti ja valitsemasi datajoukko.
- **Tulos:** Analytiikkavalmis lakehouse, jonka taulut, kerrokset, rivimäärät ja keskeiset sarakkeet tunnetaan.
- **Vaaditaan etenemiseen:** Vähintään yksi siisti silver-taulu, mieluiten faktataulu ja dimensioita.
- **Päätökset nyt:** Taulujen nimet, bronze/silver-jako ja sarakkeet, joista liiketoimintakäyttäjät kysyvät.
- **Seuraavaksi:** H3 rakentaa Direct Lake -semanttisen mallin näiden taulujen päälle.

## Liiketoimintahaaste

Data-agentti on vain niin hyvä kuin taulut, joiden perusteella se voi päätellä. Raakatiedostot, joissa on epämääräisiä sarakkeita, tuottavat
epämääräisiä vastauksia. Tehtäväsi on luoda pieni ja selkeä lakehouse-perusta: säilytä raakadata
bronze-kerroksessa, muotoile hyödylliset analyyttiset taulut silver-kerrokseen ja varmista, että tiedät mitä on olemassa.

## Tehtäväsi

1. Luo **Lakehouse** varmistettuun työtilaan tai avaa H1:ssä käytetty lakehouse.
2. Lataa oma data tai suomalainen avoin varadatajoukko, kuten Tilastokeskus (stat.fi), Avoindata.suomi.fi tai Fabricin NYC Taxi -esimerkki.
3. Säilytä raa'at tuodut tiedostot/taulut **bronze**-kerroksessa mahdollisimman vähin muutoksin.
4. Luo kevyt **silver**-kerros: siisti nimet, korjaa tyypit, poista selvä roska ja julkaise taulut.
5. Tee nopeat rivimäärätarkistukset jokaiselle taululle, jota aiot käyttää.
6. Kirjaa taulujen nimet, rivimäärät, rakeisuus ja keskeiset sarakkeet talteen jatkovaiheita varten.

## Keskeiset päätökset

- Mikä taulu on **fakta**taulu ja mikä on sen rakeisuus?
- Mitkä hakutaulut muuttuvat **dimensioiksi**?
- Mitkä sarakkeet kannattaa nimetä uudelleen ennen kuin agentti näkee ne?
- Mikä datan laatuongelma on hyväksyttävä demossa ja mikä täytyy korjata nyt?

## Tuotokset

- Analytiikkavalmis lakehouse, jossa valittujen taulujen nimet, rivimäärät, rakeisuus ja avainsarakkeet ovat selvillä.
- Lyhyt muistiinpano valitusta datajoukosta ja 3–5 liiketoimintakysymyksestä, joihin sen pitäisi vastata.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Data ladattu | Lähdedata on olemassa lakehouse-tauluina | Taulut näkyvät Lakehouse explorerissa |
| Analyyttinen muoto | Silver-tauluilla on selkeät nimet, tyypit ja rakeisuus | Rakeisuus ja avaimet on kirjattu |
| Valmis mallille | Rivimäärät on tallennettu ja ne ovat uskottavia | Rivimäärämuistiinpano |

## Vinkit

<details>
<summary>Anna agentin selittää latauspolku</summary>

Kysy: *"Given these CSVs and target questions, propose bronze and silver lakehouse tables, then
outline the key table facts."* Pidä suunnitelma, mutta varmista taulujen nimet ja määrät itse.

</details>

<details>
<summary>Suosi yksinkertaisia, kuvaavia nimiä</summary>

`silver_trip_fact`, `dim_date` ja `dim_zone` voittavat nimet `Table1`, `final_final` tai kryptiset lähde-
koodit. Luonnollisen kielen järjestelmät hyötyvät yksinkertaisista ja kuvaavista skeemoista.

</details>

## Huomioi nämä

- Fabric data agent kyselee **tauluja**, ei erillisiä tiedostoja. Julkaise CSV/JSON-data tauluina.
- Älä käytä koko aikaa mallintamiseen. Yksi siisti faktataulu ja kaksi dimensiota riittää.
- Älä lataa arkaluonteista dataa. Demon pitää olla jaettavissa.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Läpäisty valmiusportti + valittu datajoukko |
| **Sinun tuotoksesi** | Analytiikkavalmis lakehouse |
| **Seuraava vaihe** | H3 valitsee lakehouse-taulut ja rakentaa semanttisen mallin |

## Seuraava vaihe

Lakehousessasi on analyyttiset taulut. **H3**:ssa lisäät suhteet ja mittarit semanttiseen
malliin, jotta agentti voi vastata liiketoimintakysymyksiin eikä vain laskea rivejä.