import { Component, Input } from '@angular/core';
import { VideoItemModel } from 'src/app/shared/models/video-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() items: VideoItemModel[] = [];

  @Input() searchTerm: string = '';

  @Input() sortField: string = '';

  @Input() sortReverse: boolean = false;
}
