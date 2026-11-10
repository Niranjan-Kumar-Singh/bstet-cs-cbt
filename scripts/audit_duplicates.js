const fs = require('fs');
const path = require('path');
const vm = require('vm');

const context = {
  window: {},
  console: console
};
vm.createContext(context);

// Load papers catalog
const catalogCode = fs.readFileSync(path.join(__dirname, '../js/data/papers-index.js'), 'utf-8');
vm.runInContext(catalogCode, context);
const catalog = context.window.PAPERS_CATALOG;
console.log(`Loaded catalog with ${catalog.length} papers.`);

// Load all data files
const dataFiles = [
  'official-shift1.js',
  'official-shift2.js',
  'official-shift3.js',
  'official-shift4.js',
  'official-2023.js',
  'sachin-art-of-teaching.js',
  'predicted-set1.js',
  'predicted-set2.js',
  'predicted-set3.js',
  'predicted-set4.js',
  'predicted-set5.js',
  'predicted-set6.js',
  'predicted-set7.js',
  'predicted-set8.js',
  'predicted-set9.js',
  'predicted-set10.js',
  'predicted-set11.js',
  'predicted-set12.js',
  'predicted-set13.js',
  'predicted-set14.js',
  'topical-drills.js',
  'specialized-drills.js',
  'specialist-mastery-drills.js'
];

for (const file of dataFiles) {
  const filePath = path.join(__dirname, '../js/data', file);
  if (fs.existsSync(filePath)) {
    const code = fs.readFileSync(filePath, 'utf-8');
    try {
      vm.runInContext(code, context);
    } catch (e) {
      console.error(`Error loading ${file}:`, e.message);
    }
  } else {
    console.warn(`File not found: ${file}`);
  }
}

// Function to get questions from paper object/varName
function getPaperQuestions(paperMeta) {
  const parts = paperMeta.varName.split('.');
  let obj = context.window;
  for (const part of parts) {
    if (!obj || obj[part] === undefined) return null;
    obj = obj[part];
  }
  if (!obj) return null;
  if (Array.isArray(obj)) return obj;
  if (obj.questions && Array.isArray(obj.questions)) return obj.questions;
  return null;
}

function normalizeText(text) {
  if (!text) return '';
  return text.toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const allQuestions = [];
const paperStats = {};

for (const paper of catalog) {
  const questions = getPaperQuestions(paper);
  if (!questions || !Array.isArray(questions)) {
    console.error(`Paper ${paper.id} (${paper.title}) failed to load questions!`);
    continue;
  }
  
  paperStats[paper.id] = {
    title: paper.title,
    category: paper.category,
    count: questions.length,
    internalDups: 0
  };

  const seenInPaper = new Map();
  questions.forEach((q, idx) => {
    const qText = q.question || q.statement || q.q || q.question_en || '';
    const norm = normalizeText(qText);
    const shortNorm = norm.substring(0, 75); // first 75 chars
    
    if (shortNorm.length > 10) {
      if (seenInPaper.has(shortNorm)) {
        paperStats[paper.id].internalDups++;
        console.log(`[INTERNAL DUP in ${paper.id}]: Q${idx+1} duplicates Q${seenInPaper.get(shortNorm)}: "${qText.substring(0, 60)}..."`);
      } else {
        seenInPaper.set(shortNorm, idx + 1);
      }
    }

    allQuestions.push({
      paperId: paper.id,
      paperCategory: paper.category,
      paperTitle: paper.title,
      qIndex: idx + 1,
      id: q.id || idx + 1,
      section: q.section || (idx < 100 ? 'Computer Science' : (idx < 130 ? 'Art of Teaching' : 'General Skills')),
      topic: q.topic || '',
      qText: qText,
      norm: norm,
      shortNorm: shortNorm
    });
  });
}

console.log('\n--- PAPER QUESTION COUNTS & INTERNAL DUPLICATES ---');
let totalQ = 0;
let totalInternalDups = 0;
for (const [id, stats] of Object.entries(paperStats)) {
  totalQ += stats.count;
  totalInternalDups += stats.internalDups;
  console.log(`${id.padEnd(28)} [${stats.category.padEnd(15)}]: ${stats.count} Qs ${stats.internalDups > 0 ? `⚠️ INTERNAL DUPS: ${stats.internalDups}` : '✅'}`);
}
console.log(`\nTotal questions loaded across 35 papers: ${totalQ}`);
console.log(`Total internal duplicates within single papers: ${totalInternalDups}`);

// Check cross-paper duplicates
console.log('\n--- ANALYZING CROSS-PAPER DUPLICATES ---');
const textToQuestions = new Map();
allQuestions.forEach(item => {
  if (item.shortNorm.length < 15) return;
  if (!textToQuestions.has(item.shortNorm)) {
    textToQuestions.set(item.shortNorm, []);
  }
  textToQuestions.get(item.shortNorm).push(item);
});

let crossDupCount = 0;
const dupGroups = [];
for (const [shortNorm, items] of textToQuestions.entries()) {
  const uniquePapers = new Set(items.map(i => i.paperId));
  if (uniquePapers.size > 1) {
    crossDupCount++;
    dupGroups.push({
      shortNorm,
      text: items[0].qText.substring(0, 90),
      section: items[0].section,
      topic: items[0].topic,
      count: items.length,
      papers: Array.from(uniquePapers),
      occurrences: items.map(i => `${i.paperId}(Q${i.qIndex})`)
    });
  }
}

console.log(`\nUnique question statements appearing in MULTIPLE papers: ${crossDupCount}`);
// Sort by count descending
dupGroups.sort((a, b) => b.count - a.count);

console.log('\nTop 25 most repeated questions across papers:');
dupGroups.slice(0, 25).forEach((dg, i) => {
  console.log(`\n#${i+1} [In ${dg.papers.length} papers, repeated ${dg.count} times] Section: ${dg.section} | Topic: ${dg.topic}`);
  console.log(`   Text: "${dg.text}..."`);
  console.log(`   Appears in: ${dg.occurrences.join(', ')}`);
});

// Summary breakdown by paper
console.log('\n--- DUPLICATE COUNT BREAKDOWN PER PAPER ---');
const paperDupMap = {};
catalog.forEach(p => { 
  paperDupMap[p.id] = { 
    title: p.title, 
    category: p.category, 
    totalQ: p.totalQuestions,
    dupsWithOtherPapers: 0,
    details: []
  }; 
});

dupGroups.forEach(dg => {
  dg.papers.forEach(pId => {
    if (paperDupMap[pId]) {
      paperDupMap[pId].dupsWithOtherPapers++;
    }
  });
});

for (const [pId, info] of Object.entries(paperDupMap)) {
  const pct = ((info.dupsWithOtherPapers / info.totalQ) * 100).toFixed(1);
  console.log(`${pId.padEnd(28)} [${info.category.padEnd(15)}]: ${String(info.dupsWithOtherPapers).padStart(3)} / ${String(info.totalQ).padStart(3)} repeated (${pct}%)`);
}

// Write full report to JSON file for processing
fs.writeFileSync(path.join(__dirname, 'duplicate_audit_report.json'), JSON.stringify({
  totalQuestions: totalQ,
  crossDupCount: crossDupCount,
  dupGroups: dupGroups,
  paperDupMap: paperDupMap
}, null, 2));
console.log('\nWrote full audit to scripts/duplicate_audit_report.json');
