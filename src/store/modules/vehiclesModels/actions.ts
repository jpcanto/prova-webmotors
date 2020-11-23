import { action } from "typesafe-actions";

interface IVehiclesModels {
  readonly data?: Object,
  readonly MakeID: number
}

export function vehiclesModelsRequest({MakeID}: IVehiclesModels) {
  return action('@vehicles/LIST_MODELS_REQUEST', {
      MakeID
    });
}

export function vehiclesModelsSuccess(data: IVehiclesModels) {
  return action('@vehicles/LIST_MODELS_SUCCESS', {
    data
  });
}

export function vehiclesModelsFailure() {
  return action('@vehicles/LIST_MODELS_FAILURE')
}
