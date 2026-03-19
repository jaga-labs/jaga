# JAGA

<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnJ2azR1b3o4Z2RpODVia2Fwcms3cHI2dmdpa3BpcHFvdWgyOXR5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlTBJ2VAsXdJu24/giphy.gif" width="500"/>
</p>

**JAGA** is an open research initiative for building
**low-compute, culturally grounded AI systems for Indic languages**.

The system begins with **Odia (ory)** and is designed to scale across languages through a **dataset-first, analysis-driven approach**.

---

## Overview

Most work in low-resource NLP starts with models.

JAGA starts with:

```text
language → data → analysis → gaps → targeted collection → models
```

The goal is to build a **transparent, evolving infrastructure** for each language —
not isolated datasets or one-off models.

---

## Core Design

JAGA operates as a **language intelligence layer**:

* tracks all existing datasets
* analyzes them structurally
* identifies missing coverage
* collects targeted data
* builds efficient systems on top

Every decision is driven by **measured gaps**, not assumptions.

---

## Dataset-Centric Architecture

All datasets are organized under:

```
datasets/<language_code>/
```

Example:

```
datasets/ory/
```

Each language directory contains:

### Dataset Registry

Structured listing of:

* existing public datasets
* JAGA datasets
* metadata (hours, domains, speakers, license)

### Dataset Analysis

Computed statistics:

* total / unique sentences
* duplicate ratios
* vocabulary size
* character distribution
* domain coverage

### Data Sources

Links to:

* dataset repositories
* analysis pipelines
* preprocessing scripts

### JAGA Contributions

Documentation of:

* what was collected
* why it was needed
* how it was collected

### Gap Analysis

Explicit identification of:

* missing domains
* weak linguistic coverage
* data imbalance

---

## Focus Areas

### Speech Systems

* Speech datasets
* ASR (speech-to-text)
* Text-to-speech
* Speech-to-text translation
* Speech understanding (beyond transcription)

---

### Language Resources

* Parallel corpora
* Scientific and educational vocabulary
* Linguistic structure analysis

---

### Models

* Low-resource ASR
* Efficient decoding (adaptive / exception-aware)
* Lightweight language models

---

## Current Milestone — JAGA v0.1 (Odia)

* Collect **10 hours of domain-tagged Odia speech**
* Build dataset analysis pipeline
* Analyze existing Odia datasets
* Establish baseline ASR system
* Identify gaps in:

  * scientific vocabulary
  * numerics
  * domain diversity

---

## Repository Structure

```
docs/       → documentation and design notes  
datasets/   → language-wise dataset registry + analysis  
models/     → experiments and benchmarks  
tools/      → dataset analysis and utilities  
reports/    → structured outputs and findings  
```

---

## Data Access Model

* Dataset **metadata and analysis are public**
* Raw datasets may be **controlled-access**

This ensures:

* reproducibility
* transparency
* responsible usage

---

## Contributing

JAGA is designed as an open system.

You can contribute to:

* dataset collection
* data verification
* analysis pipelines
* model development

Start via issues or discussions.

---

## Principle

```
Do not assume the language.
Measure it.
```

---

## License

MIT License
