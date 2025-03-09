import type { OpenGraphImage } from './image';
import type { OpenGraphType } from './object-type';

/**
 * Open Graph Basic Metadata
 */
export type OpenGraphBase = {
  /**
   * The title of the object as it should appear in the graph.
   *
   * @example `<meta property="og:title" content="The Rock">`
   */
  title: string;

  /**
   * The type of object (e.g., website, article, book, etc.).
   *
   * @example `<meta property="og:type" content="video.movie">`
   */
  type: OpenGraphType;

  /**
   * The canonical URL of the object.
   *
   * @example `<meta property="og:url" content="https://www.imdb.com/title/tt0117500/">`
   */
  url: string;

  /**
   * The image representing the object. og:image and related image properties
   *
   * @example `<meta property="og:image" content="https://example.com/rock.jpg">`
   */
  image: OpenGraphImage[];

  /**
   * A brief description of the object (up to 300 characters).
   *
   * @example `<meta property="og:description" content="A thrilling action movie starring The Rock.">`
   */
  description?: string;

  /**
   * The name of the website that published the object.
   *
   * @example `<meta property="og:site_name" content="IMDb">`
   */
  siteName?: string;

  /**
   * The locale of the object.
   * Format: `language_TERRITORY`. Default is `en_US`.
   *
   * @example `<meta property="og:locale" content="en_US">`
   */
  locale?: string;

  /**
   * An array of other locales this page is available in.
   *
   * @example `<meta property="og:locale:alternate" content="fr_FR">`
   */
  alternateLocales?: string[];

  /**
   * A URL to an audio file to accompany this object.
   *
   * @example `<meta property="og:audio" content="https://example.com/audio.mp3">`
   */
  audio?: string;

  /**
   * The word that appears before this object's title in a sentence.
   * Can be one of: `"a"`, `"an"`, `"the"`, `""` (blank), `"auto"`.
   * If `"auto"` is chosen, the consumer of the data should determine `"a"` or `"an"`.
   *
   * @example `<meta property="og:determiner" content="the">`
   */
  determiner?: 'a' | 'an' | 'the' | '' | 'auto';

  /**
   * A URL to a video file that complements this object.
   *
   * @example `<meta property="og:video" content="https://example.com/video.mp4">`
   */
  video?: string;
};
