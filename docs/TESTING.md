# Testing & Verification Battery

This document details the verification test suites used to ensure 100% content integrity, schema compliance, and accessibility standards.

---

## 1. Test Suite Overview

| Suite | File | Execution | Scope |
|---|---|---|---|
| **Pro Developer Suite** | `scripts/pro_test_suite.py` | `npm test` | 154 checks covering DOM integrity, catalog counts, i18n keys, CSS tokens, controller wiring, security headers |
| **Duplicate Audit** | `scripts/audit_duplicates.js` | `npm run audit` | Digit-masked signature deduplication within and across all papers |
| **Quality Audit** | `scripts/audit/audit_quality.js` | `node scripts/audit/audit_quality.js` | Templated marker scan, schema completeness, answer letter distribution |

---

## 2. Duplicate Detection Methodology

`scripts/audit_duplicates.js` processes question statements through normalization:
1. Converts text to lowercase.
2. Strips all punctuation and special characters.
3. Masks all numbers/digits (`\d+` -> `_N_`).
4. Compares normalized signatures to detect both exact and near-duplicates.

### Criteria:
- **Sectional Drills**: Must have **0% internal duplicates** and **0% cross-duplicates** against official papers.
- **Official Papers**: Real exam shifts may contain genuine historical repeats (documented in reports as informational).

---

## 3. Running All Tests

```bash
# Run duplicate check
npm run audit

# Run master verification suite (154 checks)
npm test
```
