import type { TwitterAppCard } from './TwitterAppCardCard';
import type { TwitterPlayerCard } from './TwitterPlayerCard';
import type { TwitterSummaryCard } from './TwitterSummaryCard';
import type { TwitterSummaryLargeImageCard } from './TwitterSummaryLargeImageCard';

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
