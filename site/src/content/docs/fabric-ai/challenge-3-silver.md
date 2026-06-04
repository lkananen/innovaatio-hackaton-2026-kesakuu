---
title: "H3: Silver + AI Functions"
description: Puhdista bronze silveriksi ja lisää sarakkeita, joita vain AI voi tuottaa — mukana PySpark-sääntöpohjainen fallback.
sidebar:
  order: 5
  label: "H3: Silver + AI"
  badge:
    text: 45 min
    variant: note
prev:
  link: ../challenge-2-bronze/
  label: "H2: Bronze-tuonti"
next:
  link: ../challenge-4-gold/
  label: "H4: Gold + raportti"
---

:::note[Haasteen tiedot]
⏱️ **45 min** · 🧩 **Ydin (hyöty realisoituu)** · 🤖 agentti: rikastusinsinööri
:::

## Tavoite

- **Tee nyt:** Puhdista bronze ja lisää **AI-rikastettuja** sarakkeita silverin rakentamiseksi.
- **Lähtötiedot:** Kyseltävä `bronze`-taulu ja jäljitettävä lataus (H2).
- **Tulos:** Toimiva `silver`-taulu, jossa on AI-rikastettu sarake ja selkeä fallback-polku.
- **Vaaditaan etenemiseen:** Silverissä on vähintään **yksi rikastettu sarake**, joka on täytetty riveillesi (AI Functions -polku **tai** PySpark fallback — molemmat kelpaavat).
- **Päätökset nyt:** Mikä rikastus, miten käsitellään virheet/null-arvot, AI vai fallback-polku.
- **Seuraavaksi:** H4 kuratoi silverin gold-malliksi + raportiksi.

## Liiketoimintahaaste

Silverissä datasta tulee **hyödyllistä**: puhdistettua, tyypitettyä ja — ainutlaatuisesti tällä polulla — **älyllä täydennettyä**. AI Functions antaa lisätä sarakkeen (kategoria, tiivistelmä, sentimentti), jota **mikään deterministinen sääntö ei voisi tuottaa**. Tämä rikastettu sarake on demosi keskipiste.

## Tehtäväsi

1. Puhdista bronze → silver: korjaa tyypit, käsittele null-arvot, poista roskarivit. Perustason medallion-työtä.
2. Lisää **AI-rikastus** tekstisarakkeeseen käyttämällä **AI Function** -toimintoa (`ai.classify`, `ai.summarize` tai poiminta) ja kirjoita tulos uuteen silver-sarakkeeseen.
3. Käsittele **virheet ja kutsurajoitukset**: null-arvot/epäonnistumiset eivät saa kaataa ajoa — tallenna ne.
4. Varmista, että rikastus, käytetty kehote/toiminto, odotettu tulos ja **fallbackin toiminta** ovat ymmärrettäviä tiimille ja tuomareille.

:::tip[Fallback-polku (ei AI Functions -toimintoja?)]
Jos H1 ohjasi sinut fallbackiin, toteuta rikastus **PySpark-sääntöpohjaisena** muunnoksena (avainsanasäännöt, regex, yksinkertaiset heuristiikat) samaan silver-sarakkeeseen. Toteutuksen täytyy tehdä **sekä** AI-lähestymistapa että sääntöpohjainen tapa ymmärrettäviksi. Tämä on hyväksytty suoritus.
:::

## Keskeiset päätökset

- **Rikastusvalinta:** luokittele / tiivistä / poimi — valitse se, jolla on paras demovaikutus.
- **Erä vs. rivi:** kutsu AI Function -toimintoa koko sarakkeelle tehokkaasti, älä rivi kerrallaan, jos sen voi välttää.
- **Virhekäytäntö:** null epäonnistuessa + lippusarake, jotta näet kattavuuden.
- **Kustannusten hallinta:** rajaa tapahtuman aikana rikastettavat rivit; arvioi täyden mittakaavan kustannus.

## Tuotokset

- `silver` Delta -taulu, jossa rikastettu sarake (AI-polku tai fallback) on täytetty.
- Ymmärrettävä rikastuslogiikka: AI- **ja** fallback-lähestymistavat ovat selitettävissä.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Puhdistettu | Silver on tyypitetty, null-arvot käsitelty, duplikaatit poistettu | Skeema + esikatselu |
| Rikastettu | Sarake, jonka vain AI/säännöt voisivat tuottaa, on täytetty | Esimerkkirivit |
| Kestävä | Epäonnistumiset tallennetaan, ajo ei kaadu | Virheiden/kattavuuden käsittely |

## Vinkit

<details>
<summary>Näytä arvo, älä pelkkää kutsua</summary>

Vaikuttavaa ei ole "kutsuin AI Function -toimintoa" — vaan **uusi sarake**: sotkuinen vapaateksti muuttuu siistiksi kategoriaksi tai yhden rivin tiivistelmäksi. Tee tämä kontrasti näkyväksi (raakateksti johdetun arvon vieressä) demoasi varten.

</details>

<details>
<summary>Rajaa rivit ajan ja kustannusten hallitsemiseksi</summary>

Rikasta tapahtuman aikana edustava otos (esim. ensimmäiset 500 riviä). Arvioi kustannus ja aika koko datajoukon rikastamiselle — se on rehellinen operatiivinen tarina.

</details>

## Huomioi nämä

- Älä rikasta koko datajoukkoa sokkona — AI-kutsut maksavat rahaa ja aikaa; rajaa ensin.
- Älä anna yhden epäonnistuneen rivin kaataa putkea — käytä null-arvoa ja lippua.
- Älä ohita fallback-ajattelua, vaikka AI Functions toimisi — se osoittaa, että ymmärsit riippuvuuden.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | `bronze`-taulu (H2) |
| **Sinun tuotoksesi** | AI-rikastettu `silver`-taulu ja toimiva fallback-polku |
| **Seuraava vaihe** | H4 kuratoi silverin gold-malliksi + raportiksi |

## Seuraava vaihe

Datasi on rikastettu. **H4** kuratoi sen **gold**-malliksi ja rakentaa raportin sen päälle.
