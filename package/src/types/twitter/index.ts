import type { TwitterAppCard } from './twitter-app-card';
import type { TwitterPlayerCard } from './twitter-player-card';
import type { TwitterSummaryCard } from './twitter-summary-card';
import type { TwitterSummaryLargeImageCard } from './twitter-summary-large-image-card';

/**
 * Twitter Meta Tags.
 */
export type TwitterMetaTags =
  | TwitterSummaryCard
  | TwitterSummaryLargeImageCard
  | TwitterAppCard
  | TwitterPlayerCard;

export type TwitterCardType =
  | 'summary'
  | 'summary_large_image'
  | 'app'
  | 'player';
