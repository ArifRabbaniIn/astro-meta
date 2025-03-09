/**
 * Open Graph Image Metadata
 */
export type OpenGraphImage = {
  /**
   * The URL of the image representing the object.
   *
   * @example `<meta property="og:image" content="https://example.com/image.jpg">`
   */
  url: string;

  /**
   * An alternate URL to use if the webpage requires HTTPS.
   *
   * @example `<meta property="og:image:secure_url" content="https://secure.example.com/image.jpg">`
   */
  secureUrl?: string;

  /**
   * The MIME type of the image.
   *
   * @example `<meta property="og:image:type" content="image/jpeg">`
   */
  type?: string;

  /**
   * The width of the image in pixels.
   *
   * @example `<meta property="og:image:width" content="1200">`
   */
  width?: number;

  /**
   * The height of the image in pixels.
   *
   * @example `<meta property="og:image:height" content="630">`
   */
  height?: number;

  /**
   * A description of what is in the image.
   *
   * @example `<meta property="og:image:alt" content="A beautiful sunset over the ocean.">`
   */
  alt?: string;
};
