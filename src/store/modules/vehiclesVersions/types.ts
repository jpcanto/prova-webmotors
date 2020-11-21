import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type VehiclesVersionsAction = ActionType<typeof actions>

export interface VehiclesVersionsState {
  readonly error: boolean,
  readonly loading: boolean,
  readonly vehiclesVersions: Object | null
}
