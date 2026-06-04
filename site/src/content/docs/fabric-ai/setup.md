---
title: "Setup & Pre-work"
description: Provision a paid Fabric F2+ capacity and enable AI Functions — the hard prerequisites — before the event.
sidebar:
  order: 2
---

:::danger[This track will not work without pre-work]
AI Functions require a **paid Fabric capacity (F2+)** and a **tenant where the feature is
enabled**. Cross-company attendees often **lack capacity-admin rights**, and a tenant switch
can disable AI Functions even on F2+. Resolve all of this **days before** the event — it
cannot be fixed in the room.
:::

## 1. Pre-work checklist

```text
☐ A Microsoft Fabric capacity, SKU F2 or higher, in RUNNING state
      • Trial capacity is NOT sufficient for AI Functions
☐ You (or a colleague) have Capacity Admin rights, OR a workspace already bound to F2+
☐ Tenant admin has enabled the relevant settings (see §3)
☐ A Fabric workspace assigned to that F2+ capacity
☐ You can create a Lakehouse in that workspace
☐ A Fabric notebook runs a trivial PySpark cell successfully
☐ A non-sensitive tabular dataset ready (see §4)
☐ You've identified ONE AI enrichment you want (classify / summarise / extract)
```

## 2. Why F2+ and not trial

AI Functions are a **paid capacity feature**. Fabric **trial** capacities and the free tier
**cannot** run them. If your only access is a trial, you must either get a colleague to bind
a workspace to a paid F2+ capacity, or plan to use the **PySpark rule-based fallback** in C3
(still a valid completion of the track).

## 3. Tenant admin settings (get these confirmed)

Have your **Fabric/Power BI tenant admin** confirm these are **on** for your group:

- **Copilot and AI features** are enabled for the tenant / your capacity.
- The capacity region **supports** the AI features (some features are region-limited).
- Any **"data sent to Azure OpenAI"** governance switch your org requires is approved.

:::note[Cross-company reality]
Attendees come from different companies/tenants. **Each person verifies their own tenant.**
Don't assume a teammate's working setup means yours works — tenant switches are per-tenant.
:::

## 4. Bring your own data (or use a fallback)

**Eligibility for this track:** **tabular** data (CSV / Parquet) with a column worth
**AI-enriching** — free-text to classify, long text to summarise, or fields to extract.

**Rules:**

- **Non-sensitive only** — public, synthetic, or company-approved. No customer PII.
- **Modest size** — thousands of rows; cap if larger so AI calls stay fast/cheap.
- At least one **text column** that benefits from AI enrichment (the whole point of silver).

**No data? Pick one of these:**

| Dataset | Why it fits | Source |
|---------|-------------|--------|
| **NYC Taxi** (Fabric built-in sample) | One click in Fabric; large, tabular, well-known | Fabric → Sample data |
| **Eurostat CSV extract** | Public, tabular, multilingual text to enrich | <https://ec.europa.eu/eurostat/data/database> |
| **Any public reviews / support-ticket CSV** | Rich free text → ideal for classify/summarise | public Kaggle/Gov data |

## 5. The AI enrichment you'll build

Decide your **one** enrichment now so C3 is execution, not ideation. Good first choices:

- **Classify** a free-text column into categories (`ai.classify`).
- **Summarise** long text into one sentence (`ai.summarize`).
- **Extract** a structured field (e.g. sentiment, entity) from text.

## 6. Known failure modes

| Symptom | Fix |
|---------|-----|
| AI Functions don't appear in the notebook | Capacity not F2+, or tenant switch off → §1–§3 |
| `Capacity not found` / throttled | Capacity paused or under-sized → resume/upsize, or use fallback |
| Notebook won't attach to lakehouse | Workspace not on the F2+ capacity → reassign workspace |
| AI calls error on region | Feature not available in capacity region → §3, or fallback |
| No capacity-admin rights | Use a colleague's F2+ workspace, or do the PySpark fallback |

Once every box in §1 is ticked — and ideally after a quick AI Functions smoke test — you're
ready for **C1**, which formally verifies all of this.
