---
title: "C2: Load your data"
description: Ingest your own dataset, generate embeddings, and prove retrieval works with a smoke test.
sidebar:
  order: 4
  label: "C2: Load your data"
  badge:
    text: 35 min
    variant: note
prev:
  link: ../challenge-1-provision/
  label: "C1: Provision"
next:
  link: ../challenge-3-customise-retrieval/
  label: "C3: Customise retrieval"
---

:::note[Challenge Info]
⏱️ **35 min** · 🧩 **Core** · 🤖 agent: ingestion + test author · 📄 output: `dataset_manifest.json`, `smoke_test.py`
:::

## Objective

- **Do now:** Replace the sample data with **your** dataset and verify retrieval.
- **Input:** `infra-output.json` (C1) + your dataset from [Setup](../setup/).
- **Output:** `dataset_manifest.json` describing what you loaded + a passing `smoke_test.py`.
- **Required to move on:** The app answers a question using **your** content, with a citation.
- **Decisions now:** Chunk size, how many chunks, which fields become searchable text.
- **Next:** C3 tunes *how* that content is retrieved and presented.

## The Business Challenge

A RAG app is only as good as the data behind it. Your job is to get **your** documents in,
embedded, and provably retrievable — and to lock that in with an automated check so later
changes can't silently break it.

## Your Tasks

1. Prepare your dataset to the track rules: **non-sensitive**, **≤ 50 MB**, **~50–200
   chunks**. (No data? Use a fallback from [Setup §3](../setup/#3-bring-your-own-data-or-use-a-fallback).)
2. Use the repo's ingestion script (and your agent) to **chunk → embed → upsert** into
   PostgreSQL. Confirm row counts in the `pgvector` table.
3. Ask **2–3 questions** in the UI that should be answerable from your data. Confirm the
   answers cite your sources.
4. Have your agent write `smoke_test.py`: a `pytest` that hits the `/chat` (or `/ask`)
   endpoint with **one known question** and asserts the response contains an **expected
   fact or source filename**. Make it pass.
5. Record what you loaded in `dataset_manifest.json`.

## Key Decisions

- **Chunk size vs. recall:** small chunks = precise but fragmented; large = context-rich but noisy.
- Which **fields** of your data are worth embedding vs. keeping as metadata filters?
- What is a **deterministic** success signal for the smoke test (a fact? a source name?)?
- How many chunks is "enough" to be useful without blowing embedding cost/time?

## Deliverables

- `dataset_manifest.json` — source, record/chunk count, chunk size, embedding model.
- `smoke_test.py` — passing test against your endpoint.
- 2–3 screenshot/transcript examples of grounded answers with citations.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Your data in | Retrieval returns *your* passages, not the sample | UI answer cites your source |
| Deterministic test | One known Q→A pair asserted automatically | `pytest` passes |
| Reproducible load | Anyone can see what was ingested | `dataset_manifest.json` |

## Tips / Hints

<details>
<summary>Make the smoke test deterministic</summary>

LLM output varies, so don't assert on exact wording. Assert on something stable:
the **source filename** the app cites, or a **specific number/name** that only your data
contains. Example: `assert "annual-report-2024" in response.json()["sources"]`.

</details>

<details>
<summary>Embedding cost control</summary>

If your dataset is large, ingest only the **first N documents/chunks** for the event. The
goal is a working demo, not full coverage. Note the limit in `dataset_manifest.json`.

</details>

## Watch Out

- Don't ingest sensitive data "just to try it" — once embedded it's in the DB.
- Don't assert on full answer text in the test; it will flake.
- Don't forget to verify **row counts** — a silent embedding failure looks like "no results."

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | `infra-output.json` (C1) + your dataset |
| **Your output** | `dataset_manifest.json`, `smoke_test.py` |
| **Next challenge uses** | C3 changes retrieval/prompting; the smoke test guards against regressions |

## Next Step

Retrieval works. C3 makes it *good* — better chunks, filters, and a domain-aware system
prompt — with the smoke test catching any regression.
