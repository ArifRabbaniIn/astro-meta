/**
 * Represents Twitter metadata for a webpage
 */
export type TwitterMetadata = {
  /**
   * The title of the content
   * @example <meta name="twitter:title" content="Your Website Title" />
   */
  title: string;

  /**
   * A short description of the content
   * @example <meta name="twitter:description" content="Your website description" />
   */
  description?: string | undefined;

  /**
   * The type of the Twitter card
   * @default summary
   * @example <meta name="twitter:card" content="summary" />
   */
  cardType?: TwitterCardType | undefined;

  /**
   * The Twitter username of the website or publisher. Either site or siteId is required.
   * @example <meta name="twitter:site" content="@website" />
   */
  site?: string;

  /**
   * The Twitter user ID of the website or publisher. Either site or siteId is required
   * @example <meta name="twitter:site:id" content="123456789" />
   */
  siteId?: number;

  /**
   * The Twitter username of the content creator
   * @example <meta name="twitter:creator" content="@username" />
   */
  creator?: string | undefined;

  /**
   * The Twitter user ID of the content creator
   * @example <meta name="twitter:creator:id" content="123456789" />
   */
  creatorId?: number;

  /**
   * Image information to use in the card. twitter:image and related image properties
   */
  image?: TwitterImage | undefined;
};

/**
 * Represents a Twitter image metadata
 */
export type TwitterImage = {
  /**
   * The URL of the image
   * @example <meta name="twitter:image" content="https://example.com/image.jpg" />
   */
  url: string;

  /**
   * A text description of the image conveying the essential nature of the image
   * @example <meta name="twitter:image:alt" content="Description of the image" />
   */
  alt: string;
};

/**
 * The type of the Twitter card
 */
export type TwitterCardType = 'summary' | 'summary_large_image';
