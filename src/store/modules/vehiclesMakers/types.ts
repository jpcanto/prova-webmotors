import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type VehiclesMakersAction = ActionType<typeof actions>

export interface VehiclesMakersState {
  readonly ID?: number,
  readonly loading: boolean,
  readonly Name?: string,
}
