---
title: "Setup & Pre-work"
description: Complete this readiness checklist 7 days before the event so Block 1 is building, not waiting.
sidebar:
  order: 2
---

:::danger[Do this **7 days** before the event]
The single most common reason a team loses the morning is **Azure OpenAI quota**. A fresh
subscription can have **zero** quota, and an increase can take **1–3 business days** to
approve. **Do not** show up planning to request quota on the day.
:::

## 1. Pre-work checklist

Tick every box **before** the event:

```text
☐ az login && az account show            # subscription access confirmed
☐ azd installed: winget install microsoft.azd   (or: brew install azure/azd/azd)
☐ Docker Desktop running (azd uses it to build the container image)
☐ GitHub Copilot active in your IDE
☐ Azure OpenAI quota in your target region:
      • chat: gpt-4o-mini (or gpt-4.1-mini)  ≥ 30K TPM
      • embeddings: text-embedding-3-small   ≥ 120K TPM
☐ If quota = 0  →  request TODAY at https://aka.ms/oai/quotaincrease
☐ Register resource providers (see §4)
☐ Ran `azd init` + `azd provision` on the base repo to validate auth (recommended)
☐ A non-sensitive dataset ready (see §3)
```

:::note[No quota in time? Fallback]
The facilitator hosts a **shared Azure OpenAI endpoint** as the only sanctioned fallback.
You'll get the endpoint + key at the event. The template defaults to **managed identity**
(keyless) against an OpenAI resource it deploys; to point it at the shared endpoint instead,
set the env vars **before `azd up`** and tell it not to deploy its own OpenAI:

```bash
azd env set DEPLOY_AZURE_OPENAI false
azd env set AZURE_OPENAI_ENDPOINT https://<shared>.openai.azure.com/
azd env set AZURE_OPENAI_KEY <key-from-facilitator>
# match the deployment names on the shared endpoint:
azd env set AZURE_OPENAI_CHAT_DEPLOYMENT <chat-deployment-name>
azd env set AZURE_OPENAI_EMBED_DEPLOYMENT <embed-deployment-name>
```

This is a safety net, **not** a substitute for doing the pre-work. (Exact variable names can
change between template versions — confirm against your `azure.yaml` / `infra/main.bicep`.)
:::

## 2. The base repository

You build on
[`Azure-Samples/rag-postgres-openai-python`](https://github.com/Azure-Samples/rag-postgres-openai-python).
**Create your own copy** (Use this template / fork) so you can commit freely — this docs
site is your guide, not the project you build in.

```bash
azd init -t Azure-Samples/rag-postgres-openai-python
```

:::caution[Pin the template + check the model defaults]
This sample evolves upstream. The chat/embedding **model names and deployment env-var
names can drift** from what's shown in §1 (e.g. the template may default to a newer chat
model or `text-embedding-3-large`). Two safeguards:

- **Pin a known-good commit** right after `azd init` (`git log -1` to record the SHA, or
  check out a tag) so everyone at your table builds the same thing.
- **Confirm the model defaults** in `infra/main.bicep` / `azure.yaml` match the quota you
  requested in §1. If they differ, either request quota for the template's models or
  override them: `azd env set AZURE_OPENAI_CHAT_MODEL ...`,
  `AZURE_OPENAI_CHAT_DEPLOYMENT`, `AZURE_OPENAI_EMBED_MODEL`,
  `AZURE_OPENAI_EMBED_DEPLOYMENT` (exact names per your template version).
:::

## 3. Bring your own data (or use a fallback)

**Eligibility for this track:** RAG tolerates messy text. Good inputs are **documents,
PDFs, Markdown, web pages, or CSVs** — anything you can chunk into passages.

**Rules:**

- **Non-sensitive only** — public, synthetic, or company-approved data. No customer PII.
- **Keep it small** — aim for **≤ 50 MB** and **cap ingestion at ~50–200 chunks** for the
  event so embedding stays fast and cheap.
- Have **2–3 questions in mind** that the data should be able to answer (you'll use these
  to verify retrieval in C2).

**No data? Pick one of these open datasets:**

| Dataset | Why it fits | Source |
|---------|-------------|--------|
| **EU open-data document set** (e.g. policy briefs / reports) | Real prose, clear Q&A targets, public | <https://data.europa.eu/> |
| **A public GitHub repo's `/docs` folder** (Markdown) | Already chunk-friendly; great for "ask the docs" | any OSS repo |
| **Wikipedia article export** (a handful of related articles) | Dense, factual, easy to write questions for | <https://en.wikipedia.org/wiki/Special:Export> |

## 4. Resource providers & regions

`azd up` provisions Container Apps, PostgreSQL Flexible Server, Azure OpenAI, Log
Analytics, and a managed identity. If provisioning fails with a provider error:

```bash
az provider register --namespace Microsoft.App
az provider register --namespace Microsoft.DBforPostgreSQL
az provider register --namespace Microsoft.CognitiveServices
az provider register --namespace Microsoft.OperationalInsights
```

- Pick a region where you **have OpenAI quota** for both models (often `swedencentral`,
  `eastus2`, or `westeurope`).
- You need **Contributor** on the subscription/resource group. If the template assigns
  roles, you may also need **User Access Administrator**.

## 5. Known failure modes

| Symptom | Fix |
|---------|-----|
| `azd up` hangs ~20 min then fails on OpenAI | No quota in region → request increase or change region |
| `MissingSubscriptionRegistration` | Run the `az provider register` commands above |
| Container build fails | Docker Desktop not running |
| PostgreSQL firewall / auth error | Re-run `azd provision`; confirm your IP is allowed |
| Role assignment denied | You lack User Access Administrator — ask subscription owner |

Once every box in §1 is ticked, you're ready for **C1**.
