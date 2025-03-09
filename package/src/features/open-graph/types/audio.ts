/**
 * Open Graph Audio Metadata
 */
export type OpenGraphAudio = {
  /**
   * A URL to an audio file to accompany this object.
   *
   * @example `<meta property="og:audio" content="https://example.com/sound.mp3">`
   */
  url: string;

  /**
   * An alternate URL to use if the webpage requires HTTPS.
   *
   * @example `<meta property="og:audio:secure_url" content="https://secure.example.com/sound.mp3">`
   */
  secureUrl?: string | undefined;

  /**
   * The MIME type of the audio file.
   *
   * @example `<meta property="og:audio:type" content="audio/mpeg">`
   */
  type?: string | undefined;
};
