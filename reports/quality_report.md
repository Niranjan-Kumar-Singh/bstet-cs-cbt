# Quality Audit Report: Bihar STET Paper II (CS) CBT Portal

**Date:** 2026-11-20T19:33:45.970Z  
**Total Catalog Papers Analyzed:** 23  
**Total Questions Analyzed:** 1950  

## 1. Executive Summary

| Metric | Finding | Status |
|---|---|---|
| Total Questions in Portal | 1950 | 35 Papers Checked |
| Catalog Declared vs Actual Count Mismatches | 0 | ✅ All Match |
| Templated / Filler Questions (Narrow Rule) | 6 | Baseline Count |
| Templated / Filler Questions (Widened Rule) | **6** (+0) | ⚠️ Reconciled (+126 items) |
| Within-Paper Near-Duplicate Instances | **1** | ⚠️ Severe in Predicted & Drills |
| Official CS Blueprint Classification Coverage | **491 / 500 (98.20%)** | ✅ Target 95%+ Met |
| Official 2023 Answer Key Disagreements | **0** | ⚠️ Real PDF Disagreements |
| Official 2023 Substituted Questions | **2** | ⚠️ Need Phase 3 Restoration |
| Questions with Missing Schema Fields | 301 | ⚠️ 297 Questions Incomplete |
| Papers with Severe Answer Skew (>35%) | 5 | ⚠️ 14 Predicted Sets Skewed |

## 2. Per-Paper Quality Audit Table

| Paper ID | Category | Qs | A% | B% | C% | D% | Skew? | Templated (Wide) | Within-Paper Dups | Missing Fields |
|---|---|---|---|---|---|---|---|---|---|---|
| `official_shift1` | Official PYQ | 150 | 22.7% | 26.7% | 31.3% | 19.3% | ✅ | 0 | **0** | 0 |
| `official_shift2` | Official PYQ | 150 | 20.7% | 25.3% | 33.3% | 20.7% | ✅ | 0 | **0** | 0 |
| `official_shift3` | Official PYQ | 150 | 24% | 30.7% | 23.3% | 22% | ✅ | 0 | **0** | 0 |
| `official_shift4` | Official PYQ | 150 | 30.7% | 30.7% | 16.7% | 22% | ✅ | 0 | **0** | 0 |
| `official_2023` | Official PYQ | 150 | 28% | 21.3% | 31.3% | 19.3% | ✅ | 0 | **0** | 0 |
| `bpsc_tre3_2024` | Official PYQ | 150 | 20% | 25.3% | 24.7% | 14% | ✅ | 0 | **0** | 150 |
| `official_2020` | Official PYQ | 150 | 73.3% | 16% | 8% | 2.7% | ⚠️ SKEWED | 0 | **0** | 0 |
| `official_2019` | Official PYQ | 150 | 40% | 32.7% | 18.7% | 8.7% | ⚠️ SKEWED | 0 | **1** | 0 |
| `pedagogy_shift_set1` | Official PYQ | 30 | 33.3% | 26.7% | 13.3% | 26.7% | ✅ | 0 | **0** | 0 |
| `pedagogy_shift_set2` | Official PYQ | 30 | 33.3% | 13.3% | 20% | 33.3% | ✅ | 0 | **0** | 0 |
| `pedagogy_shift_set3` | Official PYQ | 30 | 20% | 26.7% | 26.7% | 26.7% | ✅ | 0 | **0** | 0 |
| `pedagogy_shift_set4` | Official PYQ | 30 | 30% | 13.3% | 20% | 36.7% | ⚠️ SKEWED | 0 | **0** | 0 |
| `pedagogy_shift_set5` | Official PYQ | 30 | 36.7% | 26.7% | 26.7% | 10% | ⚠️ SKEWED | 0 | **0** | 0 |
| `drill_cs_100` | Sectional Drill | 100 | 25% | 25% | 25% | 25% | ✅ | 0 | **0** | 0 |
| `drill_pedagogy_50` | Sectional Drill | 50 | 24% | 24% | 26% | 26% | ✅ | 3 | **0** | 0 |
| `drill_general_50` | Sectional Drill | 50 | 26% | 24% | 24% | 26% | ✅ | 3 | **0** | 1 |
| `drill_dsa_sql_50` | Sectional Drill | 50 | 24% | 24% | 26% | 26% | ✅ | 0 | **0** | 0 |
| `drill_os_networks_50` | Sectional Drill | 50 | 26% | 24% | 24% | 26% | ✅ | 0 | **0** | 0 |
| `pedagogy_master_100` | Sectional Drill | 100 | 37% | 16% | 27% | 20% | ⚠️ SKEWED | 0 | **0** | 0 |
| `pedagogy_recent_50` | Sectional Drill | 50 | 28% | 24% | 30% | 18% | ✅ | 0 | **0** | 0 |
| `drill_dbms_sql_50` | Sectional Drill | 50 | 26% | 24% | 26% | 24% | ✅ | 0 | **0** | 50 |
| `drill_os_networks_master_50` | Sectional Drill | 50 | 26% | 24% | 24% | 26% | ✅ | 0 | **0** | 50 |
| `drill_pedagogy_nep_50` | Sectional Drill | 50 | 24% | 24% | 26% | 26% | ✅ | 0 | **0** | 50 |

