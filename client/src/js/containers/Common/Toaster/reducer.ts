import { Reducer } from 'redux';
import { IToaster } from './types';
import { IActionTypes } from './actions';

const initialState: IToaster = {
  type: 'info',
  message: '',
  visibility: false
};

const toaster: Reducer<IToaster> = (state: IToaster = initialState, action) => {
  switch (action.type) {
    case IActionTypes.SHOW_TOASTER: {
      const { message, type } = action.toastInfo;
      return { ...state, message, type, visibility: true};
    }
    case IActionTypes.HIDE_TOASTER: {
      return { ...state, visibility: false};
    }
    default:
      return state;
  }
};

export default toaster;
