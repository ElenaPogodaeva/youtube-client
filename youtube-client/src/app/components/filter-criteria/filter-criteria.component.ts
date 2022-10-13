import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-criteria',
  templateUrl: './filter-criteria.component.html',
  styleUrls: ['./filter-criteria.component.scss'],
})
export class FilterCriteriaComponent {
  @Input() isOpen!: boolean;

  sortField: string = '';

  sortReverse: boolean = false;

  @Output() sorting = new EventEmitter<{ sortField: string; sortReverse: boolean }>();

  sortBy(sortField: string) {
    this.sortReverse = this.sortField === sortField ? !this.sortReverse : false;
    this.sortField = sortField;
    this.sorting.emit({ sortField: this.sortField, sortReverse: this.sortReverse });
  }
}
