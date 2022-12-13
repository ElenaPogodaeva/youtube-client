import { Component, Input } from '@angular/core';
import type { OnInit } from '@angular/core';
import { VideoItemModel } from '../../../../app/shared/models/video-item.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectYoutubeCards } from '../../../../app/redux/selectors/youtube-cards.selector';
import { CardModel } from '../../../../app/shared/models/card-model';
import { selectCustomCards } from '../../../../app/redux/selectors/custom-cards.selector';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  videos$?: Observable<VideoItemModel[]>;

  cards$?: Observable<CardModel[]>;

  @Input() filterTerm: string = '';

  @Input() sortField: string = '';

  @Input() sortReverse: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.videos$ = this.store.select(selectYoutubeCards);
    this.cards$ = this.store.select(selectCustomCards);
  }
}
