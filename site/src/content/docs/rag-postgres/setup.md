---
title: "Valmistelu ja valmiustarkistus"
description: Tarkista, että ympäristö ja Azure OpenAI -kiintiö ovat valmiina, jotta lohko 1 on rakentamista eikä odottelua.
sidebar:
  order: 2
---

:::caution[Vaatimukset — tarkista ennen aloitusta]
Tämän polun edellytys on toimiva **Azure OpenAI -kiintiö**. Uudessa tilauksessa kiintiö voi olla **nolla**, eikä korotusta ehdi saada samana päivänä (hyväksyntä kestää **1–3 arkipäivää**). Tarkista siksi, että kiintiö on jo myönnetty — sen puuttuminen on yleisin syy siihen, että tiimi menettää aamun.
:::

:::note[Maksuton vs. maksullinen taso]
- **Maksuton:** Paikallinen Postgres (Docker) ja kehitystyökalut ovat ilmaisia. Uusi Azure-tili sisältää käyttöhyvityksiä, ja Container Apps sekä PostgreSQL Flexible Server tarjoavat maksuttomia aloitustasoja.
- **Vaadittu maksullinen taso:** **Azure OpenAI** laskutetaan käytön mukaan (token-kulutus) — sille ei ole maksutonta tasoa, ja se vaatii myönnetyn kiintiön.
- **Mitä maksullinen taso tuo:** chat- ja upotusmallit RAG-hakuun. Ilman omaa kiintiötä käytä fasilitaattorin jaettua Azure OpenAI -päätepistettä (ainoa hyväksytty varavaihtoehto).
:::

## 1. Valmiustarkistuslista

Käy lista läpi ja varmista, että jokainen kohta on kunnossa ennen kuin aloitat rakentamisen:

- [ ] `az login && az account show` — tilauksen käyttöoikeus varmistettu
- [ ] `azd` asennettu (`winget install microsoft.azd` tai `brew install azure/azd/azd`)
- [ ] Docker Desktop käynnissä (azd rakentaa sillä konttikuvan)
- [ ] GitHub Copilot aktiivinen IDE:ssä
- [ ] Azure OpenAI -kiintiö kohdealueellasi:
  - chat: `gpt-4o-mini` (tai `gpt-4.1-mini`) ≥ 30K TPM
  - upotukset: `text-embedding-3-small` ≥ 120K TPM
- [ ] Jos kiintiö = 0 → polku ei toimi ilman korotusta (hyväksyntä 1–3 arkipäivää): https://aka.ms/oai/quotaincrease
- [ ] Resurssintarjoajat rekisteröity (katso §4)
- [ ] `azd init` + `azd provision` ajettu perusrepositoriossa tunnistautumisen varmistamiseksi (suositus)
- [ ] Ei-arkaluonteinen datajoukko valmiina (katso §3)

:::note[Eikö kiintiö ehdi? Varavaihtoehto]
Fasilitaattori ylläpitää **jaettua Azure OpenAI -päätepistettä** ainoana hyväksyttynä varavaihtoehtona. Saat päätepisteen ja avaimen tapahtumassa. Mallipohja käyttää oletuksena **Managed Identity** -tunnistautumista (ilman avaimia) itse käyttöön ottamaansa OpenAI-resurssiin. Jos haluat ohjata sen sen sijaan jaettuun päätepisteeseen, aseta ympäristömuuttujat **ennen `azd up`** -komentoa ja kerro, ettei sen pidä ottaa omaa OpenAI-resurssia käyttöön:

```bash
azd env set DEPLOY_AZURE_OPENAI false
azd env set AZURE_OPENAI_ENDPOINT https://<shared>.openai.azure.com/
azd env set AZURE_OPENAI_KEY <key-from-facilitator>
# match the deployment names on the shared endpoint:
azd env set AZURE_OPENAI_CHAT_DEPLOYMENT <chat-deployment-name>
azd env set AZURE_OPENAI_EMBED_DEPLOYMENT <embed-deployment-name>
```

Tämä on turvaverkko, **ei** etukäteisvalmistelun korvike. (Tarkat muuttujien nimet voivat muuttua mallipohjan versioiden välillä — varmista ne omista `azure.yaml` / `infra/main.bicep` -tiedostoistasi.)
:::

## 2. Perusrepositorio

