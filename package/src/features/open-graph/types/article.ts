import type { OpenGraphBase } from './base';

/**
 * Open Graph Metadata for Articles
 */
export type OpenGraphArticle = OpenGraphBase & {
  /**
   * The type of object.
   *
   * @example <meta property="og:type" content="article">
   */
  type: 'article';

  /**
   * The date when the article was published.
   *
   * @example <meta property="article:published_time" content="2024-03-01T12:00:00Z">
   */
  publishedTime?: string;

  /**
   * The date when the article was last modified.
   *
   * @example <meta property="article:modified_time" content="2024-03-28">
   */
  modifiedTime?: string;

  /**
   * The date when the article will expire.
   *
   * @example <meta property="article:expiration_time" content="2025-01-01T00:00:00Z">
   */
  expirationTime?: string;

  /**
   * The url of the author of the article.
   *
   * @example <meta property="article:author" content="https://example.com/authors/john-doe">
   */
  author?: string;

  /**
   * A high-level section name.
   *
   * @example <meta property="article:section" content="Technology">
   */
  section?: string;

  /**
   * The tags associated with the article.
   *
   * @example <meta property="article:tag" content="AI, Machine Learning">
   */
  tags?: string[];
};
