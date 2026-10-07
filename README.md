# UI/UX Knowledge Library for AI Agents

> **Entry point of the library.** If you are an agent: read this file, then `AGENT-WORKFLOW.md`, then load only the files your task requires.

## What this is

A comprehensive, **stack-agnostic** knowledge base that teaches AI agents how to design and implement user interfaces: web apps, desktop-native applications (including Rust GUI toolkits such as egui / iced / slint), and WASM- or canvas-rendered UIs where a browser DOM may not exist at all.

Four design decisions define this library:

1. **Stack-agnostic.** Rules describe intent, constraints and acceptance criteria — not framework syntax. Rendering-specific execution is isolated in `50-platforms/`, so the same principle (e.g. "body text contrast ≥ 4.5:1") applies to CSS, Slint styles, or a custom wgpu renderer alike.
2. **Rule + Why.** Every rule is followed by a short explanation of the underlying mechanism, so an agent can extrapolate correctly to cases the library does not explicitly list.
3. **Adapted best practice.** Distilled from Material Design 3, Apple HIG, WCAG 2.2, Nielsen Norman Group research, and leading open design systems. Full link list lives in `REFERENCES.md`.
4. **Progressive loading.** Files are small (100–170 lines), heavily cross-linked, and grouped so an agent can load 3–8 files per task instead of the whole library.

## Library map

| Section | Path | Contents |
|---|---|---|
| Protocol | `AGENT-WORKFLOW.md` | The 7-step loading & working protocol, task→files matrix, conflict-resolution order. **Read first.** |
| Fundamentals | `00-fundamentals/` | Universal visual laws: `visual-hierarchy`, `color`, `typography`, `spacing-layout-grids`, `iconography`, `elevation-depth`, `motion-principles`. |
| Design system | `10-design-system/` | `design-tokens`, `theming-dark-mode`, `building-a-ui-kit`, `using-existing-libraries`, `component-api-design`, `component-documentation`. |
| Components | `20-components/` | `components-catalog` (selection), `buttons-and-actions`, `forms-and-inputs`, `navigation-patterns`, `modals-and-overlays`, `tables-and-data-lists`, `feedback-toasts-alerts`. |
| UX patterns | `30-ux-patterns/` | `forms-validation-ux`, `empty-loading-error-states`, `microcopy`, `onboarding-first-run`, `search-filtering-sorting`, `dashboards-data-viz-ux`. |
| Quality | `40-quality/` | `accessibility-wcag`, `responsive-adaptive`, `usability-heuristics`, `perceived-performance`, `visual-qa-protocol` (includes non-browser QA paths — mandatory final gate). |
| Platforms | `50-platforms/` | `web-css-dom`, `rust-native-gui`, `wasm-canvas-rendering`, `cross-platform-parity`. |
| Styles | `60-styles/` | `style-design-process` (how to invent a style), `style-catalog` (selector by product type), plus 11 ready presets: `minimalist-swiss`, `dark-premium`, `glassmorphism`, `neumorphism`, `brutalism`, `editorial`, `playful-friendly`, `corporate-trust`, `retro-vintage`, `futuristic-neon`, `handcrafted-organic`. |
| Reference | `REFERENCES.md`, `GLOSSARY.md` | Curated GitHub/web links (copy-paste ready), terminology. |

## File format (every knowledge file)

```
# Title
> **Read when:** ... | **Section:** ... | **Related:** ...

## Rules
### R1. Rule name
**Rule:** imperative instruction.
**Why:** short mechanistic explanation (so the rule can be extrapolated).
**Example:** minimal concrete illustration.

## Checklist      <- concrete, pass/fail, measurable
## Anti-patterns  <- what to avoid
## Sources        <- systems the rules were adapted from
```

## Quick-start by task type

| Task | Load |
|---|---|
| Build a new screen / feature UI | fundamentals: `visual-hierarchy`, `spacing-layout-grids`, `color`, `typography` + relevant `20-components/` + relevant `30-ux-patterns/` + `40-quality/visual-qa-protocol.md` |
| Build a UI kit from scratch | all `00-fundamentals/` + all `10-design-system/` |
| Pick / integrate a component library | `10-design-system/using-existing-libraries.md` + `20-components/components-catalog.md` |
| Review or audit existing UI | `40-quality/` (all five) + `30-ux-patterns/empty-loading-error-states.md` |
| Theme / dark mode work | `10-design-system/design-tokens.md` + `theming-dark-mode.md` |
| Rust native / WASM target | your task files + relevant `50-platforms/` file + `40-quality/visual-qa-protocol.md` |
| Create or apply a distinct visual style | `60-styles/style-catalog.md` + `60-styles/style-design-process.md` + the chosen `60-styles/<style>.md` + `10-design-system/design-tokens.md` + `40-quality/visual-qa-protocol.md` |

The full matrix with mandatory vs on-demand files lives in `AGENT-WORKFLOW.md`.

## Extending the library

Add rules as new numbered entries (`R<n>`) inside the matching file; keep the `Rule → Why → Example` shape; keep files under ~170 lines (split into two files when a file outgrows this); update `Related:` links in both directions. Platform-specific exceptions belong in `50-platforms/`, never inside fundamentals — fundamentals must stay true for every renderer.
