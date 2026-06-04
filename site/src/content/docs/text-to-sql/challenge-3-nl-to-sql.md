---
title: "C3: NL→SQL prompt contract"
description: Build the agent that turns natural-language questions into SQL, grounded in your schema and glossary.
sidebar:
  order: 5
  label: "C3: NL→SQL contract"
  badge:
    text: 40 min
    variant: note
prev:
  link: ../challenge-2-glossary/
  label: "C2: Glossary & golden Qs"
next:
  link: ../challenge-4-guardrails/
  label: "C4: Guardrails"
---

:::note[Challenge Info]
⏱️ **40 min** · 🧩 **Core** · 🤖 agent: prompt engineer · 📄 output: `prompt_contract.md` + working agent
:::

## Objective

- **Do now:** Build the question → SQL → answer loop.
- **Input:** `schema_profile.json` + `business_glossary.md` (C1–C2).
- **Output:** `prompt_contract.md` (the system prompt + I/O contract) + a runnable agent.
- **Required to move on:** At least **3 of 5** golden questions return correct answers.
- **Decisions now:** How much schema to inject, output format, whether to show the SQL.
- **Next:** C4 makes the generated SQL safe to run.

## The Business Challenge

This is the heart of the agent: a **contract** with the model that reliably produces valid,
grounded SQL. The schema and glossary you built are the grounding; the prompt is where you
turn them into correct queries.

## Your Tasks

1. With your agent, write a system prompt that injects the **schema profile** and **glossary**
   and instructs the model to return **only SQL** (plus a short rationale).
2. Build the loop: `question → prompt → SQL → execute as agent_ro → format answer`.
3. **Always surface the SQL** the agent ran, alongside the answer (trust + debugging).
4. Run all **5 golden questions**. Record pass/fail. Iterate the prompt until **≥ 3 pass**.
5. Capture the final prompt + contract in `prompt_contract.md`.

## Key Decisions

- **Context size:** inject the full profile or only relevant tables? (Token vs. accuracy.)
- **Output format:** SQL-only, or SQL + explanation? How do you parse it reliably?
- **Dialect:** pin PostgreSQL syntax explicitly so the model doesn't drift to MySQL/T-SQL.
- **Few-shot:** include 1–2 example question→SQL pairs from your glossary?

## Deliverables

- A runnable agent answering NL questions with the SQL shown.
- `prompt_contract.md` — the system prompt, input format, output format, parsing rules.
- A pass/fail table for the 5 golden questions.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Grounded SQL | Uses real tables/columns, correct joins | SQL shown per answer |
| Accuracy | ≥ 3/5 golden questions correct | Pass/fail table |
| Transparent | The executed SQL is always visible | Agent output |

## Tips / Hints

<details>
<summary>Make output parsing boring</summary>

Ask the model to return SQL in a fenced ```sql block or a JSON field. Deterministic
formatting beats clever regex. The agent can write this parser for you.

</details>

<details>
<summary>Few-shot from your own glossary</summary>

One or two worked question→SQL examples (taken from C2) dramatically improve join accuracy.
Pick examples that show your trickiest relationship.

</details>

## Watch Out

- Don't run the SQL as a privileged user yet — keep using `agent_ro`.
- Don't hide the SQL; an answer you can't verify is worthless.
- Don't over-stuff the prompt with all 50 columns if 8 matter — relevance beats volume.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | `schema_profile.json` + `business_glossary.md` |
| **Your output** | `prompt_contract.md` + working agent |
| **Next challenge uses** | C4 wraps execution in a guardrail layer |

## Next Step

Your agent answers questions. In **C4** you make sure it can **never** do harm.
