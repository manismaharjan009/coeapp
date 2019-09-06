import { call, put } from "redux-saga/effects";
import * as Apis from './api';
import * as Actions from './actions';
import * as GlobalActions from './../App/actions';
import * as ErrorActions from '../Common/ErrorHandler/actions';

export function* fetchProjectUpdates() {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.fetchProjectUpdatesApi);
    if (response) {
      yield put(Actions.fetchProjectUpdatesSucceeded(response))
    } else {
      yield put(ErrorActions.dataError('Empty'));
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* fetchProjectUpdateById({ payload }: { payload: any }) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.fetchProjectUpdateByIdApi, payload.id);
    if (response) {
      yield put(Actions.fetchProjectUpdatesSucceeded(response))
    } else {
      yield put(ErrorActions.dataError('Empty'));
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* createProjectUpdate({ payload }: { payload: any }) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.createProjectUpdateApi, { payload });
    if (response) {
      yield put(Actions.createProjectUpdateSucceeded(response));
    } else {
      yield put(ErrorActions.dataError('Cannot create new data.'))
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* updateProjectUpdate(payload: any) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.updateProjectUpdateApi, payload);
    if (response) {
      yield put(Actions.updateProjectUpdateSucceeded(response));
    } else {
      yield put(ErrorActions.dataError('Could not update data'))
    }

  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* deleteProjectUpdate({ payload }: { payload: any }) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.deleteProjectUpdateApi, { payload });
    if (response) {
      const result = { ...response, id: payload.id }
      yield put(Actions.deleteProjectUpdateSucceeded(result));
    } else {
      yield put(ErrorActions.dataError('Cannot delete proejct'))
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchStart());
}