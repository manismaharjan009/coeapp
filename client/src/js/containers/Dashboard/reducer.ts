import { Reducer } from 'redux';
import { IDashboard } from './types';
// import { IActionTypes } from "./actions";

const initialState: IDashboard = {

};

const dashboard: Reducer<IDashboard> = (state: IDashboard = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

export default dashboard;