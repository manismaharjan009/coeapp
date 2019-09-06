import { Reducer } from 'redux';
import { IParticipate } from './types';
import { IActionTypes } from "./actions";

const initialState: IParticipate = {
  participants: []
};

const participants: Reducer<IParticipate> = (state: IParticipate = initialState, action) => {
  switch (action.type) {
    case IActionTypes.FETCH_PARTICIPANTS_SUCCEEDED: {
      const { payload } = action;
      return {
        ...state,
        participants: payload
      }
    }
    case IActionTypes.CREATE_PARTICIPANT_SUCCEEDED: {
      const { payload: { participant } } = action;
      return {
        ...state,
        participants: [...state.participants, participant]
      }
    }
    case IActionTypes.UPDATE_PARTICIPANT_SUCCEEDED: {
      const { payload: { participant } } =  action;
      const participants = [...state.participants].map((item:any) => {
        if(item._id === participant._id) { return participant };
        return item;
      })
      return {
        ...state,
        participants
      }
    }
    case IActionTypes.DELETE_PARTICIPANT_SUCCEEDED: {
      const { payload } =  action;
      const participants = [...state.participants].filter((item:any) => item._id !== payload.id);
      return {
        ...state,
        participants
      }
    }
    default: {
      return state;
    }
  }
}

export default participants;