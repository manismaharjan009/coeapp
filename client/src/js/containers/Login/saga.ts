import { call, put } from "redux-saga/effects";
import * as Apis from './api';
import * as Actions from '../App/actions';
import * as GlobalActions from './../App/actions';
import * as ErrorActions from '../Common/ErrorHandler/actions';

// const getUser = state => state.app.username;

export function* login({payload}:{payload:any}) {
  yield put(GlobalActions.fetchStart());
  try {
    const response = yield call(Apis.loginApi, payload);
    if(response.Login[0].Status.toLowerCase() === 'success') {
      yield put(Actions.loginSucceeded(payload.username))
      const allEmployeeList = yield call(Apis.fetchEmployeeListApi);
      if (allEmployeeList.UserInfo.length > 0) {
        const employeeList = allEmployeeList.UserInfo.filter(emp => emp.SupervisorCode === 25030);
        console.log(employeeList);
        yield put(Actions.fetchEmployeeListSucceeded({employeeList}));
      }
    } else {
      const errorMessage = response.Login[0].Messsage;
      yield put(ErrorActions.dataError({error: errorMessage}));
    }

  } catch (err) {
    yield put(ErrorActions.networkError(err));
  }
  yield put(GlobalActions.fetchEnd());
}