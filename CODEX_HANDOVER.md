# 季節のことわり — Complete Project Handover Document
*For OpenAI Codex. Written 2026-06-07. Assumes zero prior context.*

---

## SECTION 1 — PROJECT OVERVIEW

### What this project is

**季節のことわり** (Kisetsu no Kotowari — "The Natural Order of the Seasons") is a long-form Japanese landing page (LPO) designed to sell enrollment in a 3-session online seminar series. The seminar is jointly taught by an Ayurvedic physician and a Japanese cooking teacher.

This is a **single-page marketing document** — not a web app, not an ecommerce store, not a blog. Every design and copy decision exists to move a visitor toward one of two purchase actions:

1. **全講座受講コース** (All Sessions Package) — ¥114,000 tax-included
2. **単発受講** (Single Session) — ¥38,000 tax-included per session

### Business purpose

The seminar teaches Ayurvedic principles **re-translated through Japan's 24 Solar Terms and traditional food culture**. The core intellectual claim: Ayurveda is universal wisdom, not Indian-specific wisdom — and it must be interpreted through Japan's actual climate, ingredients, and seasons rather than imported wholesale from India.

The LP exists to:
- Attract sign-ups before Session 01 on 2026-07-07
- Justify a premium price point (¥38,000–¥114,000) for an online seminar
- Differentiate from the large market of domestic Japanese Ayurveda schools

### Target audience

**Primary:** Japanese women, roughly 30–55 years old, who:
- Experience recurring seasonal health issues (summer fatigue, rainy-season swelling, autumn dryness, winter cold sensitivity) and have accepted these as unavoidable
- Are interested in food culture, fermentation, natural health
- Find standard Ayurveda "too Indian" or inaccessible
- Want to understand **why**, not just what to do

**Secondary:**
- Existing Ayurveda students seeking Japan-specific application
- Cooking teachers, wellness professionals, food culture enthusiasts

### Conversion goal

Primary CTA: **「全講座で学ぶ」** (Enroll in all sessions) → ¥114,000 package
Secondary CTA: **「1回から参加する」** (Start with one session) → ¥38,000

Both CTA buttons currently link to `#`. **Payment URL is not yet set.** This is the single most critical unfinished item.

### Brand positioning

**Not:** Indian health education, supplement product, spiritual wellness, generic Ayurveda school
**Is:** Premium Japanese seasonal lifestyle editorial. Think 婦人画報, 天然生活, 暮しの手帖.

The tone is that of a well-crafted Japanese lifestyle magazine, not a health information website.

### Emotional positioning

The visitor should feel:
> "This is speaking directly to me. This isn't someone selling me something — they're helping me understand something I already sensed but never had words for."

