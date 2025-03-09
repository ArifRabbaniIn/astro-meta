import type { TwitterAppCard } from './app-card';
import type { TwitterPlayerCard } from './player-card';
import type { TwitterSummaryCard } from './summary-card';
import type { TwitterSummaryLargeImageCard } from './summary-large-image-card';

/**
 * Twitter Meta Tags.
 */
export type TwitterCard =
  | TwitterSummaryCard
  | TwitterSummaryLargeImageCard
  | TwitterAppCard
  | TwitterPlayerCard;
