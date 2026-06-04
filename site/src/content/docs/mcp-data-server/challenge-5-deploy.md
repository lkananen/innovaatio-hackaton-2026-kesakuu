---
title: "H5: Käyttöönotto"
description: Kontita kovennettu MCP server valinnaisesti, aja se HTTP:n välityksellä ja tee käyttöönotto Managed Identityllä.
sidebar:
  order: 7
  label: "H5: Käyttöönotto"
  badge:
    text: 25 min
    variant: note
prev:
  link: ../challenge-4-guardrails/
  label: "H4: Turvarajat"
next:
  link: ../challenge-6-demo/
  label: "H6: Demon valmistelu"
---

:::note[Haasteen tiedot]
⏱️ **25 min** · 🧩 **Valinnainen** · 🤖 agentti: käyttöönottoinsinööri
:::

## Tavoite

- **Tee nyt:** Paketoi kovennettu MCP server tuotantomaisen ajonaikaisen ympäristön muotoon.
- **Lähtötiedot:** H4:n turvarajattu server ja todistetut kontrollit.
- **Tulos:** Operoitava ajonaikainen malli kontin, HTTP-siirtotavan, identiteetin ja palautumisen osalta.
- **Vaaditaan etenemiseen:** Ei mitään — tämä on turvallisesti ohitettavaa valinnaista viimeistelyä.
- **Päätökset nyt:** Vain paikallinen vs. Container Apps, julkinen vs. yksityinen päätepiste, lokitus.
- **Seuraavaksi:** H6 valmistelee ytimekkään demotarinan.

Jos aika on tiukka, ohita tämä haaste. Turvallinen paikallinen stdio-demo on parempi kuin puoliksi turvallinen
käyttöönotto.

## Liiketoimintahaaste

Paikallinen stdio MCP server sopii täydellisesti hackathonin ytimeen. Tiimi, joka haluaa operointitarinan,
voi kontittaa sen, tarjota MCP:n Streamable HTTP:n välityksellä ja ajaa sen Azure Container Appsissa
Managed Identityllä, jolloin tietokantaan päästään ilman salaisuuksia.

## Tehtäväsi

1. Lisää pieni konttirakennus MCP serverille.
2. Vaihda tai lisää HTTP-siirtotavan päätepiste etäclienteille.
3. Tee käyttöönotto Azure Container Appsiin tai kuvaa tarkka käyttöönotto, jonka ajaisit.
4. Määritä sovellukselle Managed Identity ja anna sille vain luku -tietokantakäyttö.
5. Määritä lokit ja health checkit; kuvaa, miten käynnistäisit uudelleen tai palauttaisit version.
6. Päivitä client-määritys HTTP-siirtotavalle, jos teet käyttöönoton oikeasti.

## Keskeiset päätökset

- **Siirtotapa:** pidä stdio paikallisessa käytössä, lisää HTTP vain hostattuihin skenaarioihin.
- **Verkko:** julkinen päätepiste demon nopeuteen vs. yksityinen verkotus tuotantoon.
- **Identiteetti:** järjestelmän määrittämä vs. käyttäjän määrittämä Managed Identity.
- **Operointi:** lokit, health probe, aikakatkaisujen oletukset ja versiomerkintä.

## Tuotokset

- Kontti tai ajonaikainen malli, jossa on komento, siirtotapa, todennus ja palautus.
- Managed Identity -oikeusmuistiinpanot PostgreSQLille tai Azure SQL:lle.
- Valinnainen päivitetty HTTP `mcp.json` -katkelma, josta salaisuudet on poistettu.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Paketoitu server | Kontti käynnistyy ja tarjoaa MCP HTTP -päätepisteen | Paikallinen/konttiloki |
| Avaimeton todennus | Azure-polku käyttää Managed Identityä, ei tallennettuja salaisuuksia | Identiteetti + DB-oikeusmuistiinpanot |
| Operoitava | Lokit, health ja palautus on kuvattu | Operointimuistiinpano |

## Vinkit

<details>
<summary>HTTP client -määrityksen muoto</summary>

VS Code tukee HTTP MCP servereitä `type`- ja `url`-kentillä:

```json
{
  "servers": {
    "data-mcp-http": {
      "type": "http",
      "url": "https://your-app.example.com/mcp"
    }
  }
}
```

Vahvista tarkka URL-polku, jonka SDK:si tarjoaa.

</details>

<details>
<summary>Pidä käyttöönotto rehellisenä</summary>

Jos et saa käyttöönottoa valmiiksi, kuvaa käyttöönoton tavoitetila ja demo paikallisesti. Valinnainen ei
tarkoita riskialtista — älä poista turvarajoja saadaksesi käyttöönoton läpi.

</details>

## Huomioi nämä

- Älä tee käyttöönottoa tietokannan salasanoilla ympäristömuuttujissa, jos Managed Identity on käytettävissä.
- Älä paljasta todelliselle datalle todentamatonta julkista MCP-päätepistettä.
- Älä käytä demolohkoa CORSin, palomuurien tai kontin käynnistyksen debuggaamiseen.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | H4:n kovennettu MCP server ja todistetut kontrollit |
| **Sinun tuotoksesi** | Operoitava käyttöönotto- tai tavoitetilamalli |
| **Seuraava vaihe** | H6 sisältää käyttöönoton tilan vain, jos se on vakaa |

## Seuraava vaihe

Käyttöönottotarina on valmis tai tietoisesti ohitettu. H6 muuttaa työn napakaksi demoksi.
