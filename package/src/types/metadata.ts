import type { TwitterCard } from '../features/twitter/types/card';
import type { OpenGraphMetadata } from './open-graph-metadata';

/**
 * Represents metadata for a webpage
 */
export type Metadata = {
  /**
   * The title of the webpage
   * @example <title>Your webpage title</title>
   */
  title: string;

  /**
   * A short description of the webpage content
   * @example <meta name="description" content="Your website description" />
   */
  description?: string | undefined;

  /**
   * Canonical URL of the webpage
   * @default The current url without the query params
   * @example <link rel="canonical" href="https://example.com/your-page" />
   */
  canonicalUrl?: string | undefined;

  /**
   * Character set of the webpage
   * @default UTF-8
   * @example <meta charset="UTF-8" />
   */
  charset?: string | undefined;

  /**
   * Whether the webpage should be indexed by search engines
   * @default true
   * @example <meta name="robots" content="index" />
   */
  index?: boolean | undefined;

  /**
   * Whether the webpage should be followed by search engines
   * @default true
   * @example <meta name="robots" content="follow" />
   */
  follow?: boolean | undefined;

  /**
   * Keywords associated with the webpage
   * @example <meta name="keywords" content="keyword1, keyword2, keyword3" />
   */
  keywords?: string[] | undefined;

  /**
   * Author of the webpage
   * @example <meta name="author" content="John Doe" />
   */
  author?: string | undefined;

  /**
   * URL of the author of the website
   * @example <link rel="author" href="https://johndoe.com" />
   */
  authorWebsite?: string | undefined;

  /**
   * URL to the sitemap
   * @default /sitemap.xml
   * @example <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
   */
  sitemapUrl?: string | undefined;

  /**
   * Open Graph metadata for the webpage
   */
  openGraph?: OpenGraphMetadata | undefined;

  /**
   * Twitter metadata for the webpage
   */
  twitter?: TwitterCard | undefined;
};
