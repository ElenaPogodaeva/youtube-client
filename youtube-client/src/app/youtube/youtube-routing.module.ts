import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
  },
  {
    path: ':id',
    component: DetailedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
