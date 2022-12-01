import { createFeatureSelector, createSelector } from "@ngrx/store";
import { YoutubeCardState } from "../state.model";

export const selectYoutubeCardsState = createFeatureSelector<YoutubeCardState>('youtubeCards');

export const selectYoutubeCards = createSelector(
  selectYoutubeCardsState,
  (state: YoutubeCardState) => state.youtubeCards
);
