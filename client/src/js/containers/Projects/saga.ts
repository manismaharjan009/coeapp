import { call, put } from "redux-saga/effects";
import * as Apis from './api';
import * as Actions from './actions';
import * as GlobalActions from './../App/actions';
import * as ErrorActions from '../Common/ErrorHandler/actions';

export function* fetchProjects() {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.fetchProjectsApi);
    if (response) {
      yield put(Actions.fetchProjectsSucceeded(response))
    } else {
      yield put(ErrorActions.dataError('Empty'));
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* fetchProjectById({payload}:{payload: any}) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.fetchProjectByIdApi,  payload.id);
    if (response) {
      yield put(Actions.fetchProjectsSucceeded(response))
    } else {
      yield put(ErrorActions.dataError('Empty'));
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* createProject({payload}:{payload: any}) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.createProjectApi, {payload});    
    if(response) {
      yield put(Actions.createProjectSucceeded(response));
    } else {
      yield put(ErrorActions.dataError('Cannot create new data.'))
    }
  } catch(err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* updateProject(payload:any) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.updateProjectApi, payload);
    if(response) {
      yield put(Actions.updateProjectSucceeded(response));
    } else {
      yield put(ErrorActions.dataError('Could not update data'))
    }
    
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}

export function* deleteProject({payload}:{payload: any}) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.deleteProjectApi, { payload });
    if(response) {
      const result = {...response, id: payload.id}
      yield put(Actions.deleteProjectSucceeded(result));
    } else {
      yield put(ErrorActions.dataError('Cannot delete proejct'))
    }
  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchStart());
}