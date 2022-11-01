import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoItemModel } from '../../../../app/shared/models/video-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() item?: VideoItemModel;

  constructor(private router: Router, private youtubeService: YoutubeService) {}

  onSelect(item: VideoItemModel) {
    this.youtubeService.selectItem(item.id);
    this.router.navigate(['/', 'search', item.id]);
  }
}
