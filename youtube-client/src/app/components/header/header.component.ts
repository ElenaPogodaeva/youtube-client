import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchTerm: string = '';

  @Output() search = new EventEmitter<string>();

  @Input() isOpen!: boolean;

  @Output() isOpenChange = new EventEmitter<boolean>();

  searchVideos() {
    if (this.searchTerm) {
      this.search.emit(this.searchTerm);
    }
  }

  toggleFilters() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
