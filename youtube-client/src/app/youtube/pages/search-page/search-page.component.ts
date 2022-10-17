import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  @Input() isOpen!: boolean;

  @Input() searchTerm!: string;

  sortField = '';

  sortReverse: boolean = false;

  @Output() filterByWord = new EventEmitter<Event>();

  sorting({ sortField, sortReverse }: { sortField: string; sortReverse: boolean }) {
    this.sortField = sortField;
    this.sortReverse = sortReverse;
  }
}
