const vm = require('vm');
const fs = require('fs');

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync('js/data/papers-index.js', 'utf8'), ctx);
const cat = ctx.window.PAPERS_CATALOG;

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://bstet-cs-cbt.vercel.app/</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://bstet-cs-cbt.vercel.app/?filter=official</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://bstet-cs-cbt.vercel.app/?filter=predicted</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://bstet-cs-cbt.vercel.app/?filter=drill</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://bstet-cs-cbt.vercel.app/?lang=hi</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;

cat.forEach(p => {
  xml += `  <url>
    <loc>https://bstet-cs-cbt.vercel.app/?paper=${p.id}</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
});

xml += `</urlset>\n`;

fs.writeFileSync('sitemap.xml', xml, 'utf8');
console.log(`Successfully generated sitemap.xml with ${5 + cat.length} URLs!`);
