import { Reducer } from 'redux';
import { IProjects } from './types';
import { IActionTypes } from "./actions";

const initialState: IProjects = {
  projects: []
};

const projects: Reducer<IProjects> = (state: IProjects = initialState, action) => {
  switch (action.type) {
    case IActionTypes.FETCH_PROJECTS_SUCCEEDED: {
      const { payload } =  action;
      return {
        ...state,
        projects: payload
      }
    }
    case IActionTypes.CREATE_PROJECT_SUCCEEDED: {
      const { payload: { project } } =  action;
      return {
        ...state,
        projects: [...state.projects, project] 
      }
    }
    case IActionTypes.UPDATE_PROJECT_SUCCEEDED: {
      const { payload: { project } } = action;
      const newProject = [...state.projects].map((item:any) => {
        if (item._id === project._id) {return project};
        return item;
      });
      return {
        ...state,
        projects: newProject
      }
    }
    case IActionTypes.DELETE_PROJECT_SUCCEEDED: {
      const { payload } = action
      const projects = [...state.projects].filter((item:any) => item._id !== payload.id)
      return{
        ...state,
        projects
      }
    }
    default: {
      return state;
    }
  }
}

export default projects;