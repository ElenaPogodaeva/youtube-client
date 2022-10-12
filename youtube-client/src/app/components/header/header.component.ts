import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchTerm: string = '';

  @Output() search = new EventEmitter<string>();

  searchVideos() {
    if (this.searchTerm) {
      this.search.emit(this.searchTerm);
    }
  }
}
