---
title: "H5: Ankkurointi + arviointi"
description: Tiukenna data-agentin ankkurointia ja rakenna pieni arviointijoukko keskeisille kysymyksille.
sidebar:
  order: 7
  label: "H5: Ankkurointi + arviointi"
  badge:
    text: 25 min
    variant: note
prev:
  link: ../challenge-4-data-agent/
  label: "H4: Data-agentti"
next:
  link: ../challenge-6-demo/
  label: "H6: Demon valmistelu"
---

:::note[Haasteen tiedot]
⏱️ **25 min** · 🧩 **Valinnainen** · 🤖 agentti: arvioinnin suunnittelija
:::

## Tavoite

- **Tee nyt:** Vahvista ankkurointia ja luo pieni arviointijoukko tärkeimmille kysymyksillesi.
- **Lähtötiedot:** Toimiva Fabric data agent ja H4:n testatut kysymykset.
- **Tulos:** Pieni ankkuroitu arviointijoukko, jossa kysymys, odotettu vastauksen muoto, lähde, tulos ja pass/fail ovat selvillä.
- **Vaaditaan etenemiseen:** Valinnainen; ohita turvallisesti, jos H4 ei ole vielä vakaa.
- **Päätökset nyt:** Mitkä kysymykset ovat tärkeitä, mitä synonyymejä tuetaan ja mitä tauluja rajoitetaan.
- **Seuraavaksi:** H6 muuttaa parhaan läpäisevän kysymyksen demotarinaksi.

## Liiketoimintahaaste

Näyttävä agentti, joka on kerran oikeassa, ei riitä. Tarvitset näyttöä siitä, että se vastaa tärkeisiin
kysymyksiin johdonmukaisesti, kieltäytyy rajauksen ulkopuolisista pyynnöistä ja käyttää tarkoitettua lähdettä. Tämä haaste
muuttaa ad hoc -testauksen pieneksi, toistettavaksi arvioinniksi.

## Tehtäväsi

1. Käy läpi H4:n epäonnistumiset tai heikot vastaukset ja tunnista todennäköinen syy: puuttuva mittari, epämääräinen termi, väärä lähde tai liian laaja taulujen rajaus.
2. Tiukenna **data-agentin ohjeita** sanastotermeillä, lähdereitityssäännöillä ja vastausrajoitteilla.
3. Rajoita käytettävissä olevia lakehouse-tauluja, jos agentti valitsee jatkuvasti meluisaa tai raakaa dataa.
4. Luo 5–8 arviointikysymystä, joissa on odotettu vastauksen muoto, hyväksytty toleranssi ja tarkoitettu lähde.
5. Aja jokainen kysymys mahdollisuuksien mukaan tuoreessa keskustelussa ja kirjaa pass/fail talteen.
6. Säilytä mukana yksi tunnettu rajoitus; siitä tulee osa demon rehellistä hetkeä.

## Keskeiset päätökset

- Mitkä kysymykset ovat **pakko läpäistä**, jotta demo on uskottava?
- Mikä lasketaan läpäisyksi: tarkka luku, sama järjestys vai oikea trendi?
- Mitkä synonyymit pitäisi yhdistää virallisiin mittareihin?
- Mistä kysymyksestä agentin pitäisi kohteliaasti kieltäytyä?

## Tuotokset

- Pieni ankkuroitu arviointijoukko, jossa tärkeimmille kysymyksille on odotettu muoto, lähde, tulos ja pass/fail.
- Päivitetyt ohjeet tai taulujen rajaus Fabric data agentissa, jos tarpeen.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Ankkurointi tiukempi | Ohjeet määrittelevät termit, rajauksen ja lähdereitityksen | Päivitetyt määritysmuistiinpanot |
| Arviointi olemassa | 5–8 keskeisellä kysymyksellä on odotetut tulokset | Arviointijoukko |
| Laatu tiedossa | Pass/fail ja yksi rajoitus kirjattu | Arviointitulostaulu |

## Vinkit

<details>
<summary>Aloita liiketoimintakysymyksistä, älä reunatapauksista</summary>

Käytä 3–5 kysymystä, jotka tiimisi oikeasti haluaa demoon, ja lisää sitten yksi synonyymikysymys ja yksi
rajauksen ulkopuolinen kysymys. Se riittää signaaliksi hackathonissa.

</details>

<details>
<summary>Tee odotetuista vastauksista joustavat</summary>

Vältä elävässä datassa haurasta täsmätekstiä. Käytä vastauksen muotoa: *"returns the same top 3 categories in
order"* tai *"total is within 1% of the DAX measure"*.

</details>

## Huomioi nämä

- Älä aja kysymyksiä jatkuvasti samassa pitkässä keskustelussa, jos aiempi konteksti vinouttaa vastausta; aloita tuoreesti.
- Älä piilota epäonnistumisia. Tunnettu rajoitus ja seuraava vaihe ovat parempia kuin yllättävä epäonnistuminen.
- Älä ylisovita ohjeita yhteen sanamuotoon; sisällytä synonyymejä, joita käyttäjät oikeasti käyttävät.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Toimiva Fabric data agent |
| **Sinun tuotoksesi** | Ankkuroitu arviointijoukko |
| **Seuraava vaihe** | H6 valitsee vahvimman läpäisevän kysymyksen ja yhden rehellisen rajoituksen |

## Seuraava vaihe

Agentillasi on näyttöä, ei vain tuntumaa. **H6**:ssa paketoit wow-hetken lyhyeksi ja ytimekkääksi demoksi.