import { VehiclesVersionsState, VehiclesVersionsAction } from "./types";

const INITIAL_STATE: VehiclesVersionsState = {
  error: false,
  loading: false,
  vehiclesVersions: null
}

function vehiclesVersions(state = INITIAL_STATE, action: VehiclesVersionsAction): VehiclesVersionsState {
  switch (action.type) {
    case '@vehicles/LIST_VERSIONS_REQUEST':
      return {
        ...state,
        loading: true
      }

    case '@vehicles/LIST_VERSIONS_SUCCESS':
      return {
        ...state,
        loading: false,
        vehiclesVersions: action.payload.data
      }

    case '@vehicles/LIST_VERSIONS_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      }

    default:
      return state;
  }
}

export default vehiclesVersions;
