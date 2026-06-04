---
title: "C1: Database & schema profile"
description: Load your relational data and generate a machine-readable schema profile the agent can reason over.
sidebar:
  order: 3
  label: "C1: Database & profile"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../setup/
  label: Setup & Pre-work
next:
  link: ../challenge-2-glossary/
  label: "C2: Glossary & golden Qs"
---

:::note[Challenge Info]
⏱️ **35 min** · 🧩 **Core** · 🤖 agent: schema profiler · 📄 output: `schema_profile.json`
:::

## Objective

- **Do now:** Get data into PostgreSQL and describe it for the agent.
- **Input:** Your relational dataset + read-only user (pre-work).
- **Output:** `schema_profile.json` — tables, columns, types, keys, relationships.
- **Required to move on:** A query as `agent_ro` returns rows; profile lists every table.
- **Decisions now:** Which tables are in scope, how to represent relationships.
- **Next:** C2 adds business meaning on top of this structure.

## The Business Challenge

An agent can't write correct SQL for a schema it can't see. Before any LLM call, you need a
**faithful, machine-readable map** of your database — and proof the agent's **read-only**
identity can actually query it.

## Your Tasks

1. **If you loaded data in pre-work:** verify row counts and skip to step 2. **Otherwise:**
   load your dataset (or a fallback) into PostgreSQL now and confirm row counts look right.
2. Verify the **`agent_ro`** user can `SELECT` — and **cannot** `INSERT`/`UPDATE`/`DELETE`.
3. With your agent, generate `schema_profile.json` containing, per table: columns + types,
   primary keys, foreign keys, and a one-line description.
4. Spot-check the profile against the real schema (`\d+` in psql) — fix any drift.

## Key Decisions

- **Scope:** include all tables or just the 2–5 your golden questions touch?
- **Relationships:** capture FKs explicitly so the model knows how to join.
- **Descriptions:** auto-generate then correct, or write by hand for accuracy?

## Deliverables

- Loaded database with sane row counts.
- `schema_profile.json` covering every in-scope table.
- A note confirming `agent_ro` is read-only (a denied write proves it).

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Data loaded | Tables exist with expected row counts | `SELECT count(*)` output |
| Read-only verified | A write attempt as `agent_ro` is denied | `permission denied` error |
| Profile accurate | Keys & FKs match the real schema | Diff vs. `\d+` |

## Tips / Hints

<details>
<summary>Generate the profile from the catalog, not from memory</summary>

Have your agent query `information_schema` / `pg_catalog` to build the profile, rather than
guessing from the DDL. That way the JSON reflects what's **actually** in the database.

</details>

<details>
<summary>Prove read-only on purpose</summary>

Run `INSERT INTO <table> ...` as `agent_ro` and screenshot the denial. That denial is a
deliverable — it's the foundation of every later guardrail.

</details>

## Watch Out

- Don't connect the agent as a superuser "just to get going" — start read-only from minute one.
- Don't let the profile drift from reality; the model will trust it literally.
- Don't include tables full of PII even if synthetic-looking — confirm provenance.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | Pre-work dataset + `agent_ro` |
| **Your output** | `schema_profile.json` |
| **Next challenge uses** | C2 layers a business glossary onto these tables/columns |

## Next Step

The agent can now see your schema. In **C2** you give it the *business meaning* and lock in
five golden questions.
