import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  searchTerm = '';

  filterState: boolean = false;

  sortField = '';

  sortReverse: boolean = false;

  search(str: string) {
    this.searchTerm = str;
  }

  sorting({ sortField, sortReverse }: { sortField: string; sortReverse: boolean }) {
    this.sortField = sortField;
    this.sortReverse = sortReverse;
  }
}
