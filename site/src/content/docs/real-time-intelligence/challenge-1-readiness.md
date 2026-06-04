---
title: "H1: Valmiuden tarkistus"
description: Varmista maksullinen Fabric-kapasiteetti, työtilan käyttöoikeudet ja Real-Time Intelligence -kohteiden näkyvyys ennen rakentamista.
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
  link: ../challenge-2-eventstream/
  label: "H2: Eventstream"
---

:::note[Haasteen tiedot]
⏱️ **20 min** · 🧩 **Ydin (portti)** · 🤖 agentti: ympäristön tarkistaja
:::

:::caution[Huomioi]
Maksullinen kapasiteetti on tämän polun edellytys. Jos jokin näistä ei täyty eikä sinulla ole
kapasiteetin järjestelmänvalvojan oikeuksia, siirry kollegan maksulliseen F2+-työtilaan.
:::

## Tavoite

- **Tee nyt:** Vahvista, että ympäristö voi ajaa Real-Time Intelligence -polun.
- **Lähtötiedot:** Valmis ympäristö (F2+-kapasiteetti, työtila, käyttöoikeudet, lähdevalinta).
- **Vaaditaan etenemiseen:** Voit luoda tai avata Eventhousen ja Eventstreamin.
- **Päätökset nyt:** Esimerkkisuoratoisto vai oma suoratoisto; ilmoitus vai Fabric-toiminto.
- **Seuraavaksi:** H2 reitittää tapahtumat Eventhouse / KQL Database -kohteeseen.

## Liiketoimintahaaste

Kallein epäonnistuminen suoratoisto-hackathonissa on huomata klo 11.00, että suoratoistoalusta
ei näy tenantissasi. Tämä haaste **siirtää** riskin alkuun: varmista työtila, kirjaa todiste ja valitse lähde ennen rakentamista.

## Tehtäväsi

1. Vahvista, että **kapasiteetti on F2+ ja Running** kapasiteetin/työtilan asetuksissa.
2. Avaa kohde-**työtila** ja varmista, että se on liitetty kyseiseen kapasiteettiin.
3. Varmista, että **Real-Time Intelligence**, **Real-Time hub**, **Eventstream**, **Eventhouse** ja
   **Real-Time Dashboard** -kohteet näkyvät.
4. Luo kokeilu-**Eventhouse** ja **KQL Database**, tai varmista, että tyhjän voi luoda.
5. Luo kokeilu-**Eventstream** ja poista se tai jätä se tyhjäksi H2:ta varten.
6. Kirjaa lähdevalinta, toimintokohde ja mahdolliset esteet muistiin.

## Keskeiset päätökset

- **Lähde:** sisäänrakennettu esimerkkisuoratoisto, oma suoratoisto, CSV-toisto vai Azure Event Hubs?
- **Työtila:** oma kapasiteetti vai tiimikaverin vahvistettu F2+-työtila?
- **Toiminto:** sähköposti, Teams, Power Automate vai Fabric-kohteen laukaisin?
- **Objektiavain:** mitä kenttää Activator käyttää tapahtumien ryhmittelyyn?

## Tuotokset

- Valmiustarkistus: kapasiteetti, työtila, kohteiden luominen, lähde ja toimintopolku.
- Näyttö siitä, että Eventhouse ja Eventstream voidaan luoda työtilassa.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Kapasiteetti valmis | F2+ Running, työtila sidottu | Kapasiteetin/työtilan näyttökuva tai muistiinpano |
| RTI näkyy | Eventstream-, Eventhouse-, koontinäyttö (dashboard)- ja Activator-polut käytettävissä | Kohdevalikko / Real-Time hub -tarkistus |
| Polku valittu | Lähde ja toimintokohde dokumentoitu | Muistiinpano valinnoista |

## Vinkit

<details>
<summary>Käytä kokeilukohdetta, älä lopullista suunnitelmaasi</summary>

Luo mahdollisimman pieni Eventhouse/Eventstream vain todistaaksesi käyttöoikeudet ja tenantin
saatavuuden. H2:ssa rakennat varsinaisen suoratoistopolun.

</details>

<details>
<summary>Pyydä agentiltasi valmiustaulukkoa</summary>

Kehote: *"Turn these Fabric Real-Time Intelligence checks into a pass/fail markdown table with
owner, evidence, and next action columns."* Kokoa tulokset valmiustarkistukseesi.

</details>

## Huomioi nämä

- Älä luota Trialiin, jos tiimisi on sopinut, että tämä polku on vain F2+.
- Älä oleta, että Real-Time hubin näkyvyys tarkoittaa, että voit luoda työtilakohteita — varmista molemmat.
- Älä valitse toimintokohdetta, jonka tenantisi estää (Teams-/kanavakäytännöillä on merkitystä).

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Valmistelu ja valmiustarkistus |
| **Sinun tuotoksesi** | Valmiustarkistus |
| **Seuraava vaihe** | H2 luo suoratoiston ja Eventhousen vahvistettuun työtilaan |

## Seuraava vaihe

Ympäristö vahvistettu. **H2**:ssa teet suoratoistosta todellisen ja osoitat, että rivejä saapuu.
