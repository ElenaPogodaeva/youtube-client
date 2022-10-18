import { Component } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchTerm: string = '';

  constructor(private youtubeService: YoutubeService) {}

  searchVideos() {
    this.youtubeService.setSearchTerm(this.searchTerm);

    this.youtubeService.search();
  }

  toggleFilters() {
    this.youtubeService.toggleFilters();
  }
}
