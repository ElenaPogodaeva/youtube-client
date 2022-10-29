import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { BorderColorDirective } from './directives/border-color/border-color.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [FilterPipe, SortPipe, BorderColorDirective],
  imports: [CommonModule, materialModules],
  exports: [FilterPipe, SortPipe, BorderColorDirective, materialModules],
})
export class SharedModule {}
