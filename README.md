# Astro Meta

Easily add meta tags to your Astro pages.

## Installation

To install the package, run the following command in your terminal:

```
npm install @codemint/astro-meta
```

## Usage

```
// demo/src/layouts/Layout.astro
---
import { MetaTags } from '@codemint/astro-meta';
---

<!doctype html>
<html lang="en">
  <head>
    <MetaTags
      title="Astro Meta"
      description="Easily add meta tags to your Astro pages."
      keywords={['astro', 'meta', 'open graph', 'twitter', 'seo']}
    />
  </head>
  <body>
    <slot />
  </body>
</html>
```
