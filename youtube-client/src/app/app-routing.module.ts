import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';
import { SearchPageComponent } from './youtube/pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: '',
    redirectTo: 'youtube',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   component: SearchPageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