The LP leads with shared pain (seasonal body changes), reframes blame (not aging — seasonal misalignment), offers a new lens (Ayurveda via Japan's own food culture), and converts through slow trust.

### Current development status

The LP is **functionally complete** in terms of content and layout. Outstanding work:
1. CTA buttons need real payment platform URLs
2. OGP image (`og:image`) not set — SEO/social sharing will have no thumbnail
3. GitHub remote not yet configured (local git repo initialized, 3 commits)
4. No analytics or tracking code present

---

## SECTION 2 — TECH STACK

### Framework
**None.** Pure HTML/CSS/JS. No React, Vue, Svelte, or any frontend framework.

**Why:** The entire LP is a single static HTML file with two CSS files and one JS file. No build step needed. Simpler deployment, no dependencies, no breaking changes from framework upgrades. The LP targets Japanese users on all devices — pure HTML/CSS/JS maximizes compatibility and performance.

### Build system
**None.** There is no webpack, Vite, Parcel, or any bundler.

**Why:** Not needed for a static LP. Files are edited directly. The only "preprocessing" needed would be CSS minification for production — that can be done with any online tool or a simple Node.js one-liner when ready.

### Package manager
**None.** No `package.json`.

### CSS methodology
Custom properties (CSS variables) + BEM-adjacent class naming. No utility framework (no Tailwind, no Bootstrap).

CSS is organized in two files:
- `css/style.css` — base layout, typography, section styles, responsive breakpoints
- `css/watercolor-deco.css` — decoration overlay layer only (illustrations, wanpoint SVG positioning)

**Key architectural decision:** The watercolor decoration CSS is completely separate from layout CSS. This means illustrations can be toggled, repositioned, or removed without touching any structural styles. Never merge these two files.

### JS architecture
Vanilla JavaScript, ES5-compatible (uses `'use strict'`), organized into 14 self-executing IIFEs. Each IIFE handles one concern. No modules, no imports, no transpilation required.

### External dependencies
- **Google Fonts** (loaded in `<head>` via CDN):
  - Noto Serif JP — weights 300, 400, 500, 600, 700
  - Noto Sans JP — weights 300, 400, 500, 700
  - Cormorant Garamond — italic and regular, weights 300, 400
- **No JS libraries.** No jQuery, no GSAP, no lodash.

### Fonts
| Font | Role | Weights |
|---|---|---|
| Noto Serif JP | Headings, important body text, CTA labels | 300 (light), 400 (regular), 500 (medium) |
| Noto Sans JP | Body paragraphs, UI labels, form text | 300, 400, 500 |
| Cormorant Garamond | English accent labels, section kamon, pricing figures | 300, 400, italic variants |

**Font hierarchy rationale:** Noto Serif JP for authority and Japanese literary feel. Cormorant Garamond for European elegance in English accent elements. Noto Sans JP for readability in long body text.

Font size base: `html { font-size: 18px; }` — all `rem` values scale from this. Do not change this without auditing all `clamp()` sizes.

### Image assets
| Path | Description | Status |
|---|---|---|
| `images/hero.jpg` | Hero section background photo | ✅ Present |
| `images/siddharth.jpg` | Lead instructor profile photo | ✅ Present |
| `assets/arrangements/hero-main.svg` | Large watercolor arrangement for hero section | ✅ Present |
| `assets/arrangements/season-1-tsuyu-natsu.svg` | Session 01 schedule row illustration | ✅ Present |
| `assets/arrangements/season-2-natsu-aki.svg` | Session 02 schedule row illustration | ✅ Present |
| `assets/arrangements/season-3-aki-fuyu.svg` | Session 03 schedule row illustration | ✅ Present |
| `assets/wanpoint/01-umeboshi.svg` through `19-aoba-leaves.svg` | 19 botanical/food watercolor spot illustrations | ✅ All present |

Co-instructor YUKARI. photo is loaded from an external URL: `https://viorto.com/wp-content/uploads/2024/05/about_prof3.jpg` — this is a dependency on an external server. If that server goes down, the photo disappears. Consider downloading and serving locally.

### Hosting assumptions
Static file hosting. Any CDN or static host works: Netlify, Vercel, GitHub Pages, Cloudflare Pages, or an Apache/Nginx server. No server-side processing required.

Local development: `python3 -m http.server 8080` from the project root.

---

## SECTION 3 — DIRECTORY MAP

```
kisetsu-no-kotowari/
│
├── index.html                    ← THE ENTIRE LP (1,280+ lines, single file)
│
├── css/
│   ├── style.css                 ← All structural styles (2,000+ lines)
│   └── watercolor-deco.css       ← Illustration overlay layer (92 lines)
│
├── js/
│   └── main.js                   ← All JS, 14 IIFEs (451 lines)
│
├── images/
│   ├── hero.jpg                  ← Hero background photo (opacity 0.13)
│   └── siddharth.jpg             ← Lead instructor profile photo
│
├── assets/
│   ├── arrangements/
│   │   ├── hero-main.svg         ← Full-width hero watercolor composition
│   │   ├── season-1-tsuyu-natsu.svg  ← Schedule: rainy season → summer
│   │   ├── season-2-natsu-aki.svg    ← Schedule: summer → autumn
│   │   └── season-3-aki-fuyu.svg     ← Schedule: autumn → winter
│   │
│   └── wanpoint/                 ← 19 spot illustrations (all SVG)
│       ├── 01-umeboshi.svg       ← Pickled plum
│       ├── 02-shiso.svg          ← Perilla/shiso leaf
│       ├── 03-myoga.svg          ← Myoga ginger bud
│       ├── 04-kyuri.svg          ← Cucumber
│       ├── 05-inaho.svg          ← Rice ears/stalks
│       ├── 06-cha-leaf.svg       ← Tea leaf
│       ├── 07-miso-bowl.svg      ← Miso soup bowl
│       ├── 08-shio-salt.svg      ← Salt crystals
│       ├── 09-rice-grains.svg    ← Rice grains
│       ├── 10-nanten.svg         ← Nandina berries
│       ├── 11-raindrops.svg      ← Raindrops
│       ├── 12-susuki.svg         ← Pampas grass
│       ├── 13-tomato.svg         ← Tomato
│       ├── 14-nasu-eggplant.svg  ← Eggplant
│       ├── 15-goya.svg           ← Bitter melon
│       ├── 16-shoyu.svg          ← Soy sauce bottle
│       ├── 17-daikon.svg         ← Daikon radish
│       ├── 18-carrot.svg         ← Carrot
│       └── 19-aoba-leaves.svg    ← Green leaves branch
│
├── BRIEF_FOR_AI.md               ← Full project brief (read this first)
├── COPY_AUDIT.md                 ← Copy audit notes
├── LP_STATUS.md                  ← Development status tracker
├── CODEX_HANDOVER.md             ← This document
├── .gitignore                    ← Ignores .DS_Store
└── .git/                         ← Local git repo (3 commits, no remote)
```

**File relationships:**
- `index.html` loads `css/style.css` → then `css/watercolor-deco.css` → then `js/main.js`
- `watercolor-deco.css` must always load **after** `style.css` (it overrides `.learn-card` overflow)
- `main.js` queries DOM elements by ID and class — it will fail silently if IDs are renamed
- Watercolor SVGs are referenced by relative path in `index.html` — the `assets/` directory must stay at the project root

---

## SECTION 4 — PAGE STRUCTURE

The LP uses a single `index.html` file. Sections flow top to bottom. All sections are visible on scroll — there are no tabs, modals, or hidden panels (except FAQ accordion items).

### Header
- **ID:** `#site-header`
- **Classes:** `.site-header` (adds `.scrolled` via JS when scrollY > 60)
- **Content:** Logo text (`日本の四季と食から学ぶアーユルヴェーダ`) + CTA button linking to `#section-pricing`
- **Position:** Fixed, z-index 1000
- **Background:** `rgba(251,248,243,0.92)` with `backdrop-filter: blur(12px)`
- **JS dependency:** `initHeader()` in main.js — adds/removes `.scrolled` class on scroll

### ① Hero
- **ID:** `#hero`
- **Classes:** `.hero`
- **Background:** `#fbf8f3` (set in critical inline CSS to prevent FOUC)
- **Content:** Eyebrow label → h1 title → divider → subtitle paragraph → badges row → CTA buttons (btn-primary + btn-secondary)
- **Decorative elements:**
  - `images/hero.jpg` as semi-transparent background (opacity 0.13)
  - Two rotating circle rings (`.hero-deco--circle1`, `.hero-deco--circle2`)
  - SVG wave lines (inline, opacity 0.06)
  - `assets/arrangements/hero-main.svg` — the watercolor composition
  - JS-injected gold particles (12 on desktop, 6 on mobile)
- **Scroll indicator:** `.hero-scroll` with animated line — positioned `bottom: 36px`
- **JS dependency:** `initHeroParticles()`, `initProgressBar()`

### ② Sympathy
- **ID:** `#section-sympathy`
- **Classes:** `.section-sympathy`
- **Background:** `#f5f0e8`
- **Content:** Section kamon → h2 heading → intro paragraph → 6-item checklist → closing blockquote
- **Decorative:** `assets/wanpoint/19-aoba-leaves.svg` positioned top-right (opacity ~10%)
- **JS dependency:** Checklist items observed for stagger fade-in animation

### ③ Problem
- **ID:** `#section-problem`
- **Classes:** `.section-problem`
- **Background:** `#faf7f2`
- **Content:** Section kamon → large h2 → subtext → 3 problem cards → answer box
- **Key copy:** "その不調は、年齢だけのせいではないかもしれません。" (The issue may not be age alone)
- **JS dependency:** `.problem-card` elements observed by IntersectionObserver (activates left-border animation on `.problem-card::before`)

### ④ Japanese Wisdom (Why)
- **ID:** `#section-why`
- **Classes:** `.section-why`
- **Background:** `#f5f0e8` (note: inline critical CSS sets this to `#faf7f2` — there is a minor mismatch; `#f5f0e8` wins via cascade from `style.css`)
- **Content:** Section kamon → h2 → divider → `.why-prose` containing:
  - `.why-keywords` — large standalone words: 梅干し。味噌汁。薬味。旬の野菜。
  - `.why-body` paragraphs
  - `.why-examples` — indented box listing seasonal practices
  - `.why-body--question` — "なぜ、そうしてきたのでしょう。"
  - `.why-conclusion` — closing statement box
- **Decorative:** umeboshi (left), shiso (right-mid), inaho (right-bottom) — all ~9% opacity
- **Recently rewritten:** Replaced a two-column comparative grid (Ayurveda Origin vs Japan Context) with this prose layout per user direction on 2026-06-07

### ⑤ 24 Solar Terms (Nijuushi)
- **ID:** `#section-nijuushi`
- **Classes:** `.section-nijuushi`
- **Background:** `#faf7f2`
- **Content:** Two-column layout: animated rotating circle visual (CSS only) on left + text block on right
- **Circle visual:** `.nijuushi-circle` rotates 30s infinite; inner ring counter-rotates; 4 season dots (春夏秋冬) counter-rotate to stay upright
- **JS dependency:** `respectReducedMotion()` stops circle animation if prefers-reduced-motion

### ⑥ Course Contents (Learn)
- **ID:** `#section-learn`
- **Classes:** `.section-learn`
- **Background:** `#ede8df`
- **Content:** 3-card grid, one card per session
  - Card 01: kyuri.svg deco, Session 2026-07-07, rainy season → summer
  - Card 02: inaho.svg deco, Session 2026-08-25, summer → autumn
  - Card 03: miso-bowl.svg deco, Session 2026-10-20, autumn → winter
- **Illustration position:** `right:2%; bottom:4%` (overflow:visible — images show fully)
- **JS dependency:** `.learn-card` hover + touch effects

### ⑦ Food Wisdom Examples (Examples)
- **ID:** `#section-examples`
- **Classes:** `.section-examples`
- **Background:** `#f5f0e8`
- **Content:** 6 Q&A cards — each poses a food wisdom question ("なぜ胡瓜には薬味を添えるのでしょう？") with an answer
- **Decorative:** 4 wanpoint SVGs scattered at corners (kyuri, shiso, umeboshi, myoga — all 12% opacity, hidden on mobile)

### ⑧ Instructor Profiles
- **ID:** `#section-instructor`
- **Classes:** `.section-instructor`
- **Background:** `#faf7f2`
- **Content:** Two instructor blocks (grid: photo column + info column)
  - **村越シッダールタ悟:** BAMS physician, photo from `images/siddharth.jpg`
  - **YUKARI.:** Cooking teacher, photo from external URL (viorto.com)
- **Note:** Co-instructor's photo loads from an external URL — potential fragility

### ⑨ Instructor Roles (inline section, no section tag)
- **Selector:** Inline `<section style="background-color:#faf7f2;padding:80px 0 0;">`
- **No ID** (this is a weakness — cannot be targeted by anchor links or JS)
- **Content:** Two-column `.instructor-roles` grid explaining each instructor's contribution
- **TODO:** Should be given an ID for accessibility and anchor linking

### ⑩ Testimonials (Voice)
- **ID:** `#section-voice`
- **Classes:** `.section-voice`
- **Background:** `#faf7f2`
- **Content:** 4 voice cards in 2-column grid
- **Important:** All 4 testimonials are **placeholder copy** — must be replaced with real participant quotes before launch

### ⑪ Fit Check
- **ID:** `#section-fitcheck`
- **Classes:** `.section-fitcheck`
- **Background:** `#ede8df`
- **Content:** Two-column grid: "向いている方" (suitable) + "向いていない方" (not suitable)
- **Medical disclaimer** at bottom of the "not suitable" column

### ⑫ Outcomes (Future)
- **ID:** `#section-future`
- **Classes:** `.section-future`
- **Background:** `#ede8df`
- **Content:** 6-card grid of transformation outcomes ("スーパーでの買い物が変わる" etc.)

### ⑬ Schedule
- **ID:** `#section-schedule`
- **Classes:** `.section-schedule`
- **Background:** `#f5f0e8`
- **Content:** 3 schedule rows with seasonal arrangement SVG watermarks
  - Row 1: season-1-tsuyu-natsu.svg (14% opacity)
  - Row 2: season-2-natsu-aki.svg
  - Row 3: season-3-aki-fuyu.svg
- **Session times:** Session 1 is confirmed as "開催時間：19:00〜21:00"; Sessions 2 and 3 show "開催時間：決定次第ご案内します"

### ⑭ Pricing
- **ID:** `#section-pricing`
- **Classes:** `.section-pricing`
- **Background:** `#efe7da`
- **Content:** 2-card grid (single session card + recommended package card)
- **Pricing note:** Explains difference-price upgrade policy (single → package after purchase, pay difference)
- **CTA buttons:** Link to `#section-cta` (not direct payment URL)

### ⑮ Bonuses
- **ID:** `#section-bonus`
- **Classes:** `.section-bonus`
- **Background:** `#f5f0e8` (note: inline critical CSS sets this to `#ede8df` — `style.css` value #f5f0e8 wins)
- **Content:** 6 bonus course cards, each with a wanpoint illustration at top
  - Bonus 01: aoba-leaves + アーユルヴェーダ基礎講座 (¥11,000 value)
  - Bonus 02: cha-leaf + 日本茶講座 (¥5,000)
  - Bonus 03: miso-bowl + 醤油・味噌講座 (¥5,000)
  - Bonus 04: shio-salt + 塩講座 (¥5,000)
  - Bonus 05: rice-grains + 米講座 (¥5,000)
  - Bonus 06: nanten + 甘味料講座 (¥5,000)
- **Total value box:** `.bonus-total` — light cream background with counter animation

### ⑯ FAQ
- **ID:** `#section-faq`
- **Classes:** `.section-faq`
- **Background:** `#faf7f2`
- **Content:** 8 FAQ accordion items (`.faq-item`)
- **JS dependency:** `initFAQ()` — accordion open/close, keyboard support, single-open behavior
- **FAQ items:**
  1. アーユルヴェーダをまったく知らなくても参加できますか？
  2. 当日参加できない回があっても大丈夫ですか？
  3. 単発で1回だけ受講することはできますか？
  4. まず1回だけ受けてから、全講座受講コースへ変更できますか？ ← difference-price upgrade
  5. レシピは教えてもらえますか？
  6. アーユルヴェーダをすでに学んでいても楽しめますか？
  7. 特典の講座はいつ受け取れますか？
  8. 支払い方法を教えてください。

### ⑰ Final CTA
- **ID:** `#section-cta`
- **Classes:** `.section-cta`
- **Background:** `#f6f0e7`
- **Content:** Section kamon → h2 → subtitle → price display → two CTA buttons → guarantee line → closing message blockquote
- **CTA buttons (critical):**
  - `#btn-package-apply` — currently `href="#"` — MUST be updated with payment URL
  - `#btn-single-apply` — currently `href="#"` — MUST be updated with payment URL

### Footer
- **Classes:** `.site-footer`
- **Background:** `#2c2418` (ONLY dark background in the page)
- **Content:** Logo, English tagline, divider, nav links, copyright

### Sticky CTA (Mobile)
- **ID:** `#sticky-cta`
- **Classes:** `.sticky-cta`
- **Behavior:** Hidden by default; shows on mobile (≤768px) after scrolling past hero, hides when Final CTA section is visible
- **Background:** `rgba(251,248,243,0.97)` with backdrop blur (light-themed)
- **JS dependency:** `initStickyCTA()` — controls visibility via IntersectionObserver

---

## SECTION 5 — DESIGN SYSTEM

### Colors

```css
/* Background progression (lightest → warmest) */
#fbf8f3  /* Hero background */
#faf7f2  /* Cream — Why, Nijuushi, FAQ, Instructor, Voice */
#f6f0e7  /* Final CTA */
#f5f0e8  /* Warm white — Sympathy, Schedule, Examples, Instructor */
#efe7da  /* Muted — Pricing */
#ede8df  /* Paper — Learn, Bonus, Future, Fitcheck */
#e8e2d8  /* Border/divider color */
#f0ebe2  /* Internal box backgrounds (why-examples, problem-answer) */

/* Text */
#3d3328  /* Headings, strong emphasis */
#2c2418  /* Ink — primary body text */
#4a3728  /* Body text alternate */
#5c4f3f  /* Secondary text */
#8c7d6e  /* Muted/metadata text */

/* Accent */
#b8975a  /* Gold — CTA buttons, pricing accents */
#d4b07a  /* Gold light — gradient end */
#f0e0c0  /* Gold pale — borders, dividers */
#6b7f49  /* Matcha green — section labels, kamon, icon accents */
#8aab4e  /* Matcha light — dividers, bullet markers */
#8b5e3c  /* Terracotta — emphatic text, em elements */
#8f6a44  /* Warm brown — secondary English accents */

/* Dark (footer ONLY) */
#2c2418  /* Footer background — do not use for any section */
```

**Rule: No large dark backgrounds except `.site-footer`.**

### Typography

```css
html { font-size: 18px; } /* base — all rem values scale from here */

/* Headings — Noto Serif JP */
.section-title    { font-size: clamp(1.5rem, 3.2vw, 2.2rem); font-weight: 400; }
.problem-heading  { font-size: clamp(1.7rem, 3.8vw, 2.7rem); font-weight: 400; }
.hero-title .line-jp { font-size: clamp(1.7rem, 4.5vw, 3rem); font-weight: 300; }

/* Body — Noto Sans JP */
body { font-family: Noto Serif JP; line-height: 2.1; }
.section-lead { font-size: 0.93rem; line-height: 2.2; }

/* English accents — Cormorant Garamond */
.section-kamon span { font-size: 0.8rem; letter-spacing: 0.35em; }
.section-label      { font-size: 0.8rem; letter-spacing: 0.5em; }
```

**Do not set any element below 16px on mobile** (accessibility requirement for Japanese 40–60-year-old women).

### Spacing
- Section padding: `96px 0` (desktop), `64px 0` (mobile ≤600px)
- Container max-width: `860px` (`.container`), `1100px` (`.container--wide`)
- Container padding: `0 32px` (desktop), `0 18px` (mobile)

### Cards
Cards throughout the LP use light backgrounds against slightly darker section backgrounds:
- `.learn-card`: `#f5f0e8` on `#ede8df` section
- `.example-card`: `#fff` on `#f5f0e8` section
- `.future-card`: `#f5f0e8` on `#ede8df` section
- `.bonus-item`: `#f5f0e8` on `#f5f0e8` — these blend (intentional, relying on gap spacing)
- `.pricing-card`: `#fbf8f3` on `#efe7da` section

### Buttons

```css
/* Primary CTA — gold gradient */
.btn-primary, .btn-cta-main, .btn-pricing--primary {
  background: linear-gradient(135deg, #b8975a 0%, #d4b07a 100%);
  color: #1a1612;  /* Very dark text on gold */
}

/* Secondary — transparent border */
.btn-secondary, .btn-cta-single, .btn-pricing--secondary {
  border: 1px solid rgba(60,51,40,0.28);
  color: #4a3728;
}

/* Header CTA — matcha green border */
.header-cta {
  border: 1px solid rgba(107,127,73,0.55);
  color: #6b7f49;
}
```

### Responsive breakpoints
```css
/* Tablet/smaller desktop */
@media (max-width: 960px) {
  /* nijuushi circle hidden, instructor block stacks, pricing grid 1-col,
     why/learn/examples/future/bonus grid adjustments */
}

/* Mobile */
@media (max-width: 768px) {
  /* sticky CTA shown, new-section responsive grids,
     schedule-deco sizing adjustments */
}

/* Small mobile */
@media (max-width: 600px) {
  /* container padding 18px, section padding 64px,
     schedule-num hidden, examples/future/bonus go 1-col */
}
```

### Animation philosophy
- All content fades in upward (`.fade-in-up` + `.visible` class added by IntersectionObserver)
- Stagger delays: `.delay-1` through `.delay-5` (0.1s–0.5s)
- Hero elements animate in sequence via CSS `animation-delay` (0.3s → 2s)
- `prefers-reduced-motion`: all animations disabled, circle rotations stopped
- No scroll-triggered parallax — intentional (performance + accessibility)

### Visual hierarchy
1. Section kamon / label (small, uppercase English) — establishes context
2. Section title (Noto Serif JP, large) — main message
3. Divider line (40px, matcha green) — breathing room
4. Lead text (Noto Sans JP, light weight) — elaboration
5. Cards/grid content — specific details
6. CTA button — action

### What is implemented vs planned

**Already implemented:**
- All section layouts, all copy, all CSS variables
- Watercolor illustration overlay (complete)
- Hero photo, instructor photo
- FAQ accordion with keyboard support
- Sticky mobile CTA
- Scroll progress bar
- Hero particle animation
- Responsive breakpoints at 960px, 768px, 600px

**Planned (not yet done):**
- Real payment URLs for CTA buttons
- OGP image
- Session times (currently "予定")
- Real testimonial quotes (4 placeholders exist)
- Analytics/tracking

**Do not change:**
- Base font size (18px) — accessibility decision
- Color palette — brand decision, affects user trust perception
- Section order — conversion-optimized sequence
- `watercolor-deco.css` loading order (must be after `style.css`)

---

## SECTION 6 — BRANDING INTENT

### What this LP must NOT feel like

**❌ Medical website:**
No clinical imagery, no anatomy diagrams, no "symptoms and treatment" framing. Even though the lead instructor holds a medical degree (BAMS), the LP never leads with that as the primary value. The BAMS credential appears in the instructor section as supporting credibility — never as the hook.

**❌ Supplement/product website:**
No bright CTA buttons in aggressive colors (no red, no orange). No countdown timers, no "limited time offer" banners, no "BUY NOW" language. The Japanese target audience is allergic to hard-sell.

**❌ Generic Ayurveda website:**
No Sanskrit terms in headlines. No chakra imagery. No "dosha test" prominently featured. No lotus flowers, no Indian patterns. The deliberate design choice is to make Ayurveda feel like it belongs in Japan — not imported from India.

**❌ Spiritual guru website:**
No photographs of meditation, yoga, or incense. No mystical or esoteric framing. The instructors are presented as knowledgeable, grounded practitioners — not gurus.

### What this LP SHOULD feel like

**✅ 婦人画報 (Fujin Gaho):**
Japan's most prestigious lifestyle magazine. Quiet. Spacious. Every element earns its place. Photographs of beautiful Japanese food, seasons, and craftsmanship. The reader feels calm, not pressured.

**✅ 天然生活 (Tennenseikatsu):**
A magazine about natural, thoughtful, seasonal Japanese living. The kind of publication that features fermented foods, old wooden kitchen tools, persimmons drying in autumn sun. Gentle authority.

**✅ 暮しの手帖 (Kurashi no Techo):**
Slow, deliberate, trustworthy. Content that respects the reader's intelligence. No advertisements. The visual language is restrained — whitespace as a value, not a waste.

**✅ High-end Japanese artisan brand:**
Like a 老舗 (long-established shop) that sells Japanese pickles, teas, or ceramics. The packaging is minimal. The paper feels expensive. You feel the heritage without being told about it.

### How this is achieved in the design

1. **Warm cream palette:** No bright whites (too clinical), no blacks (too e-commerce). Every background is a different shade of warm cream — like aged paper, like washi.

2. **Generous whitespace:** The Japanese concept of 間 (ma — negative space). Sections are not packed with content. Key phrases have room to breathe.

3. **Watercolor illustrations:** Hand-painted SVG vegetables and botanicals placed as quiet decorations. They are never the focus — they are atmosphere. They evoke 旬 (seasonal produce) without being an ingredient gallery.

4. **Typography weight:** Noto Serif JP at weight 300 (light) for headlines creates a refined, literary feel. Heavy bold type would feel cheap.

5. **Gold accent color (#b8975a):** Not bright yellow gold. This specific warm amber-gold evokes lacquer, aged paper, vintage ceramic glaze. It is used sparingly — only buttons, progress bar, dividers.

6. **Matcha green (#6b7f49):** Used for labels, kamon dividers, checkmarks. It grounds the palette in something natural and Japanese without being obviously "green tea brand."

---

## SECTION 7 — COPYWRITING STRATEGY

### Core positioning
**This is:** Ayurveda translated into Japanese seasonal life
**This is NOT:** Indian Ayurveda education

Every copy decision should pass this test: "Does this sentence feel like it belongs in a Japanese food culture essay, or does it feel like a health information article?"

### Emotional goals

1. **Validation:** The visitor's seasonal health struggles are real, not imagined, not aging.
2. **Reframing:** These struggles are not inevitable — they are signals your body is trying to read the seasons.
3. **Discovery:** Japan's food culture already contains the answer. You already know it — you just don't have words for it yet.
4. **Belonging:** This seminar is for someone who thinks deeply about food, not someone looking for a quick fix.
5. **Permission:** It's okay to invest ¥114,000 in understanding something this important.

### Audience profile for copywriting
- **Age:** 35–55 women primarily
- **Reading behavior:** Slow, top-to-bottom. They read every word.
- **Trust signals that matter:** Medical credentials (BAMS), Japan-specificity, calm authority, no hard sell
- **Trust signals that backfire:** Countdown timers, fake scarcity, testimonials that sound staged, excessive emoji

### Language style
- First-person plural avoidance — address the reader directly (あなた) or use impersonal construction
- Short sentences. Often 10–15 characters. Line breaks used for rhythm.
- Important questions stand alone: 「なぜ、そうしてきたのでしょう。」
- Em (italic) used sparingly for key phrases
- Numbers used for specificity (二十四節気, ¥38,000, 3回)
- No buzzwords: no "ウェルネス," no "デトックス," no "免疫力UP"

### Words and phrases to avoid
- ウェルネス (wellness) — too generic, marketing-speak
- デトックス (detox) — supplement brand associations
- 免疫力 (immunity) — oversaturated health claim
- 体質改善 (constitutional improvement) — medical claim territory
- おすすめ (recommendation) when used repeatedly — becomes noise
- アップグレード不可 (no upgrade) — previously used, now removed; policy is difference-price upgrade

### Tone to preserve
The narrator voice is: **Calm. Curious. Intelligent. Non-prescriptive.**

The LP never says "you should eat X." It says "here is why people have always eaten X — you can decide for yourself."

The instructor voice is: **Expert but humble.** He knows more than the reader but never condescends.

### Current approved copy structure (section by section)

| Section | Headline | Key message |
|---|---|---|
| Hero | アーユルヴェーダを、日本の暮らしへ。| 3-session seminar, Japan-specific Ayurveda |
| Sympathy | 季節が変わるたびに、身体も少しずつ変わります。| Validation of seasonal body sensitivity |
| Problem | その不調は、年齢だけのせいではないかもしれません。| Reframe: it's not aging, it's seasonal misalignment |
| Why | 季節とともに暮らす知恵は、今も食卓の中に残っています。| Japanese food wisdom IS Ayurvedic wisdom |
| Nijuushi | 二十四節気は、季節を細やかに感じるための地図です。| 24 Solar Terms as the framework/map |
| Learn | 季節の移り変わりに合わせて、身体と食を学びます。| 3 sessions, one per seasonal transition |
| Examples | 知ると、いつもの食卓が違って見えてきます。| Concrete food wisdom examples |
| Instructor | インドの知恵と、日本の台所をつなぐ二人。| Credentials + Japan-specificity |
| Future | この講座を通じて、日々の食卓が変わります。| Transformation outcomes |
| Schedule | 講座スケジュール | Dates, logistics |
| Pricing | 受講プラン | ¥38,000 single / ¥114,000 package |
| Bonus | 全講座受講コース限定特典 | 6 bonus courses, ¥36,000+ value |
| FAQ | よくあるご質問 | 8 items including upgrade policy |
| CTA | 季節を知ることは、自分の身体を知ること。| Final conversion push |

---

## SECTION 8 — VISUAL DIRECTION

### Current state
The LP has a complete watercolor illustration system as of 2026-06-07. This was produced by Claude Design (claude.ai/design) and integrated. All SVG assets are in `assets/`.

### What was added and why

The LP's copy and layout were strong but felt "flat" — like reading a beautiful essay without illustrations. The watercolor system adds atmosphere without adding content noise.

**Design principle:** Illustrations are never the point. They are the environment. Like placing a small vase of seasonal flowers on a dining table — you don't stare at it, but you'd notice if it was gone.

### Illustration system

**`--wc-mult` CSS variable:** Controls global illustration intensity. Default `1`. Can be reduced (e.g. `0.6`) for a more subtle effect or increased (`1.4`) for more presence. Set in `:root` in `watercolor-deco.css`.

**`body.wc-hidden` class:** Hides all decorations at once (useful for testing or accessibility mode).

### Section-by-section illustration placement

**Hero section:**
- `assets/arrangements/hero-main.svg` — full-width composition stretching across the hero
- Opacity: 50% (`calc(.5 * var(--wc-mult))`)
- Position: centered, top: 96px, width: min(1200px, 96%)
- **Why:** The hero needs atmosphere without obscuring the h1 headline. The arrangement is designed to frame the text from the sides, leaving the center empty.

**Section ④ Japanese Wisdom:**
- umeboshi (left side, top), shiso (right side, mid), inaho (right side, bottom)
- Opacity: 8–10%
- **Why:** This section talks about the foods themselves (梅干し, 薬味, etc.). Showing the ingredients as subtle background presence reinforces the content subliminally without being an ingredient gallery.

**Section ⑥ Course Contents (Learn):**
- Kyuri (cucumber) in Card 01 (summer session) — right: 2%, bottom: 4%
- Inaho (rice ears) in Card 02 (autumn session)
- Miso bowl in Card 03 (winter session)
- Opacity: 50% — these are more visible than background decos
- **Why:** Each session has a representative food ingredient. The illustration makes the card feel like a seasonal page from a recipe book.

**Section ⑦ Examples:**
- Kyuri, shiso, umeboshi, myoga — positioned at the four margins of the section
- Opacity: 12%
- Hidden on mobile
- **Why:** This section is a Q&A about specific ingredients. The illustrations reinforce which ingredients are being discussed without adding text.

**Section ⑬ Schedule:**
- Full seasonal arrangement SVGs (tsuyu-natsu, natsu-aki, aki-fuyu) per row
- Opacity: 14%
- Position: right-side, vertically centered in each row
- **Why:** Ties each date to a season visually. The schedule feels like pages of a seasonal almanac.

**Section ⑮ Bonuses:**
- Specific wanpoint illustration per bonus course (tea leaf for 日本茶, miso bowl for 醤油・味噌, etc.)
- Opacity: 100% — these are intentionally visible as illustrative icons
- **Why:** The bonus courses are about specific ingredients/topics. The illustrations serve as visual identifiers for each course, making the list scannable.

### What NOT to add

Do not add:
- Stock photography (people, nature scenes, food photography)
- Photo backgrounds other than the existing hero.jpg
- Bright or saturated illustration colors
- Any illustration that is centered or draws primary attention
- Animation to the illustrations

---

## SECTION 9 — RESPONSIVE REVIEW

### Current state
The LP is responsive across three breakpoints: 960px, 768px, and 600px.

### Strengths
- All text uses `clamp()` for fluid sizing — no sudden jumps
- Grid layouts degrade gracefully (3-col → 1-col, 2-col → 1-col)
- Sticky CTA shows only on mobile, improving mobile conversion UX
- Watercolor scatter illustrations hidden on mobile (good — they'd clutter small screens)
- Nijuushi circle visual hidden on tablet/mobile (good — complex CSS animation on small screen is a distraction)
- Container padding reduces on mobile (32px → 18px)
- FAQ accordion is keyboard-accessible

### Weaknesses and known issues

**Hero content:** On small mobile (375px width), the hero subtitle text is long (~5 paragraphs). On mobile, this pushes the CTA buttons far below the fold. Consider truncating the hero subtitle on mobile or adding a "read more" expand.

**Why-keywords section:** The `.why-keywords` block shows 4 large kanji phrases in a flex row. On narrow mobile, "旬の野菜。" may wrap awkwardly if the phone is very narrow. Needs testing on 320px-width devices.

**Instructor block:** On 960px, the instructor grid stacks (photo top, text below). The profile photo max-width is 220px, centered. This looks fine but the photo-to-text ratio changes significantly.

**Learn card watercolor decos:** Now set to `overflow:visible` — on mobile, the illustrations (width 42%) may protrude slightly into adjacent cards in the 1-column mobile layout. Monitor this.

**Schedule deco on mobile:** Width 80%, opacity 0.10 — acceptable but should be reviewed on real devices.

**No `touch-action` or swipe gesture support** — the page is scroll-only, which is fine for an LP.

### Font sizing concerns
- Base: 18px — verified correct for 40–55-year-old Japanese women on smartphones
- Minimum mobile font size: 16px — enforced throughout
- `clamp()` minimum values checked: all ≥ 0.93rem (≥ 16.7px at 18px base)

### Accessibility concerns
- FAQ accordion has `aria-expanded`, `tabindex="0"`, keyboard event handlers — good
- Watercolor images all have `alt="" aria-hidden="true"` — correct for decorative images
- Hero has `aria-label="メインビジュアル"` — good
- **Missing:** `id` on the instructor roles section (anonymous inline `<section>`)
- **Missing:** Skip-to-content link for keyboard-only users
- **Missing:** Focus visible styles for keyboard navigation (`.header-cta:focus`, `.faq-question:focus`)

---

## SECTION 10 — KNOWN ISSUES

### P0 — Blocking (must fix before launch)

**Issue 1: CTA buttons link to `#`**
- Description: `#btn-package-apply` and `#btn-single-apply` in `#section-cta` both have `href="#"`. Clicking them does nothing. This is the conversion endpoint.
- Affected files: `index.html` (lines ~1183, 1186), `js/main.js` (lines 382–383, PACKAGE_URL and SINGLE_URL constants)
- Severity: **Critical — LP cannot convert without this**
- Solution: Get payment platform URL (Stripe or Japanese equivalent). Set `PACKAGE_URL` and `SINGLE_URL` in `main.js`. The JS already applies these to both buttons on load.

**Issue 2: OGP image not set**
- Description: `<meta property="og:image">` is missing from `<head>`. When shared on LINE, Twitter, or Instagram Stories, no thumbnail image will appear.
- Affected files: `index.html` (head section)
- Severity: **High — Japanese target audience shares heavily via LINE**
- Solution: Create a 1200×630px OGP image, upload it, add `<meta property="og:image" content="https://yourdomain.com/images/ogp.jpg">`

**Issue 3: GitHub remote not configured**
- Description: Git repo exists locally (3 commits) but has no remote. Code cannot be pushed to GitHub.
- Affected: Local `.git/` config
- Severity: **High — no backup, no collaboration**
- Solution: Create repo at github.com/suchetanaayurveda-cloud/kisetsu-no-kotowari, run `git remote add origin https://github.com/suchetanaayurveda-cloud/kisetsu-no-kotowari.git && git push -u origin main`

### P1 — High (fix before launch)

**Issue 4: Session times partially confirmed**
- Description: Session 1 shows "開催時間：19:00〜21:00"; Sessions 2 and 3 show "開催時間：決定次第ご案内します"
- Affected: `index.html` schedule section (3 instances of `schedule-detail` class)
- Status: Partially resolved — Session 1 time is visible; Sessions 2 and 3 remain pending

**Issue 5: Testimonials are placeholder**
- Description: 4 voice cards contain fabricated quotes
- Affected: `index.html` `#section-voice` — all 4 `.voice-card` elements
- Note: HTML comment explicitly says "差し替えてください" (please replace)
- Severity: High — fake testimonials undermine trust

**Issue 6: Co-instructor photo from external URL**
- Description: YUKARI.'s photo loads from `https://viorto.com/wp-content/uploads/2024/05/about_prof3.jpg`
- Affected: `index.html` instructor section
- Risk: If viorto.com changes or removes the image, the photo disappears with no fallback
- Solution: Download the image, save as `images/yukari.jpg`, update the `src`

### P2 — Medium

**Issue 7: Instructor roles section has no ID**
- Description: The "ふたりの役割" section uses inline style `<section style="...">` with no ID
- Affected: `index.html` ~line 610
- Impact: Cannot be anchor-linked from header nav or elsewhere; minor accessibility gap
- Solution: Add `id="section-roles"` and update nav/footer if desired

**Issue 8: Background color inconsistency (inline critical CSS vs style.css)**
- Description: The inline `<style>` block in `<head>` sets `section-why` to `#faf7f2` and `section-bonus` to `#ede8df`, but `style.css` sets them to `#f5f0e8` and `#f5f0e8` respectively. The `style.css` values win (load order), but the inline block creates confusion.
- Affected: `index.html` lines 11–22, `css/style.css`
- Severity: Low — visual, not functional. But confusing to maintain.
- Solution: Sync the inline critical CSS values to match style.css values.

**Issue 9: Hero subtitle too long on mobile**
- Description: The hero subtitle spans ~5 paragraphs of body text, pushing the CTA buttons far below the fold on mobile
- Affected: `index.html` `.hero-subtitle` element
- Solution: Consider adding `@media (max-width: 600px)` rule to hide or abbreviate hero-subtitle, or restructure

### P3 — Low

**Issue 10: No analytics code**
- Affected: `index.html` head
- Description: No Google Analytics, Google Tag Manager, or any tracking
- Impact: Cannot measure conversion rate, bounce rate, or scroll depth

**Issue 11: No skip-to-content link**
- Accessibility: Keyboard users cannot skip the fixed header

**Issue 12: learn-card overflow:visible may affect grid spacing on mobile**
- Description: Wanpoint decos set to `overflow:visible` may protrude between cards on narrow screens
- Affected: `css/watercolor-deco.css`, `.learn-card` rule
- Monitor on actual devices

**Issue 13: Hero particles JS re-creates style elements on every page load**
- Description: `initHeroParticles()` appends a `<style>` tag to `<head>` with `@keyframes particle-float`. This is harmless but slightly unclean.
- Affected: `js/main.js` lines 311–321
- Solution: Move the keyframe to `style.css`

---

## SECTION 11 — FUTURE IMPROVEMENTS

### High Priority

1. **Set payment URLs** (P0 issue — blocks all revenue)
2. **Create OGP image** (critical for LINE sharing in Japanese market)
3. **Replace placeholder testimonials** with real participant quotes
4. **Download and serve co-instructor photo locally** (reduce external dependency)
5. **Set actual session times** in schedule section

### Medium Priority

6. **Add Google Tag Manager** — enables analytics without future code changes. Insert GTM snippet in `<head>` and `<body>`.

7. **Add `id="section-roles"` to instructor roles section** — enables anchor linking.

8. **Sync inline critical CSS with style.css** — remove the discrepancy in background colors for `section-why` and `section-bonus`.

9. **Create a 404 page** — when hosted on a static server, direct URL access to non-existent pages returns a generic 404. Create `404.html` with the brand aesthetic.

10. **Add `focus-visible` CSS** — keyboard navigation lacks visible focus rings on interactive elements. Add:
    ```css
    .faq-question:focus-visible,
    .header-cta:focus-visible,
    .btn-primary:focus-visible { outline: 2px solid #6b7f49; outline-offset: 3px; }
    ```

11. **Lazy-load images below the fold** — `images/hero.jpg` loads eagerly (correct). But `images/siddharth.jpg` and the YUKARI. external URL could benefit from `loading="lazy"`.

### Low Priority

12. **Move `@keyframes particle-float` from JS to CSS** — minor code cleanliness.

13. **Add Web Manifest** (`manifest.json`) for "Add to Home Screen" PWA behavior on iOS/Android.

14. **Consider a lightweight Japanese font subsetting strategy** — Noto Serif JP loads all kanji weights. For a production LP, subsetting to the actually-used characters would reduce font load time significantly.

15. **Add `preload` hint for hero image:**
    ```html
    <link rel="preload" href="images/hero.jpg" as="image">
    ```

16. **Minify CSS and JS for production** — combined, they are ~60KB unminified. Gzip + minification would reduce this to ~15–20KB.

---

## SECTION 12 — CODEX ACTION PLAN

### Phase 1 — Launch Blockers (do these first, in order)

**Files to modify:** `index.html`, `js/main.js`

1. Get payment platform URL from the business owner
2. In `js/main.js`, update:
   ```js
   const PACKAGE_URL = 'https://[payment-platform-url]/package';
   const SINGLE_URL  = 'https://[payment-platform-url]/single';
   ```
3. Verify both buttons in `#section-cta` and the `.btn-pricing--primary` in `#section-pricing` also link correctly (pricing buttons link to `#section-cta`, not directly to payment — this is correct UX)
4. Create 1200×630 OGP image. Add to `images/ogp.jpg`. Add to `<head>`:
   ```html
   <meta property="og:image" content="https://[domain]/images/ogp.jpg">
   <meta property="og:url" content="https://[domain]/">
   ```
5. Set up GitHub remote: `git remote add origin https://github.com/suchetanaayurveda-cloud/kisetsu-no-kotowari.git && git push -u origin main`

**Validation:**
- [ ] Click package button — goes to payment URL
- [ ] Click single button — goes to payment URL
- [ ] Share LP URL in LINE — OGP thumbnail appears
- [ ] `git push` succeeds

---

### Phase 2 — Content Completion

**Files to modify:** `index.html`

1. Replace 4 placeholder testimonials in `#section-voice` with real quotes. Each card structure:
   ```html
   <div class="voice-card fade-in-up">
     <p class="voice-card-text">「[real quote]」</p>
     <p class="voice-card-meta">[age bracket｜attribute]</p>
   </div>
   ```
2. Update session times in `.schedule-detail` (3 instances):
   ```html
   <p class="schedule-detail">開催時間：[actual time, e.g. 20:00–22:00]　オンライン開催｜アーカイブあり</p>
   ```
3. Download YUKARI.'s photo. Save as `images/yukari.jpg`. Update `src` in instructor block.
4. Add `id="section-roles"` to the instructor roles `<section>` tag.

**Validation:**
- [ ] Testimonials show real person's words
- [ ] Session times are shown
- [ ] YUKARI. photo loads from local asset (test by blocking external URLs)

---

### Phase 3 — Analytics + Accessibility

**Files to modify:** `index.html`, `css/style.css`

1. Add Google Tag Manager snippet to `<head>` (GTM container ID from business owner) and `<body>` noscript fallback
2. Add focus-visible CSS rules for keyboard navigation
3. Optionally add skip-to-content link as first element in `<body>`:
   ```html
   <a href="#section-sympathy" class="skip-to-content">コンテンツへスキップ</a>
   ```
4. Sync inline critical CSS with `style.css` values (remove color mismatches)

**Risks:** GTM snippets are safe but if GTM fires scripts, they could affect page performance. Use GTM's "preview mode" to verify before going live.

**Validation:**
- [ ] GA receives pageview events
- [ ] Keyboard Tab navigation shows visible focus
- [ ] Lighthouse accessibility score ≥ 85

---

### Phase 4 — Performance + Polish

**Files to modify:** `index.html`, `css/style.css`, `js/main.js`

1. Add `<link rel="preload" href="images/hero.jpg" as="image">` to `<head>`
2. Add `loading="lazy"` to images below the fold (siddharth.jpg, instructor block)
3. Move `@keyframes particle-float` from JS (`main.js` lines 311–322) into `style.css`
4. Consider font subsetting or using `unicode-range` to reduce Noto font payload
5. Test on real Japanese mobile devices (iPhone SE, mid-range Android)

**Validation:**
- [ ] Lighthouse performance score ≥ 80
- [ ] No layout shifts (CLS < 0.1)
- [ ] First Contentful Paint < 2s on 4G mobile

---

## SECTION 13 — FILES THAT MUST BE READ FIRST

Read these in order before making any changes:

1. **`BRIEF_FOR_AI.md`** — The complete original project brief. Contains: business concept, target audience, instructor credentials, all session content, pricing structure, design system specification, full copy direction. If you read only one file, read this one.

2. **`index.html`** — The entire LP. Read top to bottom. All section IDs, all class names, all copy, all current state. This is the source of truth for what is currently built.

3. **`css/style.css`** — All structural styles, CSS variables, typography scale, section backgrounds, responsive breakpoints. Read the `:root` block first (lines 1–33) for the complete design token system.

4. **`css/watercolor-deco.css`** — Short file (92 lines) but architecturally critical. Controls the entire illustration layer. Must always be loaded after `style.css`. Contains `--wc-mult` variable explanation.

5. **`js/main.js`** — 14 self-contained IIFEs. Read the comments — each section is clearly labeled. Most critical: `initCTAButtons()` at line 377 (the payment URL placeholders), `initStickyCTA()` at line 155 (mobile behavior logic).

6. **`LP_STATUS.md`** — Development status tracker. Check this for any notes added since this handover document was written.

7. **`COPY_AUDIT.md`** — Notes on copy decisions. Useful context for any copy editing.

---

## SECTION 14 — HANDOVER SUMMARY

### For Codex: what this project is

You are taking over a **Japanese-language long-form landing page** for a premium online seminar series. The seminar teaches Ayurvedic food wisdom adapted for Japan's seasons and food culture. It runs in 2026 (July, August, October) and costs ¥38,000–¥114,000.

The LP is a single `index.html` file, ~1,280 lines, with two CSS files and one JS file. No framework, no build system. Open it in a browser with `python3 -m http.server 8080` from the project root.

### What is done

Everything is built. The LP looks and works correctly:
- 18 named sections from Hero to Footer
- Responsive at 960px, 768px, 600px
- Japanese watercolor illustration system (19 spot illustrations + 4 seasonal arrangements)
- FAQ accordion with keyboard support
- Mobile sticky CTA with smart show/hide
- Scroll progress bar
- Hero photo, instructor photos
- All pricing, all copy, all FAQ
- Upgrade policy: single → package at difference price (NOT "no upgrade" — this was changed)
- Git repository initialized (local only, 3 commits)

### What is NOT done

1. **CTA buttons now point to STORES** — final CTA URLs are set in `js/main.js`.
2. **No OGP image** — LP cannot be shared with thumbnail on LINE/social
3. **Testimonials are fake** — must be replaced before public launch
4. **Session times partially confirmed** — Session 1 now shows "19:00〜21:00"; Sessions 2 and 3 remain pending
5. **No GitHub remote** — code not backed up
6. **No analytics** — cannot measure performance

### Design rules to never break

1. No dark backgrounds except `.site-footer` background (`#2c2418`)
2. Base font size stays at 18px
3. No element below 16px font size on mobile
4. `watercolor-deco.css` always loads after `style.css` in `<head>`
5. All watercolor SVGs have `alt="" aria-hidden="true"` (decorative, not content)
6. CTA buttons use gold gradient (`#b8975a` → `#d4b07a`) with dark text (`#1a1612` or `#2c2418`)
7. The LP must never feel like a health information website or supplement store

### Copy rules to never break

1. Never use "アップグレード不可" — current policy is difference-price upgrade
2. Never use ウェルネス, デトックス, 免疫力UP
3. The emotional frame is "見つめ直す" (re-examine) and "思い出す" (remember) — not "学ぶ" (study) as the primary verb
4. Instructor 村越シッダールタ悟 is a **BAMS physician** — this credential is authentic and rare in Japan; never downplay it
5. The core claim is "Ayurveda must be translated into Japanese life, not imported wholesale" — this must remain consistent in all copy

### Where to start

If you are onboarding right now:
1. Read `BRIEF_FOR_AI.md` (15 min)
2. Open `index.html` in a browser (`python3 -m http.server 8080`)
3. Scroll through the entire LP once
4. Read `index.html` source
5. Check `js/main.js` lines 377–397 (CTA button URL setup)
6. Talk to the business owner about payment platform URL
7. Begin Phase 1 of the action plan above

---

---

## SECTION 15 — 2026-06-07 YUKARI. REVIEW UPDATE

### Flow clarification

This LP does **not** process payment directly. Final enrollment is expected to happen on YUKARI. / viorto! STORES product pages.

Current CTA architecture remains:
- Header, hero, pricing, and sticky CTAs scroll to `#section-cta`
- Final package and single-session buttons are outbound STORES CTAs
- `PACKAGE_URL` and `SINGLE_URL` in `js/main.js` are set to STORES product URLs

### Copy and readiness changes made after review

- Section 3: age framing revised around `35歳を過ぎた頃から...` while avoiding medical promise language.
- Section 4: keyword layout reduced from large isolated words to a smaller inline phrase; forced line breaks reduced for mobile readability.
- Section 6: course content revised to be more concrete and curiosity-led, including `そうめんでも夏バテは解消されない理由`.
- Examples: answers shortened into teaser copy.
- Schedule: Session 1 time confirmed as `開催時間：19:00〜21:00`; Session 2 and 3 times remain pending.
- Archive wording: changed to say viewing-period details will be announced before application.
- FAQ: public upgrade FAQ removed; payment FAQ replaced with STORES enrollment wording.
- Final CTA: added STORES transition note and strengthened Japanese seasonal / 二十四節気 positioning.
- Bonus: course titles refined and value display made more readable.
- Readability: muted labels, card numbers, dates, instructor romanized names, bonus prices, pricing notes, and footer copy made more legible.

### Still unresolved before launch

1. Session times
2. Archive viewing period and delivery method
3. STORES product URLs
4. Testimonials approval
5. OGP image
6. Inquiry email
7. Final organizer wording
8. Cancellation / refund policy link or STORES product-page wording

### Internal TODO

Consider a free pre-launch webinar shortly before July 7. Candidate topics:
- `なぜ胡瓜には薬味を添えるのか？`
- `夏バテとそうめんの意外な関係`

Purpose: collect email addresses and convert interested participants into the paid course. Do not build this into the LP until explicitly requested.

*End of handover document. Last updated: 2026-06-07.*
