import { VehiclesMakersState, VehiclesMakersAction } from "./types";

const INITIAL_STATE: VehiclesMakersState = {
  loading: false
}

function vehiclesMakers(state = INITIAL_STATE, action: VehiclesMakersAction): VehiclesMakersState {
  switch (action.type) {
    case '@vehicles/LIST_MAKERS_REQUEST':
      return {
        ...state,
        loading: true
      }

    default:
      return state;
  }
}

export default vehiclesMakers;
