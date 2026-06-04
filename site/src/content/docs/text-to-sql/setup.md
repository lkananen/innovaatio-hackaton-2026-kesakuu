---
title: "Valmistelu ja valmiustarkistus"
description: Relaatiodatan kelpoisuus, vain luku -tietokantakäyttäjä ja Azure OpenAI -kiintiö — tarkista, että nämä ovat kunnossa ennen aloitusta.
sidebar:
  order: 2
---

:::caution[Vaatimukset — tarkista ennen aloitusta]
Kaksi asiaa kaataa tämän polun: **puuttuva Azure OpenAI -kiintiö** (korotusta ei ehdi saada samana päivänä — hyväksyntä vie 1–3 arkipäivää)
ja **ei-relaatiomuotoinen data**, jossa ei ole liitoksia pääteltäväksi. Tarkista, että molemmat ovat kunnossa.
:::

:::note[Maksuton vs. maksullinen taso]
- **Maksuton:** Paikallinen Postgres (Docker) ja SQL-/Python-työkalut ovat ilmaisia. Voit rakentaa skeeman ja kultaiset kysymykset ilman pilvikustannuksia.
- **Vaadittu maksullinen taso:** **Azure OpenAI** laskutetaan käytön mukaan (token-kulutus) eikä sille ole maksutonta tasoa; se vaatii myönnetyn kiintiön. Suosi `gpt-4o`-luokan mallia tarkemman SQL:n vuoksi.
- **Mitä maksullinen taso tuo:** luonnollisen kielen → SQL -päättely. Ilman omaa kiintiötä käytä fasilitaattorin jaettua Azure OpenAI -päätepistettä.
:::

## 1. Valmiustarkistuslista

Käy lista läpi ja varmista, että jokainen kohta on kunnossa ennen kuin aloitat:

- [ ] `az login && az account show`
- [ ] PostgreSQL käytettävissä (paikallinen Docker tai Azure Database for PostgreSQL Flexible Server)
- [ ] `psql` tai muu SQL-asiakasohjelma asennettu
- [ ] Python 3.11+ ja OpenAI SDK
- [ ] GitHub Copilot aktiivinen IDE:ssä
- [ ] Azure OpenAI -kiintiö alueellasi:
  - chat: `gpt-4o` (tai `gpt-4.1`) ≥ 30K TPM — vahvempi malli parantaa SQL:n tarkkuutta
- [ ] Jos kiintiö = 0 → polku ei toimi ilman korotusta (hyväksyntä 1–3 arkipäivää): https://aka.ms/oai/quotaincrease
- [ ] Relaatiomuotoinen datajoukko ladattu (katso §3)
- [ ] Vain luku -tietokantakäyttäjä luotu (katso §4)
- [ ] 5 kultaista kysymystä laadittu (katso §3)

:::note[Eikö kiintiö ehdi ajoissa? Varavaihtoehto]
Fasilitaattori ylläpitää **jaettua Azure OpenAI -päätepistettä** hyväksyttynä varavaihtoehtona. Agenttisi
lukee `AZURE_OPENAI_ENDPOINT` / `AZURE_OPENAI_API_KEY`, joten vaihtaminen on yhden rivin muutos.
:::

## 2. Miksi vahvempi chat-malli

Text-to-SQL vaatii paljon päättelyä. `gpt-4o`-luokan malli tuottaa liitoksissa ja aggregoinneissa
selvästi parempaa SQL:ää kuin `-mini`-malli. Käytä vahvinta mallia, johon sinulla on kiintiötä.

## 3. Tuo oma data (tai käytä varavaihtoehtoa)

**Tämän polun kelpoisuusehdot ovat tiukemmat kuin RAGissa.** Tarvitset **aidosti relaatiomuotoista** dataa,
jotta agentilla on liitoksia ja avaimia pääteltäväksi.

**Säännöt:**

