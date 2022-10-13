import { Component, Input } from '@angular/core';
import type { OnChanges } from '@angular/core';
import { SearchResponseModel } from '../../models/search-response.model';
import { SearchItemModel } from '../../models/search-item.model';
import { responseMock } from '../../mocks/response.mock';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnChanges {
  response: SearchResponseModel = responseMock;

  items: SearchItemModel[] = [];

  @Input() searchTerm: string = '';

  ngOnChanges() {
    if (this.searchTerm) this.items = responseMock.items;
  }
}
