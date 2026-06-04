---
title: Yhteenveto ja demot
description: Tiimidemot, palkintokategoriat ja opit Fabric AI Functions -polulta.
sidebar:
  order: 9
  label: Yhteenveto
  badge:
    text: Showcase
    variant: success
prev:
  link: ../challenge-6-demo/
  label: "H6: Demon valmistelu"
---

## Rakensit AI-rikastetun medallion lakehousen

Tiimisi rakensi raakadatasta kuratoituun raporttiin **bronze → silver → gold** lakehousen Microsoft Fabricissa ja käytti **AI Functions** -toimintoja (tai PySpark fallbackia) lisätäkseen sarakkeen, jota mikään sääntö ei voisi tuottaa — ja muutti sen liiketoimintaoivallukseksi.

```mermaid
flowchart LR
  A[Ympäristövalmius] --> B[Bronze-lataus]
  B --> C[AI-rikastettu silver]
  C --> D[Kuratoitu gold-malli]
  D --> E[Orkestroitu ajo]
  E --> F[Ytimekäs demo]
```

## Demoformaatti

- **Lyhyt demo per tiimi**, sitten aikaa muutamalle kysymykselle.
- Näytä kärkikuva: **raakateksti → AI-rikastettu sarake → raporttivisuaali.**
- Kerro, käytitkö AI Functions -toimintoja vai fallbackia — molemmat kelpaavat.

## Palkintokategoriat

| Palkinto | Mitä se tunnistaa |
| --- | --- |
| ✨ **Paras AI-rikastus** | Arvokkain AI-johdettu sarake |
| 🏗️ **Siistein medallion** | Paras bronze/silver/gold-erottelu ja kurinalaisuus |
| 📊 **Paras oivallus** | Raportti, joka kertoo selkeimmän liiketoimintatarinan |
| 🔁 **Paras putki** | Kestävin ja hyvin orkestroitu päästä päähän -ajo |

## Mitä viet mukanasi

- **Bronze pysyy raakana** — jokainen varhainen "korjaus" on muunnos, jota et voi perua.
- AI Functions loistaa, kun rikastettu sarake on **mahdoton säännöillä** — valitse sellaiset käyttötapaukset.
- Pidä aina **fallback**: maksullisen kapasiteetin ominaisuusriippuvuus on todellinen operatiivinen riski.
- Rajaa AI-kutsut kehityksen aikana; tunne **täyden mittakaavan kustannus** ennen ajastamista.

## Jatka tapahtuman jälkeen

- Lisää datan laatutarkistuksia kerrosten väliin (rivimäärät, null-kynnysarvot).
- Muuta silver-rikastus uudelleenkäytettäväksi funktioksi eri datajoukoille.
- Seuraa AI-rikastuksen kustannusta ajoa kohti ja lisää kuluhälytykset.

Kiitos hackaamisesta. 🎉
