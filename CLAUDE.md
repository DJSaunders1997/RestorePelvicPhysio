# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **Restore — Specialist Pelvic Health Physiotherapy**, run by Milly Watts in Pontypridd, Wales. No build system, no framework, no package manager — pure hand-written HTML, CSS, and JavaScript.

## Local Development

No build step — open files directly in a browser, or serve locally to avoid iframe/CORS quirks:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

There are no automated tests. Verify changes by loading the page in a browser and checking the affected section visually.

## Deployment

Deployment is a `git push` to `main`. GitHub Pages serves the files directly.

- Live site: `restorepelvicphysio.co.uk` (custom domain via Squarespace Domains, CNAME → GitHub Pages)
- GitHub Pages URL: `DJSaunders1997.github.io/RestorePelvicPhysio`

## Architecture

**Two pages:**
- `index.html` — single long-scrolling page with fixed navbar and anchor links (`#about`, `#services`, `#mot`, `#postnatal`, `#fees`, `#booking`, `#contact`)
- `privacy.html` — standalone UK GDPR privacy policy; reuses the same `css/styles.css` and `js/main.js`

**CSS design system** (`css/styles.css`, ~929 lines) — all colours are CSS custom properties on `:root`:
- `--bg-primary: #FAF8F5` (warm off-white)
- `--accent: #B09C8B` (dusty taupe)
- `--text-main: #3D3833` (dark brown)

**JavaScript** (`js/main.js`, ~48 lines) handles four things only:
1. Scroll-triggered `fade-up` animations via `IntersectionObserver`
2. Navbar `.scrolled` shadow class on scroll
3. Mobile hamburger menu toggle
4. Active nav-link highlighting as sections enter the viewport

**Third-party embeds:**
- Booking widget: Cliniko iframe (`restore.uk3.cliniko.com/bookings`)
- Location: Google Maps iframe

## Reference Material

`markdown/design_spec.md` contains the original client brief from Milly — tone-of-voice notes, fee schedule history, consent form text, and reference screenshots. Check it when making content or style decisions to stay aligned with the original brief.
