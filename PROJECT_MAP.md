# Project Overview

季節のことわり is a static, single-page premium landing page for a Japanese online educational program about seasonal living, food culture, 二十四節気, and Ayurveda.

The page sells two paid options:

- Single Session: ¥38,000
- Full Program: ¥114,000 for 3 sessions plus package bonuses

Primary audience: Japanese women aged 40-60 interested in seasonal living, food/cooking, natural health, traditional wisdom, Ayurveda, and aging gracefully.

Current implementation is pure HTML/CSS/JS. There is no framework, build step, package manager, or server-side code.

## File Structure

```text
.
├── index.html
├── css/
│   ├── style.css
│   └── watercolor-deco.css
├── js/
│   └── main.js
├── images/
│   ├── hero.jpg
│   └── siddharth.jpg
├── assets/
│   ├── arrangements/
│   │   ├── hero-main.svg
│   │   ├── season-1-tsuyu-natsu.svg
│   │   ├── season-2-natsu-aki.svg
│   │   └── season-3-aki-fuyu.svg
│   └── wanpoint/
│       ├── 01-umeboshi.svg
│       ├── 02-shiso.svg
│       ├── 03-myoga.svg
│       ├── 04-kyuri.svg
│       ├── 05-inaho.svg
│       ├── 06-cha-leaf.svg
│       ├── 07-miso-bowl.svg
│       ├── 08-shio-salt.svg
│       ├── 09-rice-grains.svg
│       ├── 10-nanten.svg
│       ├── 11-raindrops.svg
│       ├── 12-susuki.svg
│       ├── 13-tomato.svg
│       ├── 14-nasu-eggplant.svg
│       ├── 15-goya.svg
│       ├── 16-shoyu.svg
│       ├── 17-daikon.svg
│       ├── 18-carrot.svg
│       └── 19-aoba-leaves.svg
├── BRIEF_FOR_AI.md
├── CODEX_HANDOVER.md
├── COPY_AUDIT.md
├── LP_STATUS.md
└── .gitignore
```

Entry files:

- `index.html`: complete LP markup, metadata, all sections, copy, CTA anchors, inline critical CSS.
- `css/style.css`: main design system, layout, typography, section styles, responsive rules.
- `css/watercolor-deco.css`: separate decorative watercolor layer; loaded after `style.css`.
- `js/main.js`: all behavior in vanilla JavaScript IIFEs.

## Section Map

Every LP section in current order:

1. Header: fixed logo and header CTA.
2. Hero: main promise, subtitle, trust badges, primary CTA, secondary CTA, hero image and watercolor decoration.
3. Sympathy: seasonal body-change framing and checklist.
4. Problem: reframes discomfort as possibly seasonal/lifestyle-related, not only age-related.
5. Why / Japanese Wisdom: Japanese food wisdom as the local expression of seasonal logic.
6. Nijuushi: 二十四節気 as the seasonal map.
7. Learn: 3-session course breakdown.
8. Examples: food wisdom Q&A cards.
9. Instructor Profiles: 村越シッダールタ悟 and YUKARI.
10. Instructor Roles: split explanation of theory/practice roles. This section currently has no ID.
11. Testimonials / Voice: four voice cards and source note.
12. Fit Check: who the program is and is not for, plus medical disclaimer.
13. Future / Outcomes: six outcome cards.
14. Schedule: three dated session rows.
15. Pricing: single-session and full-program pricing cards.
16. Bonus: six package bonus course cards and total value block.
17. FAQ: eight accordion FAQ items.
18. Final CTA: full-program price display, package CTA, single-session CTA, closing message.
19. Footer: brand, footer navigation, copyright.
20. Mobile Sticky CTA: fixed mobile conversion bar shown after hero and hidden near final CTA.

## Component Map

### Hero

- Markup: `#hero` in `index.html`.
- Styling: `.hero`, `.hero-content`, `.hero-title`, `.hero-subtitle`, `.hero-badges`, `.hero-cta-group` in `css/style.css`.
- Assets:
  - `images/hero.jpg`
  - `assets/arrangements/hero-main.svg`
  - inline SVG decorative wave/circle lines
  - JS-injected gold particles
- Current CTAs:
  - `全講座で学ぶ` -> `#section-cta`
  - `講座内容を見る` -> `#section-learn`

### CTA Buttons

- Hero primary CTA: scrolls to `#section-cta`.
- Hero secondary CTA: scrolls to `#section-learn`.
- Header CTA: scrolls to `#section-pricing`; JS also enforces this.
- Pricing single CTA: scrolls to `#section-cta`.
- Pricing package CTA: scrolls to `#section-cta`.
- Final package CTA: `#btn-package-apply`; currently overwritten by `PACKAGE_URL` in `js/main.js`.
- Final single CTA: `#btn-single-apply`; currently overwritten by `SINGLE_URL` in `js/main.js`.
- Mobile sticky CTA: scrolls to `#section-cta`.

