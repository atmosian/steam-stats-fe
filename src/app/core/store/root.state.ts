import { RouterReducerState } from '@ngrx/router-store';

export interface IRootState {
  router?: RouterReducerState;
}

export const initialRootState: IRootState = {
};

export function getInitialState(): IRootState {
  return initialRootState;
}
