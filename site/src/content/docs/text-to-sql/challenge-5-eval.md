---
title: "C5: Eval harness"
description: Turn your golden questions into an automated eval that scores the agent's accuracy.
sidebar:
  order: 7
  label: "C5: Eval harness"
  badge:
    text: 30 min
    variant: tip
prev:
  link: ../challenge-4-guardrails/
  label: "C4: Guardrails"
next:
  link: ../challenge-6-demo/
  label: "C6: Demo prep"
---

:::note[Challenge Info]
⏱️ **30 min** · 🧩 **Optional** · 🤖 agent: eval author · 📄 output: `eval_cases.json` + pass rate
:::

:::tip[Skip-safe]
Only start this if **C4 passes**. The output is a single number — your agent's accuracy on
the golden set — plus the harness that produced it.
:::

## Objective

- **Do now:** Measure accuracy instead of guessing it.
- **Input:** 5 golden questions + reference answers (C2), safe agent (C4).
- **Output:** `eval_cases.json` + a printed **pass rate**.
- **Required to move on:** The harness runs all cases and reports a score.
- **Decisions now:** How to compare answers (exact, set-equal, tolerant).
- **Next:** C6 puts the score in your demo.

## The Business Challenge

"It worked when I tried it" is not evidence. An **eval harness** turns your golden questions
into a repeatable score, so you can change the prompt and **know** whether it got better or
worse — the DataOps discipline applied to an LLM agent.

## Your Tasks

1. Encode your golden questions + expected answers into `eval_cases.json`.
2. With your agent, build a runner that, per case: asks the agent → runs SQL via guardrails
   → compares result to the expected answer → records pass/fail.
3. Choose a sensible **comparison**: exact value, set equality (order-independent rows), or
   numeric tolerance for aggregates.
4. Print an overall **pass rate** (e.g. `4/5 = 80%`). Run it twice to check stability.

## Key Decisions

- **Comparison strictness:** rows can come back in any order — compare as sets, not lists.
- **Determinism:** LLMs vary run to run; do you average over N runs or accept one pass?
- **Failure detail:** log the generated SQL for each failure so you can debug fast.

## Deliverables

- `eval_cases.json` — the golden set in machine-readable form.
- An eval runner that prints a pass rate.
- The current score recorded for your demo.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Automated | One command scores all golden questions | Runner output |
| Fair comparison | Order-independent, tolerant where needed | Comparison logic |
| Actionable | Failures show the SQL that was generated | Failure log |

## Tips / Hints

<details>
<summary>Compare results, not SQL strings</summary>

Two different SQL queries can be equally correct. Grade on the **result set** (as a set of
rows), not on whether the SQL matches your reference text.

</details>

<details>
<summary>Use it as a feedback loop</summary>

If you have time after a green eval, tweak `prompt_contract.md`, re-run, and watch the score.
That loop — change, measure, keep or revert — is the whole point.

</details>

## Watch Out

- Don't compare row lists by position — set-compare or you'll fail correct answers.
- Don't average away a real regression; if a case flips to fail, investigate.
- Don't expand the golden set mid-eval; freeze it so scores are comparable.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | Golden questions (C2) + safe agent (C4) |
| **Your output** | `eval_cases.json` + pass rate |
| **Next challenge uses** | C6 features the score as proof of quality |

## Next Step

You have a number. **C6** turns the whole thing into a 60-second demo.
