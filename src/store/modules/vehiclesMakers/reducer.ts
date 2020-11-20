import { VehiclesMakersState, VehiclesMakersAction } from "./types";

const INITIAL_STATE: VehiclesMakersState = {
  error: false,
  loading: false,
  vehiclesMakers: null
}

function vehiclesMakers(state = INITIAL_STATE, action: VehiclesMakersAction): VehiclesMakersState {
  switch (action.type) {
    case '@vehicles/LIST_MAKERS_REQUEST':
      return {
        ...state,
        loading: true
      }

    case '@vehicles/LIST_MAKERS_SUCCESS':
      return {
        ...state,
        loading: false,
        vehiclesMakers: action.payload.data
      }

    case '@vehicles/LIST_MAKERS_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      }

    default:
      return state;
  }
}

export default vehiclesMakers;
