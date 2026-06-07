# TASKLIST

Strategic audit for the current LP as a premium educational offer priced at ¥114,000.

Priorities:

- P0 = Critical before launch
- P1 = Important
- P2 = Nice to have

Effort:

- XS = under 30 minutes
- S = 30-90 minutes
- M = half day
- L = one day or more

## P0 Critical

| Priority | Description | Estimated effort |
|---|---|---|
| P0 | Set real package and single-session application/payment URLs in the CTA flow. Current final CTA URLs are `#`, so the LP cannot convert. | XS |
| P0 | Add actual session times for all three sessions. A ¥114,000 buyer needs to know whether live attendance is possible before applying. | XS |
| P0 | Replace placeholder or weakly sourced testimonials with real approved testimonials, or remove the testimonials section until real proof is available. | M |
| P0 | Add clear payment method, cancellation/refund policy, and application terms before checkout or in FAQ. Current FAQ says details are on the application page and credit card payment is planned. | S |
| P0 | Add organizer/contact information and a visible inquiry path. Premium buyers need a way to ask questions before purchase. | S |
| P0 | Add privacy policy / legal links or equivalent required business pages before launch. | S |
| P0 | Add OGP image metadata for social/LINE sharing credibility. | S |
| P0 | Clarify archive viewing period. The LP promises archives but does not state how long they are available. | XS |
| P0 | Confirm and document single-session-to-full-program upgrade policy. Current LP allows difference-price upgrade; older brief says no upgrade. Source documents conflict. | XS |
| P0 | Verify all CTA buttons after URL setup, including hero, pricing, sticky CTA, and final CTA. | XS |

## P1 Important

| Priority | Description | Estimated effort |
|---|---|---|
| P1 | Strengthen BAMS explanation near the instructor profile so users understand why the credential matters and why it supports the premium price. | S |
| P1 | Improve mobile hero conversion by reducing first-view copy density or moving key CTA/action information higher. Current mobile hero likely pushes CTA too low. | M |
| P1 | Add a compact offer summary near pricing/final CTA: dates, times, format, archive period, price, payment, and support. | S |
| P1 | Reduce sales-page feeling in the bonus/pricing area. Current `通常価格`, strikethrough value, `無料`, and `¥150,000以上相当` framing may weaken premium trust. | M |
| P1 | Make final CTA language more action-specific. `全講座で学ぶ` is gentle but less explicit than an application action. | S |
| P1 | Improve visual hierarchy for premium buyer scanning: price, dates, format, instructor credibility, and application action should be findable faster. | M |
| P1 | Add FAQ items for materials/PDFs, archive期限, receipt/領収書, payment timing, and whether questions are accepted. | S |
| P1 | Serve YUKARI. profile photo locally to remove external dependency. | S |
| P1 | Add analytics/tracking plan and install only after confirming tool choice. At minimum track CTA clicks and application starts. | M |
| P1 | Add visible keyboard focus styles for header CTA, buttons, footer links, and FAQ controls. | S |
| P1 | Add skip-to-content link for accessibility. | XS |
| P1 | Add ID to the instructor roles section for anchorability and maintainability. | XS |
| P1 | Review emoji usage in hero badges, future cards, bonus cards, and guarantee line. Emoji may clash with the premium editorial tone for 40-60 audience. | S |
| P1 | Audit mobile spacing around sticky CTA so it does not cover footer/final CTA content and appears at a useful point. | S |
| P1 | Confirm `images/hero.jpg` file format. It is named `.jpg` but detected as PNG data. | XS |

## P2 Nice To Have

| Priority | Description | Estimated effort |
|---|---|---|
| P2 | Remove or document unused legacy CSS sections such as `.section-not-recipe` and `.section-ingredients`. | S |
| P2 | Move hero particle keyframes from JS to CSS for cleaner separation. | XS |
| P2 | Reduce inline styles in `index.html` where practical after launch blockers are handled. | M |
| P2 | Sync inline critical CSS background colors with final `style.css` values to reduce maintenance confusion. | XS |
| P2 | Add lazy-loading or preload strategy for images where appropriate. Hero should preload; below-fold instructor images can lazy-load. | S |
| P2 | Consider Japanese font performance optimization after launch readiness is handled. | M |
| P2 | Add a lightweight 404 page if hosted on static infrastructure. | S |
| P2 | Add `manifest.json` only if a home-screen/PWA experience is desired. | S |
| P2 | Add local browser/screenshot QA workflow for desktop and mobile breakpoints. | M |
| P2 | Add comments or a maintenance note explaining CTA URL ownership and required launch checklist. | XS |

## Evaluation Notes

### Conversion

The LP has a complete long-form funnel, but final conversion is blocked by placeholder URLs. The strongest conversion assets are the clear seasonal framing, familiar food examples, instructor pairing, pricing cards, and mobile sticky CTA. The weakest points are missing checkout URLs, unclear application logistics, incomplete payment/refund details, and low-specificity final action language.

### Trust

Trust is currently below what a ¥114,000 offer requires. Instructor credibility is strong but under-explained. Testimonials are not launch-ready. Schedule, payment, refund, archive period, contact, and legal details need to be visible before purchase.

### Emotional Resonance

The page resonates well with women interested in food, seasonal living, and natural health. The copy around 梅干し, 味噌汁, 薬味, 旬の野菜, and seasonal discomfort feels aligned with the audience. The page should preserve this calm and intelligent voice.

### Mobile Experience

Responsive layout is implemented, but mobile content density is still a concern. The hero subtitle is long, CTA arrival may be delayed, and sticky CTA appears only after the hero is fully past. This should be tested visually on 375px and 390px mobile widths.

### Readability For Women Aged 40-60

The enlarged typography and warm palette support readability. Minimum type sizes appear mostly appropriate. Some smaller labels and inline notes may be harder to read, especially metadata and footnote-style text.

### Purchase Flow

Current purchase flow is incomplete. The page scrolls users toward final CTA, but final application/payment buttons do not lead anywhere. Users also cannot evaluate time, refund terms, archive availability, or payment details enough to buy confidently.

### Visual Hierarchy

The visual hierarchy is elegant and restrained, but commercial decision information is too distributed. A premium buyer should be able to scan key facts faster, especially near pricing and CTA.

### Japanese Language Naturalness

Overall Japanese is natural, calm, and polished. Awkward or weaker areas include `開催時間：予定`, vague testimonial heading language, `すべて無料でお届けします`, and overly generic payment FAQ language. Some CTA language is elegant but not explicit enough for application intent.
