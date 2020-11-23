import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type FiltersAction = ActionType<typeof actions>

export interface FiltersState {
  readonly make?: string | null;
  readonly model?: string | null;
  readonly version?: string | null;
}
