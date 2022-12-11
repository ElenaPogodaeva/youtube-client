import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoItemModel } from '../../../../app/shared/models/video-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  selectedItem?: VideoItemModel | null;

  constructor(private router: Router, private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    const id = this.router.url.replace('/search/', '');
    this.youtubeService.detailedVideo$.subscribe((data) => (this.selectedItem = data));
    this.getVideo(id);
  }

  getVideo(itemId: string) {
    this.youtubeService.fetchVideoById(itemId);
  }

  onBack() {
    this.router.navigate(['/', 'search']);
  }
}
