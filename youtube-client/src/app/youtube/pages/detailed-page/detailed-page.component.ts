import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent {
  selectedItem = this.youtubeService.selectedItem;

  constructor(private router: Router, private youtubeService: YoutubeService) {}

  onBack() {
    this.router.navigate(['/', 'youtube']);
  }
}
