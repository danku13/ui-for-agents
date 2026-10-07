# Style Catalog — choosing a direction

> **Read when:** starting a new product, site, or major page and the visual direction is not yet chosen. **Section:** 60-styles. **Related:** style-design-process.md, 10/design-tokens.md, 00/visual-hierarchy.md

**Core idea:** choose the style from product personality + audience expectations + content density — then load its preset file and stay inside it. The catalog below maps product types to styles; the rules explain the logic so unlisted cases can be reasoned out.

## Decision table

| Product / content | First choice | Alternatives | Avoid |
|---|---|---|---|
| SaaS dashboard, dev tool, docs | `minimalist-swiss` | `corporate-trust`, `dark-premium` | `neumorphism`, `playful-friendly` |
| Fintech, banking, insurance | `corporate-trust` | `minimalist-swiss` | `brutalism`, `neumorphism` |
| Creative tool marketing site | `editorial` | `dark-premium`, `futuristic-neon` | `corporate-trust` |
| Portfolio, agency, high-craft | `editorial` | `brutalism`, `dark-premium` | `corporate-trust` |
| Entertainment, kids, games | `playful-friendly` | `futuristic-neon` | `corporate-trust`, `neumorphism` |
| Gaming, crypto, web3 | `futuristic-neon` | `dark-premium` | `corporate-trust` |
| Media, fashion, long-form content | `editorial` | `retro-vintage` | `glassmorphism` (text legibility) |
| Health, wellness, food, eco | `handcrafted-organic` | `minimalist-swiss` | `brutalism`, `futuristic-neon` |
| AI / hardware product landing | `dark-premium` | `futuristic-neon`, `minimalist-swiss` | `playful-friendly` (unless kids) |
| Internal enterprise tool | `corporate-trust` | `minimalist-swiss` | `glassmorphism` (eye fatigue over hours) |

## Selection rules

### R1. Audience expectations first, brand second, taste last
**Rule:** Pick the style the audience already trusts for this product category, then differentiate inside it — not against it.
**Why:** Styles carry genre conventions (fintech = calm and dense); violating them reads as risk, and "unique" that confuses is more expensive than "familiar but well-crafted".
**Example:** A bank landing in brutalism may win an award and lose customers; the same brand's careers page may safely use it.

### R2. Content density constrains the style
**Rule:** Data-heavy surfaces (tables, forms, dashboards) get restrained styles; expressive content (photos, stories, brand moments) can carry expressive styles.
**Why:** Stimulation competes with information for attention; expressive chrome over dense content raises error rates and reading fatigue.
**Example:** A trades dashboard keeps swiss neutrality and lets the marketing site carry the neon.

### R3. Long-session products favor low-stimulation styles
**Rule:** The longer users stay per session, the calmer the style — reserve glow, grain, oversaturated accents for short visits.
**Why:** Visual "loudness" taxes accumulate over hours; short-visit pages are judged by impression, tools by sustained comfort.
**Example:** A 9-hour admin tool in glassmorphism fails in usability tests even when the demo screenshot looks great.

### R4. Marketing may be louder than the product — on purpose
**Rule:** It is legitimate to use an expressive style for landing pages and a restrained one inside the app, provided token families are shared and the boundary is documented.
**Why:** Landing pages must differentiate in seconds; product UI must not exhaust over months — different jobs, different intensity.
**Example:** Neon-glow hero page → same accent hue, swiss app shell.

### R5. When styles compete, decide by cost of misreading
**Rule:** If two candidate styles both fit, choose by what a misinterpretation costs: trust products lean conservative, impression products can gamble.
**Why:** The asymmetry is stark — a playful bank loses deposits, a boring game landing loses nothing but installs.
**Example:** Insurance → corporate-trust; indie game → playful-friendly, even if the client "likes both".

### R6. Always finish by loading the preset file
**Rule:** After selecting a style here, open its preset file (`60-styles/<name>.md`) and implement from the preset — never from the one-line description in this table.
**Why:** The table chooses; only the preset contains the token values, signatures, a11y watchpoints, and anti-patterns that make the style consistent.
**Example:** "We chose dark-premium" without opening the preset leads to pure black + gold text — the exact anti-pattern the preset warns about.

## The presets

- `minimalist-swiss.md` — precise, calm, systematic; the library's baseline.
- `dark-premium.md` — near-black layers, one metallic or jewel accent, refined type.
- `glassmorphism.md` — frosted translucent panels over vivid backgrounds.
- `neumorphism.md` — soft extruded/pressed same-hue surfaces (strict a11y limits).
- `brutalism.md` — raw, honest, harsh borders and type; anti-corporate.
- `editorial.md` — magazine typography, asymmetric grid, photography.
- `playful-friendly.md` — rounded, saturated, illustrated, springy motion.
- `corporate-trust.md` — conservative blue, dense, tables-first, B2B credibility.
- `retro-vintage.md` — era palettes and type, texture, nostalgia.
- `futuristic-neon.md` — dark base + neon glow, HUD decorations.
- `handcrafted-organic.md` — warm cream, earth tones, organic shapes, illustration.

## Checklist
- [ ] Product type located in the decision table; avoid-column respected
- [ ] Audience expectation checked before personal taste
- [ ] Content density of the densest screen compatible with the style
- [ ] Session length accounted for (calm for long sessions)
- [ ] Style boundaries (marketing vs app) documented if different
- [ ] Preset file opened and being followed

## Anti-patterns
- Choosing a style because it is trendy, not because it fits
- Applying an expressive style to the densest screen of the product
- Two competing styles inside one app surface
- Deciding from the table's one-liner without opening the preset
- Forcing one style across products with different audiences

## Sources
- Nielsen Norman Group — aesthetic-usability effect: https://www.nngroup.com/articles/aesthetic-usability-effect/
- Laws of UX — Jakob's law (familiar patterns): https://lawsofux.com/jakobs-law/
- Material Design 3 — expressive vs functional tiers: https://m3.material.io/foundations
