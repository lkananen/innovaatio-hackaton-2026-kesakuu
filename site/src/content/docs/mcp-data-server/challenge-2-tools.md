---
title: "H2: Työkalut"
description: Toteuta vain luku -MCP-työkalut, joiden avulla agentti voi löytää skeeman ja ajaa rajattuja SELECT-kyselyitä.
sidebar:
  order: 4
  label: "H2: Työkalut"
  badge:
    text: 40 min
    variant: note
prev:
  link: ../challenge-1-scaffold/
  label: "H1: Runko"
next:
  link: ../challenge-3-connect/
  label: "H3: Yhdistä"
---

:::note[Haasteen tiedot]
⏱️ **40 min** · 🧩 **Ydin** · 🤖 agentti: työkalujen toteuttaja
:::

## Tavoite

- **Tee nyt:** Toteuta `list_tables`, `get_schema` ja `run_query` MCP-työkaluina.
- **Lähtötiedot:** H1:n server-runko ja profiloitu tietolähde.
- **Tulos:** Toimivat ja täsmällisesti määritellyt vain luku -MCP-työkalut.
- **Vaaditaan etenemiseen:** Työkalut löytyvät ja palauttavat turvallisia vain luku -tuloksia.
- **Päätökset nyt:** Työkalujen syöteskeemat, tulosmuodot ja virheilmoitukset.
- **Seuraavaksi:** H3 yhdistää työkalut GitHub Copilotiin VS Codessa.

Työkalut ovat agentille näkyvä API. Tee niistä yksinkertaisia, täsmällisiä ja helposti validoitavia.

## Liiketoimintahaaste

Koodausagentti voi kutsua vain sitä, mitä tarjoat. Jos työkalut ovat epämääräisiä, agentti arvaa.
Jos työkalut ovat täsmällisiä, agentti voi tarkastaa skeeman, valita kyselyn, kutsua `run_query`-työkalua
ja selittää vastauksen näytön avulla. Tehtäväsi on suunnitella turvallinen datasopimus.

## Tehtäväsi

1. Toteuta `list_tables`, joka palauttaa sallitut skeemat/taulut ja rivimäärävihjeet.
2. Toteuta `get_schema`, joka hyväksyy taulun nimen ja palauttaa sarakkeet, tyypit, avaimet ja
   suhteet H1-profiilista tai ajantasaisesta metadatasta.
3. Toteuta `run_query`, joka hyväksyy yhden SQL-merkkijonon ja palauttaa rivit sekä metatiedot.
4. Salli toistaiseksi vain ilmeiset `SELECT`-lauseet; H4 koventaa tämän kunnolla.
5. Lisää yhdenmukaiset virheet tuntemattomille tauluille, virheelliselle SQL:lle, todennusvirheille ja rivikatoille.
6. Varmista, että jokaisen työkalun tarkoitus, syötteet, tulokset ja esimerkit ovat selkeitä toteutuksessa ja testinäytössä.

## Keskeiset päätökset

- **Työkalujen rakeisuus:** kolme työkalua riittää; älä tarjoa yhtä työkalua jokaista taulua kohti.
- **Tulosmuoto:** rakenteinen JSON on agenteille helpompaa kuin proosa.
- **Virhesopimus:** selkeät kieltäytymiset ovat parempia kuin pinolokit.
- **Skeeman lähde:** reaaliaikainen introspektio vs. H1:n tietolähdeprofiili.

## Tuotokset

- Toimivat `list_tables`, `get_schema` ja `run_query` -työkalut.
- Selkeät syöte-/tulossopimukset ja yksi esimerkki per työkalu.
- Smoke-testi, joka näyttää, että kaikki kolme työkalua palauttavat odotetut tulokset.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Löydettävät työkalut | MCP client listaa kaikki kolme työkalua | Työkalulistan kuvakaappaus/loki |
| Hyödyllinen skeema | Agentti voi tarkastaa sarakkeet ja suhteet | Toimiva `get_schema`-kutsu |
| Vain luku -kysely | Yksinkertainen `SELECT` palauttaa rajatut rivit | Toimiva `run_query`-kutsu |

## Vinkit

<details>
<summary>Esimerkki työkalumäärittelystä</summary>

```json
{
  "name": "run_query",
  "input": { "sql": "SELECT name FROM customers LIMIT 5" },
  "output": { "columns": ["name"], "rows": [["Contoso"]], "rowCount": 1 }
}
```

Pidä tämä muoto vakaana; H3 ja H4 riippuvat siitä.

</details>

<details>
<summary>Suosi täsmällisiä kuvauksia</summary>

Työkalujen kuvaukset ovat kehotepintaa. Kerro agentille täsmälleen, milloin kutakin työkalua kutsutaan ja
mitä se ei saa tehdä: ei kirjoituksia, ei salaisuuksia, ei rajaamattomia tutkivia kyselyitä.

</details>

## Huomioi nämä

- Älä palauta tuhansia rivejä vain siksi, että tietokanta sallii sen.
- Älä vuoda ajurin pinolokeja työkalun tulokseen.
- Älä piilota SQL:ää käyttäjältä — läpinäkyvyys on osa demoa.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Profiloitu tietolähde ja server-runko (H1) |
| **Sinun tuotoksesi** | Toimivat ja määritellyt vain luku -työkalut |
| **Seuraava vaihe** | H3 määrittää Copilotin löytämään ja kutsumaan näitä työkaluja |

## Seuraava vaihe

Serverilläsi on hyödyllisiä työkaluja. H3 tuo ne GitHub Copilotin eteen ja todistaa silmukan.
