import { Reducer } from 'redux';
import { IApp } from './types';
import { IActionTypes } from "./actions";

const initialState: IApp = {
  isLoading: 0,
  pageTitle: '',
  authorized: false,
  username: '',
  role: '',
  employeeList: []
};

const app: Reducer<IApp> = (state: IApp = initialState, action) => {
  switch(action.type){
    case IActionTypes.FETCH_START: {
      const { isLoading } = state;
      return { ...state, isLoading: isLoading  + 1 }
    }
    case IActionTypes.FETCH_END: {
      const { isLoading } = state;
      return { ...state, isLoading: isLoading  - 1 }
    }
    case IActionTypes.SET_PAGE_TITLE: {
      const { pageTitle } = action;
      return { ...state, pageTitle } 
    }
    case IActionTypes.LOGIN_SUCCEEDED: {
      const { username, role } = action;
      return { 
        ...state, 
        username,
        role,
        authorized: true
      }
    }
    case IActionTypes.LOGOUT: {
      return {
        ...state,
        authorized: false
      }
    }
    case IActionTypes.FETCH_EMPLOYEE_LIST_SUCCEEDED: {
      const {employeeList} = action.payload;

      return {
        ...state,
        employeeList 
      }
    }
    default: {
      return state;
    }
  }
}

export default app;