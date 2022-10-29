import { Injectable } from '@angular/core';
import { SearchItemModel } from '../../shared/models/search-item.model';
import { map, switchMap } from 'rxjs';
import { ApiService } from '../../../app/core/services/api.service';
import { SearchResponseModel } from 'src/app/shared/models/search-response.model';
import { VideoItemModel } from 'src/app/shared/models/video-item.model';
import { VideoResponseModel } from 'src/app/shared/models/video-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  searchItems: SearchItemModel[] = [];

  videos: VideoItemModel[] = [];

  filterState: boolean = false;

  searchTerm: string = '';

  sortField: string = '';

  sortReverse: boolean = false;

  selectedItem: VideoItemModel | undefined;

  constructor(private apiService: ApiService) {}

  getVideos(): VideoItemModel[] {
    return this.videos;
  }

  fetchVideos(searchTerm: string) {
    this.apiService
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
      .subscribe((data) => (this.videos = data));
  }

  setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  search() {
    if (this.searchTerm) {
      //this.searchItems = responseMock.items;
    }
  }

  setSortOptions(sortField: string, sortReverse: boolean) {
    this.sortField = sortField;
    this.sortReverse = sortReverse;
  }

  toggleFilters() {
    this.filterState = !this.filterState;
  }

  selectItem(id: string) {
    this.selectedItem = this.videos.find((item) => item.id === id);
  }
}
