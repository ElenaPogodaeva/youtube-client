import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import type { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchStr: string = '';

  isAuth$!: Observable<boolean>;

  @ViewChild('input') inputElement!: ElementRef<HTMLInputElement>;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private youtubeService: YoutubeService, private authService: AuthService) {}

  ngOnInit() {
    this.isAuth$ = this.authService.getAuth();
  }

  toggleFilters() {
    this.youtubeService.toggleFilters();
  }

  logout() {
    this.authService.logout();
  }

  onInput() {
    this.youtubeService.updateSearchTerm(this.searchStr);
  }
}
