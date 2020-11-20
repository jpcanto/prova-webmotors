import { action } from "typesafe-actions";

interface IVehiclesMakersAction {
  readonly ID: number,
  readonly Name: string
}

export function vehiclesMakersRequest({ ID, Name }: IVehiclesMakersAction) {
  return action('@vehicles/LIST_MAKERS_REQUEST', {
    ID,
    Name,
  })
}
