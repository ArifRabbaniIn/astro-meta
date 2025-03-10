/**
 * Twitter Summary Large Image Card.
 */
export type TwitterSummaryLargeImageCard = {
  /**
   * The card type.
   *
   * @example <meta name="twitter:card" content="summary_large_image">
   */
  type: 'summary_large_image';

  /**
   * The Twitter username of the website.
   *
   * @example <meta name="twitter:site" content="@example_site">
   */
  site: string;

  /**
   * The Twitter user ID of the website.
   *
   * @example <meta name="twitter:site:id" content="123456789">
   */
  siteId?: string;

  /**
   * The Twitter username of the content creator.
   *
   * @example <meta name="twitter:creator" content="@content_creator">
   */
  creator?: string;

  /**
   * The Twitter user ID of the content creator.
   *
   * @example <meta name="twitter:creator:id" content="987654321">
   */
  creatorId?: string;

  /**
   * The title of the content. Maximum 70 characters.
   *
   * @example <meta name="twitter:title" content="How to Build a Twitter Card">
   */
  title: string;

  /**
   * A brief description of the content. Maximum 200 characters.
   *
   * @example <meta name="twitter:description" content="Learn how to add Twitter Card metadata to your website.">
   */
  description?: string;

  /**
   * The URL of the large image (minimum 300x157px, maximum 4096x4096px). JPG, PNG, WEBP and GIF formats are supported.
   *
   * @example <meta name="twitter:image" content="https://example.com/large-image.jpg">
   */
  image?: string;

  /**
   * Alt text describing the large image. Maximum 420 characters.
   *
   * @example <meta name="twitter:image:alt" content="A high-resolution preview image of the content">
   */
  imageAlt?: string;
};
