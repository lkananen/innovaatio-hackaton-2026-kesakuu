---
title: "H3: NL→SQL-kehotesopimus"
description: Rakenna agentti, joka muuttaa luonnollisen kielen kysymykset SQL:ksi skeemaasi ja sanastoosi perustuen.
sidebar:
  order: 5
  label: "H3: NL→SQL-sopimus"
  badge:
    text: 40 min
    variant: note
prev:
  link: ../challenge-2-glossary/
  label: "H2: Sanasto ja kultaiset kysymykset"
next:
  link: ../challenge-4-guardrails/
  label: "H4: Turvarajat"
---

:::note[Haasteen tiedot]
⏱️ **40 min** · 🧩 **Ydin** · 🤖 agentti: kehotesuunnittelija
:::

## Tavoite

- **Tee nyt:** Rakenna kysymys → SQL → vastaus -silmukka.
- **Lähtötiedot:** Tarkistettu skeemakäsitys + liiketoimintasanasto (H1–H2).
- **Tulos:** Ajettava agentti, jolla on selkeä järjestelmäkehote ja I/O-sopimus kysymysten muuttamiseen SQL:ksi.
- **Vaaditaan etenemiseen:** Vähintään **3/5** kultaista kysymystä palauttaa oikeat vastaukset.
- **Päätökset nyt:** Kuinka paljon skeemaa syötetään, tuotosmuoto, näytetäänkö SQL.
- **Seuraavaksi:** H4 tekee tuotetusta SQL:stä turvallista suorittaa.

## Liiketoimintahaaste

Tämä on agentin ydin: **sopimus** mallin kanssa, joka tuottaa luotettavasti kelvollista,
ankkuroitua SQL:ää. Rakentamasi skeema ja sanasto ovat ankkurointi; kehote on kohta, jossa
muutat ne oikeiksi kyselyiksi.

## Tehtäväsi

1. Kirjoita agenttisi avulla järjestelmäkehote, joka syöttää **skeemaprofiilin** ja **sanaston**
   ja ohjeistaa mallin palauttamaan **vain SQL:n** (sekä lyhyen perustelun).
2. Rakenna silmukka: `question → prompt → SQL → execute as agent_ro → format answer`.
3. **Näytä aina SQL**, jonka agentti suoritti, vastauksen rinnalla (luottamus + vianetsintä).
4. Aja kaikki **5 kultaista kysymystä**. Kirjaa läpäisy/hylkäys. Iteroi kehotetta, kunnes **≥ 3 läpäisee**.
5. Vakiinnuta lopullinen kehote ja sopimus niin, että sama toimintatapa on toistettavissa.

## Keskeiset päätökset

- **Kontekstin koko:** syötätkö koko profiilin vai vain olennaiset taulut? (Tokenit vs. tarkkuus.)
- **Tuotosmuoto:** vain SQL vai SQL + selitys? Miten jäsennät sen luotettavasti?
- **Murre:** lukitse PostgreSQL-syntaksi eksplisiittisesti, jotta malli ei ajaudu MySQL/T-SQL-suuntaan.
- **Few-shot:** lisäätkö 1–2 esimerkkiparia kysymys→SQL omasta sanastostasi?

## Tuotokset

- Ajettava agentti, joka vastaa NL-kysymyksiin ja näyttää SQL:n.
- Vakiintunut järjestelmäkehote, syötemuoto, tuotosmuoto ja jäsennyssäännöt.
- Läpäisy/hylkäys-taulukko viidelle kultaiselle kysymykselle.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Ankkuroitu SQL | Käyttää oikeita tauluja/sarakkeita ja oikeita liitoksia | SQL näytetään jokaisessa vastauksessa |
| Tarkkuus | ≥ 3/5 kultaista kysymystä oikein | Läpäisy/hylkäys-taulukko |
| Läpinäkyvä | Suoritettu SQL on aina näkyvissä | Demo |

## Vinkit

<details>
<summary>Tee tuotoksen jäsentämisestä yksinkertaista</summary>

Pyydä mallia palauttamaan SQL aidatussa ```sql-lohkossa tai JSON-kentässä. Deterministinen
muotoilu voittaa nokkelan regexin. Agentti voi kirjoittaa tämän jäsentimen sinulle.

</details>

<details>
<summary>Few-shot omasta sanastostasi</summary>

Yksi tai kaksi valmista kysymys→SQL-esimerkkiä (H2:sta otettuna) parantaa liitosten tarkkuutta merkittävästi.
Valitse esimerkit, jotka näyttävät hankalimman suhteesi.

</details>

## Huomioi nämä

- Älä vielä suorita SQL:ää etuoikeutettuna käyttäjänä — jatka `agent_ro`-käyttäjällä.
- Älä piilota SQL:ää; vastaus, jota et voi varmistaa, on arvoton.
- Älä ahda kehotteeseen kaikkia 50 saraketta, jos 8 riittää — olennaisuus voittaa määrän.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Tarkistettu skeemakäsitys + liiketoimintasanasto |
| **Sinun tuotoksesi** | Toimiva NL→SQL-agentti ja toistettava kehotekäytäntö |
| **Seuraava vaihe** | H4 ympäröi suorituksen turvarajakerroksella |

## Seuraava vaihe

Agenttisi vastaa kysymyksiin. **H4**:ssä varmistat, ettei se voi **koskaan** aiheuttaa vahinkoa.
