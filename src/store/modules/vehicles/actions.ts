import { action } from "typesafe-actions";

interface IVehicles {
  readonly data?: Object,
  readonly Page: number
}

export function vehiclesRequest({Page}: IVehicles) {
  return action('@vehicles/LIST_REQUEST', {
      Page
    });
}

export function vehiclesSuccess(data: IVehicles) {
  return action('@vehicles/LIST_SUCCESS', {
    data
  });
}

export function vehiclesFailure() {
  return action('@vehicles/LIST_FAILURE')
}
