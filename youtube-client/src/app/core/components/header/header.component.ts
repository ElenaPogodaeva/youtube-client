import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import type { AfterViewInit, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  searchTerm: string = '';

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

  ngAfterViewInit() {
    fromEvent(this.inputElement.nativeElement, 'input')
      .pipe(
        map((e: Event) => {
          return (e.target as HTMLInputElement).value;
        }),
        distinctUntilChanged(),
        filter((value: string) => value.length > 3),
        debounceTime(500),
      )
      .subscribe((value) => {
        this.youtubeService.fetchVideos(value);
      });
  }
}
