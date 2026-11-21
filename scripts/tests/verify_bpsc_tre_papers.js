const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('================================================================');
console.log('DEEP VERIFICATION OF BPSC TRE PAPERS (TRE 1.0, 2.0, 3.0)');
console.log('================================================================\n');

const bpscFiles = [
  { file: 'bpsc-tre1-2023.js', varName: 'bpsc_tre1_2023', name: 'BPSC TRE 1.0 (2023)', expectedQs: 120 },
  { file: 'bpsc-tre2-2023.js', varName: 'bpsc_tre2_2023', name: 'BPSC TRE 2.0 (2023)', expectedQs: 150 },
  { file: 'bpsc-tre3-2024.js', varName: 'bpsc_tre3_2024', name: 'BPSC TRE 3.0 (2024)', expectedQs: 150 }
];

let allPassed = true;

bpscFiles.forEach(bp => {
  console.log(`\n----------------------------------------------------------------`);
  console.log(`ANALYZING: ${bp.name} (${bp.file})`);
  console.log(`----------------------------------------------------------------`);

  const filePath = path.join(__dirname, '../../js/data', bp.file);
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: File ${bp.file} does not exist!`);
    allPassed = false;
    return;
  }

  const sandbox = { window: {}, console: console };
  vm.createContext(sandbox);
  const code = fs.readFileSync(filePath, 'utf8');
  vm.runInContext(code, sandbox);

  const paper = sandbox.window[bp.varName];
  if (!paper) {
    console.error(`FAIL: window.${bp.varName} not found!`);
    allPassed = false;
    return;
  }

  // 1. Question count
  const qs = paper.questions || [];
  console.log(`Total Questions: ${qs.length} (Expected: ${bp.expectedQs})`);
  if (qs.length !== bp.expectedQs) {
    console.error(`FAIL: Question count mismatch! Expected ${bp.expectedQs}, got ${qs.length}`);
    allPassed = false;
  }

  // 2. Section structures
  console.log('\nSections declared:');
  const sections = paper.sections || [];
  let sectionTotalCount = 0;
  sections.forEach((sec, sidx) => {
    console.log(`  Section ${sidx + 1}: "${sec.name}" (startQ: ${sec.startQ}, endQ: ${sec.endQ}, total: ${sec.total})`);
    sectionTotalCount += sec.total;
  });
  console.log(`Sections total questions sum: ${sectionTotalCount}`);
  if (sectionTotalCount !== bp.expectedQs) {
    console.error(`FAIL: Sections total ${sectionTotalCount} does not match expected ${bp.expectedQs}`);
    allPassed = false;
  }

  // Verify section mapping on individual questions
  const sectionCounts = {};
  qs.forEach(q => {
    sectionCounts[q.section] = (sectionCounts[q.section] || 0) + 1;
  });
  console.log('Questions grouped by section field:');
  for (const [secName, cnt] of Object.entries(sectionCounts)) {
    console.log(`  - "${secName}": ${cnt} Qs`);
  }

  // 3. 5-Option Verification (A, B, C, D, E)
  console.log('\n5-Option & Standard Options Verification:');
  let option5Count = 0;
  let missingECount = 0;
  let dMoreThanOneCount = 0;
  let eNoneOfAboveCount = 0;
  const answerDist = { A: 0, B: 0, C: 0, D: 0, E: 0, other: 0 };

  qs.forEach((q, idx) => {
    const qnum = q.qnum || (idx + 1);
    const opts = q.options || q.options_en || {};
    const keys = Object.keys(opts);

    if (keys.includes('A') && keys.includes('B') && keys.includes('C') && keys.includes('D') && keys.includes('E')) {
      option5Count++;
    } else {
      missingECount++;
      if (missingECount <= 5) {
        console.warn(`  Warning: Q${qnum} option keys: ${JSON.stringify(keys)}`);
      }
    }

    const optD = (opts['D'] || '').toLowerCase();
    const optE = (opts['E'] || '').toLowerCase();

    if (optD.includes('more than one') || optD.includes('उपर्युक्त में से एक से अधिक') || optD.includes('एक से अधिक')) {
      dMoreThanOneCount++;
    }
    if (optE.includes('none of the above') || optE.includes('उपर्युक्त में से कोई नहीं') || optE.includes('कोई नहीं')) {
      eNoneOfAboveCount++;
    }

    // Answer distribution
    if (['A', 'B', 'C', 'D', 'E'].includes(q.correctAnswer)) {
      answerDist[q.correctAnswer]++;
    } else if (q.correctAnswer === 'Deleted' && q.isDeleted) {
      answerDist['Deleted'] = (answerDist['Deleted'] || 0) + 1;
      console.log(`  - Question Q${qnum} officially CANCELLED / DELETED by Commission (full credit awarded)`);
    } else {
      answerDist.other++;
      console.warn(`  Warning: Q${qnum} unexpected correctAnswer: ${q.correctAnswer}`);
    }
  });

  console.log(`  - Questions with all 5 options (A, B, C, D, E): ${option5Count} / ${qs.length} (${((option5Count / qs.length) * 100).toFixed(1)}%)`);
  console.log(`  - Option D containing "More than one of the above": ${dMoreThanOneCount} / ${qs.length} (${((dMoreThanOneCount / qs.length) * 100).toFixed(1)}%)`);
  console.log(`  - Option E containing "None of the above": ${eNoneOfAboveCount} / ${qs.length} (${((eNoneOfAboveCount / qs.length) * 100).toFixed(1)}%)`);

  console.log('\nOfficial Answer Key Distribution:');
  for (const opt of ['A', 'B', 'C', 'D', 'E']) {
    console.log(`  Option ${opt}: ${answerDist[opt] || 0} Qs (${(((answerDist[opt] || 0) / qs.length) * 100).toFixed(1)}%)`);
  }
  if (answerDist['Deleted']) {
    console.log(`  Officially Deleted / Bonus: ${answerDist['Deleted']} Qs (${((answerDist['Deleted'] / qs.length) * 100).toFixed(1)}%)`);
  }
  if (answerDist.other > 0) {
    console.error(`FAIL: ${answerDist.other} questions have invalid answer key!`);
    allPassed = false;
  }

  // Explanation verification
  const withExpl = qs.filter(q => q.explanation && q.explanation.length > 0).length;
  console.log(`\nQuestions with Official Answer Key / Explanation: ${withExpl} / ${qs.length} (${((withExpl / qs.length) * 100).toFixed(1)}%)`);

  if (option5Count === qs.length && answerDist.other === 0 && qs.length === bp.expectedQs) {
    console.log(`\nRESULT for ${bp.name}: >>> PASS <<<`);
  } else {
    console.error(`\nRESULT for ${bp.name}: >>> FAIL <<<`);
    allPassed = false;
  }
});

console.log('\n================================================================');
console.log(`OVERALL BPSC TRE VERIFICATION: ${allPassed ? 'ALL PASSED' : 'FAILURES DETECTED'}`);
console.log('================================================================');
