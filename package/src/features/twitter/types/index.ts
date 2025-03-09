import type { TwitterAppCard } from './app-card';
import type { TwitterPlayerCard } from './player-card';
import type { TwitterSummaryCard } from './summary-card';
import type { TwitterSummaryLargeImageCard } from './summary-large-image-card';

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
