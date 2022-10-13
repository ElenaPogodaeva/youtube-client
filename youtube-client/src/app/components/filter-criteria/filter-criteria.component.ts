import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-criteria',
  templateUrl: './filter-criteria.component.html',
  styleUrls: ['./filter-criteria.component.scss'],
})
export class FilterCriteriaComponent implements OnInit {
  @Input() isOpen!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
