/**
 * Represents Open Graph metadata for a webpage
 */
export type OpenGraphMetadata = {
  /**
   * The title of the object
   * @meta og:title
   * @example <meta property="og:title" content="The Rock" />
   */
  title: string;

  /**
   * The type of the object (e.g., website, article)
   * @default website
   * @meta og:type
   * @example <meta property="og:type" content="website" />
   */
  type?: OpenGraphObjectType | undefined;

  /**
   * The canonical URL of the object
   * @default The current url without the query params
   * @meta og:url
   * @example <meta property="og:url" content="https://www.example.com/" />
   */
  canonicalUrl?: string | undefined;

  /**
   * A description of the object
   * @meta og:description
   * @example <meta property="og:description" content="A description of the page" />
   */
  description?: string | undefined;

  /**
   * The word that appears before the object's title (e.g., "the" in "the movie")
   * @meta og:determiner
   * @example <meta property="og:determiner" content="the" />
   */
  determiner?: string | undefined;

  /**
   * If your object is part of a larger web site, the name which should be displayed for the overall site.
   * @meta og:site_name
   * @example <meta property="og:site_name" content="IMDb" />
   */
  siteName?: string | undefined;

  /**
   * The locale of the resource (e.g., en_US)
   * @meta og:locale
   * @example <meta property="og:locale" content="en_US" />
   */
  locale?: string | undefined;

  /**
   * Array of other locales this page is available in
   * @meta og:locale:alternate
   * @example <meta property="og:locale:alternate" content="fr_FR" />
   */
  alternateLocale?: string[] | undefined;

  /**
   * The image that represents the object
   * @meta og:image and related image properties
   */
  image?: OpenGraphImage | undefined;

  /**
   * Audio file that complements the object
   * @meta og:audio and related audio properties
   */
  audio?: OpenGraphAudio | undefined;

  /**
   * Video file that complements the object
   * @meta og:video and related video properties
   */
  video?: OpenGraphVideo | undefined;

  /**
   * Additional properties based on the object type
   */
  typeProperties?: OpenGraphTypeProperties | undefined;
};

/**
 * Properties specific to article type objects
 */
export type OpenGraphTypeProperties = OpenGraphArticle;

/**
 * Represents an Open Graph image object
 */
export type OpenGraphImage = {
  /**
   * URL of the image
   * @meta og:image
   * @example <meta property="og:image" content="https://example.com/image.jpg" />
   */
  url: string;

  /**
   * Secure HTTPS URL of the image
   * @meta og:image:secure_url
   * @example <meta property="og:image:secure_url" content="https://secure.example.com/image.jpg" />
   */
  secureUrl?: string | undefined;

  /**
   * A description of what is in the image
   * @meta og:image:alt
   * @example <meta property="og:image:alt" content="A description of what is in the image" />
   */
  alt: string;

  /**
   * The MIME type of the image
   * @meta og:image:type
   * @example <meta property="og:image:type" content="image/jpeg" />
   */
  type: OpenGraphImageType;

  /**
   * The width of the image in pixels
   * @meta og:image:width
   * @example <meta property="og:image:width" content="1200" />
   */
  width?: number | undefined;

  /**
   * The height of the image in pixels
   * @meta og:image:height
   * @example <meta property="og:image:height" content="630" />
   */
  height?: number | undefined;
};

/**
 * Represents an Open Graph audio object
 */
export type OpenGraphAudio = {
  /**
   * URL of the audio file
   * @meta og:audio
   * @example <meta property="og:audio" content="https://example.com/audio.mp3" />
   */
  url: string;

  /**
   * Secure HTTPS URL of the audio file
   * @meta og:audio:secure_url
   * @example <meta property="og:audio:secure_url" content="https://secure.example.com/audio.mp3" />
   */
  secureUrl?: string | undefined;

  /**
   * The MIME type of the audio file
   * @meta og:audio:type
   * @example <meta property="og:audio:type" content="audio/mpeg" />
   */
  type: OpenGraphAudioType;
};

/**
 * Represents an Open Graph video object
 */
export type OpenGraphVideo = {
  /**
   * URL of the video file
   * @meta og:video
   * @example <meta property="og:video" content="https://example.com/video.mp4" />
   */
  url: string;

  /**
   * Secure HTTPS URL of the video file
   * @meta og:video:secure_url
   * @example <meta property="og:video:secure_url" content="https://secure.example.com/video.mp4" />
   */
  secureUrl?: string | undefined;

  /**
   * The MIME type of the video file
   * @meta og:video:type
   * @example <meta property="og:video:type" content="video/mp4" />
   */
  type: OpenGraphVideoType;

  /**
   * The width of the video in pixels
   * @meta og:video:width
   * @example <meta property="og:video:width" content="1280" />
   */
  width?: number | undefined;

  /**
   * The height of the video in pixels
   * @meta og:video:height
   * @example <meta property="og:video:height" content="720" />
   */
  height?: number | undefined;
};

/**
 * Represents Open Graph article specific properties
 */
export type OpenGraphArticle = {
  /**
   * When the article was first published
   * @meta article:published_time
   * @example <meta property="article:published_time" content="2023-12-25" />
   */
  publishedTime: string;

  /**
   * When the article was last modified
   * @meta article:modified_time
   * @example <meta property="article:modified_time" content="2023-12-26" />
   */
  modifiedTime?: string | undefined;

  /**
   * When the article is out of date
   * @meta article:expiration_time
   * @example <meta property="article:expiration_time" content="2024-12-25" />
   */
  expirationTime?: string | undefined;

  /**
   * Writers of the article
   * @meta article:author
   * @example <meta property="article:author" content="John Doe" />
   */
  authors: string[];

  /**
   * Keywords for the article
   * @meta article:tag
   * @example <meta property="article:tag" content="technology" />
   */
  tags: string[];

  /**
   * A high-level section name
   * @meta article:section
   * @example <meta property="article:section" content="Technology" />
   */
  section?: string | undefined;
};

/**
 * Open Graph object types
 * @meta og:type
 */
export type OpenGraphObjectType = 'website' | 'article';

/**
 * Open Graph image MIME types
 * @meta og:image:type
 */
export type OpenGraphImageType = 'jpeg' | 'png' | 'gif' | 'webp';

/**
 * Open Graph video MIME types
 * @meta og:video:type
 */
export type OpenGraphVideoType = 'mp4' | 'AV1' | 'H264' | 'mpeg';

/**
 * Open Graph audio MIME types
 * @meta og:audio:type
 */
export type OpenGraphAudioType = 'aac' | 'mp4' | 'mpeg' | 'ogg';
