import { call, put } from "redux-saga/effects";
import * as Apis from './api';
import * as Actions from './actions';
import * as GlobalActions from './../App/actions';
import * as ErrorActions from '../Common/ErrorHandler/actions';

export function* fetchMembers() {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.fetchMembersApi);
    if(response) {
      yield put(Actions.fetchMembersSucceeded(response));
    } else {
      yield put(ErrorActions.dataError('Give the correct output'));
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* fetchMemberById({ payload }: { payload: any }) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.fetchMemberByIdApi, payload.id);
    if (response) {
      yield put(Actions.fetchMembersSucceeded(response))
    } else {
      yield put(ErrorActions.dataError('Empty'));
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* createMember({payload}:{payload:any}) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.createMemberApi, {payload});
    if(response) {
      yield put(Actions.createMemberSucceeded(response));
    } else {
      yield put(ErrorActions.dataError('Error Response here'))
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* updateMember(payload: any) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.updateMemberApi, payload);
    if (response) {
      yield put(Actions.updateMemberSucceeded(response));
    } else {
      yield put(ErrorActions.dataError('Error Response here'))
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* deleteMember({ payload }: { payload: any }) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.deleteMemberApi, { payload });
    if (response) {
      const result = { ...response, id: payload.id }
      yield put(Actions.deleteMemberSucceeded(result));
    } else {
      yield put(ErrorActions.dataError('Error Response here'))
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* profileUpload(profileImage:any) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = Apis.profileUploadApi({ payload: profileImage })
    if (response) {
      console.log(response)
    } else {
      yield put(ErrorActions.dataError('Error Response here'))
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}