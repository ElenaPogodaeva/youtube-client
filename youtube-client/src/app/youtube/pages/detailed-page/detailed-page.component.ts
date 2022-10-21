import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItemModel } from 'src/app/shared/models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss']
})
export class DetailedPageComponent implements OnInit {

  selectedItem = this.youtubeService.selectedItem;

  constructor(private router: Router, private youtubeService: YoutubeService) { }

  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['/', 'youtube']);
  }
}
