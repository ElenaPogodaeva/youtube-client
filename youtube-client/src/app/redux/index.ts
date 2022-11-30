import { ActionReducerMap } from "@ngrx/store";
import { cardsReducer } from "./reducers/custom-card.reducer";
import { youtubeReducer } from "./reducers/youtube-card.reducer";
import { AppState } from "./state.model";

export const reducers: ActionReducerMap<AppState> = {
  customCards: cardsReducer,
  youtubeCards: youtubeReducer,
};
