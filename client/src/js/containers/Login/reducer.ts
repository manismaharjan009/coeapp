import { Reducer } from 'redux';
import { ILogin } from './types';
// import { IActionTypes } from "./actions";

const initialState: ILogin = {
  username: '',
  password: '',
  remember: false
};

const sample: Reducer<ILogin> = (state: ILogin = initialState, action) => {
  switch (action.type) {
    // case IActionTypes.SampleAction: {
    //   const sample = [1,2,3]
    //   return {
    //     ...state,
    //     sample
    //   }
    // }
    default: {
      return state;
    }
  }
}

export default sample;