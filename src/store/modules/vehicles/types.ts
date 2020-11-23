import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type VehiclesAction = ActionType<typeof actions>

export interface VehiclesState {
  readonly error: boolean,
  readonly loading: boolean,
  readonly vehicles: any
}

