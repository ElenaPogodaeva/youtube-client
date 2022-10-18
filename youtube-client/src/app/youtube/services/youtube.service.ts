import { Injectable } from '@angular/core';
import { SearchItemModel } from '../../shared/models/search-item.model';
import { responseMock } from '../../shared/mocks/response.mock';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  searchItems: SearchItemModel[] = [];

  filterState: boolean = false;

  searchTerm: string = '';

  sortField: string = '';

  sortReverse: boolean = false;

  getItems(): SearchItemModel[] {
    return responseMock.items;
  }

  setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  search() {
    if (this.searchTerm) {
      this.searchItems = responseMock.items;
    }
  }

  setSortOptions(sortField: string, sortReverse: boolean) {
    this.sortField = sortField;
    this.sortReverse = sortReverse;
  }

  toggleFilters() {
    this.filterState = !this.filterState;
  }
}
