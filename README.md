# @codemint/astro-meta

`@codemint/astro-meta` is a simple yet powerful Astro integration designed to make adding meta tags to your Astro site a breeze.  It aims to streamline the process of managing SEO and social media metadata for your web pages.

## Features

-   **Simplified Meta Tag Management:** Easily add and manage meta tags without repetitive HTML code.
-   **SEO Friendly:** Helps improve your site's SEO by providing structured meta information.
-   **Social Media Ready:** Configure meta tags for social media platforms like Twitter and Facebook.
- **Component Based**: Use component to manage meta tags.

## Installation

1.  **Install the package:**

    ```bash
    npm install @codemint/astro-meta
    # or
    yarn add @codemint/astro-meta
    # or
    pnpm add @codemint/astro-meta
    ```

2. **Using the component**

    ```astro
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
The above code snippet will add title and description to you html head section along with some other meta tags like charset, viewport, etc.