### Pricing Cards

- Markup: `#section-pricing`.
- Two cards:
  - Single Session: ¥38,000, selected session, archive, chat question.
  - Full Program: ¥114,000, all 3 sessions, archives, chat questions, 6 bonus courses.
- Styling: `.section-pricing`, `.pricing-grid`, `.pricing-card`, `.pricing-card--recommended`, `.btn-pricing`.
- Behavior: `initPricingAnimation()` fades pricing cards in.

### FAQ System

- Markup: `#section-faq`.
- Eight accordion items.
- Styling: `.faq-list`, `.faq-item`, `.faq-question`, `.faq-answer`, `.faq-icon`.
- Behavior: `initFAQ()` handles open/close, one-open-at-a-time behavior, click, Enter, and Space key support.

### Instructor Cards

- Markup: `#section-instructor`.
- Two profile blocks:
  - 村越シッダールタ悟: local image, BAMS credential, profile copy.
  - YUKARI.: external image, viorto! profile, Instagram and website links.
- Styling: `.instructor-block`, `.instructor-photo-frame`, `.instructor-tag`, `.instructor-desc`, `.instructor-credentials`, `.instructor-rare`.
- Related extra component: Instructor Roles section below profiles.

### Testimonials

- Markup: `#section-voice`.
- Four voice cards.
- Current implementation includes a comment indicating cards are replaceable.
- Current note says testimonials are based on Instagram live / past seminar feedback.
- Styling: `.section-voice`, `.voice-grid`, `.voice-card`, `.voice-note`.

### Sticky CTA

- Markup: `#sticky-cta`.
- Styling: `.sticky-cta`, `.sticky-cta-text`, `.sticky-cta-price`, `.sticky-cta-btn`.
- Behavior: `initStickyCTA()`.
- Mobile-only at max-width 768px.
- Shows after hero has fully scrolled past and hides when final CTA is visible.
- Points to `#section-cta`, not directly to payment.

### Watercolor Illustrations

- Structural separation: `css/watercolor-deco.css` controls illustration layer and must load after `css/style.css`.
- Global intensity variable: `--wc-mult`.
- Hide-all class: `body.wc-hidden`.
- Hero arrangement: `.hero-watercolor`.
- Schedule arrangements: `.schedule-deco`.
- Example scatter images: `.examples-scatter`.
- Bonus item images: `.bonus-deco`.
- Why section background images: `.why-deco`.
- Sympathy section background image: `.sympathy-deco`.

## Asset Map

### Local Images

- `images/hero.jpg`: file command reports PNG data, 1600 x 900, despite `.jpg` extension. Used as hero background image.
- `images/siddharth.jpg`: JPEG, 719 x 860. Used for 村越シッダールタ悟 profile.

### External Images

- `https://viorto.com/wp-content/uploads/2024/05/about_prof3.jpg`: YUKARI. profile image. This is an external dependency and can break if viorto.com changes or blocks the asset.

### Illustration Assets

Arrangement SVGs:

- `assets/arrangements/hero-main.svg`
- `assets/arrangements/season-1-tsuyu-natsu.svg`
- `assets/arrangements/season-2-natsu-aki.svg`
- `assets/arrangements/season-3-aki-fuyu.svg`

Wanpoint SVGs:

- `01-umeboshi.svg`
- `02-shiso.svg`
- `03-myoga.svg`
- `04-kyuri.svg`
- `05-inaho.svg`
- `06-cha-leaf.svg`
- `07-miso-bowl.svg`
- `08-shio-salt.svg`
- `09-rice-grains.svg`
- `10-nanten.svg`
- `11-raindrops.svg`
- `12-susuki.svg`
- `13-tomato.svg`
- `14-nasu-eggplant.svg`
- `15-goya.svg`
- `16-shoyu.svg`
- `17-daikon.svg`
- `18-carrot.svg`
- `19-aoba-leaves.svg`

## CTA Flow

### Package CTA

- Hero package CTA: `index.html` hero button `全講座で学ぶ` -> `#section-cta`.
- Pricing package CTA: `全講座で学ぶ →` -> `#section-cta`.
- Final package CTA: `#btn-package-apply` initially `href="#"`, then overwritten by `PACKAGE_URL` in `js/main.js`.
- Current `PACKAGE_URL`: `https://viorto.shop/items/6a2bd3f1ea71f300c11b0b59`.
- Current result: final package CTA opens the complete-course STORES product page in a new tab.

