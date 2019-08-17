import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { IRootState } from './root.state';

export const rootReducers: ActionReducerMap<IRootState, any> = {
  router: routerReducer
};
