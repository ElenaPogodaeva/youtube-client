import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FilterCriteriaComponent } from './components/filter-criteria/filter-criteria.component';
import { SharedModule } from '../shared/shared.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    FilterCriteriaComponent,
    SearchPageComponent,
    DetailedPageComponent,
    CardFormComponent,
    AdminPageComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule, SharedModule, ReactiveFormsModule],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    FilterCriteriaComponent,
    SearchPageComponent,
    DetailedPageComponent,
    AdminPageComponent,
  ],
})
export class YoutubeModule {}
