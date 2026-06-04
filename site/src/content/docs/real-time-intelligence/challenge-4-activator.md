---
title: "H4: Activator-hälytys"
description: Rakenna agenttinen hälytys Fabric Activatorilla, jotta data valvoo itseään ja toimii.
sidebar:
  order: 6
  label: "H4: Activator"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../challenge-3-kql/
  label: "H3: KQL-kyselyt"
next:
  link: ../challenge-5-dashboard/
  label: "H5: Koontinäyttö (dashboard)"
---

:::note[Haasteen tiedot]
⏱️ **35 min** · 🧩 **Ydin** · 🤖 agentti: hälytyssäännön suunnittelija
:::

## Tavoite

- **Tee nyt:** Luo yksi Fabric Activator -sääntö, joka laukeaa suoratoistosta tai koontinäytön (dashboard) datasta.
- **Lähtötiedot:** Toimivat KQL-kyselyt ja kenttä/kynnys, jota haluat valvoa.
- **Tulos:** Toimiva Activator-sääntö, jossa ehto, objektiavain, toiminto ja testinäyttö on varmistettu.
- **Vaaditaan etenemiseen:** Sääntö on luotu ja se joko laukeaa tai sille on dokumentoitu testisuunnitelma.
- **Päätökset nyt:** Ehto, esiintymien määrä, tarkasteluväli, toimintokohde ja vastaanottajat.
- **Seuraavaksi:** H5 muuttaa kyselyt valinnaisesti Real-Time Dashboardiksi.

## Liiketoimintahaaste

Koontinäytöt (dashboard) houkuttelevat ihmisiä seuraamaan jatkuvasti. Activator kääntää mallin: **data valvoo itseään
ja toimii**. Tavoitteesi on yksi uskottava sääntö, joka muuttaa live-ehdon ilmoitukseksi tai työnkuluksi.

## Tehtäväsi

1. Valitse yksi varmistettu H3-kysely tai kenttä, joka edustaa operatiivista ehtoa.
2. Määritä **liiketoimintaobjekti**: sarake, joka ryhmittelee tapahtumat (laite, asema, symboli, omaisuuserä).
3. Luo **Activator**-sääntö suoratoistosta, Real-Time Dashboard -ruudusta tai käytettävissä olevasta Fabric-
   hälytyksen aloituspisteestä.
4. Määritä ehto: kynnys, vertailu, esiintymien määrä, ryhmittely ja tarkasteluväli.
5. Aseta toiminto: sähköposti, Teams-ilmoitus, Power Automate -työnkulku tai Fabric-kohde, kuten
   pipeline/notebook, jos se on käytettävissä tenantissasi.
6. Testaa live- tai toistetulla datalla. Jos tapahtumaa ei synny luonnostaan, laske kynnystä
   väliaikaisesti ja dokumentoi testiarvo.
7. Varmista säännön suunnitelma ja näyttö talteen: ehto, kohde, toiminto ja testitulos.

## Keskeiset päätökset

- **Signaali:** mikä ehto on henkilön tai työnkulun keskeyttämisen arvoinen?
- **Ryhmittely:** pitäisikö säännön laueta objektikohtaisesti vai koko suoratoistolle?
- **Hälytysmelun hallinta:** kuinka monta esiintymää tarvitaan ennen toimintoa?
- **Toiminto:** ilmoitetaanko ihmiselle, käynnistetäänkö prosessi vai molemmat?

## Tuotokset

- Toimiva Activator-sääntö, jonka osalta on selvillä:
  - säännön nimi ja lähde;
  - objektitunniste ja valvottava ominaisuus;
  - ehto, kynnys, esiintymä ja tarkasteluväli;
  - toimintokohde ja viestimalli;
  - testinäyttö, mukaan lukien käytetty väliaikainen kynnys.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Sääntö määritetty | Objekti, ehto ja toiminto ovat eksplisiittisiä | Säännön asetukset |
| Toiminto määritetty | Sähköposti-/Teams-/flow-/Fabric-toiminto on tallennettu | Säännön toimintojen näyttökuva tai muistiinpano |
| Laukaisin todistettu | Sääntö laukeaa tai testisuunnitelma on toistettavissa | Laukaissut hälytys tai kynnystesti |

## Vinkit

<details>
<summary>Aloita meluisalla testillä ja tee siitä sitten järkevä</summary>

Aseta ensimmäiseen testiin kynnys, jonka pitäisi laueta nopeasti. Kun polku toimii, vaihda se
liiketoimintakynnykseen ja kirjaa molemmat arvot.

</details>

<details>
<summary>Käytä viestissä dynaamisia kenttiä</summary>

Activator-toiminnot voivat sisältää ominaisuuksia tapahtumasta tai valvotusta visualisoinnista. Sisällytä objektin
tunniste, nykyinen arvo, kynnys ja aika, jotta hälytys on toiminnallinen.

</details>

## Huomioi nämä

- Aika-akselin koontinäyttökaavioiden hälytyksissä on rajoituksia; suosi card/KPI-tyylistä signaalia
  nykyarvoille, jos uusin aikaväli muuttuu jatkuvasti.
- Tenant-käytäntö voi estää Teams-/kanavatoiminnot, vaikka sähköposti toimisi.
- Sääntö, joka laukeaa jokaisesta tapahtumasta, ei ole agenttinen — se on pelkkää hälyä. Lisää ryhmittely- ja esiintymälogiikka.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Toimivat KQL-kyselyt ja valittu signaali |
| **Sinun tuotoksesi** | Toimiva Activator-hälytys |
| **Seuraava vaihe** | H5 käyttää samaa kysely-/hälytyssignaalia koontinäytön (dashboard) pääruutuna |

## Seuraava vaihe

Ydinpolku valmis: suoratoisto, KQL ja toiminto. **H5**:ssä voit lisätä live-koontinäyttökerroksen.
