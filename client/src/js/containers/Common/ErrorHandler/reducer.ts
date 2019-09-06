import { Reducer } from 'redux';
import { IActionTypes } from './actions';
import { IError } from './types';

const initialState: IError = {
  error: false,
  errorData: {
    type: 'error', // can be : info, warning, success,
    body: '',
    networkError: 'Network error occured. Please contact your system admin for support.',
    err: null
  }
};

const err: Reducer<IError> = (state: IError = initialState, action) => {
  switch (action.type) {
    case IActionTypes.ERROR_OCCURED: {
      const errorBody = action.err.error;
      const body = errorBody || "Oops, something went wrong!"
      const errObj = {
        title: 'Error',
        status: '',
        body
      };
      const errorData = { ...state.errorData, ...errObj };
      return { ...state, errorData, error: true };
    }
    case IActionTypes.NETWORK_ERROR_OCCURED: {
      const errObj= {
        title: 'Request failed',
        status: '',
        body: action.err.toString()
      };
      const errorData = { ...state.errorData, ...errObj };
      errorData.body = errorData.networkError;
      return { ...state, errorData, error: true };
    }
    case IActionTypes.RESET_ERROR: {
      return { ...state, error: false };
    }
    default:
      return state;
  }
};

export default err;
