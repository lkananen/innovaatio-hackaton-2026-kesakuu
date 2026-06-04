---
title: "C1: Provision"
description: Use azd to provision the full RAG stack in your own subscription and explore the infra with Copilot.
sidebar:
  order: 3
  label: "C1: Provision"
  badge:
    text: 25–45 min
    variant: note
prev:
  link: ../setup/
  label: Setup & Pre-work
next:
  link: ../challenge-2-load-data/
  label: "C2: Load your data"
---

:::note[Challenge Info]
⏱️ **25 min if pre-work validated; 45+ min on first deploy** · 🧩 **Core** · 🤖 agent: infra explainer · 📄 output: `infra-output.json`
:::

## Objective

- **Do now:** Provision the RAG stack and capture the live endpoint.
- **Input:** Your copy of the base repo from [Setup](../setup/).
- **Output:** `infra-output.json` with the deployed app URL + resource names.
- **Required to move on:** A reachable chat endpoint (even with empty data).
- **Decisions now:** Region, environment name, which models to deploy.
- **Next:** C2 loads your data into the PostgreSQL you create here.

If your pre-work `azd provision` already succeeded, this becomes **verify + explore**, not
"wait for deploy."

## The Business Challenge

Your team needs a production-shaped RAG platform **today**, not a notebook. The fastest
credible path is an `azd` accelerator that wires up Container Apps, PostgreSQL with
`pgvector`, and Azure OpenAI with managed identity — so you spend the day on **data and
agentic behaviour**, not plumbing.

## Your Tasks

1. From your repo, run `azd auth login` then `azd up`. Choose your region and environment.
2. While it deploys, open `infra/` and ask your agent to **explain the Bicep**: what each
   resource is, how the app authenticates to OpenAI and PostgreSQL, and where secrets live.
3. When `azd up` finishes, open the app URL and confirm the chat UI loads.
4. Record the endpoint and resource names in `infra-output.json` (azd prints these; or run
   `azd env get-values`).

## Key Decisions

- Which **region** has quota for *both* your chat and embedding models?
- **Managed identity vs. keys** — which is the app using, and why does that matter for ops?
- What is the **monthly cost shape** of what you just deployed (Container Apps + PG + OpenAI)?
- Which resources are **stateful** (must be backed up) vs. **stateless** (recreatable)?

## Deliverables

- `infra-output.json` — e.g. `{ "endpoint": "https://...", "resourceGroup": "...", "postgres": "...", "openai": "..." }`
- A one-paragraph note (in your repo README) of what the agent taught you about the infra.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Running app | The chat UI loads at a public URL | Endpoint opens in a browser |
| Infra literacy | You can explain auth + data flow in 2 sentences | README note |
| Captured output | Endpoint + resource names saved | `infra-output.json` exists |

## Tips / Hints

<details>
<summary>Provisioning is slow — use the wait productively</summary>

`azd up` can take ~15–20 min cold. Don't watch the spinner — have the agent walk you
through `infra/main.bicep` and the app's data-access code so you understand what you're
shipping. Ask it: *"Trace one user question from the browser to PostgreSQL and back."*

</details>

<details>
<summary>azd command cheatsheet</summary>

```bash
azd auth login
azd up                 # provision + deploy
azd env get-values     # endpoint, resource names
azd deploy             # redeploy app code only (faster than azd up)
azd down               # tear everything down at the end of the day
```

</details>

## Watch Out

- Don't pick a region by latency — pick one where you **have model quota**.
- Don't skip saving `infra-output.json`; later challenges reference the endpoint.
- Don't commit secrets — `azd` keeps them in `.azure/`, which is git-ignored. Keep it that way.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | Your base repo ([Setup](../setup/)) |
| **Your output** | `infra-output.json` |
| **Next challenge uses** | C2 connects to the PostgreSQL provisioned here and loads your data |

## Next Step

You have a running but empty RAG app. C2 makes it *yours* by loading your data and proving
retrieval works.
