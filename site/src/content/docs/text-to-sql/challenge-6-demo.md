---
title: "C6: Demo prep"
description: Package your Text-to-SQL agent into a 60-second demo that shows accuracy and safety.
sidebar:
  order: 8
  label: "C6: Demo prep"
  badge:
    text: 15 min
    variant: tip
prev:
  link: ../challenge-5-eval/
  label: "C5: Eval harness"
next:
  link: ../wrap-up/
  label: Wrap-up
---

:::note[Challenge Info]
⏱️ **15 min** · 🧩 **Optional (but do it)** · 🤖 agent: storyteller · 📄 output: `demo_questions.md`
:::

:::tip[This is a checklist, not a build]
Assemble what you have. The two things to show: it's **accurate** and it's **safe**.
:::

## Objective

- **Do now:** Prepare a 60-second team demo.
- **Input:** Everything from C1–C4, plus C5 if you completed it.
- **Output:** `demo_questions.md` + a short recording.
- **Required to move on:** You can demo accuracy and a refused unsafe query without fumbling.
- **Next:** Wrap-up and team demos.

## Your Tasks

1. Pick **3 demo questions**: one simple, one multi-table (the impressive one), and one
   **unsafe** question that the guardrails refuse.
2. Write `demo_questions.md`: the questions, the SQL the agent produces, and the expected
   outcome (including the refusal).
3. If you did C5, **lead with the pass rate** — a number is persuasive.
4. Record a **60-second** capture: a hard question answered with visible SQL, then the
   guardrail blocking a destructive request.

## Deliverables

- `demo_questions.md` — 3 questions + expected behaviour.
- A ≤ 60s recording showing accuracy **and** a refused unsafe query.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Accurate | A non-trivial question answered correctly | Live/recorded answer + SQL |
| Safe | A destructive request is refused | The refusal on screen |
| Measured | Accuracy stated as a number (if C5 done) | Pass rate |

## Tips / Hints

<details>
<summary>The safety moment sells it</summary>

Typing "delete all customers" and watching the agent calmly refuse — while still answering
real questions — is the most memorable 10 seconds you can show. Always include it.

</details>

## Watch Out

- Don't demo the build; demo answers + the refusal.
- Don't exceed 60 seconds.
- Don't claim accuracy you didn't measure — if you skipped C5, say "anecdotally".

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | C1–C5 artifacts |
| **Your output** | `demo_questions.md` + recording |
| **Next challenge uses** | The wrap-up showcase |

## Next Step

Head to the [Wrap-up](../wrap-up/) for team demos and awards.
