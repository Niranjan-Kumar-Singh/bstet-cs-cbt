# Data Schema Specification

This document defines the data structures used by the Bihar STET Paper II (Computer Science) & BPSC TRE PGT CBT Portal.

---

## 1. Papers Catalog Schema (`js/data/papers-index.js`)

The master catalog is exposed via `window.PAPERS_CATALOG` as an array of paper configuration objects:

```javascript
{
  "id": "official_2023",                       // Unique alphanumeric paper identifier
  "varName": "official_2023",                   // Global variable name assigned by data file
  "jsFile": "official-2023.js",                 // Relative path in js/data/
  "title": "BSTET Official 2023 - Paper II",   // User-facing title (English)
  "subtitle": "Held On: 12 Sep 2023...",       // Descriptive subtitle with exam date/shift
  "category": "Official PYQ",                   // "Official PYQ" | "Sectional Drill"
  "badge": "Official Key",                      // Display badge text
  "badgeClass": "badge-official",               // CSS class: "badge-official" | "badge-drill"
  "totalQuestions": 150,                        // Question count (30, 50, 100, or 150)
  "totalMarks": 150,                            // Maximum marks
  "durationMinutes": 150,                       // Exam duration in minutes
  "difficulty": "Real Exam Standard"            // Qualitative difficulty indicator
}
```

---

## 2. Question Object Schema

Each paper contains an array of question objects adhering to the following schema:

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `number` \| `string` | Yes | 1-based question number or unique identifier |
| `section` | `string` | Yes | Section name: `"Computer Science"`, `"Art of Teaching"`, or `"General Skills"` |
| `topic` | `string` | Yes | Subject topic in English (e.g., `"Operating Systems"`, `"Bloom's Taxonomy"`) |
| `topic_hi` | `string` | Yes | Natural Hindi topic translation |
| `unit` | `string` | Optional | Syllabus unit identifier (e.g., `"Unit 1: Digital Logic & Architecture"`) |
| `unit_hi` | `string` | Optional | Natural Hindi unit translation |
| `question` | `string` | Yes | Clean, verbatim English question text |
| `question_hi` | `string` | Yes | Natural, idiomatic Hindi question text |
| `options` | `object` | Yes | Key-value pairs for options: `{"A": "...", "B": "...", "C": "...", "D": "..."}` (or `"E"` for BPSC) |
| `options_hi` | `object` | Yes | Key-value pairs for options in Hindi |
| `correctAnswer` | `string` | Yes | Correct option letter: `"A"`, `"B"`, `"C"`, `"D"`, or `"E"` |
| `explanation` | `string` | Yes | Pedagogically sound English explanation |
| `explanation_hi` | `string` | Yes | Natural Hindi explanation |
| `officialQuestionId` | `string` \| `number` | Optional | Official Question ID from BSEB/BPSC candidate response sheet |
| `officialOptionIds` | `object` | Optional | Mapping of option letters to official BSEB Option IDs |

---

## 3. LocalStorage State Contracts

The application strictly preserves the following client-side storage contracts:

| Key | Type | Description |
|---|---|---|
| `BSTET_EXAM_HISTORY` | `Array<Attempt>` | List of completed exam attempt summaries (date, score, accuracy, pace) |
| `BSTET_LANG` | `string` | Current interface language (`"en"` or `"hi"`) |
| `BSTET_THEME` | `string` | Theme mode (`"light"` or `"dark"`) |
| `BSTET_FONT_SIZE` | `string` | Accessibility font scale (`"small"`, `"normal"`, `"large"`, `"xlarge"`) |
| `BSTET_ACTIVE_ATTEMPT` | `object` | Active exam autosave state with timestamp-derived remaining time |
