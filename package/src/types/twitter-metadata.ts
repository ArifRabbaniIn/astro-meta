/**
 * Represents Twitter metadata.
 *
 * @typedef {Object} TwitterMetadata
 * @property {string} title - The title of the content.
 * @property {string} [description] - A short description of the content.
 * @property {TwitterCardType} [cardType] - The type of the Twitter card (default: summary).
 * @property {string} site - The Twitter username of the site.
 * @property {string} [creator] - The Twitter username of the content creator.
 * @property {TwitterImage} [image] - The image associated with the content.
 */
export type TwitterMetadata = {
  title: string;
  description?: string | undefined;
  cardType?: TwitterCardType | undefined;
  site: string;
  creator?: string | undefined;
  image?: TwitterImage | undefined;
};

/**
 * Represents a Twitter image.
 *
 * @typedef {Object} TwitterImage
 * @property {string} url - The URL of the image.
 * @property {string} alt - A text description of the image conveying the essential nature of an image.
 */
export type TwitterImage = {
  url: string;
  alt: string;
};

export type TwitterCardType = 'summary' | 'summary_large_image';
