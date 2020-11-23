import { FiltersState, FiltersAction } from "./types";

const INITIAL_STATE: FiltersState = {
    make: null,
    model: null,
    version: null
}

function filters(state = INITIAL_STATE, action: FiltersAction): FiltersState {
  switch (action.type) {
    case '@filters/SET_MAKE':
      return {
        ...state,
        make: action.payload.make
      }

    case '@filters/SET_MODEL':
      return {
        ...state,
        model: action.payload.model
      }

    case '@filters/SET_VERSION':
      return {
        ...state,
        version: action.payload.version
      }

    case '@filters/LIST_FILTERS':
      return state

    default:
      return state;
  }
}

export default filters;
