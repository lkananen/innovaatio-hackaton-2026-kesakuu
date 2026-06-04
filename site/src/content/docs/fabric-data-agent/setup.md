---
title: "Valmistelu ja valmiustarkistus"
description: Tarkista, että maksullinen Fabric-kapasiteetti, tenant-asetukset, käyttöoikeudet ja BI-muotoinen datajoukko ovat kunnossa ennen aloitusta.
sidebar:
  order: 2
---

:::caution[Vaatimukset — tarkista ennen aloitusta]
Fabric data agent -ominaisuudet vaativat **maksullisen Fabric-kapasiteetin (F2+)** tai kelpoisen Premium-kapasiteetin,
oikeat **Copilot / data-agentin tenant-asetukset** ja luettavat tietolähteet. Trial-kapasiteetti on
tavallinen este. Kapasiteetti- ja ylläpitoasetuksia ei voi korjata luotettavasti paikan päällä, joten
tarkista, että ne ovat kunnossa ennen aloitusta.
:::

:::note[Maksuton vs. maksullinen taso]
- **Maksuton (Fabric Trial):** Voit rakentaa Lakehousen ja Power BI:n semanttisen mallin sekä ajaa PySpark-notebookeja. **Fabric data agent -kohde ei ole käytettävissä** trial-kapasiteetilla.
- **Vaadittu maksullinen taso:** **F2** tai suurempi (tai Power BI Premium, jossa Fabric on käytössä).
- **Mitä F2 tuo lisää:** avaa **Fabric data agent** -kohteen — luonnollisen kielen kyselyt semanttisia malleja vastaan. Ilman maksullista kapasiteettia aja polku fasilitaattorin demona tai valitse muu polku.
:::

## 1. Valmiustarkistuslista

Käy lista läpi ja varmista, että jokainen kohta on kunnossa ennen kuin aloitat:

- [ ] Microsoft Fabric -kapasiteetti, SKU F2 tai suurempi, RUNNING-tilassa
  - Fabric Trial **ei** riitä tälle polulle
- [ ] Fabric-työtila on liitetty kyseiseen maksulliseen kapasiteettiin
- [ ] Tenant-ylläpitäjä on ottanut Copilot / Azure OpenAI -pohjaiset ominaisuudet käyttöön ryhmällesi
- [ ] Tenantisi vaatimat data-agentin AI-asetukset on hyväksytty, mukaan lukien cross-geo-asetukset, jos niitä käytetään
- [ ] Voit luoda Lakehousen työtilaan
- [ ] Voit luoda Power BI:n semanttisen mallin työtilaan tai käyttää sellaista
- [ ] Sinulla on Read-käyttöoikeus kaikkiin semanttisiin malleihin, jotka liität data-agenttiin
- [ ] Näet Fabric data agent -kohteen kohdassa **+ New item** (ei harmaana)
- [ ] Power BI / Fabric -käytössä oleva tili, jolla voit kirjautua osoitteessa https://app.fabric.microsoft.com
- [ ] Ei-arkaluonteinen analyyttinen datajoukko valmiina (katso §3)

## 2. Miksi F2+ eikä trial

Fabric data agent on **maksullisen kapasiteetin ominaisuus**. Microsoft Learn listaa ennakkovaatimukseksi maksullisen
**F2 tai suuremman** Fabric-kapasiteetin tai kelpoisen Power BI Premium -kapasiteetin, jossa Fabric on käytössä.
Jos ainoa saatavilla oleva kapasiteetti on Trial, käytä tätä polkua fasilitaattorin demona tai siirry
muulle kuin Fabric-polulle.

## 3. Tuo oma data (tai käytä varavaihtoehtoa)

**Soveltuvuus tälle polulle:** taulukkomuotoinen / analyyttinen BI:hin sopiva data — mieluiten pieni
tähtimalli tai muutama toisiinsa liittyvä taulu, joissa on faktoja, dimensioita, päivämääriä ja mittareita, joista ihmiset
oikeasti kysyvät.

**Säännöt:**

- **Vain ei-arkaluonteista dataa** — julkista, synteettistä tai organisaation hyväksymää. Ei asiakkaiden PII-tietoja.
- **Kohtuullinen koko** — tuhansista muutamaan miljoonaan riviin sopii; pidä hackathon-lataukset nopeina.
- Sisällytä **3–5 liiketoimintakysymystä**, joihin odotat agentin vastaavan.
- Suosi selkeitä taulu- ja sarakenimiä. Data-agentit toimivat paremmin kuvaavilla skeemoilla.

