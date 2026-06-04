# Agentic DataOps Hackathon

> **From idea to implementation** — a one-day, hands-on event for building **agentic
> data platforms on Azure** with **GitHub Copilot**. This repo is the participant guide,
> published as a static site. Teams build in **their own Azure subscriptions**.

## Six standalone hackathons

Each is **fully independent** — a team picks **one** and runs it end to end. Each has its
own overview, setup/pre-work, 6 challenges (core C1–C4 + optional C5–C6), and a wrap-up.

| # | Hackathon | Stack | Runs in any subscription? |
|---|-----------|-------|---------------------------|
| 1 | **Fabric Data Agent** | Microsoft Fabric (lakehouse + Power BI semantic model + data agent) | ⚠️ Needs **paid F2+ capacity** |
| 2 | **MCP Server for Your Data** | Model Context Protocol server (Python/TS) · read-only DB · GitHub Copilot | ✅ Yes (any DB; runs fully local too) |
| 3 | **Fabric AI Functions** | Microsoft Fabric (medallion + AI Functions) | ⚠️ Needs **paid F2+ capacity** |
| 4 | **Reaaliaikainen analytiikka** | Microsoft Fabric (Eventstream · Eventhouse/KQL · Activator) | ⚠️ Needs **paid F2+ capacity** |
| 5 | **RAG on PostgreSQL** | `azd` · Container Apps · PostgreSQL Flexible Server · Azure OpenAI | ✅ Yes (needs Azure OpenAI quota) |
| 6 | **Text-to-SQL Agent** | FastAPI · PostgreSQL + `pgvector` · Azure OpenAI | ✅ Yes (needs Azure OpenAI quota) |

> Fabric **Trial** SKUs exclude Copilot / Data Agent / AI Functions — Hackathons 1, 3 & 4
> require pre-confirmed paid capacity. Hackathons **2, 5 & 6** are the safe defaults for a
> bring-your-own-subscription audience.

## Run the site locally

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in site/dist
```

## Published site

The challenges are published at: <https://lkananen.github.io/innovaatio-hackaton-2026-kesakuu/>

## License

[MIT](./LICENSE).
