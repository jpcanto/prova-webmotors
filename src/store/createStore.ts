import { applyMiddleware, createStore, Middleware, Reducer } from "redux";

import { VehiclesMakersAction, VehiclesMakersState } from "./modules/vehiclesMakers/types";
import { VehiclesModelsAction, VehiclesModelsState } from "./modules/vehiclesModels/types";

export interface StoreState {
  vehiclesMakers: VehiclesMakersState,
  vehiclesModels: VehiclesModelsState,
}

export type StoreAction = VehiclesMakersAction & VehiclesModelsAction;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
}
