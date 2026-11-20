const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Generate version stamp (YYYYMMDD_hash)
const now = new Date();
const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
const randomHash = crypto.randomBytes(3).toString('hex');
const versionStamp = `${dateStr}_${randomHash}`;

console.log(`[Cache Busting] Generating build stamp: ${versionStamp}`);

// 1. Update index.html assets
const indexPath = path.resolve(__dirname, '../../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace queries in CSS link tags
html = html.replace(/(<link[^>]+href=["'](css\/[^"']+\.css))(?:\?v=[^"']*)?(["'][^>]*>)/gi, (match, prefix, file, suffix) => {
  return `${prefix}?v=${versionStamp}${suffix}`;
});

// Replace queries in JS script tags
html = html.replace(/(<script[^>]+src=["'](js\/[^"']+\.js))(?:\?v=[^"']*)?(["'][^>]*>)/gi, (match, prefix, file, suffix) => {
  return `${prefix}?v=${versionStamp}${suffix}`;
});

// Replace query in manifest
html = html.replace(/(<link[^>]+href=["'](manifest\.webmanifest))(?:\?v=[^"']*)?(["'][^>]*>)/gi, (match, prefix, file, suffix) => {
  return `${prefix}?v=${versionStamp}${suffix}`;
});

// Update or inject window.BSTET_VERSION in index.html
if (html.includes('window.BSTET_VERSION =')) {
  html = html.replace(/window\.BSTET_VERSION\s*=\s*['"][^'"]+['"];/, `window.BSTET_VERSION = '${versionStamp}';`);
} else {
  html = html.replace('<!-- Internationalization & Localization Engine -->', `<script>window.BSTET_VERSION = '${versionStamp}';</script>\n  <!-- Internationalization & Localization Engine -->`);
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log(`[Cache Busting] Stamped all CSS, JS, and manifest asset tags in index.html with ?v=${versionStamp}`);

// 2. Update sw.js CACHE_NAME and precache list
const swPath = path.resolve(__dirname, '../../sw.js');
let sw = fs.readFileSync(swPath, 'utf8');
sw = sw.replace(/const CACHE_NAME = 'bstet-cbt-[^']+';/, `const CACHE_NAME = 'bstet-cbt-${versionStamp}';`);

if (!sw.includes("'/og-preview.png'")) {
  sw = sw.replace("'/og-preview.svg',", "'/og-preview.svg',\n  '/og-preview.png',");
}

fs.writeFileSync(swPath, sw, 'utf8');
console.log(`[Cache Busting] Updated CACHE_NAME in sw.js to bstet-cbt-${versionStamp}`);
