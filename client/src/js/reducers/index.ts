import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';
import app from '../containers/App/reducer';
import err from '../containers/Common/ErrorHandler/reducer';
import toaster from '../containers/Common/Toaster/reducer';
import dashboard from '../containers/Dashboard/reducer';
import members from '../containers/Members/reducer';
import projects from '../containers/Projects/reducer';
import projectUpdates from '../containers/ProjectUpdates/reducer';
import participants from '../containers/Participate/reducer';
import { IError } from "../containers/Common/ErrorHandler/types";
import { IToaster } from "../containers/Common/Toaster/types";
import { IApp } from '../containers/App/types';
import { IDashboard } from '../containers/Dashboard/types';
import { IMembers } from '../containers/Members/types';
import { IProjects } from '../containers/Projects/types';
import { IProjectUpdates } from '../containers/ProjectUpdates/types';
import { IParticipate } from '../containers/Participate/types';

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export interface IAppState {
  router: RouterState
  err: IError;
  toaster: IToaster;
  app: IApp;
  dashboard: IDashboard;
  members: IMembers;
  projects: IProjects;
  projectUpdates: IProjectUpdates;
  participants: IParticipate;
}

// export interface IRouter {}

// export type IApplicationState = IAppState ; // IApp | b |c
export type IApplicationState = {
  app?: IApp;
  err?: IError;
  toaster?: IToaster;
  dashboard?: IDashboard;
  members?: IMembers;  
  projects?: IProjects;
  projectUpdates?: IProjectUpdates;
  participants?: IParticipate;
}

// rootReducer changed to appReducer
const rootReducer = (history: History) => combineReducers({ 
// const rootReducer =  combineReducers({ 
  router: connectRouter(history),
  err,
  toaster,
  app,
  dashboard,
  members,
  projects,
  projectUpdates,
  participants
});

/* const rootReducer = (state, action) => {
  if(action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
} */

export default rootReducer;