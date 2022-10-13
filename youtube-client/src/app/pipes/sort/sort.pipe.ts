import { Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';
import { SearchItemModel } from '../../models/search-item.model';

function compare(a: number, b: number, reverse: boolean) {
  return (a < b ? -1 : 1) * (reverse ? 1 : -1);
}

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: SearchItemModel[], sortField: string, sortReverse: boolean): SearchItemModel[] {
    if (!value || !value.length || !sortField) return value;

    return value.sort((a, b) => {
      const aDate = new Date(a?.snippet?.publishedAt).getTime();
      const bDate = new Date(b?.snippet?.publishedAt).getTime();
      if (sortField === 'date') {
        return compare(aDate, bDate, sortReverse);
      }
      if (sortField === 'views') {
        const aViews = +a?.statistics?.viewCount;
        const bViews = +b?.statistics?.viewCount;
        return compare(aViews, bViews, sortReverse);
      }
      return 0;
    });
  }
}