## 3. Within-Paper Near-Duplicate Audit (Specific Drills Highlighted)

Checking digit-masked 90-character signature `[a-z#]{15,90}` strictly *within each individual paper*:

| Drill / Paper ID | Within-Paper Duplicates | Duplicate Groups | Affected Question Ranges |
|---|---|---|---|
| **`drill_cs_100`** | **53 duplicates** | 2 groups | Q36–70 (Web Dev Practice 1..35), Q81–100 (Multimedia Workflow 1..20) |
| **`drill_dsa_sql_50`** | **24 duplicates** | 1 group | Q26–50 (Web Dev Practice 1..25) |
| **`drill_modern_tech_50`** | **49 duplicates** | 1 group | Q1–50 (Multimedia Workflow 1..50 - 100% Duplicate Filler) |
| **`drill_general_50`** | **9 duplicates** | 1 group | Q41–50 (Arithmetic progression filler) |
| **`drill_os_networks_50`** | **4 duplicates** | 1 group | Q46–50 (Multimedia Workflow 1..5) |


## 4. Official Examination Computer Science Blueprint (98.80% Coverage)

Based on 500 official CS questions (5 official papers × 100 questions) using topic tags as primary signal and enhanced keywords as fallback:

| Unit ID | Syllabus Unit Title | Questions in Official Papers | Blueprint Percentage |
|---|---|---|---|
| `cs-01-digital-logic` | Digital Logic | 50 | **10%** |
| `cs-02-coa` | Computer Organization and Architecture | 69 | **13.8%** |
| `cs-03-prog-ds` | Programming and Data Structure | 40 | **8%** |
| `cs-04-algorithms` | Algorithms | 21 | **4.2%** |
| `cs-05-os` | Operating System | 55 | **11%** |
| `cs-06-dbms` | Database Management System | 38 | **7.6%** |
| `cs-07-networks` | Computer Network | 80 | **16%** |
| `cs-08-software-eng` | Software Engineering | 13 | **2.6%** |
| `cs-09-oop` | Object Oriented Programming | 45 | **9%** |
| `cs-10-web-dev` | Web-Based Application Development | 20 | **4%** |
| `cs-11-toc` | Theory of Computation | 11 | **2.2%** |
| `cs-12-iot` | Internet of Things | 21 | **4.2%** |
| `cs-13-ai` | Artificial Intelligence | 9 | **1.8%** |
| `cs-14-ecommerce` | Fundamental of E-Commerce | 11 | **2.2%** |
| `cs-15-multimedia` | Multimedia | 8 | **1.6%** |

### Unclassified Questions (9 items):
- **official_shift1 Q31**: "The term "Data" refers to:"
- **official_shift1 Q100**: "What does I stands for in CIA"
- **official_shift2 Q47**: "Open System ________ tends to evolve more quickly than proprietary systems?"
- **official_shift3 Q40**: "When using the parity bit method, how does the receiver determine if an error occurred dur"
- **official_shift3 Q51**: "The software developed to detect and remove viruses only is called ______________."
- **official_shift4 Q71**: "A Database Management System is a type of _________software."
- **official_2023 Q40**: "The term "Data" refers to:"
- **official_2023 Q72**: "Minimum Number of states require to accept string ends with 101."
- **official_2023 Q81**: "Who is known as the father of AI?"

## 5. Official 2023 Answer Key Disagreements against Source PDF

Comparison of `official-2023.js` against the official source PDF (`reports/pdf_text/official_2023.txt`) Right Option ID:

| Q# | Question ID | Portal JS Answer | Official PDF Right Option | Right Option ID | Analysis |
|---|---|---|---|---|---|
