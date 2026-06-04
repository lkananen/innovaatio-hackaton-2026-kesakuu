---
title: "C1: Readiness verification"
description: Verify your Fabric capacity, workspace, lakehouse, and AI Functions visibility before building.
sidebar:
  order: 3
  label: "C1: Readiness"
  badge:
    text: 20 min
    variant: note
prev:
  link: ../setup/
  label: Setup & Pre-work
next:
  link: ../challenge-2-bronze/
  label: "C2: Bronze ingestion"
---

:::note[Challenge Info]
⏱️ **20 min** · 🧩 **Core (the gate)** · 🤖 agent: environment checker · 📄 output: `readiness_check.md`
:::

:::caution[This challenge verifies — it does not provision]
Capacity setup happens in **pre-work**. If something here is red and you don't have
capacity-admin rights, switch to a colleague's F2+ workspace or plan for the **PySpark
fallback** in C3. Don't burn the morning provisioning capacity.
:::

## Objective

- **Do now:** Confirm the environment can actually run AI Functions.
- **Input:** Completed pre-work (F2+ capacity, tenant switches, workspace).
- **Output:** `readiness_check.md` with every item green.
- **Required to move on:** A notebook runs an AI Function (or you've committed to the fallback).
- **Decisions now:** AI Functions path vs. PySpark fallback path.
- **Next:** C2 lands your raw data into bronze.

## The Business Challenge

The most expensive failure in a platform hackathon is discovering at 11:00 that the feature
you built around isn't enabled. This challenge **front-loads** that risk: verify everything,
write it down, and pick your path **before** you build.

## Your Tasks

1. Confirm your **capacity is F2+ and Running** (Fabric admin / capacity settings).
2. Open your **workspace**, confirm it's **bound to that capacity**.
3. Create (or open) a **Lakehouse** and run a trivial **PySpark** cell in a notebook.
4. Run a **one-row AI Function smoke test** (e.g. `ai.classify` on a literal string).
5. Record results in `readiness_check.md`. If the AI smoke test fails, **mark the fallback
   path** and continue — the track still completes via PySpark rules in C3.

## Key Decisions

- **Path:** AI Functions (preferred) or PySpark rule-based fallback?
- **Workspace:** your own capacity or a teammate's F2+ workspace?
- **Region:** does your capacity region support the AI feature you need?

## Deliverables

- `readiness_check.md` — checklist with pass/fail per item and your chosen path.
- Evidence of a successful PySpark cell (and AI Function call, if available).

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Capacity ready | F2+ Running, workspace bound | Capacity/workspace screenshot |
| Compute works | A PySpark cell runs in a notebook | Cell output |
| AI path decided | AI Function works **or** fallback chosen | Smoke-test result in the doc |

## Tips / Hints

<details>
<summary>Smoke-test AI Functions on a literal first</summary>

Before touching your data, call the AI Function on a hard-coded string (e.g. classify
`"the train was late again"`). If that works, the feature is enabled; if not, it's an
environment problem, not a data problem — switch to the fallback path cleanly.

</details>

<details>
<summary>Green-light, then go</summary>

The goal is a **fast** gate. If everything's green in 10 minutes, move to C2 early. Don't
gold-plate the readiness doc.

</details>

## Watch Out

- Don't try to fix capacity provisioning now — that's pre-work; pivot to the fallback instead.
- Don't assume a teammate's success means your tenant is enabled — verify your own.
- Don't skip the PySpark cell — if compute is broken, AI Functions can't help you.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | Pre-work environment |
| **Your output** | `readiness_check.md` + chosen path |
| **Next challenge uses** | C2 ingests into the verified lakehouse |

## Next Step

Environment confirmed. In **C2** you land your raw data into the **bronze** layer.
