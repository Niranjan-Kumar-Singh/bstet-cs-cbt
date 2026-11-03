const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'js', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'papers-index.js');

const devanagariRegex = /[\u0900-\u097F]/;

for (const file of files) {
  const filePath = path.join(dataDir, file);
  const code = fs.readFileSync(filePath, 'utf8');
  
  const sandbox = { window: {} };
  try {
    const fn = new Function('window', code);
    fn(sandbox.window);
  } catch (err) {
    console.error('Error executing ' + file + ':', err.message);
    continue;
  }
  
  for (const [key, val] of Object.entries(sandbox.window)) {
    if (!val) continue;
    let paperList = [];
    if (val.questions && Array.isArray(val.questions)) {
      paperList.push({ id: val.id || key, paper: val });
    } else if (typeof val === 'object') {
      for (const [subKey, subVal] of Object.entries(val)) {
        if (subVal && subVal.questions && Array.isArray(subVal.questions)) {
          paperList.push({ id: subVal.id || subKey, paper: subVal });
        }
      }
    }
    
    for (const { id, paper } of paperList) {
      let total = paper.questions.length;
      let enHasDevanagari = 0;
      let hiMissing = 0;
      let hiEqualsEn = 0;
      let optEnHasDevanagari = 0;
      let optHiMissing = 0;
      let samples = [];

      paper.questions.forEach((q, idx) => {
        if (!q) return;
        const qEn = (q.question || '').trim();
        const qHi = (q.question_hi || '').trim();
        
        if (devanagariRegex.test(qEn)) {
          enHasDevanagari++;
          if (samples.length < 2) {
            samples.push(`Q${idx+1} [en]: "${qEn.slice(0, 60)}" | [hi]: "${qHi.slice(0, 60)}"`);
          }
        }
        if (!qHi) {
          hiMissing++;
        } else if (qEn === qHi) {
          hiEqualsEn++;
        }
        
        const optsEn = Array.isArray(q.options) ? q.options : [];
        const optsHi = Array.isArray(q.options_hi) ? q.options_hi : [];
        if (!Array.isArray(q.options_hi) || optsHi.length === 0) {
          optHiMissing++;
        }
        optsEn.forEach((opt, oIdx) => {
          if (typeof opt === 'string' && devanagariRegex.test(opt)) {
            optEnHasDevanagari++;
          }
        });
      });

      console.log(`[${file}] ${id} (${total} Qs): enHasDevanagari=${enHasDevanagari}, hiMissing=${hiMissing}, hiEqualsEn=${hiEqualsEn}, optEnHasDevanagari=${optEnHasDevanagari}, optHiMissing=${optHiMissing}`);
      if (samples.length > 0) {
        samples.forEach(s => console.log('   Sample:', s));
      }
    }
  }
}
