const fs = require('fs');
const path = require('path');

// Mock window and navigator
global.window = global;
global.localStorage = {
  _store: {},
  getItem(k) { return this._store[k] || null; },
  setItem(k, v) { this._store[k] = String(v); },
  removeItem(k) { delete this._store[k]; }
};

require('../../js/data/papers-index.js');
require('../../js/analytics.js');
require('../../js/exam-engine.js');
require('../../js/i18n.js');

const catalog = window.PAPERS_CATALOG;
console.log('Catalog papers count:', catalog.length);

let totalIssues = 0;
let totalQuestionsChecked = 0;

catalog.forEach((meta, idx) => {
  const filePath = path.join(__dirname, '../../js/data', meta.jsFile);
  if (!fs.existsSync(filePath)) {
    console.error(`Paper file missing: ${meta.jsFile}`);
    totalIssues++;
    return;
  }
  try {
    require(filePath);
    const varParts = meta.varName.split('.');
    const paperData = varParts.length > 1 ? window[varParts[0]][varParts[1]] : window[varParts[0]];
    if (!paperData) {
      console.error(`Variable not defined for ${meta.id}: ${meta.varName}`);
      totalIssues++;
      return;
    }
    if (!Array.isArray(paperData.questions) || paperData.questions.length === 0) {
      console.error(`No questions in ${meta.id}`);
      totalIssues++;
      return;
    }

    // Check each question
    paperData.questions.forEach((q, qIdx) => {
      totalQuestionsChecked++;
      if (!q.question || String(q.question).trim() === '') {
        console.error(`Empty question statement in ${meta.id} Q${qIdx + 1}`);
        totalIssues++;
      }
      if (!q.options || typeof q.options !== 'object') {
        console.error(`Missing options in ${meta.id} Q${qIdx + 1}`);
        totalIssues++;
      } else {
        const requiredOpts = (q.options && q.options.E !== undefined) ? ['A', 'B', 'C', 'D', 'E'] : ['A', 'B', 'C', 'D'];
        requiredOpts.forEach(letter => {
          if (q.options[letter] === undefined || String(q.options[letter]).trim() === '') {
            console.error(`Missing option ${letter} in ${meta.id} Q${qIdx + 1}`);
            totalIssues++;
          }
        });
      }
      const validAnswers = ['A', 'B', 'C', 'D', 'E', 'Deleted'];
      if (!q.correctAnswer || !validAnswers.includes(q.correctAnswer)) {
        console.error(`Invalid correctAnswer '${q.correctAnswer}' in ${meta.id} Q${qIdx + 1}`);
        totalIssues++;
      }
    });

    // Test exam engine initialization and analytics evaluation
    const engine = new window.ExamEngine();
    engine.init(paperData, 'cbt');
    
    // Simulate answering half the questions
    const mockResponses = {};
    paperData.questions.forEach((q, i) => {
      if (i % 2 === 0) mockResponses[q.id] = q.correctAnswer;
      else if (i % 3 === 0) mockResponses[q.id] = 'A';
    });
    
    const report = window.ExamAnalytics.evaluate(paperData, mockResponses, {});
    if (!report || typeof report.totalScore !== 'number' || isNaN(report.totalScore)) {
      console.error(`ExamAnalytics produced NaN or invalid report for ${meta.id}`);
      totalIssues++;
    }

  } catch (err) {
    console.error(`Exception evaluating ${meta.id}:`, err);
    totalIssues++;
  }
});

console.log(`Audit complete! Checked ${totalQuestionsChecked} questions across ${catalog.length} papers. Total critical issues found: ${totalIssues}`);
