/**
 * Open Graph Video Metadata
 */
export type OpenGraphVideo = {
  /**
   * A URL to a video file that complements this object.
   *
   * @example <meta property="og:video" content="https://example.com/movie.mp4">
   */
  url: string;

  /**
   * An alternate URL to use if the webpage requires HTTPS.
   *
   * @example <meta property="og:video:secure_url" content="https://secure.example.com/movie.mp4">
   */
  secureUrl?: string | undefined;

  /**
   * The MIME type of the video file.
   *
   * @example <meta property="og:video:type" content="video/mp4">
   */
  type?: string | undefined;

  /**
   * The width of the video in pixels.
   *
   * @example <meta property="og:video:width" content="400">
   */
  width?: number | undefined;

  /**
   * The height of the video in pixels.
   *
   * @example <meta property="og:video:height" content="300">
   */
  height?: number | undefined;
};
