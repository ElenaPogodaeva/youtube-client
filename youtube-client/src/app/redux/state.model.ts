import { CardModel } from "../shared/models/card-model"
import { VideoItemModel } from "../shared/models/video-item.model";

export interface CustomCardState {
  customCards: CardModel[];
}

export interface YoutubeCardState {
  youtubeCards: VideoItemModel[];
}

export interface AppState {
  customCards: CustomCardState;
  youtubeCards: YoutubeCardState;
}