### Single-Session CTA

- Pricing single CTA: `1回から参加する` -> `#section-cta`.
- Final single CTA: `#btn-single-apply` initially `href="#"`, then overwritten by `SINGLE_URL` in `js/main.js`.
- Current `SINGLE_URL`: `https://viorto.shop/items/6a2bd33c1c72b400460c4ab0`.
- Current result: final single-session CTA opens the single-session STORES product page in a new tab.

### Sticky CTA

- Mobile sticky CTA: `全講座で学ぶ` -> `#section-cta`.
- It does not point to checkout directly.
- It appears only after the hero is fully past the viewport and before the final CTA enters view.

### Final CTA

- Main final CTA area displays:
  - Full program label.
  - ¥114,000 price.
  - Bonus value note.
  - Package button.
  - Single-session button.
  - Archive/online/bonus reassurance line.
- Payment/application links are currently placeholders in `js/main.js`.

## JS Architecture

`js/main.js` is vanilla JavaScript in self-executing functions:

1. `initHeader`: header scroll effect.
2. `initFadeInObserver`: fade-in animation observer for content, checklist, problem cards.
3. `initFAQ`: FAQ accordion behavior and keyboard support.
4. `initSmoothScroll`: smooth scrolling for hash links.
5. `initStickyCTA`: mobile sticky CTA show/hide logic.
6. `initPricingAnimation`: pricing card fade-in.
7. `initScheduleAnimation`: schedule item animation.
8. `initCounterAnimation`: animated bonus value counter.
9. `initHeroParticles`: subtle hero particle elements and dynamic keyframes.
10. `initLearnCardTouch`: touch interaction on learn cards.
11. `initProgressBar`: scroll progress indicator.
12. `initCTAButtons`: final payment URL assignment.
13. `respectReducedMotion`: reduced-motion support.
14. `initBonusAnimation`: bonus item stagger animation.

## CSS Architecture

- `style.css` contains the main design system and all structural styles.
- `watercolor-deco.css` contains decorative illustration positioning and overrides.
- Main breakpoints:
  - `max-width: 960px`: large grids collapse.
  - `max-width: 768px`: sticky CTA and new-section grid changes.
  - `max-width: 600px`: mobile padding, section spacing, single-column layouts.
- Typography base is `html { font-size: 18px; }`.
- Most sections use warm cream/paper backgrounds; dark backgrounds have been removed except footer.

## Responsive / Mobile Implementation

- Layouts collapse from multi-column to single-column at 960px/768px/600px.
- Sticky CTA appears on mobile after hero.
- Watercolor scatter illustrations are hidden or reduced on mobile.
- Nijuushi circle visual is hidden under 960px.
- Mobile hero keeps the long subtitle; CTA placement may be low due to content length.
- No local screenshot verification has been performed in this pass because no browser automation dependency is installed.

## Known Issues

- Final package and single-session CTA URLs are set to STORES product pages in `js/main.js`.
- Session 1 time is confirmed as `開催時間：19:00〜21:00`; Session 2 and Session 3 times remain pending.
- Schedule note states Session 1 is confirmed and Sessions 2/3 will be announced when decided.
- OGP image is missing.
- Testimonials appear to be placeholder or lightly sourced; current source note is not strong enough for launch trust.
- YUKARI. profile image is loaded externally.
- No analytics/tracking code is present.
- No visible privacy policy, terms, cancellation/refund details, organizer details, or contact path in the LP.
- FAQ payment answer is incomplete and says credit card payment is planned.
- Instructor roles section has no ID.
- `images/hero.jpg` has a `.jpg` extension but file metadata reports PNG data.
- Current worktree has modified `js/main.js` and untracked `CODEX_HANDOVER.md`.

## Technical Debt

- Inline critical CSS in `index.html` duplicates section background decisions and may drift from `style.css`.
- Several inline styles and inline mouseover/onmouseout handlers exist in `index.html`.
- `style.css` contains unused legacy sections such as `.section-not-recipe` and `.section-ingredients`.
- Hero particle keyframes are injected dynamically from JS.
- Payment URL configuration depends on JavaScript overriding placeholder hrefs.
- Final CTAs are non-functional if JS fails.
- Footer nav styles are inline.
- Accessibility gaps: no skip-to-content link; focus-visible styles are limited or missing for key controls.
- Source docs (`BRIEF_FOR_AI.md`, `COPY_AUDIT.md`, `LP_STATUS.md`) contain older copy/design assumptions in places and should not be treated as current source of truth over `index.html`.
