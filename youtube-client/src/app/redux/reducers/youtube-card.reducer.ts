import { createReducer, on } from '@ngrx/store';
import { addYoutubeCards } from '../actions/youtube-card.actions';
import { YoutubeCardState } from '../state.model';

export const initialState: YoutubeCardState = {
  youtubeCards: [],
};

export const youtubeReducer = createReducer(
  initialState,
  on(
    addYoutubeCards,
    (state, { youtubeCards }): YoutubeCardState => ({
      ...state,
      youtubeCards,
    }),
  ),
);
