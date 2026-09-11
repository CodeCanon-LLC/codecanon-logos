# CodeCanon logos — conventions

Six SVG React components, two families x three variants. No provider, no context, no shipped stylesheet — each component is a self-contained function that renders an `<svg>` with its own inline `<style>` tag.

## No wrapping needed

Every component is a plain function `(props: React.ComponentProps<"svg">) => JSX.Element`. Drop it in directly — no root provider, no theme context, no CSS import required for it to render styled:

```tsx
import { CodeCanonIcon, CodeCanonText } from "@codecanon/logos"

<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
  <CodeCanonIcon width={32} height={32} />
  <CodeCanonText width={148} height={83} />
</div>
```

## The three variants — pick by surface, not by theme detection

| Family | Adaptive | Fixed, for dark surfaces | Fixed, for light surfaces |
|---|---|---|---|
| Mark | `CodeCanonIcon` | `CodeCanonDarkIcon` | `CodeCanonLightIcon` |
| Wordmark | `CodeCanonText` | `CodeCanonDarkText` | `CodeCanonLightText` |

- **Adaptive** (`CodeCanonIcon`/`CodeCanonText`): reads `var(--color-codecanon-*)`, defaulting to the dark-brown-on-light palette. Wrap an ancestor in `className="dark"` to flip it to the light-tan-on-dark palette — this is the only theme switch mechanism; there's no `dark`/`theme` prop.
- **`Dark`-suffixed**: hard-coded to the light-tan palette. Use when the component sits on a dark surface regardless of the app's theme (e.g. inside a permanently-dark footer).
- **`Light`-suffixed**: hard-coded to the dark-brown palette. Use on a light surface regardless of theme.

Never use the fixed variants to "implement" dark mode manually — that's what the adaptive variant + `.dark` ancestor is for. Reach for `Dark`/`Light` only when the surface color is independent of the app theme.

## Styling idiom: CSS custom properties, not classes

No exported class names to target. Each component's fill color(s) come from CSS custom properties, with a per-variant color already baked in as the fallback:

- Icon family: `--color-codecanon-primary`, `--color-codecanon-secondary`
- Text family: `--color-codecanon-letter`, `--color-codecanon-diacritic`

Override by setting the custom property on an ancestor:

```css
.my-scope { --color-codecanon-primary: #2A6F4B; }
```

The same palette is also exported as JS constants (`PRIMARY_DEFAULT_COLOR`, `SECONDARY_DEFAULT_COLOR`, `LETTER_DEFAULT_COLOR`, `DIACRITIC_DEFAULT_COLOR` and their `_DARK_COLOR` counterparts) for cases that need the raw hex rather than a CSS var.

## Sizing

All standard `<svg>` props pass through (`width`, `height`, `className`, `style`, …). Default is `24px`. The icon family's `viewBox` is square (`2122 2122`); the text family's is `1600 896` (~1.79:1) — pass `width`/`height` in that ratio to avoid letterboxing, e.g. `width={200} height={112}`.

## Where the truth lives

`dist/index.d.ts` for the exact prop signatures (all six are `React.ComponentProps<"svg">`, nothing custom); `react/*.tsx` for the component source if you need to see the palette wiring.
