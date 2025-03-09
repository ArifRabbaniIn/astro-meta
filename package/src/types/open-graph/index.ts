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
   * The type of object (e.g., website, article, video, music, etc.).
   *
   * @example `<meta property="og:type" content="video.movie">`
   */
  type: OpenGraphType;

  /**
   * The URL of the object (canonical URL that Facebook should use).
   *
   * @example `<meta property="og:url" content="https://www.imdb.com/title/tt0117500/">`
   */
  url: string;

  /**
   * The image URL representing the object.
   *
   * @example `<meta property="og:image" content="https://example.com/rock.jpg">`
   */
  image: string;

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
   * The locale of the object (language-region format).
   *
   * @example `<meta property="og:locale" content="en_US">`
   */
  locale?: string;
};

/**
 * Open Graph Type Categories
 */
export type OpenGraphType =
  | 'website'
  | 'article'
  | 'book'
  | 'profile'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other';

/**
 * Open Graph Metadata for Websites
 */
export type OpenGraphWebsite = OpenGraphBase & {
  type: 'website';
};

/**
 * Open Graph Metadata for Articles
 */
export type OpenGraphArticle = OpenGraphBase & {
  type: 'article';

  /**
   * The date when the article was published.
   *
   * @example `<meta property="article:published_time" content="2024-03-01T12:00:00Z">`
   */
  publishedTime?: string;

  /**
   * The date when the article was last modified.
   *
   * @example `<meta property="article:modified_time" content="2024-03-05T12:00:00Z">`
   */
  modifiedTime?: string;

  /**
   * The date when the article will expire.
   *
   * @example `<meta property="article:expiration_time" content="2025-01-01T00:00:00Z">`
   */
  expirationTime?: string;

  /**
   * The author(s) of the article.
   *
   * @example `<meta property="article:author" content="https://example.com/authors/john-doe">`
   */
  authors?: string[];

  /**
   * The primary section of the article.
   *
   * @example `<meta property="article:section" content="Technology">`
   */
  section?: string;

  /**
   * The tags associated with the article.
   *
   * @example `<meta property="article:tag" content="AI, Machine Learning">`
   */
  tags?: string[];
};

/**
 * Open Graph Metadata for Books
 */
export type OpenGraphBook = OpenGraphBase & {
  type: 'book';

  /**
   * The author(s) of the book.
   *
   * @example `<meta property="book:author" content="https://example.com/authors/jk-rowling">`
   */
  authors?: string[];

  /**
   * The International Standard Book Number (ISBN).
   *
   * @example `<meta property="book:isbn" content="978-3-16-148410-0">`
   */
  isbn?: string;

  /**
   * The date the book was released.
   *
   * @example `<meta property="book:release_date" content="1997-06-26">`
   */
  releaseDate?: string;

  /**
   * The tags related to the book.
   *
   * @example `<meta property="book:tag" content="Fantasy, Magic, Adventure">`
   */
  tags?: string[];
};

/**
 * Open Graph Metadata for Profiles (People)
 */
export type OpenGraphProfile = OpenGraphBase & {
  type: 'profile';

  /**
   * The person’s first name.
   *
   * @example `<meta property="profile:first_name" content="John">`
   */
  firstName?: string;

  /**
   * The person’s last name.
   *
   * @example `<meta property="profile:last_name" content="Doe">`
   */
  lastName?: string;

  /**
   * The person’s full name.
   *
   * @example `<meta property="profile:username" content="johndoe">`
   */
  username?: string;

  /**
   * The person’s gender.
   *
   * @example `<meta property="profile:gender" content="male">`
   */
  gender?: 'male' | 'female' | 'non-binary' | 'other';
};

/**
 * Open Graph Metadata for Videos
 */
export type OpenGraphVideo = OpenGraphBase & {
  type: 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';

  /**
   * The duration of the video in seconds.
   *
   * @example `<meta property="video:duration" content="1200">`
   */
  duration?: string;

  /**
   * The actors in the video.
   *
   * @example `<meta property="video:actor" content="https://example.com/actors/tom-cruise">`
   */
  actors?: string[];

  /**
   * The director(s) of the video.
   *
   * @example `<meta property="video:director" content="https://example.com/directors/steven-spielberg">`
   */
  directors?: string[];

  /**
   * The writer(s) of the video.
   *
   * @example `<meta property="video:writer" content="https://example.com/writers/christopher-nolan">`
   */
  writers?: string[];

  /**
   * The release date of the video.
   *
   * @example `<meta property="video:release_date" content="2023-11-15">`
   */
  releaseDate?: string;
};

/**
 * Open Graph Metadata for Music
 */
export type OpenGraphMusic = OpenGraphBase & {
  type: 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station';

  /**
   * The duration of the music in seconds.
   *
   * @example `<meta property="music:duration" content="240">`
   */
  duration?: string;

  /**
   * The musician(s) who created the track.
   *
   * @example `<meta property="music:musician" content="https://example.com/artists/taylor-swift">`
   */
  musicians?: string[];

  /**
   * The album where the song appears.
   *
   * @example `<meta property="music:album" content="https://example.com/albums/evermore">`
   */
  album?: string;
};

/**
 * Discriminated Union for All Open Graph Types
 */
export type OpenGraphMeta =
  | OpenGraphWebsite
  | OpenGraphArticle
  | OpenGraphBook
  | OpenGraphProfile
  | OpenGraphVideo
  | OpenGraphMusic;
