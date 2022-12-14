import { createAction, props } from '@ngrx/store';

export const setSearchTerm = createAction(
  '[Search] Set Search Term',
  props<{ searchTerm: string }>(),
);
