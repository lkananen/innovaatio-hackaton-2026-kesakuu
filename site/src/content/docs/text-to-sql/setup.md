---
title: "Setup & Pre-work"
description: Relational data eligibility, a read-only database user, and Azure OpenAI quota — done 7 days ahead.
sidebar:
  order: 2
---

:::danger[Do this **7 days** before the event]
Two things sink this track on the day: **no Azure OpenAI quota** (1–3 business days to
approve) and **non-relational data** that has no joins to reason over. Sort both now.
:::

## 1. Pre-work checklist

```text
☐ az login && az account show
☐ PostgreSQL available (local Docker, or Azure Database for PostgreSQL Flexible Server)
☐ psql or a SQL client installed
☐ Python 3.11+ and an OpenAI SDK
☐ GitHub Copilot active in your IDE
☐ Azure OpenAI quota in your region:
      • chat: gpt-4o (or gpt-4.1)  ≥ 30K TPM   ← stronger model helps SQL accuracy
☐ If quota = 0  →  request TODAY at https://aka.ms/oai/quotaincrease
☐ A relational dataset loaded (see §3)
☐ A read-only database user created (see §4)
☐ 5 golden questions drafted (see §3)
```

:::note[No quota in time? Fallback]
The facilitator hosts a **shared Azure OpenAI endpoint** as the sanctioned fallback. Your
agent reads `AZURE_OPENAI_ENDPOINT` / `AZURE_OPENAI_API_KEY`, so switching is one line.
:::

## 2. Why a stronger chat model

Text-to-SQL is reasoning-heavy. A `gpt-4o`-class model produces materially better SQL than
a `-mini` model on joins and aggregations. Use the strongest model you have quota for.

## 3. Bring your own data (or use a fallback)

**Eligibility for this track is stricter than RAG.** You need **genuinely relational** data
so the agent has joins and keys to reason about.

**Rules:**

- **2–5 tables** with **clear primary/foreign keys** and meaningful relationships.
- **Non-sensitive only** — public, synthetic, or company-approved. No customer PII.
- **Keep it modest** — thousands of rows is plenty; cap at the first N rows if large.
- Draft **5 golden questions** in plain English that your data can answer, ranging from
  simple (`how many X?`) to multi-table (`top 3 Y by Z last quarter`). You'll formalise
  these in C2.

**No relational data? Pick one of these:**

| Dataset | Why it fits | Source |
|---------|-------------|--------|
| **Chinook** | Classic music-store schema (11 tables, clear FKs); great golden questions | <https://github.com/lerocha/chinook-database> |
| **Northwind (Postgres port)** | Orders/customers/products; business-flavoured | <https://github.com/pthom/northwind_psql> |
| **A multi-table public CSV set** (e.g. Eurostat or NYC datasets) | Real, joinable, public | <https://data.europa.eu/> |

## 4. Create a read-only database user (do this now)

Guardrails start at the database. The agent must connect as a user that **physically
cannot** modify data:

```sql
CREATE USER agent_ro WITH PASSWORD 'change-me';
GRANT CONNECT ON DATABASE yourdb TO agent_ro;
GRANT USAGE ON SCHEMA public TO agent_ro;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;
-- explicitly NO INSERT/UPDATE/DELETE/DDL
```

Your agent connects **only** as `agent_ro`. This is your first and strongest guardrail.

:::caution[Re-grant after loading tables]
`ALTER DEFAULT PRIVILEGES` only covers objects created **by the role that runs it**. If you
(or a different owner) load tables **after** this block, `agent_ro` won't have `SELECT` on
them. After loading data, re-run the grant and verify:

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro;
-- verify the read-only identity can actually read:
SET ROLE agent_ro;
SELECT count(*) FROM <one_of_your_tables>;   -- should succeed
RESET ROLE;
```
:::

## 5. Known failure modes

| Symptom | Fix |
|---------|-----|
| Agent emits great SQL but wrong joins | Schema profile (C1) + glossary (C2) under-specified |
| `permission denied` on SELECT | Re-run the GRANTs in §4; check the user owns no objects |
| Model invents column names | Pass the real schema in the prompt context (C3) |
| Slow / runaway query | C4 guardrails add `LIMIT` + `statement_timeout` |
| Quota error | Request increase or use facilitator endpoint |

Once every box in §1 is ticked, you're ready for **C1**.
