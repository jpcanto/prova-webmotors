import { applyMiddleware, createStore, Middleware, Reducer } from "redux";

import { VehiclesMakersAction, VehiclesMakersState } from "./modules/vehiclesMakers/types";
import { VehiclesModelsAction, VehiclesModelsState } from "./modules/vehiclesModels/types";
import { VehiclesVersionsAction, VehiclesVersionsState } from "./modules/vehiclesVersions/types";
import { VehiclesAction, VehiclesState } from "./modules/vehicles/types";
import { FiltersAction, FiltersState } from "./modules/filters/types";

export interface StoreState {
  vehiclesMakers: VehiclesMakersState,
  vehiclesModels: VehiclesModelsState,
  vehiclesVersions: VehiclesVersionsState,
  vehicles: VehiclesState,
  filters: FiltersState,
}

export type StoreAction = VehiclesMakersAction & VehiclesModelsAction & VehiclesVersionsAction & VehiclesAction & FiltersAction;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
}
