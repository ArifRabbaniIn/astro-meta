// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightTypeDoc({
          entryPoints: ['../package/src/type.ts'],
          tsconfig: '../package/tsconfig.json',
          sidebar: {
            collapsed: true,
            label: 'Reference',
          },
          typeDoc: {
            disableSources: true,
          },
        }),
      ],
      title: 'Astro Meta',
      description:
        'Astro Meta is a simple yet powerful Astro integration designed to make adding meta tags to your Astro site a breeze. It aims to streamline the process of managing SEO and social media metadata (facebook, twitter) for your web pages.',
      lastUpdated: true,
      credits: true,
      social: {
        github: 'https://github.com/ArifRabbaniIn/astro-meta',
      },
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Introduction', slug: 'introduction' },
            { label: 'Getting Started', slug: 'getting-started' },
          ],
        },
        typeDocSidebarGroup,
      ],
    }),
  ],
});
