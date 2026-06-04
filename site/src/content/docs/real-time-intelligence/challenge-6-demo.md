---
title: "H6: Demon valmistelu"
description: Paketoi live-suoratoistosi, KQL-oivalluksesi ja Activator-hälytyksesi lyhyeksi esittelyksi.
sidebar:
  order: 8
  label: "H6: Demon valmistelu"
  badge:
    text: 15 min
    variant: tip
prev:
  link: ../challenge-5-dashboard/
  label: "H5: Koontinäyttö (dashboard)"
next:
  link: ../wrap-up/
  label: Yhteenveto
---

:::note[Haasteen tiedot]
⏱️ **15 min** · 🧩 **Valinnainen (mutta tee se)** · 🤖 agentti: tarinankertoja
:::

:::tip[Tämä on tarkistuslista, ei rakennustehtävä]
Kokoa se, mitä sinulla on. Vau-hetki on yksinkertainen: **live-tapahtuma ylittää ehdon ja
Activator lähettää hälytyksen tai käynnistää toiminnon.**
:::

## Tavoite

- **Tee nyt:** Harjoittele tiivis demotarina yhdellä live-laukaisimella.
- **Lähtötiedot:** H1–H4:n toimiva polku sekä koontinäyttö, jos se on valmis.
- **Tulos:** Lyhyt demotarina, jossa ovat käsikirjoitus, vau-hetki, rajoite ja seuraava vaihe.
- **Vaaditaan etenemiseen:** Voit ajaa demon nopeasti selittämättä valmistelua.
- **Päätökset nyt:** Live-laukaisin vai toistettu laukaisin; kuka puhuu; kuka ohjaa.
- **Seuraavaksi:** Yhteenveto ja esittely.

## Liiketoimintahaaste

Reaaliaikainen demo voi romahtaa työkalujen klikkailuksi. Tehtäväsi on näyttää liiketoimintasilmukka:
**tapahtuma tapahtuu → KQL selittää sen → Activator toimii → tiimi tietää, mitä tehdä seuraavaksi**.

## Tehtäväsi

1. Valitse yksittäinen tapahtuma tai toistovaihe, jonka pitäisi laukaista Activator-sääntö.
2. Kirjoita **lyhyt käsikirjoitus**:
   - ongelma ja lähde;
   - live-suoratoisto ja KQL-oivallus;
   - Activator-laukaisin ja toiminto;
   - rajoite ja seuraava vaihe.
3. Valmistele varasuunnitelma, jos live-tapahtuma ei saavu: laske kynnystä, toista yksi rivi tai näytä
   viimeisin onnistuneen hälytyksen näyttö.
4. Kirjaa yksi rajoite rehellisesti: viive, tenant-käytäntö, esimerkkidata, koontinäytön päivitys tai skaala.
5. Harjoittele tarina ja pidä tarvittavat linkit, nimet ja varasuunnitelma valmiina.

## Keskeiset päätökset

- **Vau-hetki:** mikä live-tapahtuma saa huoneen ymmärtämään arvon?
- **Varasuunnitelma:** mitä todistetta näytät, jos laukaisin on hidas?
- **Kertoja vs. ohjaaja:** kuka puhuu, kuka klikkaa, kuka seuraa hälytystä?
- **Seuraava vaihe:** mikä tekisi tästä tuotantokelpoisen?

## Tuotokset

- Valmis demotarina, joka sisältää:
  - lyhyen käsikirjoituksen;
  - laukaisinsuunnitelman;
  - varasuunnitelman;
  - rajoitteen;
  - seuraavan vaiheen;
  - linkit tai nimet Eventstreamille, KQL Database -kohteelle, koontinäytölle (dashboard) ja Activator-säännölle.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Tarina selkeä | Liiketoimintasilmukka on nopeasti ilmeinen | Käsikirjoitus mahtuu yhdelle sivulle |
| Laukaisin valmis | Live- tai toistettu hälytyspolku on harjoiteltu | Laukaisin ja varasuunnitelma |
| Rehellinen lopetus | Rajoite ja seuraava vaihe on nimetty | Demo |

## Vinkit

<details>
<summary>Aloita hälytyksestä, älä arkkitehtuurista</summary>

Aloita kertomalla, minkä päätöksen hälytys auttaa tekemään. Näytä arkkitehtuuri vasta sen jälkeen
todisteena siitä, että ratkaisu on live-tilassa ja toistettavissa.

</details>

<details>
<summary>Pidä yksi näyttökuva varalla</summary>

Reaaliaikaiset järjestelmät riippuvat ajoituksesta. Pidä onnistuneesta testistä näyttökuva tai hälytysviesti,
jotta tarinasi kestää hiljaisen suoratoiston.

</details>

## Huomioi nämä

- Älä käytä demoa Fabric-valikoissa navigointiin. Avaa Eventstream, KQL-kysely, koontinäyttö ja
  Activator-sääntö etukäteen.
- Älä piilota rajoitteita. Tuomarit luottavat tiimeihin, jotka tietävät, mikä on vielä keskeneräistä.
- Älä anna valinnaisen koontinäytön varjostaa ydintä: hälytys/toiminto on loppupalkinto.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Activator-hälytys ja valinnainen koontinäyttö |
| **Sinun tuotoksesi** | Harjoiteltu demotarina |
| **Seuraava vaihe** | Yhteenveto käyttää tarinaa tiimidemoissa |

## Seuraava vaihe

Olet valmis näyttämään muille suoratoiston, joka huomaa ja toimii.
