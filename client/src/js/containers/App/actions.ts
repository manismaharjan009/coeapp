// import { action } from "typesafe-actions";

export const enum IActionTypes {
  FETCH_START = 'FETCH_START',
  FETCH_END = 'FETCH_END',
  UPDATE_VIEWPORT_DIMENSION = 'UPDATE_VIEWPORT_DIMENSION',
  SET_PAGE_TITLE = 'SET_PAGE_TITLE',
  LOGIN = 'LOGIN',
  LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED',
  LOGOUT = 'LOGOUT',
  FETCH_EMPLOYEE_LIST = 'FETCH_EMPLOYEE_LIST',
  FETCH_EMPLOYEE_LIST_SUCCEEDED = 'FETCH_EMPLOYEE_LIST_SUCCEEDED',
}

// export const fetchStart = () => action('IActionTypes.FETCH_START')
export const fetchStart = () => ({type: IActionTypes.FETCH_START});

// export const fetchEnd = () => action('IActionTypes.FETCH_END')
export const fetchEnd = () => ({type: IActionTypes.FETCH_END});

/* export const updateViewport = (viewport: number) => action(IActionTypes.UPDATE_VIEWPORT_DIMENSION, {
  viewport
}); */
export const updateViewport = (viewport: number) => ({
  type: IActionTypes.UPDATE_VIEWPORT_DIMENSION,
  viewport
});

/* export const setPageTitle = (pageTitle: string) => action(IActionTypes.SET_PAGE_TITLE, {
  pageTitle
}); */
export const setPageTitle = (pageTitle: string) => ({
  type: IActionTypes.SET_PAGE_TITLE,
  pageTitle
});

export const login = (payload:any) => ({
  type: IActionTypes.LOGIN,
  payload
});

export const loginSucceeded = (username: string) => ({
  type: IActionTypes.LOGIN_SUCCEEDED,
  username,
  // role
});

export const logout = () => ({
  type: IActionTypes.LOGOUT
});

export const fetchEmployeeList = () => ({
  type: IActionTypes.FETCH_EMPLOYEE_LIST
});

export const fetchEmployeeListSucceeded = (payload: any) => ({
  type: IActionTypes.FETCH_EMPLOYEE_LIST_SUCCEEDED,
  payload
});