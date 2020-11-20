import { all } from 'redux-saga/effects';

import listVehiclesMakers from './vehiclesMakers/sagas';
import listVehiclesModels from './vehiclesModels/sagas';

export default function* rootSaga() {
  return yield all([listVehiclesMakers, listVehiclesModels])
}
