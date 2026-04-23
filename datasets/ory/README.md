# datasets/ory — Odia Dataset Registry

> **Status: Coming Soon**
>
> This directory will contain the full structured registry of Odia (ISO 639-3: `ory`) language datasets, analysis, and JAGA's own collection.

---

## Structure (Template)

```
datasets/ory/
├── registry.md        ← Catalogue of all known datasets
├── analysis/          ← Computed statistics per dataset
├── gaps.md            ← Identified coverage gaps
└── jaga/              ← JAGA-collected data (controlled access)
```

---

<!--
## registry.md template (to be filled per dataset)

| Field            | Value                          |
|------------------|--------------------------------|
| Name             | Dataset name                   |
| Source           | URL / DOI                      |
| Type             | speech / text / parallel / other |
| Domain           | general / news / lit / sci ... |
| Size             | hours / sentences              |
| Speakers         | count / demographics           |
| License          | CC-BY / research-only / ...    |
| Format           | wav + txt / jsonl / tsv        |
| Dialect coverage | standard / sambalpuri / ...    |
| JAGA notes       | gaps found, quality, coverage  |

## gaps.md template

- **Missing domains:** list domains with <X% coverage
- **Missing dialects:** list unrepresented districts
- **Speaker diversity gaps:** gender, age, region imbalance
- **Data quality issues:** noise, accent mismatch, etc.
-->
