import type { OpenGraphMetadata } from './open-graph-metadata';
import type { TwitterMetadata } from './twitter-metadata';

/**
 * Represents metadata for a webpage.
 *
 * @typedef {Object} Metadata
 * @property {string} title - The title of the page.
 * @property {string} [description] - A short description of the page.
 * @property {string} [canonicalUrl] - The canonical URL of the page (default: current URL without the query params).
 * @property {string} [charset] - The character encoding of the page (default: UTF-8).
 * @property {boolean} [index] - Whether the page should be indexed by search engines (default: true).
 * @property {boolean} [follow] - Whether search engines should follow links on the page (default: true).
 * @property {string[]} [keywords] - The keywords associated with the page.
 * @property {OpenGraphMetadata} [openGraph] - The OpenGraph metadata for the page.
 * @property {TwitterMetadata} [twitter] - The Twitter metadata for the page.
 * @property {string} [author] - The author of the page.
 * @property {string} [authorWebsite] - The website of the author.
 * @property {string} [sitemapUrl] - The URL of the sitemap for the page (e.g. /sitemap-index.xml).
 */
export type Metadata = {
  title: string;
  description?: string | undefined;
  canonicalUrl?: string | undefined;
  charset?: string | undefined;
  index?: boolean | undefined;
  follow?: boolean | undefined;
  keywords?: string[] | undefined;
  openGraph?: OpenGraphMetadata | undefined;
  twitter?: TwitterMetadata | undefined;
  author?: string | undefined;
  authorWebsite?: string | undefined;
  sitemapUrl?: string | undefined;
};
