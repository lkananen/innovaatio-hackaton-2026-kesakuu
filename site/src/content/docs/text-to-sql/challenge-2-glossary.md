---
title: "C2: Glossary & golden questions"
description: Capture business meaning the schema can't express, and lock in five golden questions as your target.
sidebar:
  order: 4
  label: "C2: Glossary & golden Qs"
  badge:
    text: 30 min
    variant: note
prev:
  link: ../challenge-1-database/
  label: "C1: Database & profile"
next:
  link: ../challenge-3-nl-to-sql/
  label: "C3: NL→SQL contract"
---

:::note[Challenge Info]
⏱️ **30 min** · 🧩 **Core** · 🤖 agent: domain modeller · 📄 output: `business_glossary.md` + 5 golden questions
:::

## Objective

- **Do now:** Encode the domain knowledge the schema alone can't convey.
- **Input:** `schema_profile.json` (C1).
- **Output:** `business_glossary.md` + a frozen list of **5 golden questions** with expected answers.
- **Required to move on:** Each golden question has a known-correct answer you computed by hand/SQL.
- **Decisions now:** What "active customer", "revenue", "last quarter" actually mean in your data.
- **Next:** C3 feeds glossary + profile into the NL→SQL prompt.

## The Business Challenge

A column named `status = 'A'` means nothing to an LLM. **Business meaning** — what counts as
revenue, which flag means active, how a fiscal period is defined — lives in people's heads.
Capturing it is what separates a toy from a useful agent.

## Your Tasks

1. With your agent, draft `business_glossary.md`: key terms, metric definitions, enum
   meanings (`status` codes), and any non-obvious join paths.
2. Finalise your **5 golden questions** (from pre-work). Range from simple to multi-table.
3. For **each** golden question, compute the **correct answer yourself** (write the SQL by
   hand) and record it. This is your ground truth for C5's eval.
4. Note any question the data **can't** answer and adjust — golden questions must be answerable.

## Key Decisions

- **Metric definitions:** pin exact formulas (e.g. revenue = `sum(qty * unit_price)` excluding refunds).
- **Time semantics:** what calendar do "last month/quarter" use?
- **Ambiguity:** if a term maps to two columns, decide which is canonical.

## Deliverables

- `business_glossary.md` — terms, metrics, enums, join hints.
- 5 golden questions, each with a hand-verified expected answer + the reference SQL.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Glossary useful | Defines every non-obvious term a question needs | Glossary covers golden Qs |
| Golden Qs sound | All 5 are answerable and span difficulty | The 5 questions |
| Ground truth | Each has a verified expected answer | Reference SQL + result |

## Tips / Hints

<details>
<summary>Write the reference SQL now — you'll thank yourself in C5</summary>

The reference SQL you write here **is** your eval ground truth. Spend the time to get it
right; everything downstream measures against it.

</details>

<details>
<summary>Span the difficulty curve</summary>

Aim for ~2 simple (single table, filter/count), ~2 medium (one join + aggregate), ~1 hard
(multi-join or window). This surfaces where the agent breaks.

</details>

## Watch Out

- Don't pick golden questions the data can't actually answer — you'll fight ghosts in C5.
- Don't leave metric definitions fuzzy; the agent will pick a different interpretation each run.
- Don't skip the hand-written reference SQL — without it there's nothing to grade against.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | `schema_profile.json` (C1) |
| **Your output** | `business_glossary.md` + 5 golden questions (+ reference SQL) |
| **Next challenge uses** | C3 injects both into the prompt; C5 grades against the answers |

## Next Step

You have meaning and a target. In **C3** you build the agent that turns questions into SQL.
