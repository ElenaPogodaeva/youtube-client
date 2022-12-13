import { Component, Input } from '@angular/core';
import { CardModel } from '../../../../app/shared/models/card-model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() item?: CardModel;
}
