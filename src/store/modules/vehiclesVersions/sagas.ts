import { ActionType } from "typesafe-actions";
import { takeLatest, call, put, all } from '@redux-saga/core/effects';

import * as actions from './actions';
import api from "../../../services/api";

export function* listVehiclesVersions({ payload }: ActionType<typeof actions.vehiclesVersionsRequest>) {
  try {
    const { data } = yield call(api.get, `/Version?ModelID=${payload.ModelID.ModelID}`);

    yield put(actions.vehiclesVersionsSuccess(data))

  } catch (err) {

    yield put(actions.vehiclesVersionsFailure())

  }
}

export default all([
  takeLatest('@vehicles/LIST_VERSIONS_REQUEST', listVehiclesVersions)
])