- **2–5 taulua**, joissa on **selkeät pää- ja viiteavaimet** sekä merkitykselliset suhteet.
- **Vain ei-arkaluonteista** — julkista, synteettistä tai organisaation hyväksymää. Ei asiakkaiden henkilötietoja.
- **Pidä koko maltillisena** — tuhannet rivit riittävät hyvin; rajaa ensimmäisiin N riviin, jos data on suuri.
- Luonnostele **5 kultaista kysymystä** selkeällä englannilla, joihin datasi voi vastata, helposta
  (`how many X?`) monen taulun kysymykseen (`top 3 Y by Z last quarter`). Muotoilet
  nämä virallisesti H2:ssa.

**Ei relaatiodataa? Suosi suomalaisia avoimia datalähteitä — yleisö on suomalainen:**

| Datajoukko | Miksi se sopii | Lähde |
|---------|-------------|--------|
| **Tilastokeskuksen StatFin-taulut** (PxWeb) | Useita toisiinsa liittyviä suomalaisia tilastotauluja liitettäväksi yhteisillä avaimilla (alue, vuosi) | <https://stat.fi/> · <https://pxdata.stat.fi/> |
| **Avoindata.suomi.fi monitauluiset CSV-aineistot** | Suomen julkishallinnon avointa, liitettävää dataa | <https://avoindata.suomi.fi/> |
| **Chinook** | Klassinen musiikkikaupan skeema (11 taulua, selkeät viiteavaimet); erinomainen kultaisiin kysymyksiin | <https://github.com/lerocha/chinook-database> |
| **Northwind (Postgres port)** | Tilaukset/asiakkaat/tuotteet; liiketoimintahenkinen | <https://github.com/pthom/northwind_psql> |
| **Monitauluinen julkinen CSV-joukko** (esim. Eurostat- tai NYC-datajoukot) | Todellinen, liitettävä, julkinen | <https://data.europa.eu/> |

## 4. Luo vain luku -tietokantakäyttäjä (tee tämä nyt)

Turvarajat alkavat tietokannasta. Agentin täytyy muodostaa yhteys käyttäjänä, joka **ei fyysisesti
voi** muokata dataa:

```sql
CREATE USER agent_ro WITH PASSWORD 'change-me';
GRANT CONNECT ON DATABASE yourdb TO agent_ro;
GRANT USAGE ON SCHEMA public TO agent_ro;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;
-- explicitly NO INSERT/UPDATE/DELETE/DDL
```

Agenttisi muodostaa yhteyden **vain** käyttäjänä `agent_ro`. Tämä on ensimmäinen ja vahvin turvarajasi.

:::caution[Myönnä oikeudet uudelleen taulujen lataamisen jälkeen]
`ALTER DEFAULT PRIVILEGES` kattaa vain objektit, jotka luo **komennon suorittava rooli**. Jos sinä
(tai eri omistaja) lataat tauluja **tämän lohkon jälkeen**, `agent_ro`-käyttäjällä ei ole niihin `SELECT`-oikeutta.
Kun data on ladattu, suorita oikeuksien myöntö uudelleen ja varmista:

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro;
-- verify the read-only identity can actually read:
SET ROLE agent_ro;
SELECT count(*) FROM <one_of_your_tables>;   -- should succeed
RESET ROLE;
```
:::

## 5. Tunnetut virhetilanteet

| Oire | Korjaus |
|---------|-----|
| Agentti tuottaa hyvää SQL:ää mutta väärät liitokset | Skeemaprofiili (H1) + sanasto (H2) on määritelty liian niukasti |
| `permission denied` SELECT-kyselyssä | Suorita §4:n GRANTit uudelleen; tarkista, ettei käyttäjä omista objekteja |
| Malli keksii sarakenimiä | Välitä oikea skeema kehotteen kontekstissa (H3) |
| Hidas / hallitsematon kysely | H4:n turvarajat lisäävät `LIMIT`-ehdon + `statement_timeout`-asetuksen |
| Kiintiövirhe | Pyydä korotusta tai käytä fasilitaattorin päätepistettä |

Kun jokainen §1:n kohta on rastitettu, olet valmis **H1**:een.
