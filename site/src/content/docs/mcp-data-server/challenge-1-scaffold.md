---
title: "H1: Runko"
description: Profiloi tietokantasi ja pystytä MCP server -runko, joka käynnistyy siististi triviaalilla työkalulla.
sidebar:
  order: 3
  label: "H1: Runko"
  badge:
    text: 30 min
    variant: note
prev:
  link: ../setup/
  label: Valmistelu ja valmiustarkistus
next:
  link: ../challenge-2-tools/
  label: "H2: Työkalut"
---

:::note[Haasteen tiedot]
⏱️ **30 min** · 🧩 **Ydin** · 🤖 agentti: MCP-rungon rakentaja
:::

## Tavoite

- **Tee nyt:** Valitse tietokanta, profiloi se ja luo ensimmäinen toimiva MCP server.
- **Lähtötiedot:** Saavutettava relaatiotietokanta ja vain luku -identiteetti [Valmistelusta](../setup/).
- **Tulos:** Profiloitu tietolähde ja server-runko, jossa toimii `ping` tai `list_tools_smoke`.
- **Vaaditaan etenemiseen:** Server käynnistyy paikallisesti ja tarjoaa yhden triviaalin työkalun.
- **Päätökset nyt:** Python vs. TypeScript SDK, stdio vs. HTTP paikalliseen kehitykseen.
- **Seuraavaksi:** H2 korvaa smoke-työkalun oikeilla vain luku -tietokantatyökaluilla.

Tässä haasteessa vähennät epävarmuuksia. Älä optimoi serveriä vielä — todista, että SDK,
siirtotapa ja tietokantaprofiili ovat oikeita.

## Liiketoimintahaaste

Agenttisi ei voi kysellä turvallisesti dataa, jota se ei ymmärrä. Ennen kyselytyökalujen tarjoamista
tarvitset pienen koneellisesti luettavan profiilin: mikä tietokanta, mitkä taulut, avainsarakkeet, rivimäärät
ja tunnetut rajoitukset. Profiilista tulee sopimus, jonka agentti ja server jakavat.

## Tehtäväsi

1. Valitse tietokantapolkusi: Azure Database for PostgreSQL, Azure SQL, paikallinen PostgreSQL
   tai SQLite-varavaihtoehto.
2. Yhdistä **vain luku** -käyttäjällä/identiteetillä ja tarkasta taulut, sarakkeet, pääavaimet,
   viiteavaimet ja likimääräiset rivimäärät.
3. Kokoa tietolähteen profiili niin, että se tukee seuraavien työkalujen toteutusta.
4. Pyydä agenttiasi pystyttämään MCP server joko Python- tai TypeScript SDK:lla.
5. Rekisteröi pieni `ping`-työkalu, joka palauttaa serverin nimen, version ja valitun tietokannan.
6. Käynnistä server paikallisesti ensin stdio-siirtotavalla, ellet jo tiedä tarvitsevasi HTTP:tä.

## Keskeiset päätökset

- **SDK-valinta:** Python on nopea tietokantascriptaukseen; TypeScript voi sopia Node-tiimeille.
- **Siirtotapa:** stdio on yksinkertaisin paikallisessa VS Codessa; HTTP sopii paremmin kontitettuun H5:een.
- **Profiilin syvyys:** riittävästi skeematietoa työkaluille, ei täyttä datakatalogia.
- **Tietokannan rajaus:** tarjoa vain skeemat/taulut, jotka olet valmis demoamaan.

## Tuotokset

- Tietolähde on profiloitu: tietokantatyyppi, skeemat, taulut, sarakkeet, avaimet ja esimerkkirivimäärät ovat selvillä.
- MCP server -runko käynnistyy projektireposi sisällä.
- Smoke-testi näyttää, että server käynnistyy ja `ping` palauttaa onnistuneesti.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Profiloitu data | Taulut, sarakkeet, avaimet ja rivimäärät on selvitetty | Muistiinpano |
| Toimiva server | MCP-prosessi käynnistyy ilman virheitä | Pääteloki tai MCP Inspector -tuloste |
| Ensimmäinen työkalu | Triviaali työkalu löytyy ja sitä voi kutsua | Toimiva työkalukutsu |

## Vinkit

<details>
<summary>Pidä profiili pienenä ja hyödyllisenä</summary>

Tähtää metatietoon, jota agentti voi käyttää: taulujen nimet, liiketoimintamerkitys jos tiedossa, sarakenimet,
tyypit, nullable-liput, pääavaimet, viiteavaimet ja rivimäärät. Älä dumppaa arkaluonteisia
esimerkkirivejä.

</details>

<details>
<summary>Minimaalinen Python-muoto</summary>

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("data-mcp")

@mcp.tool()
def ping() -> dict:
    return {"server": "data-mcp", "status": "ok"}

if __name__ == "__main__":
    mcp.run()
```

</details>

## Huomioi nämä

- Älä yhdistä tietokannan omistajana vain siksi, että se on nopeampaa.
- Älä kovakoodaa salasanoja tai yhteysmerkkijonoja server-runkoon.
- Älä paljasta raakaa esimerkkidataa tietolähteen profiilissa, ellei se ole nimenomaisesti turvallista.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Vain luku -tietokantakäyttö [Valmistelusta](../setup/) |
| **Sinun tuotoksesi** | Profiloitu tietolähde ja käynnistyvä MCP server -runko |
| **Seuraava vaihe** | H2 toteuttaa oikeat työkalut profiloitua tietokantaa vasten |

## Seuraava vaihe

Sinulla on toimiva MCP-kuori. H2 tekee siitä hyödyllisen vain luku -datarajapinnan.
