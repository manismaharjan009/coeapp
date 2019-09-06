import { Reducer } from 'redux';
import { IProjectUpdates } from './types';
import { IActionTypes } from "./actions";

const initialState: IProjectUpdates = {
  projectUpdates: []
};

const projectUpdates: Reducer<IProjectUpdates> = (state: IProjectUpdates = initialState, action) => {
  switch (action.type) {
    case IActionTypes.FETCH_PROJECTUPDATES_SUCCEEDED: {
      const { payload } = action;
      return {
        ...state,
        projectUpdates: payload
      }
    }
    case IActionTypes.CREATE_PROJECTUPDATE_SUCCEEDED: {
      const { payload: { projectUpdate } } = action;
      return {
        ...state,
        projectUpdates: [...state.projectUpdates, projectUpdate]
      }
    }
    case IActionTypes.UPDATE_PROJECTUPDATE_SUCCEEDED: {
      const { payload: { projectUpdate } } = action;
      const newProject = [...state.projectUpdates].map((item: any) => {
        if (item._id === projectUpdate._id) { return projectUpdate };
        return item;
      });
      return {
        ...state,
        projectUpdates: newProject
      }
    }
    case IActionTypes.DELETE_PROJECTUPDATE_SUCCEEDED: {
      const { payload } = action
      const projectUpdates = [...state.projectUpdates].filter((item: any) => item._id !== payload.id)
      return {
        ...state,
        projectUpdates
      }
    }
    default: {
      return state;
    }
  }
}

export default projectUpdates;