---
title: "C4: Agentic ingestion"
description: Build a DataOps agent loop that fetches, chunks, embeds, upserts, and self-tests new content.
sidebar:
  order: 6
  label: "C4: Agentic ingestion"
  badge:
    text: 40 min
    variant: note
prev:
  link: ../challenge-3-customise-retrieval/
  label: "C3: Customise retrieval"
next:
  link: ../challenge-5-operationalise/
  label: "C5: Operationalise"
---

:::note[Challenge Info]
⏱️ **40 min** · 🧩 **Core (the payoff)** · 🤖 agent: pipeline builder · 📄 output: `dataops_agent.py`
:::

## Objective

- **Do now:** Automate keeping the knowledge base fresh.
- **Input:** Tuned app + `retrieval_config.md` (C3).
- **Output:** `dataops_agent.py` that ingests a **new** source and proves it worked.
- **Required to move on:** Add one new URL/file → it becomes answerable → a regression question passes.
- **Decisions now:** Idempotency, failure handling, what "success" means.
- **Next:** C5 (optional) runs this on a schedule.

## The Business Challenge

Real knowledge bases drift. The agentic part of DataOps is a **loop** that can take a new
document and integrate it **without a human babysitting each step** — and verify it didn't
break anything. This is the centrepiece of the track.

## Your Tasks

1. With your agent, write `dataops_agent.py` that performs, end to end:
   **fetch → chunk → embed → upsert → run smoke test → log pass/fail**.
2. Make it **idempotent** — re-running on the same source must not create duplicate chunks
   (upsert on a stable key / content hash).
3. Run it against **one new source** that introduces a fact your app currently can't
   answer. Confirm the app can answer it afterwards.
4. Add a **regression question** (an older known-good fact) to the run so the agent fails
   loudly if ingestion corrupted existing retrieval.

## Key Decisions

- **Idempotency key:** content hash, source URL, or document ID?
- **Failure policy:** if embedding fails midway, does the run roll back or mark partial?
- **Success definition:** new question answerable **and** regression question still passes.
- How much should the agent **decide** vs. you hard-code? (e.g. chunk size by content type)

## Deliverables

- `dataops_agent.py` — runnable, idempotent, self-testing.
- A run log showing: new source ingested, new question answered, regression passed.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| End-to-end loop | One command ingests + verifies a new source | Run log |
| Idempotent | Re-running doesn't duplicate data | Row counts stable on 2nd run |
| Safe | Regression question still passes after ingest | Test output in log |

## Tips / Hints

<details>
<summary>Keep it concrete</summary>

Don't build an abstract "framework." Make it do exactly: **one new URL/file → chunk →
embed → upsert → ask the new question → ask one old question → print PASS/FAIL.** Concrete
and demoable beats clever and unfinished.

</details>

<details>
<summary>Let the agent scaffold, you steer the contract</summary>

Tell Copilot the **inputs, outputs, and the two assertions** you want, then let it write
the glue. Review the upsert logic yourself — that's where idempotency bugs hide.

</details>

## Watch Out

- Don't skip idempotency — duplicate chunks quietly degrade retrieval quality.
- Don't let the loop "succeed" while only checking the new fact; always re-run a regression.
- Don't hard-code your one demo URL so deeply the script can't take a second source.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | Tuned app + `retrieval_config.md` (C3) |
| **Your output** | `dataops_agent.py` + run log |
| **Next challenge uses** | C5 schedules this agent in GitHub Actions |

## Next Step

You have a self-testing ingestion agent — the core deliverable. If time allows, C5 puts it
on a schedule; otherwise jump to **C6** to prep your demo.
