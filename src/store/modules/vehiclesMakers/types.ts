import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type VehiclesMakersAction = ActionType<typeof actions>

export interface VehiclesMakersState {
  readonly error: boolean,
  readonly loading: boolean,
  readonly vehiclesMakers: Object | null
}
