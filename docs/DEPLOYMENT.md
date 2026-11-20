# Deployment & Hosting Guide

The portal is hosted on **Vercel** at [https://bstet-cs-cbt.vercel.app](https://bstet-cs-cbt.vercel.app).

---

## 1. Zero-Build Deployment

Because the application is written entirely in native HTML5, CSS3, and ES modules, no bundler (Webpack, Vite, Rollup) or build pipeline is required. Deployment serves static files directly via Vercel's Edge Network.

---

## 2. Configuration (`vercel.json`)

`vercel.json` configures strict production HTTP response headers:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    },
    {
      "source": "/(css|js|images|fonts)/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## 3. Production Bundle Filtering (`.vercelignore`)

To keep the live deployment lightweight and performant, non-runtime assets are excluded via `.vercelignore`:
- `sources/` (Raw reference PDFs)
- `incoming/` (OCR extraction staging)
- `reports/` (Generated audit reports)
- `scripts/` (Build and test scripts)
- `docs/` (Internal documentation)
- Python cache files and temporary artifacts
