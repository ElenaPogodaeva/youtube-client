import { Component, Input } from '@angular/core';
import { SearchItemModel } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() items: SearchItemModel[] = [];

  @Input() searchTerm: string = '';

  @Input() sortField: string = '';

  @Input() sortReverse: boolean = false;
}
