---
title: "C5: Operationalise"
description: Wire bronze→silver→gold into a Fabric pipeline and run it once end to end.
sidebar:
  order: 7
  label: "C5: Operationalise"
  badge:
    text: 25 min
    variant: tip
prev:
  link: ../challenge-4-gold/
  label: "C4: Gold + report"
next:
  link: ../challenge-6-demo/
  label: "C6: Demo prep"
---

:::note[Challenge Info]
⏱️ **25 min** · 🧩 **Optional** · 🤖 agent: pipeline author · 📄 output: `pipeline_run_evidence.md`
:::

:::tip[Skip-safe]
Only start this if **C4 is done**. The goal is to **orchestrate the layers into one pipeline
and run it once** — not to wait for a schedule during the event.
:::

## Objective

- **Do now:** Orchestrate the medallion into a single repeatable pipeline.
- **Input:** Working bronze→silver→gold notebooks (C2–C4).
- **Output:** A Fabric **Data Pipeline** + `pipeline_run_evidence.md` of one successful run.
- **Required to move on:** One green end-to-end run that rebuilds gold from bronze.
- **Decisions now:** Orchestration order, parameters, what to schedule.
- **Next:** C6 turns this into the "it's a platform, not a notebook" demo point.

## The Business Challenge

Three notebooks you run by hand isn't a pipeline. Chaining them into a **Fabric Data
Pipeline** (with an optional schedule) is the DataOps story: one orchestrated, observable,
repeatable refresh from raw to report.

## Your Tasks

1. Create a **Fabric Data Pipeline** that runs bronze → silver → gold **in order**.
2. Parameterise where it helps (e.g. row cap for the AI enrichment step).
3. **Run it once** end to end. Confirm gold is rebuilt and the report reflects new data.
4. Optionally add a **schedule**. Capture `pipeline_run_evidence.md`: run ID, duration,
   per-stage status.

## Key Decisions

- **Granularity:** one pipeline with stages, or separate pipelines per layer?
- **Failure handling:** does a silver failure stop gold, or continue with last-good?
- **Cost:** the AI step dominates cost — keep the enrichment row cap in scheduled runs.

## Deliverables

- A Fabric Data Pipeline chaining the three layers.
- `pipeline_run_evidence.md` from one successful run.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Orchestrated | One pipeline runs all three layers in order | Pipeline graph |
| Proven | A single run rebuilds gold successfully | Run evidence |
| Observable | Per-stage status is visible | Run history screenshot |

## Tips / Hints

<details>
<summary>Run on demand; schedule as evidence</summary>

Trigger the pipeline manually so you can prove it in the room. A schedule shows intent, but
the **manual run** is your proof — don't wait for cron.

</details>

<details>
<summary>Keep the AI step capped in automation</summary>

A scheduled pipeline that re-enriches the full dataset every night gets expensive fast. Keep
C3's row cap parameterised and modest in the automated path.

</details>

## Watch Out

- Don't let the pipeline re-enrich everything each run if your data is large — cost spikes.
- Don't rely on a schedule firing during the event; run manually.
- Don't skip evidence — the run ID and per-stage status are the deliverable.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | bronze→silver→gold notebooks (C2–C4) |
| **Your output** | Data Pipeline + `pipeline_run_evidence.md` |
| **Next challenge uses** | C6 features the orchestrated run as the operational proof |

## Next Step

The medallion runs as one pipeline. **C6** packages the story for a crisp demo.
