---
title: "C3: Customise retrieval"
description: Tune chunking, filtering, and the domain system prompt so answers are accurate and on-brand.
sidebar:
  order: 5
  label: "C3: Customise retrieval"
  badge:
    text: 40 min
    variant: note
prev:
  link: ../challenge-2-load-data/
  label: "C2: Load your data"
next:
  link: ../challenge-4-agentic-ingestion/
  label: "C4: Agentic ingestion"
---

:::note[Challenge Info]
⏱️ **40 min** · 🧩 **Core** · 🤖 agent: retrieval tuner · 📄 output: `retrieval_config.md`
:::

## Objective

- **Do now:** Improve answer quality for **your** domain.
- **Input:** Working app + `smoke_test.py` (C2).
- **Output:** `retrieval_config.md` documenting your retrieval choices + the updated app.
- **Required to move on:** A measurable quality improvement on your test questions, smoke test still green.
- **Decisions now:** Top-k, metadata filters, hybrid vs. pure vector, system-prompt persona.
- **Next:** C4 automates keeping this knowledge base fresh.

## The Business Challenge

Out-of-the-box RAG gives plausible but generic answers. To be trustworthy for your domain
it needs the right **retrieval shape** (what to fetch) and the right **instructions** (how
to answer, what to refuse, how to cite). This challenge is where Copilot earns its keep.

## Your Tasks

1. Pick **two weaknesses** in current answers (e.g. wrong passages retrieved, no citations,
   wrong tone, hallucination when data is missing).
2. With your agent, change **at least two** of: chunking strategy, `top_k`, a metadata
   filter, hybrid search (vector + keyword), or the **system prompt** (domain persona +
   "say you don't know" rule).
3. Re-ask your C2 questions and a **new hard question** the data *can't* answer — confirm
   the app declines gracefully instead of inventing.
4. Keep `smoke_test.py` passing. Write down every change and its rationale in
   `retrieval_config.md`.

## Key Decisions

- **Top-k:** more context vs. more noise and token cost.
- **Hybrid search:** does adding keyword matching fix your "obvious miss" cases?
- **Refusal policy:** how should the app behave when retrieval returns nothing relevant?
- **Citations:** are sources shown in a way a stakeholder would trust?

## Deliverables

- `retrieval_config.md` — each change, why, and before/after on your test questions.
- Updated, redeployed app (`azd deploy`).
- Evidence the "unanswerable" question is now handled safely.

## Success Criteria

| Focus | What good looks like | Evidence |
| --- | --- | --- |
| Better retrieval | Right passages for your hard questions | Before/after transcript |
| Safe failure | No hallucination on unanswerable questions | "I don't know" response shown |
| No regression | Known-good question still works | `smoke_test.py` passes |

## Tips / Hints

<details>
<summary>The system prompt is your biggest lever</summary>

Ask the agent to draft a domain-specific system prompt that: states the assistant's role,
requires answers be grounded in retrieved context, **requires citing sources**, and
instructs it to say it doesn't know when context is insufficient. Small wording changes
here often beat retrieval tuning.

</details>

<details>
<summary>Measure, don't vibe</summary>

Keep a tiny table of your test questions and mark pass/fail before and after each change.
This becomes evidence for your demo and the seed for C4's regression check.

</details>

## Watch Out

- Don't change five things at once — you won't know what helped.
- Don't let "improvements" silently break C2's known-good question.
- Don't remove citations to make answers look cleaner; trust > polish.

## Artifact Handoff

| Item | Value |
| --- | --- |
| **Input from** | App + `smoke_test.py` (C2) |
| **Your output** | `retrieval_config.md` + updated app |
| **Next challenge uses** | C4 wraps ingestion + your smoke test into an automated agent loop |

## Next Step

Your app is accurate and honest. C4 makes it **self-updating**: an agent that ingests new
content and re-runs your test automatically.
