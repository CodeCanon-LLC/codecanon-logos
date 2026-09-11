# design-sync notes — @codecanon/logos

## Setup

- Package manager: pnpm (`pnpm-lock.yaml`). Faithful install: `pnpm i --frozen-lockfile`.
- Build: `pnpm run build` (tsdown) → `dist/index.mjs` / `dist/index.js` + `.d.ts`. `dist/` was already built and current when this sync ran; converter entry used: `./dist/index.mjs`.
- `react-dom` (matching the installed `react@19.2.4`) and `@types/react-dom` were added as **devDependencies** — the package itself has no runtime dependency on react-dom (it only renders `<svg>` markup), but the design-sync converter's preview-vendor bundling needs `react-dom` resolvable from `node_modules` to build the browser preview shims. Safe: devDependencies aren't published (`files` in package.json is `dist`/`svg`/`png`/`README.md` only).

## Known render warns (checked against, expected on every re-sync)

- `[CSS_RUNTIME]` — this DS ships no stylesheet; every component self-styles via an inline `<style dangerouslySetInnerHTML>` tag keyed off CSS custom properties (`--color-codecanon-*`) with per-variant JS-constant fallbacks. Expected, non-blocking, documented in `conventions.md`.
- `[DTS_STYLE_SYSTEM]` — the extracted `<Name>Props` filters `@types/react`'s CSS-shorthand style props (>15 of them) from the interface; the real API is plain `React.ComponentProps<"svg">`. No action needed.
- No `[FONT_MISSING]`: the text/wordmark variant renders letterforms as SVG `<path>` geometry, not live text — no web font is involved.

## Shape facts

- 6 components, no groups (all "general") — two families (`*Icon`, `*Text`) × three variants (adaptive default, `Dark`-suffixed fixed, `Light`-suffixed fixed).
- No Storybook anywhere in the repo (confirmed by search); no `docs/` dir — `.prompt.md` for every component is synthesized from the `.d.ts` + the authored preview, not a ported doc.
- All 6 previews are **authored** (`.design-sync/previews/*.tsx`), not floor cards — small N, did all of them solo, no subagent fan-out needed.

## Re-sync risks

- If a future release adds real per-component props (currently none — all 12 are just `React.ComponentProps<"svg">`), `conventions.md`'s "no custom props" framing and the sizing/CSS-var guidance should be re-checked against the new `.d.ts`.
- If the repo ever ships a real stylesheet or moves color definitions out of the inline `<style>` tag (e.g. into a shared CSS file), `cfg.cssEntry` needs to be set and `conventions.md`'s styling-idiom section rewritten — the current guidance assumes the CSS-custom-property + inline-`<style>` pattern.
- `react-dom` devDependency above was added purely for this tooling; if the repo's own build/test tooling later adds a real dependency on it, reconcile rather than assuming it's only there for design-sync.

## Salez brand (added after the initial CodeCanon-only sync)

- 6 more components: `Salez{,Dark,Light}{Icon,Text}` — same architecture as CodeCanon (adaptive + two fixed variants per family), own CSS namespace (`--color-salez-*`), reusing CodeCanon's own `PRIMARY`/`DIACRITIC` JS constants for the actual hex fallbacks (verified byte-for-byte against the original design-sync SVG exports — not a coincidence, don't "fix" it into separate `SALEZ_*` constants).
- **The icon's concept changed mid-project**: an earlier round (before `react/salez-*.tsx` existed) landed a "shopping bag + price tag" description in `conventions.md` and `.design-sync/.cache/review/*.grade.json` notes for `SalezIcon`/`SalezDarkIcon`/`SalezLightIcon`. The shipped `svg/salez-*-icon.svg` source was later redesigned to a stack-of-invoices mark with a `</>` code glyph — `conventions.md` has been corrected (icon `viewBox` is `0 0 512 512`, not `1024 1024`; text `viewBox` is `0 0 1200 672`, not `1600 896`), and the grade notes were rewritten against fresh `package-capture.mjs` screenshots of the actual current render (2026-09-11). If `conventions.md` or a grade note ever again describes a bag/price-tag, that's stale copy from this earlier round, not the current design — re-verify against the live `svg/salez-*.svg` before trusting it.
- `react/salez-{,dark-,light-}{icon,text}.tsx` and the raw `svg/salez-*.svg` sources didn't exist until this round — only `.design-sync/previews/Salez*.tsx` and the raw handoff SVGs had been uploaded previously (visible as `handoff/SalezIcon.tsx`, `handoff/SalezDarkIcon.svg`, `handoff/SalezLightIcon.svg` and three loose root files — `Salez Invoice Stack{,  Dark}.svg`, `Salez Invoice Stack Preview.html` — in the claude.ai/design project; those predate proper componentization and are untouched by this sync since they're outside the converter's managed globs — safe to ignore or manually clean up in the project UI).
- The wordmark (`svg/salez-*-text.svg`) source is Illustrator-exported with heavy `clipPath`/`transform` nesting around what are, geometrically, plain axis-aligned rects (plus one diagonal parallelogram for the "z" stroke) — it was hand-flattened into `<rect>`/`<polygon>` + `class="salez-letter"/"salez-diacritic"` to match the CodeCanon convention. If Salez ships a new wordmark export, expect the same Illustrator nesting and re-flatten rather than pasting the raw clip-path soup into `react/salez-*-text.tsx`.
