---
title: "C4: Gold + report"
description: Curate silver into a gold model and put one report or semantic model on top of the AI-enriched data.
sidebar:
  order: 6
  label: "C4: Gold + report"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../challenge-3-silver/
  label: "C3: Silver + AI"
next:
  link: ../challenge-5-operationalise/
  label: "C5: Operationalise"
---

:::note[Challenge Info]
⏱️ **35 min** · 🧩 **Core** · 🤖 agent: data modeller · 📄 output: `gold_model_spec.md` + one report
:::

## Objective

- **Do now:** Turn enriched silver into a business-ready gold model + a report.
- **Input:** `silver` table + `silver_enrichment_spec.md` (C3).
- **Output:** A `gold` table/view + `gold_model_spec.md` + **one** report or semantic model.
- **Required to move on:** A report visual that uses your **enriched column** (AI path or documented fallback).
- **Decisions now:** Aggregation grain, which enriched dimension to feature.
- **Next:** C5 (optional) operationalises the whole pipeline.

## The Business Challenge

Gold is the **consumption layer** — shaped for analysis, not engineering. The point of this
challenge is to **close the loop**: show the AI-derived column from C3 driving a real
business view (e.g. "tickets by AI-classified category over time").

## Your Tasks

1. Build a **gold** table or view: aggregate/curate silver to the grain a report needs.
2. Make sure the gold model **surfaces your AI-enriched column** (as a dimension or measure).
3. Build **one** report or semantic model in Fabric/Power BI on top of gold.
4. Add **one visual** that is only possible because of the AI enrichment (e.g. distribution
   across AI-classified categories).
5. With your agent, write `gold_model_spec.md`: tables, grain, measures, and the report's purpose.

## Key Decisions

- **Grain:** what does one row of gold represent? (Per category? Per day? Per entity?)
- **Featured enrichment:** which AI-derived field tells the best story?
- **Model vs. report:** a quick report is fine; a semantic model is a stretch.

## Deliverables

- A `gold` table/view.
- `gold_model_spec.md`.
- One report with a visual driven by the AI-enriched column.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Curated | Gold is at a sensible analytical grain | Schema + spec |
| Loop closed | A visual uses the AI-derived column | The report visual |
| Documented | Model + report purpose captured | `gold_model_spec.md` |

## Tips / Hints

<details>
<summary>One great visual beats a dashboard</summary>

You don't need a polished dashboard. One chart — *"volume by AI-classified category"* — that
clearly depends on C3's enrichment makes the whole medallion story land.

</details>

<details>
<summary>Build gold for the question, not the data</summary>

Shape gold around the **business question** your demo answers. Aggregate to exactly that
grain; don't dump silver columns the report won't use.

</details>

## Watch Out

- Don't feature a visual that any non-AI column could have produced — show the enrichment's value.
- Don't over-model; one report on a clean gold table is the goal.
- Don't forget the spec — it's how judges understand your model without reading the notebook.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | `silver` table (C3) |
| **Your output** | `gold` table/view + `gold_model_spec.md` + report |
| **Next challenge uses** | C5 schedules the bronze→silver→gold pipeline |

## Next Step

The medallion is complete end-to-end. If time allows, **C5** operationalises it; otherwise
jump to **C6** to prep your demo.
