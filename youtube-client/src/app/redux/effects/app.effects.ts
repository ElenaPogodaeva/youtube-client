import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { YoutubeService } from '../../../app/youtube/services/youtube.service';
import { setSearchTerm } from '../actions/search.actions';
import { addYoutubeCards } from '../actions/youtube-card.actions';

@Injectable()
export class YoutubeCardsEffects {
  getVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setSearchTerm),
      switchMap(({ searchTerm }) => {
        return this.youtubeService
          .fetchVideos(searchTerm)
          .pipe(map((cards) => addYoutubeCards({ youtubeCards: cards })));
      }),
    );
  });

  constructor(private actions$: Actions, private youtubeService: YoutubeService) {}
}
