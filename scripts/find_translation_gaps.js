const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'js', 'data', 'papers-index.js');
const indexCode = fs.readFileSync(indexPath, 'utf8');
const indexSandbox = { window: {} };
new Function('window', indexCode)(indexSandbox.window);
const catalog = indexSandbox.window.PAPERS_CATALOG;

const fileData = {};

catalog.forEach((meta) => {
  const filePath = path.join(__dirname, '..', 'js', 'data', meta.jsFile);
  if (!fileData[meta.jsFile]) {
    const code = fs.readFileSync(filePath, 'utf8');
    const sandbox = { window: {} };
    new Function('window', code)(sandbox.window);
    fileData[meta.jsFile] = sandbox.window;
  }

  let paperData = null;
  const varName = meta.varName;
  if (varName.includes('.')) {
    const parts = varName.split('.');
    paperData = fileData[meta.jsFile][parts[0]] && fileData[meta.jsFile][parts[0]][parts[1]];
  } else {
    paperData = fileData[meta.jsFile][varName];
  }

  if (!paperData) return;

  const badQs = [];
  paperData.questions.forEach((q, idx) => {
    const missingOptsHi = ['A', 'B', 'C', 'D'].filter(k => !q.options_hi || !q.options_hi[k] || q.options_hi[k].trim() === '');
    const hiIsEn = q.question_hi && q.question && q.question_hi.trim() === q.question.trim();
    if (missingOptsHi.length > 0 || hiIsEn) {
      badQs.push({
        num: idx + 1,
        id: q.id,
        hiIsEn: hiIsEn,
        missingOptsHi: missingOptsHi,
        question: q.question.slice(0, 60),
        question_hi: (q.question_hi || '').slice(0, 60)
      });
    }
  });

  if (badQs.length > 0) {
    console.log(`\nPaper ${meta.id} has ${badQs.length} questions with issues:`);
    badQs.slice(0, 10).forEach(b => console.log('  ', JSON.stringify(b)));
    if (badQs.length > 10) console.log(`  ... and ${badQs.length - 10} more.`);
  }
});

