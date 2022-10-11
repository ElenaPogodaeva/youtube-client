import { Component } from '@angular/core';
import { SearchResponseModel } from '../../models/search-response.model';
import { SearchItemModel } from '../../models/search-item.model';
import { responseMock } from '../../mocks/response.mock';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  response: SearchResponseModel = responseMock;

  items: SearchItemModel[] = responseMock.items;
}
