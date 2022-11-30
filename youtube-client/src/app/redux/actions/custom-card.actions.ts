import { createAction, props } from '@ngrx/store';
import { CardModel } from 'src/app/shared/models/card-model';

export const addCustomCard = createAction('[Admin] Add Custom Card',
props<{customCard: CardModel}>());
