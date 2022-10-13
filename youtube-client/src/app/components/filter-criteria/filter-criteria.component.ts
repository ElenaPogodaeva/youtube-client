import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-criteria',
  templateUrl: './filter-criteria.component.html',
  styleUrls: ['./filter-criteria.component.scss'],
})
export class FilterCriteriaComponent {
  @Input() isOpen!: boolean;
}
