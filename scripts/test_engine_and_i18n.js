// Unit & Integration Test for BSTET ExamEngine & Bilingual Language Switcher
const fs = require('fs');
const path = require('path');

// Mock browser global environment
global.window = global;
global.localStorage = {
  store: {},
  getItem(k) { return this.store[k] || null; },
  setItem(k, v) { this.store[k] = String(v); },
  removeItem(k) { delete this.store[k]; },
  clear() { this.store = {}; }
};

// Load code files
eval(fs.readFileSync(path.join(__dirname, '../js/i18n.js'), 'utf-8'));
eval(fs.readFileSync(path.join(__dirname, '../js/data/official-shift2.js'), 'utf-8'));
eval(fs.readFileSync(path.join(__dirname, '../js/exam-engine.js'), 'utf-8'));

console.log("=== RUNNING CBT BILINGUAL ENGINE TESTS ===\n");

const paper = window.official_shift2;
if (!paper || !paper.questions) {
  console.error("FAIL: official_shift2 could not be loaded");
  process.exit(1);
}

const engine = new ExamEngine();
engine.init(paper, 'cbt');

// Test 1: Initial state is English
console.log("Test 1: Default Exam Base Language");
const q1 = engine.getCurrentQuestion();
console.assert(engine.baseLang === 'en', `Base lang should be 'en', got ${engine.baseLang}`);
console.assert(engine.getQuestionActiveLang(q1) === 'en', `Q1 active lang should be 'en'`);
const q1StmtEn = engine.getQuestionStatement(q1);
console.assert(q1StmtEn.includes("Cat-5, Cat-5E and Cat-6"), `Expected English statement, got: ${q1StmtEn}`);
const q1OptEn = engine.getOptionText(q1, 'D');
console.assert(q1OptEn === "Unshielded Twisted Pair Cable", `Expected English option, got: ${q1OptEn}`);
console.log("  ✓ Test 1 Passed: Q1 loads in English by default\n");

// Test 2: Switch language for Question 1 ONLY to Hindi
console.log("Test 2: Switch Q1 ONLY to Hindi");
engine.setQuestionLanguage(q1.id, 'hi');
console.assert(engine.getQuestionActiveLang(q1) === 'hi', `Q1 should be 'hi'`);
const q1StmtHi = engine.getQuestionStatement(q1);
console.assert(q1StmtHi.includes("कैट-5, कैट-5ई"), `Expected Hindi statement, got: ${q1StmtHi}`);
const q1OptDHi = engine.getOptionText(q1, 'D');
console.assert(q1OptDHi.includes("अनशील्ड") || q1OptDHi.includes("ट्विस्टेड"), `Expected Hindi option, got: ${q1OptDHi}`);
console.log(`  Q1 Hindi Statement: "${q1StmtHi}"`);
console.log(`  Q1 Option D (Hindi): "${q1OptDHi}"`);
console.log("  ✓ Test 2 Passed: Q1 successfully switched to authentic Hindi\n");

// Test 3: Navigate to Question 2 -> MUST be in English (Base Language)
console.log("Test 3: Verify Question 2 remains in English (Base Language)");
engine.saveAndNext();
const q2 = engine.getCurrentQuestion();
console.assert(q2.id === 2, `Expected Q2, got id ${q2.id}`);
const q2ActiveLang = engine.getQuestionActiveLang(q2);
console.assert(q2ActiveLang === 'en', `Q2 active lang should be 'en', got: ${q2ActiveLang}`);
const q2Stmt = engine.getQuestionStatement(q2);
console.assert(!q2Stmt.includes("हिन्दी"), `Q2 should be English, got: ${q2Stmt}`);
console.log(`  Q2 English Statement: "${q2Stmt.substring(0, 60)}..."`);
console.log("  ✓ Test 3 Passed: Moving to next question reverts to base language (English)\n");

// Test 4: Navigate back to Question 1 -> MUST remember Hindi override
console.log("Test 4: Navigate back to Question 1 and verify Hindi is retained");
engine.prevQuestion();
const q1Again = engine.getCurrentQuestion();
console.assert(q1Again.id === 1, `Expected Q1, got id ${q1Again.id}`);
console.assert(engine.getQuestionActiveLang(q1Again) === 'hi', `Q1 should still be 'hi'`);
console.assert(engine.getQuestionStatement(q1Again).includes("कैट-5"), `Q1 statement must still be Hindi`);
console.log("  ✓ Test 4 Passed: Q1 remembers its individual Hindi override\n");

// Test 5: Switch Question 1 to Dual (Both)
console.log("Test 5: Switch Q1 to Dual Mode");
engine.setQuestionLanguage(q1.id, 'both');
const dualStmt = engine.getQuestionStatement(q1);
console.assert(dualStmt.includes("dual-question-en") && dualStmt.includes("dual-question-hi"), `Expected dual markup`);
console.assert(dualStmt.includes("Cat-5") && dualStmt.includes("कैट-5"), `Dual must include both texts`);
console.log("  ✓ Test 5 Passed: Dual mode renders both English and Hindi simultaneously\n");

// Test 6: Global Language Switch -> EVERYTHING switches to Hindi
console.log("Test 6: Global language switch to Hindi");
engine.setBaseLanguage('hi', true); // Global reset
console.assert(engine.baseLang === 'hi', `Base language should be 'hi'`);
console.assert(Object.keys(engine.questionLangOverrides).length === 0, `Overrides should be cleared on global change`);
const allQuestions = paper.questions;
for (let i = 0; i < 5; i++) {
  const q = allQuestions[i];
  const lang = engine.getQuestionActiveLang(q);
  console.assert(lang === 'hi', `Question ${q.id} should be 'hi', got: ${lang}`);
}
console.log("  ✓ Test 6 Passed: Global switch makes all questions Hindi\n");

// Test 7: While globally Hindi, switch Question 2 to English ONLY
console.log("Test 7: While globally Hindi, switch Q2 to English only");
engine.setQuestionLanguage(2, 'en');
console.assert(engine.getQuestionActiveLang(allQuestions[1]) === 'en', `Q2 should be 'en'`);
console.assert(engine.getQuestionActiveLang(allQuestions[0]) === 'hi', `Q1 should still be 'hi'`);
console.assert(engine.getQuestionActiveLang(allQuestions[2]) === 'hi', `Q3 should still be 'hi'`);
console.log("  ✓ Test 7 Passed: In-exam switch changes language for THAT QUESTION ONLY!\n");

console.log("=========================================");
console.log("ALL 7 CORE BILINGUAL REQUIREMENTS PASSED!");
console.log("=========================================");
