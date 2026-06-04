---
title: "H3: Semanttinen malli"
description: Rakenna Direct Lake Power BI -semanttinen malli lakehousen päälle ja dokumentoi suhteet ja mittarit.
sidebar:
  order: 5
  label: "H3: Semanttinen malli"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../challenge-2-lakehouse/
  label: "H2: Lakehouse"
next:
  link: ../challenge-4-data-agent/
  label: "H4: Data-agentti"
---

:::note[Haasteen tiedot]
⏱️ **35 min** · 🧩 **Ydin** · 🤖 agentti: mittari/DAX-avustaja
:::

## Tavoite

- **Tee nyt:** Luo Power BI:n semanttinen malli lakehouse-taulujen päälle.
- **Lähtötiedot:** Analytiikkavalmis lakehouse ja silver-taulut.
- **Tulos:** Toimiva semanttinen malli, jossa taulut, suhteet, mittarit ja oletukset on määritetty.
- **Vaaditaan etenemiseen:** Semanttisen mallin kyselyt toimivat ja käytössä on vähintään kolme hyödyllistä mittaria.
- **Päätökset nyt:** Suhteiden kardinaliteetti, mittarien määritelmät, synonyymit ja liiketoimintatermit.
- **Seuraavaksi:** H4 liittää semanttisen mallin ja lakehousen Fabric data agentiin.

## Liiketoimintahaaste

Liiketoimintakäyttäjät kysyvät liikevaihdosta, matkoista, katteesta, vaihtelusta tai käyttöasteesta — eivät raakasarakkeiden summista.
Semanttinen malli on paikka, jossa koodaat nämä määritelmät. Hyvin tehtynä data-agentti voi vastata
DAX:lla kuratoitujen mittarien perusteella sen sijaan, että se arvailee raakadataa.

## Tehtäväsi

1. Luo **Power BI:n semanttinen malli** lakehousen / SQL analytics endpoint -tauluista.
2. Käytä **Direct Lake** -tilaa, kun se on saatavilla, jotta malli lukee Delta-tauluja OneLakesta ilman datan tuontia.
3. Lisää suhteet fakta- ja dimensiotaulujen välille; varmista, että one-puolen avaimet ovat yksilöllisiä.
4. Määritä muutama mittari, kuten summat, määrät, keskiarvot tai suhdeluvut, jotka sopivat alueeseesi.
5. Savutesta mittarit mallieditorilla tai DAX-kyselykokemuksella.
6. Kirjaa mallin taulut, suhteet, mittarit ja tunnetut rajoitukset talteen.

## Keskeiset päätökset

- Mitkä mittarit ovat **virallisia liiketoimintamääritelmiä** eivätkä nopeaa demomatematiikkaa?
- Mitkä sarakkeet pitäisi piilottaa loppukäyttäjiltä tai jättää pois agentin ankkuroinnista?
- Tarvitsetko päivämäärätaulun vai riittääkö yksinkertainen päivämääräsarake hackathoniin?
- Mitkä kysymykset pitäisi ohjata semanttiseen malliin raa'an lakehouse-SQL:n sijaan?

## Tuotokset

- Toimiva semanttinen malli, jossa taulut, suhteet, mittarit, synonyymit ja testikyselyt on määritetty.
- Näyttö siitä, että jokainen mittari palauttaa uskottavan tuloksen.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Malli yhdistetty | Semanttinen malli käyttää lakehouse-tauluja | Mallikohde on olemassa työtilassa |
| Liiketoimintalogiikka | 3+ mittaria ja suhteet määritetty | Mittariluettelo |
| Kyseltävissä | Mittarit palauttavat uskottavia arvoja | Kuvakaappaus tai kopioitu DAX-tulos |

## Vinkit

<details>
<summary>Pyydä DAX:ia, mutta omista määritelmä</summary>

Anna agentin luonnostella mittarit ja tarkista ne sitten liiketoimintakysymystä vasten. Syntaktisesti
kelvollinen mittari voi silti koodata väärän määritelmän.

</details>

<details>
<summary>Direct Lake ei ole taikuutta</summary>

Direct Lake on nopea, koska se lukee Delta-tauluja OneLakesta, mutta se riippuu silti siisteistä
Delta-tauluista, yhteensopivista suhteiden tietotyypeistä ja one-puolen yksilöllisistä avaimista.

</details>

## Huomioi nämä

- Oletusarvoisia semanttisia malleja ei välttämättä enää luoda automaattisesti uusissa Fabric-kokemuksissa; luo malli tarvittaessa.
- Suhdesarakkeilla täytyy olla yhteensopivat tietotyypit.
- Power BI:n semanttisen mallin tietolähteet eivät tällä hetkellä tue esimerkkikysely-/kysymysparien käyttöä data-agentin määrityksissä; käytä sen sijaan mittareita ja ohjeita.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Analytiikkavalmis lakehouse |
| **Sinun tuotoksesi** | Toimiva semanttinen malli |
| **Seuraava vaihe** | H4 liittää semanttisen mallin ja käyttää mittareitasi ankkurointiohjeissa |

## Seuraava vaihe

Semanttinen kerroksesi on valmis. **H4**:ssa luot Fabric data agentin ja opetat sen käyttämään
sekä mallia että lakehousea.