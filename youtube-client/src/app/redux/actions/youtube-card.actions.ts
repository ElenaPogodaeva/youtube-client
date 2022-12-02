import { createAction, props } from '@ngrx/store';
import { VideoItemModel } from '../../../app/shared/models/video-item.model';

export const addYoutubeCards = createAction(
  '[Youtube] Add Youtube Card',
  props<{ youtubeCards: VideoItemModel[] }>(),
);
