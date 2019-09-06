export const enum IActionTypes {
  FETCH_PROJECTUPDATES = 'FETCH_PROJECTUPDATES',
  FETCH_PROJECTUPDATES_BY_ID = 'FETCH_PROJECTUPDATES_BY_ID',
  CREATE_PROJECTUPDATE = 'CREATE_PROJECTUPDATE',
  UPDATE_PROJECTUPDATE = 'UPDATE_PROJECTUPDATE',
  DELETE_PROJECTUPDATE = 'DELETE_PROJECTUPDATE',
  FETCH_PROJECTUPDATES_SUCCEEDED = 'FETCH_PROJECTUPDATES_SUCCEEDED',
  FETCH_PROJECTUPDATE_BY_ID_SUCCEEDED = 'FETCH_PROJECTUPDATE_BY_ID_SUCCEEDED',
  CREATE_PROJECTUPDATE_SUCCEEDED = 'CREATE_PROJECTUPDATE_SUCCEEDED',
  UPDATE_PROJECTUPDATE_SUCCEEDED = 'UPDATE_PROJECTUPDATE_SUCCEEDED',
  DELETE_PROJECTUPDATE_SUCCEEDED = 'DELETE_PROJECTUPDATE_SUCCEEDED',  
}

export const fetchProjectUpdates = () => ({
  type: IActionTypes.FETCH_PROJECTUPDATES
});

export const fetchProjectUpdatesSucceeded = (payload:any) => ({
  type: IActionTypes.FETCH_PROJECTUPDATES_SUCCEEDED,
  payload
});

export const fetchProjectUpdatesById = (payload: any) => ({
  type: IActionTypes.FETCH_PROJECTUPDATES_BY_ID,
  payload
});

export const fetchProjectUpdatesByIdSucceeded = (payload: any) => ({
  type: IActionTypes.FETCH_PROJECTUPDATE_BY_ID_SUCCEEDED,
  payload
});

export const createProjectUpdate = (payload: any) => ({
  type: IActionTypes.CREATE_PROJECTUPDATE,
  payload
});

export const createProjectUpdateSucceeded = (payload: any) => ({
  type: IActionTypes.CREATE_PROJECTUPDATE_SUCCEEDED,
  payload
});

export const updateProjectUpdate = (payload: any) => ({
  type: IActionTypes.UPDATE_PROJECTUPDATE,
  payload
});

export const updateProjectUpdateSucceeded = (payload: any) => ({
  type: IActionTypes.UPDATE_PROJECTUPDATE_SUCCEEDED,
  payload
});

export const deleteProjectUpdate = (payload: any) => ({
  type: IActionTypes.DELETE_PROJECTUPDATE,
  payload
});

export const deleteProjectUpdateSucceeded = (payload: any) => ({
  type: IActionTypes.DELETE_PROJECTUPDATE_SUCCEEDED,
  payload
});