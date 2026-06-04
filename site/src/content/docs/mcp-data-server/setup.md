---
title: "Valmistelu ja valmiustarkistus"
description: Tarkista, että kehitysympäristö, saavutettava tietokanta ja vain luku -identiteetti ovat kunnossa ennen aloitusta.
sidebar:
  order: 2
---

:::caution[Vaatimukset — tarkista ennen aloitusta]
Tämä polku on kevyempi kuin Azure-painotteiset polut. Suurimmat riskit ovat **tietokantakäyttö**,
**vain luku -identiteetin määrittäminen** ja **toimiva paikallinen kehitysympäristö**. Tarkista, että nämä ovat kunnossa, jotta
H1 on rakentamista eikä ajurien debuggausta.
:::

:::note[Maksuton vs. maksullinen taso]
- **Maksuton:** Koko polku toimii paikallisesti ilmaisilla työkaluilla — Node.js/Python, paikallinen Postgres tai SQLite ja MCP-SDK. Pilveä ei vaadita.
- **Vaadittu maksullinen taso:** **GitHub Copilot** -lisenssi (agent mode). Ilmainen Copilot-taso riittää tähän polkuun monille, mutta organisaatiokäytäntö voi edellyttää maksullista lisenssiä.
- **Mitä maksullinen taso tuo:** Copilot agent mode kutsuu MCP-työkalujasi. Valinnainen Azure-hostaus (Container Apps / Azure SQL) laskutetaan käytön mukaan, jos viet serverin pilveen.
:::

## 1. Valmiustarkistuslista

Käy lista läpi ja varmista, että jokainen kohta on kunnossa ennen kuin aloitat:

- [ ] Node.js 20+ tai Python 3.11+ asennettu
- [ ] VS Code asennettu, GitHub Copilot aktiivinen ja agent mode käytettävissä
- [ ] MCP-käyttö sallittu GitHub Copilot -organisaatiokäytännössäsi
- [ ] Saavutettava relaatiotietokanta, jossa on muutama hyödyllinen taulu
- [ ] Vain luku -DB-käyttäjä/identiteetti luotu ja testattu
- [ ] Managed Identity / Microsoft Entra auth suunniteltu, jos Azure-hostaus on käytössä
- [ ] Avaimia tai yhteysmerkkijonoja ei ole commitattu koodiin
- [ ] Yksi varadatajoukko valmiina siltä varalta, että oman datan käyttö epäonnistuu

:::note[Mitä asentaa]
Valitse yksi SDK-polku:

```bash
# Python
pip install "mcp[cli]"
# TypeScript
npm install @modelcontextprotocol/sdk
```

Viralliset SDK-/pakettinimet voivat muuttua nopeasti. Jos paketinhallintasi ilmoittaa uudemmasta
suositellusta pakettijaosta, noudata nykyistä SDK README -ohjetta ja pidä sama työkalumäärittely.
:::

## 2. Miten Copilot yhdistää

VS Code tukee MCP servereitä `mcp.json`-määrityksen kautta. Käytä jompaakumpaa:

- **Työtilan määritys:** `.vscode/mcp.json` projektissa, jaettavissa tiimin kanssa.
- **Käyttäjän määritys:** **MCP: Open User Configuration**, yksityinen omalle koneellesi.

Voit käyttää myös komentopaletin toimintoa **MCP: Add Server...**. Kun server on käynnistetty, VS Code
löytää sen työkalut ja tuo ne Copilot Chat **Agent** -tilaan.

Pidä salaisuudet pois määrityksistä. Suosi paikallista kehittäjätodennusta (`az login`) paikallisessa testauksessa ja
Managed Identityä käyttöönotossa.

## 3. Tuo oma data (tai käytä varavaihtoehtoa)

**Kelpoisuus tähän polkuun:** mikä tahansa relaatiotietokanta, jossa on muutama taulu, merkityksellisiä
sarakkeita ja vähintään 3 kysymystä, jotka kannattaa esittää. PostgreSQL, Azure SQL, SQL Server ja
SQLite toimivat kaikki.

