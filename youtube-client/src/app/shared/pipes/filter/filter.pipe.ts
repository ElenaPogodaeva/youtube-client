import { Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';
import { VideoItemModel } from '../../models/video-item.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: VideoItemModel[], searchTerm: string): VideoItemModel[] {
    if (!value || !value.length || !searchTerm) return value;

    return value.filter((item) =>
      item.snippet.title.toLowerCase().includes(searchTerm.toString().toLowerCase()),
    );
  }
}
