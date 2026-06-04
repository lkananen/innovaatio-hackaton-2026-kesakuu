---
title: "C5: Operationalise"
description: Wire the DataOps agent into a scheduled GitHub Actions workflow — commit and run once.
sidebar:
  order: 7
  label: "C5: Operationalise"
  badge:
    text: 25 min
    variant: tip
prev:
  link: ../challenge-4-agentic-ingestion/
  label: "C4: Agentic ingestion"
next:
  link: ../challenge-6-demo/
  label: "C6: Demo prep"
---

:::note[Challenge Info]
⏱️ **25 min** · 🧩 **Optional** · 🤖 agent: CI author · 📄 output: `dataops.yml`
:::

:::tip[Skip-safe]
Only start this if **C4 passes**. The goal is to **commit a working config and run it once
manually** — not to wait for a scheduled run during the event.
:::

## Objective

- **Do now:** Make the ingestion agent run on a schedule via CI.
- **Input:** `dataops_agent.py` (C4).
- **Output:** `.github/workflows/dataops.yml` + evidence of one successful manual run.
- **Required to move on:** A green workflow run that executed your agent.
- **Decisions now:** Secrets handling, schedule cadence, failure notification.
- **Next:** C6 turns all of this into a 60-second demo.

## The Business Challenge

A pipeline that only runs on your laptop isn't operational. Moving the agent into CI shows
the **DataOps** story: scheduled, credential-managed, observable refreshes of the knowledge
base — the difference between a demo and a platform.

## Your Tasks

1. With your agent, create `dataops.yml` that runs `dataops_agent.py` on a
   **`workflow_dispatch`** trigger **and** a **`schedule`** (e.g. daily cron).
2. Store the OpenAI / database credentials as **GitHub Actions secrets** — never in the YAML.
3. Trigger it **once manually** (`workflow_dispatch`) and confirm it runs your agent and
   reports pass/fail.
4. Add a simple **failure signal** (job fails red, or a step that posts a message).

## Key Decisions

- **Secrets:** which values are secret, and how does the workflow inject them?
- **Cadence:** how often would this realistically need to run for your data?
- **Network:** can the runner reach your database/endpoint (firewall, private networking)?
- **Idempotency again:** scheduled re-runs must stay safe — does C4's design hold up?

## Deliverables

- `.github/workflows/dataops.yml`
- A link/screenshot of one **successful manual run**.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Runs in CI | Agent executes on a runner, not your laptop | Green Actions run |
| Secure | No secrets in the repo | Workflow reads from Actions secrets |
| Scheduled | A cron trigger exists for future runs | `schedule:` block in YAML |

## Tips / Hints

<details>
<summary>Don't wait for cron</summary>

Scheduled triggers can lag. Always include `workflow_dispatch` so you can prove it works on
demand in the room. The cron line is evidence of intent; the manual run is your proof.

</details>

<details>
<summary>Runner can't reach the DB?</summary>

If your PostgreSQL blocks the GitHub-hosted runner, that's a realistic finding — note it in
your demo and describe the fix (self-hosted runner, private networking, or temporary
firewall rule). Don't burn the whole slot fighting it.

</details>

## Watch Out

- Don't paste keys into the YAML — use `secrets.*`.
- Don't rely on the schedule firing during the event; trigger manually.
- Don't let CI run a **non-idempotent** agent on a schedule — you'll duplicate data nightly.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | `dataops_agent.py` (C4) |
| **Your output** | `dataops.yml` + run evidence |
| **Next challenge uses** | C6 features this in the demo as the "operational" proof point |

## Next Step

Your refresh loop is scheduled and secure. C6 packages the whole story for a crisp demo.
