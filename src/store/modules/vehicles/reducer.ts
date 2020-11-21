import { VehiclesState, VehiclesAction } from "./types";

const INITIAL_STATE: VehiclesState = {
  error: false,
  loading: false,
  vehicles: null
}

function vehicles(state = INITIAL_STATE, action: VehiclesAction): VehiclesState {
  switch (action.type) {
    case '@vehicles/LIST_REQUEST':
      return {
        ...state,
        loading: true
      }

    case '@vehicles/LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        vehicles: action.payload.data
      }

    case '@vehicles/LIST_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      }

    default:
      return state;
  }
}

export default vehicles;
