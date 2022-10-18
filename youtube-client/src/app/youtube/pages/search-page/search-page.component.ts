import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  constructor(private youtubeService: YoutubeService) {}

  getItems() {
    return this.youtubeService.searchItems;
  }

  getFilterState() {
    return this.youtubeService.filterState;
  }

  getSearchTerm() {
    return this.youtubeService.searchTerm;
  }

  getSortField() {
    return this.youtubeService.sortField;
  }

  getSortReverse() {
    return this.youtubeService.sortReverse;
  }

  sorting({ sortField, sortReverse }: { sortField: string; sortReverse: boolean }) {
    this.youtubeService.setSortOptions(sortField, sortReverse);
  }

  filterByWord(event: Event) {
    const target = event.target as HTMLInputElement;
    this.youtubeService.setSearchTerm(target.value);
  }
}
