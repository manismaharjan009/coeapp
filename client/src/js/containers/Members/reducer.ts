import { Reducer } from 'redux';
import { IMembers } from './types';
import { IActionTypes } from "./actions";

const initialState: IMembers = {
  members: []
};

const members: Reducer<IMembers> = (state: IMembers = initialState, action) => {
  switch(action.type) {
    case IActionTypes.FETCH_MEMBERS_SUCCEEDED: {
      const { payload } = action;
      return {
        ...state,
        members: payload
      }
    }
    case IActionTypes.CREATE_MEMBER_SUCCEEDED: {
      const { payload: { member } } = action;
      return {
        ...state,
        members: [...state.members, member]
      }
    }
    case IActionTypes.UPDATE_MEMBER_SUCCEEDED: {
      const { payload: { member } } = action;
      const newMember = [...state.members].map((item: any) => {
        if (item._id === member._id) { return member };
        return item;
      });
      return {
        ...state,
        members: newMember
      }
    }
    case IActionTypes.DELETE_MEMBER_SUCCEEDED: {
      const { payload } = action
      const members = [...state.members].filter((item: any) => item._id !== payload.id)
      return {
        ...state,
        members
      }
    }
    default: {
      return state;
    }
  }
}

export default members;