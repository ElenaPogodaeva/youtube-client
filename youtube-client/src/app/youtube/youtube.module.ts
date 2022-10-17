import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FilterCriteriaComponent } from './components/filter-criteria/filter-criteria.component';
import { SharedModule } from '../shared/shared.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    FilterCriteriaComponent,
    SearchPageComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule, SharedModule],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    FilterCriteriaComponent,
    SearchPageComponent,
  ],
})
export class YoutubeModule {}
