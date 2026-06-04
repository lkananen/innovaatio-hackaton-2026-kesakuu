---
title: "Valmistelu ja valmiustarkistus"
description: Tarkista maksullinen kapasiteetti ja suoratoistolähde ennen aloitusta.
sidebar:
  order: 2
---

:::caution[Vaatimukset — tarkista ennen aloitusta]
Real-Time Intelligence on erinomainen, kun työtila on valmis — ja pysäyttää työn kokonaan, jos se
ei ole. **Maksullinen Fabric F2+ -kapasiteetti**, työtilan liitos, käyttöoikeudet ja tenantin
näkyvyys ovat tämän polun edellytys. Näitä — kapasiteettia, tenant-asetuksia tai Event Hubs -käyttöoikeuksia — ei voi korjata
paikan päällä, joten tarkista, että ne ovat kunnossa ennen aloitusta.
:::

:::note[Maksuton vs. maksullinen taso]
- **Maksuton (Fabric Trial):** Useimmat Real-Time Intelligence -kohteet (Eventstream, Eventhouse, KQL Database, Real-Time Dashboard, Activator) toimivat kokeilukapasiteetilla, joten polun voi käydä läpi sillä.
- **Vaadittu maksullinen taso:** **F2** tai suurempi vakaata, ei-vanhenevaa käyttöä varten.
- **Mitä F2 tuo lisää:** pysyvä kapasiteetti ilman 60 päivän kokeilurajaa, ennustettava suorituskyky tapahtumavirroille ja luotettavat Activator-toiminnot tuotantotyyppisessä käytössä.
:::

## 1. Valmiustarkistuslista

Käy lista läpi ja varmista, että jokainen kohta on kunnossa ennen kuin aloitat:

- [ ] Microsoft Fabric -kapasiteetti, SKU F2 tai suurempi, RUNNING-tilassa
- [ ] Fabric-työtila liitetty kyseiseen maksulliseen F2+-kapasiteettiin
- [ ] Real-Time Intelligence -kohteet näkyvät Fabricissa / Real-Time hubissa
- [ ] Sinulla on Contributor- tai korkeammat oikeudet työtilassa
- [ ] Voit luoda Eventstreamin kyseiseen työtilaan
- [ ] Voit luoda Eventhousen ja KQL Databasen kyseiseen työtilaan
- [ ] Sinulla on ei-arkaluonteinen tapahtumalähde valmiina, tai käytät esimerkkidataa
- [ ] Toimintokohteesi on sallittu: sähköposti, Teams, Power Automate tai Fabric-kohde

## 2. Tuo oma data (tai käytä varavaihtoehtoa)

**Kelpoisuus tälle polulle:** **suoratoistava tai vain lisäävä tapahtumalähde**. Hyviä lähtötietoja ovat
telemetria, tilamuutokset, lokit, jonoviestit, IoT-tyyliset mittaukset tai CSV-rivit, jotka toistetaan
tapahtumina.

**Säännöt:**

- **Vain ei-arkaluonteista dataa** — julkista, synteettistä tai organisaation hyväksymää. Ei asiakkaiden henkilötietoja.
- Sisällytä **aikaleima**, **liiketoimintaobjektin avain** (laite, asema, tili, omaisuuserä) ja yksi
  numeerinen tai kategorinen kenttä, jota kannattaa seurata.
- Pidä tapahtumatahti maltillisena hackathonissa. Tarvitset uskottavaa liikettä, et kuormitustestiä.

**Ei suoratoistoa? Suosi suomalaisia avoimia reaaliaikaisia lähteitä — yleisö on suomalainen:**

| Varavaihtoehto | Miksi se sopii | Huomautukset |
|---------|-------------|-------|
| **Fingridin avoin data** (sähköjärjestelmän reaaliaikadata) | Suomalainen reaaliaikainen avoin rajapinta uskottavalla liikkeellä | Hae rajapinnasta ja toista Eventstreamiin · <https://data.fingrid.fi/> · <https://avoindata.suomi.fi/> |
| **Digitraffic / Ilmatieteen laitos** (liikenne- ja säärajapinnat) | Suomalaisia reaaliaikaisia avoimia rajapintoja; aikaleimat ja mittarit valmiina | <https://www.digitraffic.fi/> · <https://avoindata.suomi.fi/> |
| **Sisäänrakennettu Eventstream-esimerkkidata** | Yhden napsautuksen lähde tunnetulla skeemalla; nopein varavaihtoehto | Vaihtoehtoina ovat Bicycles, Yellow Taxi, Stock Market, Buses, S&P 500 stocks ja Semantic Model Logs |
| **Julkinen reaaliaikainen / IoT-tyylinen CSV toistettuna** | Voit tuoda toimialatarinan ilman live-infrastruktuuria | Toista rivejä aikaleiman mukaan paikallisesta skriptistä, notebookista tai hyväksytystä connectorista |
| **Azure Event Hubs free-tier** | Lähimpänä tuotannon mukautettua lähdettä | Luo pieni Event Hub, lähetä synteettistä JSONia ja yhdistä se sitten Eventstream-lähteeksi |

## 3. Palveluntarjoajat, alueet ja tenant-asetukset

Pyydä Fabric / Power BI -järjestelmänvalvojaa tai kapasiteetin omistajaa vahvistamaan:

- Kapasiteetti on **F2+**, **Running** ja liitetty työtilaan.
- Real-Time Intelligence, Eventstream, Eventhouse, Real-Time Dashboard ja Activator ovat
  käytettävissä tenantissasi ja alueellasi.
- Teams-/sähköposti-/Power Automate -toiminnot ovat käyttäjillesi sallittuja, jos aiot käyttää niitä.
- Jos käytät Azure Event Hubsia, sinulla on oikeat Azure-tilauksen/resurssiryhmän käyttöoikeudet eikä
  salaisuuksia commitata Gitiin.

:::note[Real-Time hub]
Real-Time hub on tenant-laajuinen ja se valmistellaan automaattisesti. Se auttaa löytämään suoratoistoja, KQL-
tauluja sekä Fabric/Azure-tapahtumia, joihin sinulla on käyttöoikeus, ja ohjaa sitten Eventstream-, KQL Database-
tai Activator-työhön.
:::

## 4. Tunnetut virhetilanteet

| Oire | Korjaus |
|---------|-----|
| Real-Time Intelligence ei näy | Trial-/tenant-/alueasetusongelma → siirry vahvistettuun maksulliseen F2+-työtilaan |
| Kapasiteetti on keskeytetty tai rajoitettu | Käynnistä kapasiteetti uudelleen; jos et ole kapasiteetin järjestelmänvalvoja, käytä tiimikaverin valmista työtilaa |
| Eventstream/Eventhousea ei voi luoda | Työtilaa ei ole liitetty kapasiteettiin tai käyttöoikeudet ovat alle Contributor-tason |
| Eventhouseen ei tule rivejä | Tarkista, että Eventstream on julkaistu, kohde määritetty, ingestion aktiivinen ja taulukartoitus valmis |
| KQL ei palauta rivejä | Käytä oikeaa taulua ja aikaleimasaraketta; laajenna `ago(...)`-ikkunaa vianetsinnän aikana |
| Activator ei laukaise | Tarkista objektin tunniste, ehto, esiintymien määrä, tarkasteluväli/ikkuna ja toimintojen käyttöoikeudet |

Kun jokainen §1:n kohta on merkitty tehdyksi, olet valmis **H1**:een, joka varmistaa tämän kaiken muodollisesti.