Rakennat [`Azure-Samples/rag-postgres-openai-python`](https://github.com/Azure-Samples/rag-postgres-openai-python) -repositorioon pohjautuen. **Luo siitä oma kopio** (käytä mallipohjaa tai forkkaa), jotta voit tehdä committeja vapaasti — tämä dokumentaatiosivusto on oppaasi, ei projekti, johon rakennat.

```bash
azd init -t Azure-Samples/rag-postgres-openai-python
```

:::caution[Kiinnitä mallipohja ja tarkista mallien oletukset]
Tämä esimerkki kehittyy upstreamissa. Chat- ja upotus (embedding) -**mallien nimet sekä käyttöönoton ympäristömuuttujien nimet voivat muuttua** verrattuna §1:ssä näytettyihin (esimerkiksi mallipohja voi oletuksena käyttää uudempaa chat-mallia tai `text-embedding-3-large` -mallia). Kaksi varmistusta:

- **Kiinnitä tunnetusti toimiva commit** heti `azd init` -komennon jälkeen (`git log -1` tallentaaksesi SHA:n, tai ota tagi käyttöön), jotta kaikki pöytäsi jäsenet rakentavat samaa versiota.
- **Varmista mallien oletukset** tiedostoista `infra/main.bicep` / `azure.yaml` ja tarkista, että ne vastaavat §1:ssä pyytämääsi kiintiötä. Jos ne eroavat, pyydä kiintiö mallipohjan malleille tai ohita asetukset: `azd env set AZURE_OPENAI_CHAT_MODEL ...`, `AZURE_OPENAI_CHAT_DEPLOYMENT`, `AZURE_OPENAI_EMBED_MODEL`, `AZURE_OPENAI_EMBED_DEPLOYMENT` (tarkat nimet mallipohjasi version mukaan).
:::

## 3. Tuo oma data (tai käytä varavaihtoehtoa)

**Soveltuvuus tälle polulle:** RAG sietää sotkuista tekstiä. Hyviä syötteitä ovat **dokumentit, PDF:t, Markdown, verkkosivut tai CSV:t** — kaikki, minkä voit pilkkoa tekstikatkelmiksi.

**Säännöt:**

- **Vain ei-arkaluonteista dataa** — julkista, synteettistä tai organisaation hyväksymää dataa. Ei asiakkaiden henkilötietoja.
- **Pidä koko pienenä** — tavoittele **≤ 50 MB** ja **rajaa ingestio noin 50–200 tekstikatkelmaan** tapahtuman ajaksi, jotta upotus (embedding) pysyy nopeana ja edullisena.
- Mieti valmiiksi **2–3 kysymystä**, joihin datan pitäisi pystyä vastaamaan (käytät näitä haun varmistamiseen H2:ssa).

**Eikö sinulla ole dataa? Suosi suomalaisia avoimia datalähteitä — yleisö on suomalainen:**

| Datajoukko | Miksi se sopii | Lähde |
|---------|-------------|--------|
| **Avoindata.suomi.fi dokumentit** (politiikkamuistiot, raportit) | Suomenkielistä proosaa, selkeitä Q&A-kohteita, julkista | <https://avoindata.suomi.fi/> |
| **Tilastokeskuksen julkaisut ja katsaukset** | Faktapohjaista suomenkielistä tekstiä, helppo laatia kysymyksiä | <https://stat.fi/> |
| **EU:n avoimen datan dokumenttijoukko** (esim. politiikkamuistiot / raportit) | Aitoa proosaa, selkeitä Q&A-kohteita, julkista | <https://data.europa.eu/> |
| **Julkisen GitHub-repositorion `/docs`-kansio** (Markdown) | Valmiiksi helppo pilkkoa; erinomainen “kysy dokumenteista” -tapauksiin | mikä tahansa OSS-repo |
| **Wikipedia-artikkelien vienti** (kourallinen liittyviä artikkeleita) | Tiivistä, faktapohjaista, helppo laatia kysymyksiä | <https://en.wikipedia.org/wiki/Special:Export> |

## 4. Resurssipalvelut ja alueet

`azd up` ottaa käyttöön Container Apps, PostgreSQL Flexible Server, Azure OpenAI, Log Analytics sekä Managed Identity -tunnisteen. Jos käyttöönotto epäonnistuu resurssipalveluvirheeseen:

```bash
az provider register --namespace Microsoft.App
az provider register --namespace Microsoft.DBforPostgreSQL
az provider register --namespace Microsoft.CognitiveServices
az provider register --namespace Microsoft.OperationalInsights
```

- Valitse alue, jossa sinulla **on OpenAI-kiintiö** molemmille malleille (usein `swedencentral`, `eastus2` tai `westeurope`).
- Tarvitset tilaukseen tai resurssiryhmään **Contributor**-oikeuden. Jos mallipohja määrittää rooleja, saatat tarvita myös **User Access Administrator** -oikeuden.

## 5. Tunnetut virhetilanteet

| Oire | Korjaus |
|---------|-----|
| `azd up` jumittuu noin 20 min ja epäonnistuu sitten OpenAI-vaiheessa | Alueella ei ole kiintiötä → pyydä korotusta tai vaihda aluetta |
| `MissingSubscriptionRegistration` | Aja yllä olevat `az provider register` -komennot |
| Kontin koonti epäonnistuu | Docker Desktop ei ole käynnissä |
| PostgreSQL-palomuuri- / todennusvirhe | Aja `azd provision` uudelleen; varmista, että IP-osoitteesi on sallittu |
| Roolimääritys estetty | Sinulta puuttuu User Access Administrator — pyydä tilauksen omistajaa apuun |

Kun jokainen §1:n kohta on merkitty tehdyksi, olet valmis **H1**:een.