**Säännöt:**

- **Vain ei-arkaluonteista** — julkista, synteettistä tai organisaation hyväksymää dataa. Ei asiakkaiden PII-tietoja.
- **Vain luku -identiteetti** — MCP server ei saa yhdistää omistajana/adminina.
- **Pidä koko maltillisena** — sadat tai tuhannet rivit riittävät erinomaiseen demoon.
- Laadi **3 luonnollisen kielen kysymystä**, joihin agenttisi vastaa kutsumalla työkaluja.

**Ei dataa? Suosi suomalaisia avoimia datalähteitä — yleisö on suomalainen:**

| Varavaihtoehto | Miksi se sopii | Polku |
|---------|-------------|------|
| **Suomalainen avoin data** (Tilastokeskus / Avoindata.suomi.fi) | Aitoa suomalaista dataa relaatiotauluihin ladattavaksi | Lataa CSV Postgresiin/SQLiteen · <https://stat.fi/> · <https://avoindata.suomi.fi/> |
| **Local PostgreSQL + Chinook/Northwind** | Rikas relaatiomalli, klassiset liitokset, toimii Dockerissa | Ei pilviriippuvuutta |
| **Azure SQL AdventureWorksLT** | Ensimmäisen osapuolen esimerkkidata asiakkaista, tuotteista ja tilauksista | Hyvä Azure SQL -polku |
| **SQLite sample DB** | Nopein Azure-vapaa polku; yksi tiedosto, ei serveriä | Paras hätävaravaihtoehto |

## 4. Luo vain luku -tietokantakäyttäjä

Luo PostgreSQLissä rooli, joka voi lukea mutta ei kirjoittaa:

```sql
CREATE ROLE agent_ro LOGIN;
GRANT CONNECT ON DATABASE yourdb TO agent_ro;
GRANT USAGE ON SCHEMA public TO agent_ro;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;
```

Luo Azure SQL:ssä sisällytetty Microsoft Entra -käyttäjä tai Managed Identity -käyttäjä ja anna
vain lukijan oikeudet:

```sql
CREATE USER [your-managed-identity-name] FROM EXTERNAL PROVIDER;
ALTER ROLE db_datareader ADD MEMBER [your-managed-identity-name];
```

:::caution[Organisaatiokäytäntö: vain Managed Identity]
Kun hostaat Azuressa, käytä **Managed Identity / Microsoft Entra authentication** -mallia. Älä
laita salasanoja, avaimia tai yhteysmerkkijonoja lähdekoodiin. Paikallinen kehittäjätodennus sopii
kehitykseen; tuotantomaisessa käyttöönotossa käytetään identiteettiä.
:::

## 5. Tunnetut virhetilanteet

| Oire | Todennäköinen syy | Korjaus |
|---------|--------------|-----|
| Agentti ei näe MCP serveriä | Määrityspolku, luottamuskehote tai siirtotavan ristiriita | Avaa `mcp.json`, käynnistä server, aja **MCP: List Servers** |
| Server käynnistyy, mutta työkaluja ei näy | Työkalun rekisteröinti epäonnistui tai serverin lokit ovat piilossa | Tarkista MCP-/serverilokit; tarjoa ensin yksinkertainen `ping` |
| DB-todennus epäonnistuu | Väärä identiteetti, palomuuri, puuttuvat oikeudet | Testaa vain luku -identiteetti MCP:n ulkopuolella ennen H1:tä |
| Kyselyt toimivat paikallisesti mutta epäonnistuvat kontissa | Todennustapa muuttui | Käytä Managed Identityä ja dokumentoi käynnistys ilman env-salaisuuksia |
| Kirjoitusyritys estetään | Turvaraja tekee tehtävänsä | Ota tämä talteen H4-näytöksi |

Kun jokainen §1:n ruutu on rastitettu, olet valmis **H1**:een.

