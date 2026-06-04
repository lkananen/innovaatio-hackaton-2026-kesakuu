---
title: "H3: Yhdistä"
description: Määritä VS Code ja GitHub Copilot löytämään MCP serverisi ja ohjaa sitä luonnollisella kielellä.
sidebar:
  order: 5
  label: "H3: Yhdistä"
  badge:
    text: 30 min
    variant: note
prev:
  link: ../challenge-2-tools/
  label: "H2: Työkalut"
next:
  link: ../challenge-4-guardrails/
  label: "H4: Turvarajat"
---

:::note[Haasteen tiedot]
⏱️ **30 min** · 🧩 **Ydin** · 🤖 agentti: MCP client -integraattori
:::

## Tavoite

- **Tee nyt:** Yhdistä MCP serverisi VS Code + GitHub Copilot agent mode -tilaan.
- **Lähtötiedot:** Toimiva H2:n MCP server ja työkalumäärittely.
- **Tulos:** Copilot löytää MCP serverin ja käyttää sen työkaluja esimerkkivuorovaikutuksissa.
- **Vaaditaan etenemiseen:** Copilot vastaa kutsumalla MCP-työkalujasi, ei arvaamalla.
- **Päätökset nyt:** Työtila- vs. käyttäjämääritys, stdio-komento ja turvallinen env-käsittely.
- **Seuraavaksi:** H4 koventaa suorituspolun ja todistaa, että haitalliset kyselyt estetään.

Tämä on palkinto: rakentamasi työkalu tulee sen agentin käyttöön, joka auttoi rakentamaan sen.

## Liiketoimintahaaste

Sidosryhmiä ei kiinnosta, että server pyörii päätelaitteessasi. Heitä kiinnostaa, että agentti voi
käyttää sitä vastatakseen kysymyksiin ajantasaisesta datasta, näkyvillä työkalukutsuilla ja jäljitettävällä SQL:llä. Tämä
haaste muuttaa serverin agentin kyvykkyydeksi.

## Tehtäväsi

1. Luo VS Code MCP -määritys tiedostoon `.vscode/mcp.json` tai käyttäjätason `mcp.json`-tiedostoon.
2. Käynnistä server VS Codesta ja varmista, että **MCP: List Servers** näyttää sen käynnissä olevana.
3. Avaa Copilot Chat, vaihda **Agent**-tilaan ja ota MCP-työkalusi käyttöön.
4. Kysy kolme luonnollisen kielen kysymystä, jotka vaativat `list_tables`, `get_schema` ja
   `run_query` -työkaluja.
5. Pidä toimiva määritys tallessa niin, että salaisuudet on poistettu.
6. Kirjaa kehotteet, työkalukutsut, SQL ja vastaukset lyhyesti muistiin.

## Keskeiset päätökset

- **Työtila- vs. käyttäjämääritys:** jaettava työpajamääritys vs. yksityinen konemääritys.
- **Stdio-komento:** `python server.py`, `uv run`, `npm start` tai vastaava.
- **Ympäristö:** käytä kehittäjätodennusta tai env-tiedostoja paikallisesti; älä koskaan committaa salaisuuksia.
- **Näyttö:** ota talteen näkyvä työkalujen käyttö, ei pelkkiä lopullisia vastauksia.

## Tuotokset

- Toimiva server-määritys, josta salaisuudet on poistettu.
- Kolme esimerkkivuorovaikutusta agentin kanssa, joista jokainen näyttää kysymyksen, kutsutut työkalut ja vastauksen.
- Muistiinpano mahdollisista VS Coden vaatimista manuaalisista luottamus-/vahvistuskehotteista.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Määritetty client | VS Code listaa MCP serverin käynnissä olevana | VS Coden server-listaus |
| Työkalujen käyttö | Copilot kutsuu työkalujasi Agent-tilassa | Toimiva työkalukutsu |
| Perustellut vastaukset | Vastaukset viittaavat palautettuihin riveihin/skeemaan, eivät arvauksiin | Kehote + vastaustallenne |

## Vinkit

<details>
<summary>Työtilamäärityksen muoto</summary>

VS Code MCP -työtilamääritys käyttää `.vscode/mcp.json`-tiedostoa, jossa on `servers`-objekti. Paikallinen stdio server näyttää usein tältä:

```json
{
  "servers": {
    "data-mcp": {
      "type": "stdio",
      "command": "python",
      "args": ["server.py"]
    }
  }
}
```

Joissakin esimerkeissä `type` jätetään pois stdio-siirtotavalta. Noudata VS Code IntelliSenseä, jos se ehdottaa
nykyistä skeemaa.

</details>

<details>
<summary>Hyvät kehotteet näytöksi</summary>

Kysy: *"Käytä data MCP -työkaluja taulujen listaamiseen, orders-skeeman tarkastamiseen ja vastaa sitten:
mitkä 5 asiakasta ovat tehneet eniten tilauksia? Näytä ajamasi SQL."*

</details>

## Huomioi nämä

- Älä oleta, että Copilot käytti työkalujasi — varmista työkalukutsujen jälki.
- Älä committaa `.vscode/mcp.json`-tiedostoa, jos siinä on paikallisia polkuja tai salaisuuksia sisältäviä env-arvoja.
- Älä ohita luottamuskehotetta; VS Code ei ehkä käynnistä paikallisia servereitä ennen hyväksyntääsi.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | H2:n server ja toimivat työkalut |
| **Sinun tuotoksesi** | Copilot-yhteys ja kolme onnistunutta vuorovaikutusesimerkkiä |
| **Seuraava vaihe** | H4 koventaa saman yhdistetyn serverin ja testaa sen uudelleen |

## Seuraava vaihe

Copilot voi kysellä dataasi. H4 varmistaa, että se voi tehdä sen vain turvallisesti.

