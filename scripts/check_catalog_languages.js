const fs = require('fs');
const path = require('path');

// 1. Load papers-index.js
const indexPath = path.join(__dirname, '..', 'js', 'data', 'papers-index.js');
const indexCode = fs.readFileSync(indexPath, 'utf8');
const indexSandbox = { window: {} };
new Function('window', indexCode)(indexSandbox.window);
const catalog = indexSandbox.window.PAPERS_CATALOG;

console.log(`Found ${catalog.length} tests in PAPERS_CATALOG.\n`);

const devanagariRegex = /[\u0900-\u097F]/;
const latinRegex = /[a-zA-Z]/;

// Cache loaded files
const fileData = {};

catalog.forEach((meta, idx) => {
  const filePath = path.join(__dirname, '..', 'js', 'data', meta.jsFile);
  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: File ${meta.jsFile} for test ${meta.id} does not exist!`);
    return;
  }
  
  if (!fileData[meta.jsFile]) {
    const code = fs.readFileSync(filePath, 'utf8');
    const sandbox = { window: {} };
    new Function('window', code)(sandbox.window);
    fileData[meta.jsFile] = sandbox.window;
  }

  // Resolve paper data
  let paperData = null;
  const varName = meta.varName;
  if (varName.includes('.')) {
    const parts = varName.split('.');
    paperData = fileData[meta.jsFile][parts[0]] && fileData[meta.jsFile][parts[0]][parts[1]];
  } else {
    paperData = fileData[meta.jsFile][varName];
  }

  if (!paperData || !paperData.questions) {
    console.error(`ERROR: Test ${meta.id} (var: ${varName} in ${meta.jsFile}) could not be resolved or has no questions!`);
    return;
  }

  let pureHindiInEn = 0;
  let pureEnInHi = 0;
  let missingHiQ = 0;
  let missingHiOpt = 0;
  let samples = [];

  paperData.questions.forEach((q, qIdx) => {
    const qEn = (q.question || '').trim();
    const qHi = (q.question_hi || '').trim();

    // In 'en' mode: qEn is shown. If qEn has Devanagari and NO English letters, it's stuck in Hindi!
    if (devanagariRegex.test(qEn) && !latinRegex.test(qEn)) {
      pureHindiInEn++;
      if (samples.length < 2) {
        samples.push(`Q${qIdx+1} stuck in Hindi when English chosen: "${qEn.slice(0, 50)}"`);
      }
    }

    // In 'hi' mode: qHi is shown (or fallback qEn). If qHi is missing or has NO Devanagari while English letters exist:
    if (!qHi) {
      missingHiQ++;
    } else if (!devanagariRegex.test(qHi) && latinRegex.test(qHi)) {
      pureEnInHi++;
      if (samples.length < 2) {
        samples.push(`Q${qIdx+1} stuck in English when Hindi chosen: "${qHi.slice(0, 50)}"`);
      }
    }

    // Options check
    const opts = q.options || {};
    const optsHi = q.options_hi || {};
    ['A', 'B', 'C', 'D'].forEach(letter => {
      const enO = opts[letter];
      const hiO = optsHi[letter];
      if (!hiO) missingHiOpt++;
      if (typeof enO === 'string' && devanagariRegex.test(enO) && !latinRegex.test(enO)) {
        // Option is pure Hindi in English mode
      }
    });
  });

  const hasIssues = pureHindiInEn > 0 || pureEnInHi > 0 || missingHiQ > 0 || missingHiOpt > 0;
  console.log(`[${idx+1}/${catalog.length}] ${meta.id} (${paperData.questions.length} Qs) [${meta.title}]:`);
  console.log(`    pureHindiInEn: ${pureHindiInEn}, pureEnInHi: ${pureEnInHi}, missingHiQ: ${missingHiQ}, missingHiOpt: ${missingHiOpt}`);
  if (samples.length > 0) {
    samples.forEach(s => console.log('      ->', s));
  }
});

