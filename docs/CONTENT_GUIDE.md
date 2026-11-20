# Content Authoring & Integrity Guide

This guide outlines standards and requirements for creating, digitizing, and maintaining questions in the Bihar STET CBT Portal.

---

## 1. Reference Sources (Offline Only)

All raw question paper PDFs, candidate response sheets, and extracted syllabi reside in `sources/`.
- **Reference Nature**: Files in `sources/` are strictly offline archival materials used for digitizing and validating questions.
- **Exclusion from Production**: `sources/` and `incoming/` are listed in `.vercelignore` and `.gitignore` and are **never served publicly** to avoid unnecessary bundle overhead (~100 MB).

---

## 2. Core Integrity Principles

### Rule 1: Zero Templated Filler
Synthetic question generators and templated filler questions are strictly forbidden:
- Never use markers such as `Case 1`, `Scenario 12`, `Workflow 3`, `Practice 42`.
- Never use formulaic option variations (e.g. repeated distractor boilerplate).
- Every question must test a concrete, syllabus-specified concept.

### Rule 2: 100% Bilingual Symmetry
Every question must provide complete, natural translations:
- Both English (`question`, `options`, `explanation`) and Hindi (`question_hi`, `options_hi`, `explanation_hi`) must be provided.
- Avoid mechanical machine-translation artifacts; use standard Indian examination terminology (Devanagari script).

### Rule 3: Balanced Option Keys in Drills
For practice and sectional drills:
- Answer keys must be evenly distributed across options (`A`, `B`, `C`, `D` target 22%–28% each).
- Permute options deterministically to prevent answer-letter predictability while maintaining conceptual accuracy.

### Rule 4: Protection of Official Exam Papers
- **Gold Standard**: The question text, option wording, and answer keys of official exam papers (`official-shift1..4.js`, `official-2023.js`, `official-2020.js`, `official-2019.js`, `bpsc-tre3-2024.js`, and `pedagogy-art-of-teaching.js`) must never be edited, guessed, or paraphrased.
- Any disagreements with published keys must be verified against official master answer keys or candidate response sheets.

### Rule 5: Zero Internal Duplicates
- Every drill must have **0% internal duplicate questions**.
- Use `node scripts/audit_duplicates.js` to verify duplicate-free status before submission.
