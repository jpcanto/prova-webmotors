import { ActionType } from "typesafe-actions";
import { takeLatest, call, put, all } from 'redux-saga/effects';

import * as actions from './actions';
import api from "../../../services/api";

export function* listVehiclesModels({ payload }: ActionType<typeof actions.vehiclesModelsRequest>) {
  try {
    const { data } = yield call(api.get, `/Model?MakeID=${payload.MakeID.MakeID}`);

    yield put(actions.vehiclesModelsSuccess(data))

  } catch (err) {

    yield put(actions.vehiclesModelsFailure())

  }
}

export default all([
  takeLatest('@vehicles/LIST_MODELS_REQUEST', listVehiclesModels)
])
