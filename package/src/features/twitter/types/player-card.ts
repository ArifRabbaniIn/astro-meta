/**
 * Twitter Player Card.
 */
export type TwitterPlayerCard = {
  /**
   * The card type.
   *
   * @example <meta name="twitter:card" content="player">
   */
  type: 'player';

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
   * The title of the content. Maximum 70 characters.
   *
   * @example <meta name="twitter:title" content="Watch This Video">
   */
  title: string;

  /**
   * A brief description of the content. Maximum 200 characters.
   *
   * @example <meta name="twitter:description" content="Learn how to add Twitter Card metadata to your website.">
   */
  description?: string;

  /**
   * A fallback image for the player card.  You should make this image the same dimensions as your player. JPG, PNG, WEBP and GIF formats are supported.
   *
   * @example <meta name="twitter:image" content="https://example.com/player-thumbnail.jpg">
   */
  image: string;

  /**
   * Alt text describing the image. Maximum 420 characters.
   *
   * @example <meta name="twitter:image:alt" content="Thumbnail image of the video content">
   */
  imageAlt?: string;

  /**
   * The URL of the video player.
   *
   * @example <meta name="twitter:player" content="https://example.com/player.html">
   */
  player: string;

  /**
   * The width of the video player (in pixels).
   *
   * @example <meta name="twitter:player:width" content="640">
   */
  playerWidth: number;

  /**
   * The height of the video player (in pixels).
   *
   * @example <meta name="twitter:player:height" content="360">
   */
  playerHeight: number;

  /**
   * The stream URL for the video player.
   *
   * @example <meta name="twitter:player:stream" content="https://example.com/video.mp4">
   */
  playerStream?: string;
};
