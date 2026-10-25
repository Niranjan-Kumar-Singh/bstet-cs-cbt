const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// 1. Fix viewport meta (removes user-scalable=no)
indexHtml = indexHtml.replace(
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
);

// 2. Add Preconnects and Non-blocking Google Fonts
const fontAndPreconnects = `  <!-- Preconnect to Critical CDN & Ad Origins -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://fundingchoicesmessages.google.com">
  <link rel="preconnect" href="https://pagead2.googlesyndication.com">

  <!-- Asynchronous Non-blocking Google Fonts with font-display=swap -->
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800&display=swap" media="print" onload="this.media='all'">
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800&display=swap">
  </noscript>

  <!-- Core Stylesheets -->
  <link rel="stylesheet" href="css/styles.css?v=20261025_01">
  <link rel="stylesheet" href="css/cbt-theme.css?v=20261025_01">`;

indexHtml = indexHtml.replace(
  /  <!-- Core Stylesheets -->\r?\n  <link rel="stylesheet" href="css\/styles\.css\?v=[^"]+">\r?\n  <link rel="stylesheet" href="css\/cbt-theme\.css\?v=[^"]+">/,
  fontAndPreconnects
);

// 3. Inject pre-rendered cards into #papers-grid for zero CLS
const cardsHtml = fs.readFileSync(path.join(__dirname, '../scratch_cards.html'), 'utf8');
const papersGridRegex = /<div class="papers-grid" id="papers-grid">\s*<!-- Injected via app\.js -->\s*<\/div>/;
indexHtml = indexHtml.replace(
  papersGridRegex,
  `<div class="papers-grid" id="papers-grid">\n${cardsHtml}\n      </div>`
);

// 4. Remove the 19 heavy data script tags and defer core engine scripts
const oldScriptsBlockRegex = /  <!-- =========================================================================\s+DATA & APPLICATION SCRIPTS\s+========================================================================= -->[\s\S]+?<\/body>/;

const newScriptsBlock = `  <!-- =========================================================================
       DATA & APPLICATION SCRIPTS (High-Performance Deferred Loading)
       ========================================================================= -->
  <!-- Internationalization & Localization Engine -->
  <script defer src="js/i18n.js?v=20261025_01"></script>

  <!-- Master Paper Directory Catalog (Only 2.3 KiB) -->
  <script defer src="js/data/papers-index.js?v=20261025_01"></script>

  <!-- Core Exam Platform Engines (Deferred to eliminate parser blocking) -->
  <script defer src="js/exam-engine.js?v=20261025_01"></script>
  <script defer src="js/analytics.js?v=20261025_01"></script>
  <script defer src="js/app.js?v=20261025_01"></script>
</body>`;

indexHtml = indexHtml.replace(oldScriptsBlockRegex, newScriptsBlock);

fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log('Successfully optimized index.html for PageSpeed 95+ performance!');
