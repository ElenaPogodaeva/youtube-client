import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomCardState } from "../state.model";

export const selectCustomCardsState = createFeatureSelector<CustomCardState>('customCards');

export const selectCustomCards = createSelector(
  selectCustomCardsState,
  (state: CustomCardState) => state.customCards
);
