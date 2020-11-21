import { applyMiddleware, createStore, Middleware, Reducer } from "redux";

import { VehiclesMakersAction, VehiclesMakersState } from "./modules/vehiclesMakers/types";
import { VehiclesModelsAction, VehiclesModelsState } from "./modules/vehiclesModels/types";
import { VehiclesVersionsAction, VehiclesVersionsState } from "./modules/vehiclesVersions/types";

export interface StoreState {
  vehiclesMakers: VehiclesMakersState,
  vehiclesModels: VehiclesModelsState,
  vehiclesVersions: VehiclesVersionsState,
}

export type StoreAction = VehiclesMakersAction & VehiclesModelsAction & VehiclesVersionsAction;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
}
