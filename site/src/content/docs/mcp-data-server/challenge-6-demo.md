---
title: "H6: Demon valmistelu"
description: Valmistele ytimekäs tarina, joka näyttää Copilotin kutsuvan työkalujasi ja turvarajojesi estävän vaarallisen käytön.
sidebar:
  order: 8
  label: "H6: Demon valmistelu"
  badge:
    text: 15 min
    variant: note
prev:
  link: ../challenge-5-deploy/
  label: "H5: Käyttöönotto"
next:
  link: ../wrap-up/
  label: Yhteenveto
---

:::note[Haasteen tiedot]
⏱️ **15 min** · 🧩 **Valinnainen** · 🤖 agentti: demovalmentaja
:::

## Tavoite

- **Tee nyt:** Muuta rakentamasi kyvykkyys ytimekkääksi esittelyksi.
- **Lähtötiedot:** H1–H4-kyvykkyydet sekä H5, jos se on valmis.
- **Tulos:** Harjoiteltu demopolku, jossa näkyvät kehote, työkalukutsut, vastaus, turvaraja ja seuraava vaihe.
- **Vaaditaan etenemiseen:** Harjoiteltu onnistumispolku ja harjoiteltu estetty hyökkäys.
- **Päätökset nyt:** Mikä kysymys on wow-hetki ja mikä turvaraja todistaa turvallisuuden.
- **Seuraavaksi:** Yhteenveto ja tiimien esitykset.

Demo on kaksiosainen: **agentti käyttää työkalujasi** ja **serverisi sanoo ei silloin, kun pitää**.

## Liiketoimintahaaste

Hyvä hackathon-demo ei ole ominaisuuskierros. Se on tarina: meillä oli dataa, rakensimme MCP-
rajapinnan, annoimme sen Copilotille, saimme hyödyllisen vastauksen ja todistimme, ettei agentti voi vahingoittaa
tietokantaa. Pidä se lyhyenä ja näyttöön perustuvana.

## Tehtäväsi

1. Valitse yksi oikea liiketoimintakysymys, johon datasi vastaa hyvin.
2. Valmistele tarkka Copilot-kehote, joka käynnistää työkalujen käytön.
3. Ota talteen näkyvät työkalukutsut, SQL ja lopullinen vastaus.
4. Valmistele yksi haitallinen kehote: kirjoitus, poisto tai `DROP`.
5. Ota talteen kieltäytyminen ja selitä, mikä turvaraja laukesi.
6. Harjoittele lyhyt käsikirjoitus, jossa on yksi rajoite ja yksi seuraava vaihe.

## Keskeiset päätökset

- **Wow-hetki:** paras oikea vastaus, ei monimutkaisin kysely.
- **Turvallisuushetki:** estetty tuhoisa kysely selkeällä näytöllä.
- **Laajuus:** paikallinen stdio riittää; käyttöönotettu HTTP on vain bonus.
- **Rehellisyys:** nimeä, mikä ei ole vielä tuotantovalmista.

## Tuotokset

- Harjoiteltu käsikirjoitus, kehotteet, kuvakaappaukset/lokikatkelmat ja luovutuslinkit.
- Ytimekäs ajosuunnitelma: valmistelu, kysymys, vastaus, estetty hyökkäys, seuraava vaihe.
- Yksi rajoite ja yksi uskottava hackathonin jälkeinen parannus.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Selkeä tarina | Yleisö ymmärtää agentti–työkalu-silmukan nopeasti | Demon avaus |
| Työkalun todiste | Copilot kutsuu näkyvästi MCP-työkaluja | Kuvakaappaus/loki |
| Turvallisuuden todiste | Haitallinen kysely hylätään | Turvarajan näyttö |

## Vinkit

<details>
<summary>Ytimekkään käsikirjoituksen muoto</summary>

1. **Aloitus:** tietolähde + miksi MCP.
2. **Hyöty:** Copilot kysyy, työkalut ajetaan, vastaus syntyy.
3. **Turvaraja:** haitallinen kysely estetään.
4. **Lopetus:** rajoite + seuraava vaihe.

</details>

<details>
<summary>Hyviä esimerkkejä rajoitteista</summary>

"Tuemme SELECT-only-kyselyitä, mutta emme vielä semanttisia synonyymejä." "HTTP-käyttöönotto on
määritelty mutta ei valmis." "Tarvitsemme eval-setin ennen kuin useammat tiimit käyttävät tätä."

</details>

## Huomioi nämä

- Älä käytä demoa jokaisen välivaiheen selittämiseen.
- Älä piilota kieltäytymisviestiä — se on turvallisuuden palkinto.
- Älä demoa arkaluonteisella datalla tai näytä salaisuuksia kuvakaappauksissa.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | H1–H4-kyvykkyydet sekä H5, jos valmis |
| **Sinun tuotoksesi** | Harjoiteltu ja näyttöön perustuva demopolku |
| **Seuraava vaihe** | Yhteenveto käyttää demotarinaasi esitysten arvioinnissa |

## Seuraava vaihe

Olet valmis näyttämään silmukan: data → MCP-työkalut → Copilot-vastaus → turvarajan kieltäytyminen.

