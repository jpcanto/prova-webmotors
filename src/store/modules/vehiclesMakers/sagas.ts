import { ActionType } from "typesafe-actions";
import { takeLatest, call, put, all } from '@redux-saga/core/effects';

import * as actions from './actions';
import api from "../../../services/api";

export function* listVehiclesMakers(action: ActionType<typeof actions.vehiclesMakersRequest>) {
  try {

    const { data } = yield call(api.get, '/Make');

    yield put(actions.vehiclesMakersSuccess(data))

  } catch (err) {

    yield put(actions.vehiclesMakersFailure())

  }
}

export default all([
  takeLatest('@vehicles/LIST_MAKERS_REQUEST', listVehiclesMakers)
])
