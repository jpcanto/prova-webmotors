import { all } from '@redux-saga/core/effects';

import listVehiclesMakers from './vehiclesMakers/sagas';
import listVehiclesModels from './vehiclesModels/sagas';
import listVehiclesVersions from './vehiclesVersions/sagas';
import listVehicles from './vehicles/sagas';

export default function* rootSaga() {
  return yield all([listVehiclesMakers, listVehiclesModels, listVehiclesVersions, listVehicles])
}
