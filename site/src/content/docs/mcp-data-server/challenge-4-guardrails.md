---
title: "H4: Turvarajat"
description: Kovenna MCP server niin, että agentin ohjaama tietokantakäyttö on vain luku, rajattua, todennettua ja auditoitavaa.
sidebar:
  order: 6
  label: "H4: Turvarajat"
  badge:
    text: 40 min
    variant: note
prev:
  link: ../challenge-3-connect/
  label: "H3: Yhdistä"
next:
  link: ../challenge-5-deploy/
  label: "H5: Käyttöönotto"
---

:::note[Haasteen tiedot]
⏱️ **40 min** · 🧩 **Ydin (turvallisuuden palkinto)** · 🤖 agentti: turvallisuusinsinööri
:::

## Tavoite

- **Tee nyt:** Tee vaarallisista tietokantatoiminnoista mahdottomia MCP serverin kautta.
- **Lähtötiedot:** Yhdistetty H3:n server, vain luku -DB-käyttäjä/identiteetti ja esimerkkikehotteet.
- **Tulos:** Kovennettu vain luku -suorituspolku, joka hylkää vaaralliset pyynnöt todistettavasti.
- **Vaaditaan etenemiseen:** Kirjoitus-/`DROP`-yritys hylätään ja normaalit lukukyselyt toimivat edelleen.
- **Päätökset nyt:** SQL:n sallittujen lista, riviraja, aikakatkaisu, parametrointi ja todennustapa.
- **Seuraavaksi:** H5 ottaa kovennetun serverin valinnaisesti käyttöön HTTP:n välityksellä.

Tämä on huippuhaaste. Demo ei ole vain *"Copilot voi kysellä tietokantaani"* —
se on *"Copilot voi kysellä tietokantaani turvallisesti."*

## Liiketoimintahaaste

MCP antaa agenteille voimaa. Voima tarvitsee rajat. Kehote "ole varovainen" ei ole
kontrolli; tietokantaoikeudet, SQL-validointi, aikakatkaisut ja identiteetti ovat kontrolleja. Serverisi
on kieltäydyttävä tuhoisista pyynnöistä, vaikka agentti tai käyttäjä pyytäisi niitä itsevarmasti.

## Tehtäväsi

1. Pakota **yhden lauseen SELECT-sallittujen lista** käyttöön ennen kuin mikään pääsee tietokantaan.
2. Estä DDL/DML ja riskikomennot: `INSERT`, `UPDATE`, `DELETE`, `MERGE`, `DROP`, `ALTER`,
   `CREATE`, `TRUNCATE`, `EXEC` sekä monilauseketjut.
3. Lisää rivikatto (`LIMIT` / `TOP`) ja tietokannallesi sopiva kyselyn aikakatkaisu.
4. Käytä parametrointia kaikissa serverin lisäämissä suodattimissa; älä koskaan liitä käyttäjäarvoja
   apukyselyihin merkkijonojen yhdistelyllä.
5. Varmista, että server yhdistää vähimmän oikeuden periaatteen mukaisella vain luku -DB-käyttäjällä/Managed Identityllä.
6. Poista salaisuudet koodista ja määrityksistä; käytä Managed Identity / Microsoft Entra auth -mallia
   Azure-hostatuissa poluissa.
7. Todista, että haitallinen kirjoitus- tai `DROP TABLE` -kehote hylätään, ja aja sitten yksi hyvä kysely uudelleen.
8. Kokoa turvarajamatriisi, joka näyttää missä kukin kontrolli pakotetaan ja miten se todistetaan.

## Keskeiset päätökset

- **Sallittujen lista vs. estolista:** salli vain vain luku -kyselymuodot; epäselvässä tilanteessa hylkää.
- **Parseri:** kevyet tarkistukset vs. oikea SQL-parseri, kuten `sqlglot` tai murretietoinen koodi.
- **Rajat:** riviraja ja aikakatkaisuarvot, jotka suojaavat DB:tä tappamatta demoja.
- **Identiteetti:** paikallinen kehittäjätodennus tänään, Managed Identity Azure-käyttöönottoon.

## Tuotokset

- Turvarajamatriisi jokaisesta kontrollista, missä se pakotetaan ja mikä on näyttö.
- Esimerkki hylkäyksestä vähintään yhdestä kirjoituspyynnöstä ja yhdestä tuhoisasta `DROP`-pyynnöstä.
- Onnistuva vain luku -kysely turvarajojen käyttöönoton jälkeen.

## Onnistumisen kriteerit

| Painopiste | Miltä hyvä näyttää | Näyttö |
| --- | --- | --- |
| Vain luku pakotettu | DDL/DML hylätään ennen suoritusta | Hylkäysloki tai työkalun virhevastaus |
| Rajattu suoritus | Jokaisessa kyselyssä on rivikatto ja aikakatkaisu | Koodi-/määritysmuistiinpano + rajattu tulos |
| Vähimmät oikeudet | Server käyttää vain luku -identiteettiä; koodissa ei ole salaisuuksia | Todennus-/oikeusnäyttö |

## Vinkit

<details>
<summary>Turvarajamatriisin aloitus</summary>

| Turvaraja | Missä pakotetaan | Todiste |
| --- | --- | --- |
| Vain SELECT | `run_query`-validaattori | `DROP TABLE customers` hylätty |
| Rivikatto | SQL-kääre | Tulos rajattu 100 riviin |
| Aikakatkaisu | DB-istunto/ajuri | Pitkä kysely peruttu |
| Vähimmät oikeudet | DB-rooli/identiteetti | Tietokanta hylkää myös `INSERT`-yrityksen |

</details>

<details>
<summary>Syvyyspuolustus</summary>

Validaattorin pitäisi hylätä huono SQL ennen suoritusta, mutta tietokantakäyttäjän pitäisi myös olla
kykenemätön kirjoittamaan. Jos toinen kerros pettää, toinen suojaa dataa edelleen.

</details>

## Huomioi nämä

- Älä luota Copilot-kehotteisiin turvallisuuden pakottamisessa — koodi ja oikeudet pakottavat turvallisuuden.
- Älä hyväksy useita lauseita, jotka on erotettu `;`-merkillä.
- Älä tallenna salasanoja `mcp.json`-, `.env`- tai lähdetiedostoihin, kuvakaappauksiin tai demolokeihin.
- Älä riko oikeutettuja CTE-kyselyitä tai vain luku -liitoksia; testaa oikea H3-kysymys uudelleen.

## Tuotosten luovutus

| Kohta | Arvo |
| --- | --- |
| **Lähtötieto** | Yhdistetty H3:n server ja toimiva Copilot-yhteys |
| **Sinun tuotoksesi** | Kovennettu vain luku -suorituspolku ja todistettu hylkäys |
| **Seuraava vaihe** | H5 tekee käyttöönoton vasta, kun turvallisuusmatriisi läpäisee testit |

## Seuraava vaihe

Paikallinen agentti–työkalu-silmukkasi on turvallinen. H5 muuttaa sen valinnaisesti Azure-hostatuksi palveluksi.

