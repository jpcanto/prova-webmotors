import { applyMiddleware, createStore, Middleware, Reducer } from "redux";

import { VehiclesMakersAction, VehiclesMakersState } from "./modules/vehiclesMakers/types";

export interface StoreState {
  vehiclesMakers: VehiclesMakersState,
}

export type StoreAction = VehiclesMakersAction;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
}
