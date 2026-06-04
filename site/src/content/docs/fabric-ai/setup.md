---
title: "Valmistelu ja valmiustarkistus"
description: Maksullinen Fabric F2+ -kapasiteetti ja käytössä oleva AI Functions ovat tämän polun pakolliset vaatimukset — tarkista, että ne ovat kunnossa ennen aloitusta.
sidebar:
  order: 2
---

:::caution[Vaatimukset — tarkista ennen aloitusta]
AI Functions vaatii **maksullisen Fabric-kapasiteetin (F2+)** ja **tenantin, jossa ominaisuus on käytössä**. Eri organisaatioista tulevilla osallistujilla ei usein ole **kapasiteetin ylläpitäjän oikeuksia**, ja tenantin vaihto voi poistaa AI Functions -toiminnot käytöstä myös F2+:ssa. Näitä ei voi korjata paikan päällä, joten tarkista, että ne ovat kunnossa ennen aloitusta.
:::

:::note[Maksuton vs. maksullinen taso]
- **Maksuton (Fabric Trial):** Voit luoda työtiloja ja Lakehouseja, ajaa PySpark-notebookeja ja rakentaa koko medallion-arkkitehtuurin. **AI Functions ei toimi** kokeilukapasiteetilla.
- **Vaadittu maksullinen taso:** **F2** (pienin maksullinen Fabric-SKU) tai suurempi.
- **Mitä F2 tuo lisää:** avaa **AI Functions** -toiminnot (`ai.classify`, `ai.summarize`, `ai.extract`) silver-rikastukseen — tämän polun ydin. Ilman F2:ta käytä H3:ssa PySpark-sääntöpohjaista fallbackia.
:::

## 1. Valmiustarkistuslista

Käy lista läpi ja varmista, että jokainen kohta on kunnossa ennen kuin aloitat:

- [ ] Microsoft Fabric -kapasiteetti, SKU F2 tai suurempi, RUNNING-tilassa
  - Kokeilukapasiteetti **ei** riitä AI Functions -toimintoihin
- [ ] Sinulla (tai kollegallasi) on kapasiteetin ylläpitäjän oikeudet TAI työtila on jo liitetty F2+:aan
- [ ] Tenant-ylläpitäjä on ottanut tarvittavat asetukset käyttöön (katso §3)
- [ ] Fabric-työtila liitetty kyseiseen F2+-kapasiteettiin
- [ ] Voit luoda Lakehousen kyseiseen työtilaan
- [ ] Fabric-notebook ajaa yksinkertaisen PySpark-solun onnistuneesti
- [ ] Ei-arkaluonteinen taulukkomuotoinen datajoukko valmiina (katso §4)
- [ ] Olet valinnut **yhden** tekoälyrikastuksen (luokittelu / tiivistys / poiminta)

## 2. Miksi F2+ eikä kokeiluversio

AI Functions on **maksullisen kapasiteetin ominaisuus**. Fabricin **kokeilukapasiteetit** ja maksuton taso **eivät** voi käyttää niitä. Jos käytössäsi on vain kokeiluversio, pyydä kollegaa liittämään workspace maksulliseen F2+-kapasiteettiin tai suunnittele käyttäväsi H3:ssa **PySpark-sääntöpohjaista fallbackia** (se on edelleen hyväksytty tapa suorittaa polku loppuun).

## 3. Tenantin ylläpitoasetukset (varmista nämä)

Pyydä **Fabric/Power BI -tenant-ylläpitäjääsi** vahvistamaan, että nämä ovat **käytössä** ryhmällesi:

- **Copilot ja AI-ominaisuudet** on otettu käyttöön tenantissa / kapasiteetissasi.
- Kapasiteetin alue **tukee** AI-ominaisuuksia (osa ominaisuuksista on aluerajoitettuja).
- Organisaatiosi vaatima **"data sent to Azure OpenAI"** -hallintakytkin on hyväksytty.

