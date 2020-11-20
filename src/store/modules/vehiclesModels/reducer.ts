import { VehiclesModelsState, VehiclesModelsAction } from "./types";

const INITIAL_STATE: VehiclesModelsState = {
  error: false,
  loading: false,
  vehiclesModels: null
}

function vehiclesModels(state = INITIAL_STATE, action: VehiclesModelsAction): VehiclesModelsState {
  switch (action.type) {
    case '@vehicles/LIST_MODELS_REQUEST':
      return {
        ...state,
        loading: true
      }

    case '@vehicles/LIST_MODELS_SUCCESS':
      return {
        ...state,
        loading: false,
        vehiclesModels: action.payload.data
      }

    case '@vehicles/LIST_MODELS_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
      }

    default:
      return state;
  }
}

export default vehiclesModels;
