---
title: "H2: Eventstreamistä Eventhouseen"
description: Luo Eventstream esimerkki- tai omasta datasta, reititä se Eventhouseen ja osoita, että rivejä saapuu.
sidebar:
  order: 4
  label: "H2: Eventstream"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../challenge-1-readiness/
  label: "H1: Valmius"
next:
  link: ../challenge-3-kql/
  label: "H3: KQL-kyselyt"
---

:::note[Haasteen tiedot]
⏱️ **35 min** · 🧩 **Ydin** · 🤖 agentti: suoratoistomääritysten selittäjä
:::

## Tavoite

- **Tee nyt:** Luo live-Eventstream ja reititä se Eventhouseen.
- **Lähtötiedot:** Valmis Real-Time Intelligence -työtila ja valitsemasi lähde.
- **Tulos:** Live-Eventstream virtaa Eventhouse/KQL-tauluun, ja lähde, kohde, taulu sekä esimerkkirivi ovat tiedossa.
- **Vaaditaan etenemiseen:** KQL-taulu vastaanottaa rivejä ja voit esikatsella niitä.
- **Päätökset nyt:** Suora ingestion vai tapahtumien käsittely ennen ingestionia.
- **Seuraavaksi:** H3 muuttaa raakadataa sisältävän taulun hyödyllisiksi KQL-kyselyiksi.

## Liiketoimintahaaste

Reaaliaikainen tarina alkaa luottamuksesta: liikkuvatko tapahtumat oikeasti lähteestä tallennukseen?
Tiimisi tarvitsee yksinkertaisen, havainnoitavan suoratoistopolun ennen kuin kirjoitat nokkelia kyselyjä tai hälytyksiä.

## Tehtäväsi

1. Luo tälle polulle **Eventhouse** ja **KQL Database**.
2. Luo **Eventstream** samaan työtilaan.
3. Lisää lähde:
   - nopein polku: **Add source → Sample data** ja valitse Bicycles, Yellow Taxi tai Stock Market;
   - oman datan polku: yhdistä hyväksytty suoratoistolähde tai Event Hubs -lähde.
4. Lisää **Eventhouse**-kohde. Käytä **Direct ingestion** -vaihtoehtoa, ellet tarvitse suodatusta tai
   aggregointia ennen tallennusta.
5. Julkaise Eventstream ja määritä sitten kohdetaulu Eventhousen **Get data** -virrasta. Luo tarvittaessa uusi taulu.
6. Kyselytä tai esikatsele taulua, kunnes näet rivejä saapuvan; ota yksi edustava esimerkkirivi talteen seuraavaa vaihetta varten.

## Keskeiset päätökset

- **Lähteen muoto:** mitkä aikaleima-, objektitunniste-, metriikka- ja ulottuvuussarakkeet ovat tärkeitä?
- **Ingestion-tila:** suora ingestion nyt vai tapahtumien käsittely ennen ingestionia kuratoitua suoratoistoa varten?
- **Taulun nimeäminen:** mikä taulun nimi tekee H3-kyselyistä luettavia?
- **Skeemakartoitus:** pitääkö sarakkeita nimetä uudelleen tai tyypittää ennen ingestionia?

## Tuotokset

- Live-Eventstream, joka on julkaistu ja yhdistetty Eventhouse/KQL-tauluun.
- Varmistettu tieto lähteestä, kohteesta, taulusta, aikaleima- ja objektisarakkeista sekä yksi esimerkkirivi jatkokäyttöön.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Suoratoisto luotu | Eventstream on julkaistu lähteen kanssa | Live-näkymä näyttää lähteen |
| Kohde kytketty | Eventhouse/KQL-taulu määritetty | Kohdesolmu ja taulu ovat olemassa |
| Rivejä saapuu | KQL-esikatselu tai kysely palauttaa tuoreita rivejä | Esikatselu riveistä |

## Vinkit

<details>
<summary>Käytä esimerkkisuoratoistoa, jos olet aikataulusta jäljessä</summary>

Microsoftin esimerkkilähteissä on valmiiksi hyödylliset skeemat. Bicycles sopii erinomaisesti asemakohtaisiin
hälytyksiin; Stock Market sopii erinomaisesti kynnys- ja muutosääntöihin.

</details>

<details>
<summary>Pyydä agenttiasi selittämään putken sopimus</summary>

Kehote: *"Given this Eventstream source and KQL table schema, explain the streaming contract:
key fields, timestamp field, table grain, and what can break downstream queries."*

</details>

## Huomioi nämä

- Julkaisu käynnistää ingestionin ja reitityksen; jos rivejä puuttuu, tarkista, että kohde on määritetty loppuun asti.
- Älä muunna liikaa H2:ssa. Pidä raaka suoratoisto ymmärrettävänä ja kyselytä sitä H3:ssa.
- Älä kirjaa salaisuuksia tai yhteysmerkkijonoja muistiinpanoihin.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Valmis työtila ja valittu lähde |
| **Sinun tuotoksesi** | Live Eventstream → Eventhouse/KQL -suoratoistopolku |
| **Seuraava vaihe** | H3 käyttää taulua, aikaleimasaraketta, objektitunnistetta ja esimerkkiriviä KQL:n kirjoittamiseen |

## Seuraava vaihe

Rivit virtaavat. **H3**:ssa muutat tapahtumataulun toimiviksi KQL-kyselyiksi.