:::note[Eri organisaatioiden todellisuus]
Osallistujat tulevat eri yrityksistä ja tenanteista. **Jokainen varmistaa oman tenantinsa.** Älä oleta, että tiimikaverin toimiva ympäristö tarkoittaa oman ympäristösi toimivan — tenant-kytkimet ovat tenant-kohtaisia.
:::

## 4. Tuo oma data (tai käytä fallbackia)

**Soveltuvuus tälle polulle:** **taulukkomuotoinen** data (CSV / Parquet), jossa on **AI-rikastukseen** sopiva sarake — vapaatekstiä luokiteltavaksi, pitkää tekstiä tiivistettäväksi tai kenttiä poimittavaksi.

**Säännöt:**

- **Vain ei-arkaluonteista dataa** — julkista, synteettistä tai yrityksen hyväksymää. Ei asiakkaiden henkilötietoja.
- **Kohtuullinen koko** — tuhansia rivejä; rajaa suuremmat aineistot, jotta AI-kutsut pysyvät nopeina ja edullisina.
- Vähintään yksi **tekstisarake**, joka hyötyy AI-rikastuksesta (koko silver-vaiheen tarkoitus).

**Eikö sinulla ole dataa? Suosi suomalaisia avoimia datalähteitä — yleisö on suomalainen:**

| Datajoukko | Miksi se sopii | Lähde |
|---------|-------------|--------|
| **Tilastokeskuksen avoin data** (StatFin / PxWeb) | Suomalaista tilastodataa taulukkomuodossa; suomenkielistä tekstiä rikastettavaksi | <https://stat.fi/> · <https://pxdata.stat.fi/> |
| **Avoindata.suomi.fi** | Suomen julkishallinnon avoimen datan portaali; runsaasti CSV-aineistoja | <https://avoindata.suomi.fi/> |
| **NYC Taxi** (Fabricin sisäinen esimerkki) | Yksi napsautus Fabricissa; suuri, taulukkomuotoinen ja tunnettu | Fabric → Sample data |
| **Eurostat CSV extract** | Julkinen, taulukkomuotoinen, monikielistä tekstiä rikastettavaksi | <https://ec.europa.eu/eurostat/data/database> |
| **Mikä tahansa julkinen arvostelu- / tukipyyntö-CSV** | Runsaasti vapaatekstiä → ihanteellinen luokitteluun/tiivistämiseen | julkinen Kaggle/Gov data |

## 5. Rakennettava AI-rikastus

Päätä **yksi** rikastus nyt, jotta H3 on toteutusta eikä ideointia. Hyviä ensimmäisiä valintoja:

- **Luokittele** vapaatekstisarake kategorioihin (`ai.classify`).
- **Tiivistä** pitkä teksti yhdeksi virkkeeksi (`ai.summarize`).
- **Poimi** rakenteinen kenttä (esim. sentimentti, entiteetti) tekstistä.

## 6. Tunnetut virhetilanteet

| Oire | Korjaus |
|---------|-----|
| AI Functions ei näy notebookissa | Kapasiteetti ei ole F2+ tai tenant-kytkin on pois päältä → §1–§3 |
| `Capacity not found` / rajoitus | Kapasiteetti on keskeytetty tai alimitoitettu → jatka/suurenna tai käytä fallbackia |
| Notebook ei liity lakehouseen | Workspace ei ole F2+-kapasiteetissa → määritä workspace uudelleen |
| AI-kutsut epäonnistuvat alueen vuoksi | Ominaisuus ei ole käytettävissä kapasiteetin alueella → §3 tai fallback |
| Ei kapasiteetin ylläpitäjän oikeuksia | Käytä kollegan F2+-workspacea tai tee PySpark fallback |

Kun jokainen kohta §1:ssä on merkitty valmiiksi — ja mieluiten nopean AI Functions -savukokeen jälkeen — olet valmis **H1**:een, jossa tämä kaikki varmistetaan virallisesti.
