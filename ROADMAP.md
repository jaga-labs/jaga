# JAGA Roadmap

JAGA follows a **dataset-first, analysis-driven workflow**.
All development progresses through structured phases to ensure quality, reproducibility, and relevance.

---

## Core Workflow

```text
Issue → Private Collaboration → Data Analysis → Observations → Models → Targeted Data Collection
```

Each stage is mandatory before moving forward.

---

## Phase 0 — Issue Definition

All work begins with a clearly defined issue.

Objectives:

* define the problem
* identify the language / dataset
* justify the need
* outline expected outcomes

Output:

* approved issue
* contributor alignment

---

## Phase 1 — Private Collaboration (Data Access Layer)

Contributors are onboarded into a **private workspace** for:

* dataset access
* controlled data sharing
* initial exploration

Focus:

* avoid premature public release
* ensure responsible handling of data

Output:

* accessible dataset (private)
* contributor familiarity with data

---

## Phase 2 — Data Analysis

This is the most critical phase.

Perform structured analysis:

### Text Analysis

* total sentences
* unique sentences
* duplicate ratio
* vocabulary size
* character distribution
* sentence length distribution

### Speech Analysis (if applicable)

* total hours
* utterance distribution
* speaker distribution
* domain distribution

Output:

* dataset statistics
* reproducible analysis scripts

---

## Phase 3 — Observations & Dataset Understanding

Convert analysis into insights.

Identify:

* data imbalance
* missing domains
* weak linguistic coverage
* noise / quality issues

Document:

* strengths of dataset
* limitations
* gaps

Output:

* dataset report
* gap analysis

---

## Phase 4 — Model Baseline

Only after understanding the dataset:

* build baseline models
* evaluate performance
* identify failure cases

Focus:

* low-resource settings
* efficient inference
* domain-specific evaluation

Output:

* baseline metrics (WER, CER, etc.)
* failure analysis

---

## Phase 5 — Targeted Data Collection

Data collection is driven by **identified gaps**, not random expansion.

Examples:

* missing scientific vocabulary
* poor numerics handling
* underrepresented domains
* dialect gaps

Collection strategy:

* domain-specific
* structured
* verifiable

Output:

* new dataset (JAGA contribution)
* updated dataset registry

---

## Phase 6 — Iteration Loop

JAGA is iterative.

```text
new data → analysis → model → improvement → repeat
```

Each iteration improves:

* dataset quality
* model robustness
* language coverage

---

## Milestones

### JAGA v0.1 (Odia)

* analyze existing Odia datasets
* build dataset analysis pipeline
* collect 10 hours of domain-tagged speech
* establish baseline ASR system
* identify key linguistic gaps

---

### JAGA v0.2

* implement adaptive / exception-aware decoding
* expand dataset coverage (science, numerics, etc.)
* improve dataset quality through iteration

---

### JAGA v1.0

* mature Odia language infrastructure
* standardized dataset + benchmarks
* extend pipeline to additional Indic languages

---

## Principles

```text
Do not collect data without understanding it.
Do not build models without analyzing data.
Do not scale without identifying gaps.
```

---

## Summary

JAGA is not a linear pipeline.

It is a **controlled, iterative system** where:

* data drives models
* analysis drives decisions
* gaps drive collection
