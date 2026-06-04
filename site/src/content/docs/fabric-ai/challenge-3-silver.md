---
title: "C3: Silver + AI Functions"
description: Clean bronze into silver and add columns only AI can produce — with a PySpark rule-based fallback.
sidebar:
  order: 5
  label: "C3: Silver + AI"
  badge:
    text: 45 min
    variant: note
prev:
  link: ../challenge-2-bronze/
  label: "C2: Bronze ingestion"
next:
  link: ../challenge-4-gold/
  label: "C4: Gold + report"
---

:::note[Challenge Info]
⏱️ **45 min** · 🧩 **Core (the payoff)** · 🤖 agent: enrichment engineer · 📄 output: `silver_enrichment_spec.md`
:::

## Objective

- **Do now:** Clean bronze and add **AI-enriched** columns to build silver.
- **Input:** `bronze` table + `bronze_manifest.json` (C2).
- **Output:** A `silver` table + `silver_enrichment_spec.md` (incl. fallback).
- **Required to move on:** Silver has at least **one enriched column** populated for your rows (AI Functions path **or** documented PySpark fallback — both count).
- **Decisions now:** Which enrichment, how to handle errors/nulls, AI vs. fallback path.
- **Next:** C4 curates silver into a gold model + report.

## The Business Challenge

Silver is where data becomes **useful**: cleaned, typed, and — uniquely in this track —
**augmented with intelligence**. AI Functions let you add a column (a category, a summary, a
sentiment) that **no deterministic rule could produce**. That enriched column is the
centrepiece of your demo.

## Your Tasks

1. Clean bronze → silver: fix types, handle nulls, drop junk rows. Standard medallion work.
2. Add your **AI enrichment** on a text column using an **AI Function** (`ai.classify`,
   `ai.summarize`, or an extract), writing the result to a new silver column.
3. Handle **errors and rate limits**: nulls/failures shouldn't crash the job — capture them.
4. Write `silver_enrichment_spec.md`: the enrichment, the prompt/function used, expected
   output, and **how the fallback works**.

:::tip[Fallback path (no AI Functions?)]
If C1 sent you to the fallback, implement the enrichment as a **PySpark rule-based**
transformation (keyword rules, regex, simple heuristics) into the same silver column. The
spec must document **both** the AI approach and the rule-based one. This is a valid
completion.
:::

## Key Decisions

- **Enrichment choice:** classify / summarise / extract — pick the one with demo punch.
- **Batch vs. row:** call the AI Function over the column efficiently, not one-by-one if avoidable.
- **Error policy:** null-on-failure + a flag column, so you can see coverage.
- **Cost control:** cap rows enriched during the event; note full-scale cost in the spec.

## Deliverables

- A `silver` Delta table with the enriched column (AI path or fallback) populated.
- `silver_enrichment_spec.md` documenting AI **and** fallback approaches.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Cleaned | Silver is typed, de-nulled, deduped | Schema + preview |
| Enriched | A column only AI/rules could produce, populated | Sample rows |
| Resilient | Failures captured, job doesn't crash | Error/coverage handling |

## Tips / Hints

<details>
<summary>Show the value, not just the call</summary>

The wow isn't "I called an AI Function" — it's the **new column**: messy free text turned
into a clean category or one-line summary. Make that contrast visible (raw text next to
derived value) for your demo.

</details>

<details>
<summary>Cap rows to control time and cost</summary>

Enrich a representative slice (e.g. first 500 rows) during the event. Note the cost/time to
enrich the full dataset in the spec — that's the honest operational story.

</details>

## Watch Out

- Don't enrich the whole dataset blindly — AI calls cost money and time; cap first.
- Don't let one failed row kill the pipeline — null-and-flag instead.
- Don't skip the fallback documentation even if AI Functions worked — it shows you understood
  the dependency.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | `bronze` table (C2) |
| **Your output** | `silver` table + `silver_enrichment_spec.md` |
| **Next challenge uses** | C4 curates silver into a gold model + report |

## Next Step

Your data is enriched. In **C4** you curate it into a **gold** model and put a report on top.
