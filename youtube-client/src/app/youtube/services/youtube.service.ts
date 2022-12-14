import { Injectable } from '@angular/core';
import { SearchItemModel } from '../../shared/models/search-item.model';
import { BehaviorSubject, debounceTime, filter, map, Observable, switchMap } from 'rxjs';
import { ApiService } from '../../../app/core/services/api.service';
import { SearchResponseModel } from '../../../app/shared/models/search-response.model';
import { VideoItemModel } from '../../../app/shared/models/video-item.model';
import { VideoResponseModel } from '../../../app/shared/models/video-response.model';
import { Store } from '@ngrx/store';
import { addYoutubeCards } from '../../../app/redux/actions/youtube-card.actions';
import { setSearchTerm } from 'src/app/redux/actions/search.actions';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  videos$?: Observable<VideoItemModel[]>;

  searchTerm$ = new BehaviorSubject<string>('');

  detailedVideo$ = new BehaviorSubject<VideoItemModel | null>(null);

  filterState: boolean = false;

  filterTerm: string = '';

  sortField: string = '';

  sortReverse: boolean = false;

  constructor(private apiService: ApiService, private store: Store) {
    this.subscribeToSearchTerm();
  }

  fetchVideos(searchTerm: string) {
    return this.apiService
      .getVideosByWord(searchTerm)
      .pipe(
        map((response: SearchResponseModel) => response.items),
        switchMap((items: SearchItemModel[]) => {
          const ids = items.map((item) => item.id.videoId).join(',');
          return this.apiService
            .getVideosByIds(ids)
            .pipe(map((videoResponse: VideoResponseModel) => videoResponse.items));
        }),
      )
  }

  updateSearchTerm(str: string): void {
    this.searchTerm$.next(str);
  }

  subscribeToSearchTerm() {
    this.searchTerm$
      .pipe(
        filter((value) => value.length > 3),
        debounceTime(500),
      )
      .subscribe((value) => this.store.dispatch(setSearchTerm({ searchTerm: value })));
  }

  setFilterTerm(filterTerm: string) {
    this.filterTerm = filterTerm;
  }

  setSortOptions(sortField: string, sortReverse: boolean) {
    this.sortField = sortField;
    this.sortReverse = sortReverse;
  }

  toggleFilters() {
    this.filterState = !this.filterState;
  }

  fetchVideoById(id: string) {
    this.apiService
      .getVideosByIds(id)
      .pipe(map((response: VideoResponseModel) => response.items))
      .subscribe((data) => {
        const firstCard = data[0];
        this.detailedVideo$.next(firstCard);
      });
  }
}
