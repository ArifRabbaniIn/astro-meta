/**
 * Represents OpenGraph metadata.
 *
 * @typedef {Object} OpenGraphMetadata
 * @property {string} title - The title of your object as it should appear within the graph, e.g., "The Rock".
 * @property {OpenGraphObjectType} [type] - The type of your object (default: website).
 * @property {string} [canonicalUrl] - The canonical URL of your object that will be used as its permanent ID in the graph (default: current URL without the query params).
 * @property {string} [description] - A short description of the page.
 * @property {string} [determiner] - The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto). If auto is chosen, the consumer of your data should chose between "a" or "an". (default: "" (blank)).
 * @property {string} [siteName] - If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
 * @property {string} [locale] -  The locale these tags are marked up in. Of the format language_TERRITORY. (default: "en_US").
 * @property {string[]} [alternateLocale] - An array of other locales this page is available in.
 * @property {OpenGraphImage} [image] - The image associated with the page.
 * @property {OpenGraphAudio} [audio] - The audio associated with the page.
 * @property {OpenGraphVideo} [video] - The video associated with the page.
 * @property {OpenGraphTypeProperties} [typeProperties] - The extra properties related to the object type.
 */
export type OpenGraphMetadata = {
  title: string;
  type?: OpenGraphObjectType | undefined;
  canonicalUrl?: string | undefined;
  description?: string | undefined;
  determiner?: string | undefined;
  siteName?: string | undefined;
  locale?: string | undefined;
  alternateLocale?: string[] | undefined;
  image?: OpenGraphImage | undefined;
  audio?: OpenGraphAudio | undefined;
  video?: OpenGraphVideo | undefined;
  typeProperties?: OpenGraphTypeProperties | undefined;
};

export type OpenGraphTypeProperties = OpenGraphArticle;

/**
 * Represents an OpenGraph image.
 *
 * @typedef {Object} OpenGraphImage
 * @property {string} url - The URL of the image.
 * @property {string} [secureUrl] - An alternate URL to use if the webpage requires HTTPS.
 * @property {string} alt - A description of what is in the image (not a caption).
 * @property {OpenGraphImageType} type - The type of the image (e.g. jpeg, png).
 * @property {number} [width] - The width of the image in pixels.
 * @property {number} [height] - The height of the image in pixels.
 */
export type OpenGraphImage = {
  url: string;
  secureUrl?: string | undefined;
  alt: string;
  type: OpenGraphImageType;
  width?: number | undefined;
  height?: number | undefined;
};

/**
 * Represents an OpenGraph audio file.
 *
 * @typedef {Object} OpenGraphAudio
 * @property {string} url - The URL of the audio file.
 * @property {string} [secureUrl] - An alternate URL to use if the webpage requires HTTPS.
 * @property {OpenGraphAudioType} type - The type of the audio file (e.g. aac, mp4, mpeg, ogg).
 */
export type OpenGraphAudio = {
  url: string;
  secureUrl?: string | undefined;
  type: OpenGraphAudioType;
};

/**
 * Represents an OpenGraph video file.
 *
 * @typedef {Object} OpenGraphVideo
 * @property {string} url - The URL of the video file.
 * @property {string} [secureUrl] - An alternate URL to use if the webpage requires HTTPS.
 * @property {OpenGraphVideoType} type - The type of the video file (e.g. mp4, AV1, H264, mpeg).
 * @property {number} [width] - The width of the video in pixels.
 * @property {number} [height] - The height of the video in pixels.
 */
export type OpenGraphVideo = {
  url: string;
  secureUrl?: string | undefined;
  type: OpenGraphVideoType;
  width?: number | undefined;
  height?: number | undefined;
};

/**
 * Represents an OpenGraph article.
 *
 * @typedef {Object} OpenGraphArticle
 * @property {string} publishedTime - The publication time of the article (ISO Date String).
 * @property {string} [modifiedTime] - The last modification time of the article (ISO Date String).
 * @property {string} [expirationTime] - The expiration time of the article (ISO Date String).
 * @property {string[]} authors - The authors of the article.
 * @property {string[]} tags -  Tags associated with this article.
 * @property {string} [section] - A high-level section name, E.g. Technology.
 */
export type OpenGraphArticle = {
  publishedTime: string;
  modifiedTime?: string | undefined;
  expirationTime?: string | undefined;
  authors: string[];
  tags: string[];
  section?: string | undefined;
};

export type OpenGraphObjectType = 'website' | 'article';

export type OpenGraphImageType = 'jpeg' | 'png' | 'gif' | 'webp';

export type OpenGraphVideoType = 'mp4' | 'AV1' | 'H264' | 'mpeg';

export type OpenGraphAudioType = 'aac' | 'mp4' | 'mpeg' | 'ogg';
