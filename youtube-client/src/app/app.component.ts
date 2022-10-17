import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  searchTerm = '';

  filterState: boolean = false;

  search(str: string) {
    this.searchTerm = str;
  }

  filterByWord(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
  }
}
