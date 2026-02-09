# @codecanon/logos

Official CodeCanon logo assets package, providing React components and PNG assets for various use cases.

## Installation

```bash
npm install @codecanon/logos
```

## Usage

### React Components (Recommended)

Use the ready-made React components:

```tsx
import { CodeCanonIcon, CodeCanonText, CodeCanonDarkIcon, CodeCanonDarkText } from '@codecanon/logos';

function App() {
  return (
    <div>
      <CodeCanonIcon />
      <CodeCanonText />
    </div>
  );
}
```

### PNG Images

Import PNG file paths:

```tsx
import CodeCanonImage from '@codecanon/logos/png/default.png';

function Logo() {
  return <img src={CodeCanonImage} alt="CodeCanon Logo" />;
}
```

## Examples

### React with Icon

```tsx
import { CodeCanonIcon } from '@codecanon/logos';

function Header() {
  return (
    <header>
      <CodeCanonIcon />
      <h1>My App</h1>
    </header>
  );
}
```

### React with Text Logo

```tsx
import { CodeCanonText, CodeCanonDarkText } from '@codecanon/logos';

function Logo({ darkMode }: { darkMode: boolean }) {
  return darkMode ? <CodeCanonDarkText /> : <CodeCanonText />;
}
```

### Express Server with PNG

```typescript
import express from 'express';
import CodeCanonImage from '@codecanon/logos/png/default.png';

const app = express();

app.get('/logo', (req, res) => {
  res.sendFile(CodeCanonImage);
});
```

### Styling the Logos

The SVG logos use CSS custom properties for colors. You can override them:

```css
/* Override default colors */
:root {
  --color-codecanon-primary: #your-color;
  --color-codecanon-secondary: #your-color;
}

/* Or for text logos */
:root {
  --color-codecanon-letter: #your-color;
  --color-codecanon-diacritic: #your-color;
}
```

## Available Exports

### React Components (SVG)
- `CodeCanonIcon` - Default icon logo component
- `CodeCanonDarkIcon` - Dark theme icon logo component
- `CodeCanonText` - Default text logo component
- `CodeCanonDarkText` - Dark theme text logo component

### PNG Images (file paths)
- `CodeCanonImage` - Default logo
- `CodeCanonDarkImage` - Dark theme logo
- `CodeCanonCircleImage` - Circle variant logo
- `CodeCanonDarkCircleImage` - Dark theme circle variant

## License

MIT
