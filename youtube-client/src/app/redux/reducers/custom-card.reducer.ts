import { createReducer, on } from '@ngrx/store';
import { addCustomCard } from '../actions/custom-card.actions';
import { CustomCardState } from '../state.model';

export const initialState: CustomCardState = {
  customCards: [],
};

export const cardsReducer = createReducer(
  initialState,
  on(addCustomCard, (state, { customCard}): CustomCardState => ({
    ...state,
    customCards: [...state.customCards, customCard]
  })),
);
