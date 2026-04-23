# tools — Dataset Analysis Utilities

> **Status: Coming Soon**
>
> Scripts and utilities for analysing Odia datasets, computing statistics, and generating gap reports.

---

## Planned Tools

- `analyse_corpus.py` — Vocabulary size, sentence count, domain distribution
- `check_audio.py` — SNR, duration, sample rate validation for speech datasets
- `generate_gap_report.py` — Compare registry against known coverage, output gap summary

---

<!--
## Tool template (analyse_corpus.py)

Usage:
  python tools/analyse_corpus.py --input data/corpus.txt --output reports/stats.json

Output fields:
  - total_sentences
  - unique_sentences
  - vocabulary_size
  - avg_sentence_length
  - top_domains (if domain-tagged)
  - script_coverage (Odia chars vs Latin vs other)
  - duplicate_ratio
-->
