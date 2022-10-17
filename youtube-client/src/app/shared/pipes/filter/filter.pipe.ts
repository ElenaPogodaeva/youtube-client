import { Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';
import { SearchItemModel } from '../../models/search-item.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: SearchItemModel[], searchTerm: string): SearchItemModel[] {
    if (!value || !value.length || !searchTerm) return value;

    return value.filter((item) =>
      item.snippet.title.toLowerCase().includes(searchTerm.toString().toLowerCase()),
    );
  }
}
