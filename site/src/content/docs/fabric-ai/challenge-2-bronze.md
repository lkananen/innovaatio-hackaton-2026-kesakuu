---
title: "C2: Bronze ingestion"
description: Land your raw data unchanged into the bronze layer of the lakehouse, with a manifest.
sidebar:
  order: 4
  label: "C2: Bronze ingestion"
  badge:
    text: 30 min
    variant: note
prev:
  link: ../challenge-1-readiness/
  label: "C1: Readiness"
next:
  link: ../challenge-3-silver/
  label: "C3: Silver + AI"
---

:::note[Challenge Info]
⏱️ **30 min** · 🧩 **Core** · 🤖 agent: ingestion author · 📄 output: `bronze_manifest.json`
:::

## Objective

- **Do now:** Get your raw data into the lakehouse, **as-is**.
- **Input:** Verified lakehouse (C1) + your dataset.
- **Output:** A `bronze` Delta table + `bronze_manifest.json` describing it.
- **Required to move on:** Bronze table queryable; row count matches the source.
- **Decisions now:** File format, partitioning (or not), what counts as "raw".
- **Next:** C3 cleans and AI-enriches this into silver.

## The Business Challenge

The bronze layer is the **immutable landing zone** — raw data exactly as it arrived, so you
can always reprocess. The discipline here is **don't transform yet**: capture faithfully,
record provenance, and move on.

## Your Tasks

1. Load your CSV/Parquet into a **bronze** Delta table in the lakehouse (notebook or
   Dataflow/pipeline — your choice).
2. Keep it **raw**: no cleaning, no type-coercion beyond what's needed to land it.
3. Validate: `count(*)` matches the source; spot-check a few rows.
4. With your agent, write `bronze_manifest.json`: source, load time, row count, column list,
   and the target table name.

## Key Decisions

- **Format:** Delta is the lakehouse default — use it unless you have a reason not to.
- **Partitioning:** only partition if the data is large enough to warrant it.
- **Schema-on-read vs. enforced:** for bronze, prefer permissive ingestion.

## Deliverables

- A `bronze` Delta table in the lakehouse.
- `bronze_manifest.json` documenting the load.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Faithful landing | Row count matches source; data unaltered | `count(*)` + source count |
| Queryable | Bronze table reads back correctly | A `SELECT` preview |
| Documented | Manifest records provenance | `bronze_manifest.json` |

## Tips / Hints

<details>
<summary>Resist the urge to clean</summary>

Every "small fix" you make in bronze is a transformation you can't undo without re-ingesting.
Keep bronze raw; **silver** (C3) is where cleaning belongs.

</details>

<details>
<summary>Let the agent write the manifest from the table</summary>

Have Copilot read the loaded table's schema and row count to generate the manifest, so it
reflects what actually landed rather than what you intended.

</details>

## Watch Out

- Don't transform in bronze — you'll regret it when you need to reprocess.
- Don't lose source provenance; the manifest is part of the deliverable.
- Don't ingest sensitive columns you don't need — drop them at the source instead.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | Verified lakehouse (C1) |
| **Your output** | `bronze` table + `bronze_manifest.json` |
| **Next challenge uses** | C3 reads bronze, cleans it, and adds AI-enriched columns |

## Next Step

Raw data has landed. In **C3** — the heart of the track — you clean it and **enrich it with
AI Functions** into the silver layer.