**Ei dataa? Suosi suomalaisia avoimia datalähteitä — yleisö on suomalainen:**

| Datajoukko | Miksi se sopii | Lähde |
|---------|-------------|--------|
| **Tilastokeskuksen StatFin** (PxWeb-rajapinta) | Suomalaisia faktoja ja dimensioita (alue, aika, mittarit); ihanteellinen BI-kysymyksiin | <https://stat.fi/> · <https://pxdata.stat.fi/> |
| **Avoindata.suomi.fi** | Suomen julkishallinnon avoin data; valmiita taulukkoaineistoja | <https://avoindata.suomi.fi/> |
| **NYC Taxi** (Fabricin sisäänrakennettu esimerkki) | Yhden klikkauksen Fabric-esimerkki; faktat, päivämäärät, maantiede, maksut | Fabric-portaalin esimerkkidata / Lakehouse-opas |
| **Eurostat multi-table CSV extract** | Julkista tilastodataa; dimensioita + faktoja; hyvä sanastotyöhön | <https://ec.europa.eu/eurostat/data/database> |
| **AdventureWorks / Contoso** | Klassinen myyntimalli, jossa on tuotteita, asiakkaita, päivämääriä ja mittareita | <https://learn.microsoft.com/sql/samples/adventureworks-install-configure> |

## 4. Tenant-ylläpitoasetukset (varmista nämä)

Pyydä **Fabric / Power BI -tenant-ylläpitäjää** varmistamaan, että nämä ovat **käytössä** ryhmällesi:

- **Users can use Copilot and other features powered by Azure OpenAI**.
- Kaikki vaaditut asetukset, joilla **Azure OpenAI:lle lähetettävää dataa voidaan käsitellä kapasiteettisi maantieteellisen
  alueen, vaatimustenmukaisuusrajan tai kansallisen pilvi-instanssin ulkopuolella**.
- Työtila on liitetty **tuettuun alueeseen** Copilotin / data-agentin käyttöä varten.
- Kapasiteettitason delegoidut tenant-asetukset, jos organisaatiosi käyttää niitä, sallivat ryhmäsi.

:::note[Eri organisaatioiden todellisuus]
Osallistujat tulevat eri organisaatioista ja tenanteista. **Jokainen varmistaa oman tenantinsa.**
Älä oleta, että tiimikaverin toimiva ympäristö tarkoittaa sinun ympäristösi toimivan — tenant-asetukset ovat tenant-kohtaisia.
:::

## 5. Tunnetut vikatilanteet

| Oire | Todennäköinen syy | Korjaus |
|---------|--------------|-----|
| Fabric data agent -vaihtoehto on harmaana tai puuttuu | Trial-SKU, ei-tuettu alue tai tenant-asetus pois käytöstä | Siirry F2+-työtilaan ja pyydä tenant-ylläpitäjää ottamaan asetukset käyttöön |
| Kapasiteetti näkyy Paused-tilassa | Laskutus pysähtynyt / kapasiteetti keskeytetty | Jatka kapasiteettia ennen H1:tä |
| Työtila ei voi luoda Lakehousea | Työtilaa ei ole liitetty kapasiteettiin tai rooli puuttuu | Liitä työtila uudelleen; pyydä Contributor/Member-roolia tarpeen mukaan |
| Semanttista mallia ei voi lisätä | Sinulta puuttuu mallikohtainen Read-käyttöoikeus | Pyydä omistajaa myöntämään Read; Write tarvitaan vain mallin muokkaamiseen |
| Agentti näkee tiedostot mutta ei tauluja | CSV/JSON ei ole näkyvissä lakehouse-tauluina | Ingestoitu | CSV/JSON ei ole näkyvissä lakehouse-tauluina | Tuo tiedostot Delta-tauluihin ennen H4:ää |
| Vastaukset ohittavat liiketoimintamääritelmät | Mittareita, suhteita tai ohjeita puuttuu | Korjaa semanttinen malli ja lisää sanasto/ohjeet vaiheissa H3–H5 |
| Cross-workspace-lähde epäonnistuu | Kapasiteetin alue ei täsmää tai lähtevän liikenteen käyttöoikeuskäytäntö estää | Pidä lähteet samalla kapasiteettialueella tai pyydä ylläpitäjää sallimaan käyttö |

Kun jokainen §1:n kohta on rastitettu, olet valmis **H1**:een, joka varmistaa kaiken tämän virallisesti.