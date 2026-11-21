const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('================================================================');
console.log('VERIFICATION OF ALL 25 PAPERS IN js/data/papers-index.js');
console.log('================================================================\n');

const indexPath = path.join(__dirname, '../../js/data/papers-index.js');
const indexCode = fs.readFileSync(indexPath, 'utf8');

const rootSandbox = {
  window: {},
  console: console
};
vm.createContext(rootSandbox);
vm.runInContext(indexCode, rootSandbox);

const catalog = rootSandbox.window.PAPERS_CATALOG;
if (!Array.isArray(catalog)) {
  console.error('FAIL: PAPERS_CATALOG is not an array!');
  process.exit(1);
}

console.log(`Total papers registered in PAPERS_CATALOG: ${catalog.length}`);
if (catalog.length !== 27) {
  console.error(`FAIL: Expected 27 papers, found ${catalog.length}`);
  process.exit(1);
}

const VALID_CATEGORIES = ['Bihar STET PYQ', 'BPSC TRE PYQ', 'Sectional Drill'];
const categoryCounts = {};
let totalCatalogQuestions = 0;
let totalActualQuestions = 0;
const results = [];
let allPassed = true;

// Preload files so nested varNames share scope
const loadedFiles = new Set();

catalog.forEach((paper, idx) => {
  const paperNum = idx + 1;
  const jsFilePath = path.join(__dirname, '../../js/data', paper.jsFile);
  const fileExists = fs.existsSync(jsFilePath);

  if (!fileExists) {
    results.push({
      num: paperNum,
      id: paper.id,
      status: 'FAIL',
      error: `File not found: ${paper.jsFile}`
    });
    allPassed = false;
    return;
  }

  // Load file into rootSandbox if not loaded
  if (!loadedFiles.has(paper.jsFile)) {
    const fileCode = fs.readFileSync(jsFilePath, 'utf8');
    try {
      vm.runInContext(fileCode, rootSandbox);
      loadedFiles.add(paper.jsFile);
    } catch (e) {
      results.push({
        num: paperNum,
        id: paper.id,
        status: 'FAIL',
        error: `Error executing ${paper.jsFile}: ${e.message}`
      });
      allPassed = false;
      return;
    }
  }

  // Resolve varName (could be nested e.g. pedagogy_art_of_teaching.pedagogy_shift_set1)
  const varParts = paper.varName.split('.');
  let dataObj = rootSandbox.window;
  for (const part of varParts) {
    if (dataObj && dataObj[part] !== undefined) {
      dataObj = dataObj[part];
    } else {
      dataObj = undefined;
      break;
    }
  }

  if (!dataObj) {
    results.push({
      num: paperNum,
      id: paper.id,
      status: 'FAIL',
      error: `Variable ${paper.varName} not found in scope after loading ${paper.jsFile}`
    });
    allPassed = false;
    return;
  }

  const questions = Array.isArray(dataObj) ? dataObj : (dataObj.questions || []);
  const actualCount = questions.length;
  const expectedCount = paper.totalQuestions;

  totalCatalogQuestions += expectedCount;
  totalActualQuestions += actualCount;

  // Track category
  categoryCounts[paper.category] = (categoryCounts[paper.category] || 0) + 1;

  // Category valid?
  const categoryValid = VALID_CATEGORIES.includes(paper.category);

  // Year extraction check
  let year = null;
  const yearMatch = (paper.subtitle || '').match(/20\d\d/) || (paper.title || '').match(/20\d\d/);
  if (yearMatch) {
    year = yearMatch[0];
  }

  // Duration valid?
  const durationValid = typeof paper.durationMinutes === 'number' && paper.durationMinutes > 0;

  // Count matches?
  const countMatches = actualCount === expectedCount;

  // Options and questions sanity
  let qValid = true;
  let qError = '';
  for (let qi = 0; qi < questions.length; qi++) {
    const q = questions[qi];
    if (!q.question && !q.question_en && !q.question_hi) {
      qValid = false;
      qError = `Q${qi + 1} missing question text`;
      break;
    }
    const opts = q.options || q.options_en;
    if (!opts || typeof opts !== 'object') {
      qValid = false;
      qError = `Q${qi + 1} missing options`;
      break;
    }
    if (!q.correctAnswer) {
      qValid = false;
      qError = `Q${qi + 1} missing correctAnswer`;
      break;
    }
  }

  const isOk = fileExists && categoryValid && durationValid && countMatches && qValid;
  if (!isOk) allPassed = false;

  results.push({
    num: paperNum,
    id: paper.id,
    title: paper.title,
    category: paper.category,
    year: year || 'N/A',
    duration: paper.durationMinutes,
    catalogQs: expectedCount,
    actualQs: actualCount,
    jsFile: paper.jsFile,
    status: isOk ? 'PASS' : 'FAIL',
    qError: qError
  });
});

console.log('| # | ID | Category | Year | Duration | Qs (Catalog/Actual) | Status | File |');
console.log('|---|----|----------|------|----------|---------------------|--------|------|');
results.forEach(r => {
  console.log(`| ${r.num} | ${r.id} | ${r.category} | ${r.year} | ${r.duration}m | ${r.catalogQs} / ${r.actualQs} | ${r.status} | ${r.jsFile} |`);
  if (r.status === 'FAIL') {
    console.log(`    --> ERROR: ${r.error || r.qError}`);
  }
});

console.log('\n================================================================');
console.log('SUMMARY BY CATEGORY:');
for (const [cat, cnt] of Object.entries(categoryCounts)) {
  console.log(`  - ${cat}: ${cnt} papers`);
}
console.log(`\nTotal questions registered in catalog: ${totalCatalogQuestions}`);
console.log(`Total questions verified in datasets:  ${totalActualQuestions}`);
console.log(`Catalog question match: ${totalCatalogQuestions === totalActualQuestions ? 'EXACT MATCH' : 'MISMATCH'}`);
console.log(`Overall Paper Verification: ${allPassed ? 'ALL 25 PAPERS PASSED' : 'FAILURES DETECTED'}`);
console.log('================================================================');
