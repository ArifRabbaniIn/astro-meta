/**
 * Represents Twitter metadata for a webpage
 */
export type TwitterMetadata = {
  /**
   * The title of the content
   * @meta twitter:title
   * @example <meta name="twitter:title" content="Your Website Title" />
   */
  title: string;

  /**
   * A short description of the content
   * @meta twitter:description
   * @example <meta name="twitter:description" content="Your website description" />
   */
  description?: string | undefined;

  /**
   * The type of the Twitter card
   * @default summary
   * @meta twitter:card
   * @example <meta name="twitter:card" content="summary" />
   */
  cardType?: TwitterCardType | undefined;

  /**
   * The Twitter username of the website or publisher. Either site or siteId is required.
   * @meta twitter:site
   * @example <meta name="twitter:site" content="@website" />
   */
  site: string;

  /**
   * The Twitter user ID of the website or publisher. Either site or siteId is required
   * @meta twitter:site:id
   * @example <meta name="twitter:site:id" content="123456789" />
   */
  siteId: number;

  /**
   * The Twitter username of the content creator
   * @meta twitter:creator
   * @example <meta name="twitter:creator" content="@username" />
   */
  creator?: string | undefined;

  /**
   * The Twitter user ID of the content creator
   * @meta twitter:creator:id
   * @example <meta name="twitter:creator:id" content="123456789" />
   */
  creatorId: number;

  /**
   * Image information to use in the card
   * @meta twitter:image and related image properties
   */
  image?: TwitterImage | undefined;
};

/**
 * Represents a Twitter image metadata
 */
export type TwitterImage = {
  /**
   * The URL of the image
   * @meta twitter:image
   * @example <meta name="twitter:image" content="https://example.com/image.jpg" />
   */
  url: string;

  /**
   * A text description of the image conveying the essential nature of the image
   * @meta twitter:image:alt
   * @example <meta name="twitter:image:alt" content="Description of the image" />
   */
  alt: string;
};

/**
 * The type of the Twitter card
 * @meta twitter:card
 */
export type TwitterCardType = 'summary' | 'summary_large_image';
