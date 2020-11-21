import { ActionType } from "typesafe-actions";
import { takeLatest, call, put, all } from '@redux-saga/core/effects';

import * as actions from './actions';
import api from "../../../services/api";

export function* listVehicles({ payload }: ActionType<typeof actions.vehiclesRequest>) {
  try {
    const { data } = yield call(api.get, `/Version?ModelID=${payload.Page.Page}`);

    yield put(actions.vehiclesSuccess(data))

  } catch (err) {

    yield put(actions.vehiclesFailure())

  }
}

export default all([
  takeLatest('@vehicles/LIST_REQUEST', listVehicles)
])
