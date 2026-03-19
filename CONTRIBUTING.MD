# Contributing to JAGA

JAGA is a structured, dataset-first research initiative.
All contributions must follow a **proposal → validation → integration** workflow.

---

## 1. Start with an Issue (Mandatory)

Before contributing anything, you must open an issue.

Your issue should clearly describe:

* What you want to contribute
* Why it should be part of JAGA
* Whether it is:

  * an existing dataset
  * a dataset you plan to create
  * a new language addition

No pull requests will be accepted without a prior issue discussion.

---

## 2. Contribution Categories

### A. Existing Dataset

If you are adding an already available dataset:

* Provide source (paper / repo / link)
* Provide dataset details:

  * language
  * domain
  * size (hours / sentences)
  * license
* Explain:

  * why this dataset is important
  * what gap it fills

---

### B. New Dataset (Creation)

If you are creating a dataset:

You must clarify:

* domain (education / science / literature / etc.)
* expected size (sentences / hours)
* collection method (read speech / scraped / curated)
* whether transcripts are available

#### Important

If dataset is under construction:

```text
Complete a meaningful portion before submitting a PR.
```

Do not submit empty or placeholder datasets.

---

### C. New Language Proposal

If you are proposing a new language:

You must specify:

* Language name
* Language code (if available)
* Classification:

  * Indian language
  * Dialect of an Indian language

---

#### If it is a Dialect

You must provide:

* estimated number of sentences you can contribute
* domain of those sentences
* linguistic differences (if known)

---

## 3. Parallel Corpus Requirement (Strongly Recommended)

For any dataset, contributors are encouraged to provide:

* English translations
* Other Indic language translations (if possible)

Example:

```text
Odia → English → Hindi / Bengali / etc.
```

This significantly increases dataset value.

---

## 4. Translation Verification (Mandatory for Parallel Data)

To ensure quality:

You must provide:

* contact details (email) of **two independent reviewers**

These reviewers should:

* understand the language
* verify correctness of translations

JAGA may:

* contact them
* request confirmation
* perform additional checks

---

## 5. Pull Request Process

After issue discussion and dataset readiness:

1. Fork the repository
2. Add your dataset / analysis in the appropriate directory
3. Include:

   * dataset description
   * metadata
   * statistics (if available)
4. Submit a Pull Request linked to the issue

---

## 6. Acceptance Criteria

A contribution will be accepted if:

* it fills a clear gap
* it follows structure
* metadata is complete
* quality is verifiable

Low-quality or undocumented contributions will be rejected.

---

## 7. Philosophy

JAGA is not a data dump.

```text
Every dataset must be:
- justified
- structured
- analyzable
- reproducible
```

---

## 8. Notes

* Do not upload raw data without approval
* Large datasets may be hosted externally (e.g., Hugging Face)
* JAGA maintains both public metadata and controlled-access data

---

## Summary

```text
Open Issue → Discuss → Build / Validate → Submit PR → Review → Merge
```

---

By contributing, you agree to follow this workflow.
