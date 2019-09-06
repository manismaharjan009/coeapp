import { Reducer } from 'redux';
import { ISampleTypes } from './types';
import { IActionTypes } from "./actions";

const initialState: ISampleTypes = {
  sample: []
};

// @ts-ignore
const sample: Reducer<ISampleTypes> = (state: ISampleTypes = initialState, action) => {
  switch (action.type) {
    case IActionTypes.SampleAction: {
      const sample = [1,2,3]
      return {
        ...state,
        sample
      }
    }
    default: {
      return state;
    }
  }
}

export default sample;