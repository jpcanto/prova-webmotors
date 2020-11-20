import { action } from "typesafe-actions";

interface IVehiclesMakers {
  readonly data: Object,
}

export function vehiclesMakersRequest() {
  return action('@vehicles/LIST_MAKERS_REQUEST')
}

export function vehiclesMakersSuccess(data: IVehiclesMakers) {
  return action('@vehicles/LIST_MAKERS_SUCCESS', {
    data
  })
}

export function vehiclesMakersFailure() {
  return action('@vehicles/LIST_MAKERS_FAILURE')
}
