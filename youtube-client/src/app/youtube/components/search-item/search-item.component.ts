import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItemModel } from '../../../shared/models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() item?: SearchItemModel;

  constructor(private router: Router, private youtubeService: YoutubeService) {}

  onSelect(item: SearchItemModel) {
    this.youtubeService.selectItem(item.id);
    this.router.navigate(['/', 'youtube', item.id]);
  }
}
