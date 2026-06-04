---
title: "C4: Guardrails"
description: Harden the execution layer so generated SQL is read-only, bounded, and validated before it runs.
sidebar:
  order: 6
  label: "C4: Guardrails"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../challenge-3-nl-to-sql/
  label: "C3: NL→SQL contract"
next:
  link: ../challenge-5-eval/
  label: "C5: Eval harness"
---

:::note[Challenge Info]
⏱️ **35 min** · 🧩 **Core (the safety payoff)** · 🤖 agent: safety engineer · 📄 output: `sql_guardrails.py`
:::

## Objective

- **Do now:** Make it impossible for the agent to run unsafe or runaway queries.
- **Input:** Working agent (C3) + read-only `agent_ro`.
- **Output:** `sql_guardrails.py` — a validation + execution wrapper.
- **Required to move on:** A malicious/destructive question is **refused**; golden questions still pass.
- **Decisions now:** Allow-list vs. deny-list, row cap, timeout, what to do on violation.
- **Next:** C5 measures accuracy now that execution is safe.

## The Business Challenge

The read-only user (pre-work) stops writes at the database. But you still want **defence in
depth**: reject obviously dangerous SQL *before* it runs, bound result size, and cap runtime
so one question can't take down the database. This layer is what makes the agent
**production-shaped**.

## Your Tasks

1. With your agent, build `sql_guardrails.py` that, before executing any generated SQL:
   - **Rejects non-`SELECT`** statements (no DDL/DML — allow-list, not deny-list).
   - **Rejects multiple statements** (no `;` chaining).
   - **Injects/enforces a `LIMIT`** (e.g. 1000 rows) if absent.
   - **Sets `statement_timeout`** on the session (e.g. 5s).
2. On violation, **refuse with a clear message** — don't silently rewrite into something wrong.
3. Test with adversarial prompts: *"delete all customers"*, *"drop the orders table"*,
   *"select everything from every table"*. Confirm each is blocked.
4. Re-run the 5 golden questions — guardrails must not break legitimate queries.

## Key Decisions

- **Allow-list mindset:** only `SELECT` passes; everything else is denied by default.
- **Row cap & timeout:** values that protect the DB without truncating real answers.
- **Failure UX:** refuse and explain, or refuse and ask the user to rephrase?
- **Parsing:** lightweight check vs. a real SQL parser (`sqlglot`) — how robust must it be?

## Deliverables

- `sql_guardrails.py` wired into the agent's execution path.
- An adversarial test log showing dangerous queries refused.
- Re-run golden-question results (still ≥ 3/5).

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Read-only enforced | Non-SELECT is refused before hitting the DB | Adversarial test log |
| Bounded | LIMIT + timeout applied to every query | Code + a capped result |
| Non-regressive | Golden questions still pass | Re-run results |

## Tips / Hints

<details>
<summary>Allow-list, not deny-list</summary>

Don't try to enumerate every dangerous keyword. **Permit only `SELECT`** (single statement)
and reject everything else. Deny-lists always miss a case; allow-lists fail safe.

</details>

<details>
<summary>Use a SQL parser if you can</summary>

`sqlglot` can parse the statement and tell you its type and statement count far more
reliably than string matching. Ask your agent to use it and to enforce the single-statement,
SELECT-only rule on the parsed tree.

</details>

## Watch Out

- Don't rely on the prompt alone to keep SQL safe — the model **will** occasionally comply
  with a jailbreak. The guardrail is the real defence.
- Don't strip the `LIMIT` a user explicitly asked for if it's smaller than your cap.
- Don't break valid CTEs/subqueries with an over-eager regex — test real golden questions.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | Working agent (C3) |
| **Your output** | `sql_guardrails.py` + adversarial test log |
| **Next challenge uses** | C5 runs the now-safe agent across the full eval set |

## Next Step

Your agent is safe. In **C5** (optional) you prove it's *accurate* with an eval harness.
