import type { OpenGraphBase } from './base';

/**
 * Open Graph Metadata for Websites
 */
export type OpenGraphWebsite = OpenGraphBase & {
  /**
   * The type of object.
   *
   * @example `<meta property="og:type" content="website">`
   */
  type: 'website';
};
