import { call, put } from "redux-saga/effects";
import * as Apis from './api';
import * as Actions from './actions';
import * as GlobalActions from './../App/actions';
import * as ErrorActions from '../Common/ErrorHandler/actions';

export function* fetchParticipants() {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.fetchParticipantsApi);
    if (response) {
      yield put(Actions.fetchParticipantsSucceeded(response));
    } else {
      yield put(ErrorActions.dataError('Empty'));
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* fetchParticipantById({ payload }: { payload: any }) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.fetchParticipantByIdApi, payload.id);
    if (response) {
      yield put(Actions.fetchParticipantByIdSucceeded(response))
    } else {
      yield put(ErrorActions.dataError('Empty'));
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* createParticipant({ payload }: { payload: any }) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.createParticipantApi, { payload });
    if (response) {
      yield put(Actions.createParticipantSucceeded(response));
    } else {
      yield put(ErrorActions.dataError('Empty'));
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* updateParticipant(payload: any) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.updateParticipantApi, payload);
    if (response) {
      yield put(Actions.updateParticipantSucceeded(response));
    } else {
      yield put(ErrorActions.dataError('Empty'));
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* deleteParticipant({ payload }: { payload: any }) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.deleteParticipantApi, {payload});
    if (response) {
      const result = { ...response, id: payload.id }
      yield put(Actions.deleteParticipantSucceeded(result))
    } else {
      yield put(ErrorActions.dataError('Empty'));
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}
