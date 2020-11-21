import { action } from "typesafe-actions";

interface IVehiclesVersions {
  readonly data?: Object,
  readonly ModelID: number
}

export function vehiclesVersionsRequest(ModelID: IVehiclesVersions) {
  return action('@vehicles/LIST_VERSIONS_REQUEST', {
      ModelID
    });
}

export function vehiclesVersionsSuccess(data: IVehiclesVersions) {
  return action('@vehicles/LIST_VERSIONS_SUCCESS', {
    data
  });
}

export function vehiclesVersionsFailure() {
  return action('@vehicles/LIST_VERSIONS_FAILURE')
}
