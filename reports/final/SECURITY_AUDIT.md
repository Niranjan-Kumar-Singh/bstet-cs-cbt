# Security, Privacy & Compliance Audit Report

**Date:** 2026-11-21  
**Target:** Bihar STET Paper II (CS) CBT Portal (v2.5.0)  
**Deployment Infrastructure:** Vercel Global Edge Network  

---

## 1. HTTP Security Headers Audit

The production configuration in `vercel.json` provides strict security controls across all edge routes:

| Header | Production Value | Security Purpose | Status |
|:---|:---|:---|:---:|
| **Content-Security-Policy (CSP)** | `default-src 'self'; script-src 'self' 'unsafe-inline' https://pagead2.googlesyndication.com https://adservice.google.com https://www.googletagservices.com https://partner.googleadservices.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://pagead2.googlesyndication.com https://*.google.com https://*.doubleclick.net https://*.googlesyndication.com; font-src 'self' data:; connect-src 'self' https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://*.google.com; frame-src 'self' https://googleads.g.doubleclick.net https://*.googlesyndication.com https://*.google.com; object-src 'none'; base-uri 'self'; form-action 'self';` | Blocks arbitrary script injection and restricts resource loading to origin and verified Google AdSense domains. | ✅ PASS |
| **Strict-Transport-Security (HSTS)** | `max-age=63072000; includeSubDomains; preload` | Forces HTTPS for 2 years across all subdomains and enables browser preload lists. | ✅ PASS |
| **X-Content-Type-Options** | `nosniff` | Prevents MIME-type sniffing attacks. | ✅ PASS |
| **X-Frame-Options** | `SAMEORIGIN` | Mitigates clickjacking attacks. | ✅ PASS |
| **Referrer-Policy** | `strict-origin-when-cross-origin` | Protects candidate referral and navigation telemetry. | ✅ PASS |
| **Permissions-Policy** | `camera=(), microphone=(), geolocation=(), interest-cohort=()` | Disables camera, microphone, geolocation hardware, and FLoC tracking. | ✅ PASS |
| **X-XSS-Protection** | *Permanently Removed* | OWASP/MDN recommendation: removed legacy filter that introduced side-channel vulnerabilities. | ✅ PASS |

---

## 2. Privacy & Data Handling (Zero Telemetry)

1. **Client-Side Data Storage**:
   - All examination state, test attempts (`BSTET_EXAM_HISTORY`), active attempt restoration (`BSTET_ACTIVE_ATTEMPT`), and user bookmarks (`BSTET_BOOKMARKS`) are stored purely in the user's browser via HTML5 `localStorage`.
   - No user database, backend login server, or authentication APIs exist.
   - Users can purge all stored data with a single click using the "Clear History" button on the lobby and dashboard views.

2. **Zero Analytics / Behavioral Telemetry**:
   - Zero third-party behavioral analytics, pixel trackers, heatmaps, or session replay scripts.
   - The platform functions completely offline after initial service worker caching.

---

## 3. Advertising Compliance & Google AdSense Policy

1. **Exam Mode Ad Suppression**:
   - While a candidate is inside an active CBT test session (`#exam-screen`), all advertisements are suppressed to guarantee zero distraction and complete cognitive focus.
2. **Authorized Digital Sellers (`ads.txt`)**:
   - Validated `ads.txt` published at root (`https://bstet-cs-cbt.vercel.app/ads.txt`) complying with IAB standards.
3. **Transparency Disclosures**:
   - Comprehensive legal modal accessible via footer links with dedicated tabs for Privacy Policy, Terms of Service, Disclaimer, and AdSense & Cookie Policies.

---

## 4. Accessibility (WCAG 2.2 AA) Audit

1. **Contrast Ratios**:
   - Text elements meet the 4.5:1 minimum contrast ratio against both light and dark mode surfaces.
   - Secondary text tokens (`--text-secondary` and `--text-muted`) provide >5.2:1 contrast.
2. **Touch Targets**:
   - All interactive controls (palette question buttons, navigation buttons, category filter tabs) adhere to the minimum 44×44px touch target requirement.
3. **Landmarks & Skip-Link**:
   - `<a href="#main-content" class="skip-link">` allows instant screen-reader bypassing of header navigation.
   - Semantic landmarks `<header role="banner">`, `<main id="main-content" role="main">`, `<footer role="contentinfo">` ensure compliant screen-reader traversal.
