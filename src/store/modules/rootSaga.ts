import { all } from 'redux-saga/effects';

import listVehiclesMakers from './vehiclesMakers/sagas';

export default function* rootSaga() {
  return yield all([listVehiclesMakers])
}
