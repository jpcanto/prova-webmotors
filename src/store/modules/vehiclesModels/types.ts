import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type VehiclesModelsAction = ActionType<typeof actions>

export interface VehiclesModelsState {
  readonly error: boolean,
  readonly loading: boolean,
  readonly vehiclesModels: Object | null
}
