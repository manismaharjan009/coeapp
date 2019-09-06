export const enum IActionTypes {
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  FETCH_PROJECT_BY_ID = 'FETCH_PROJECT_BY_ID',
  CREATE_PROJECT = 'CREATE_PROJECT',
  UPDATE_PROJECT = 'UPDATE_PROJECT',
  DELETE_PROJECT = 'DELETE_PROJECT',
  FETCH_PROJECTS_SUCCEEDED = 'FETCH_PROJECTS_SUCCEEDED',
  FETCH_PROJECT_BY_ID_SUCCEEDED = 'FETCH_PROJECT_BY_ID_SUCCEEDED',
  CREATE_PROJECT_SUCCEEDED = 'CREATE_PROJECT_SUCCEEDED',
  UPDATE_PROJECT_SUCCEEDED = 'UPDATE_PROJECT_SUCCEEDED',
  DELETE_PROJECT_SUCCEEDED = 'DELETE_PROJECT_SUCCEEDED',
}

export const fetchProjects = () => ({
  type: IActionTypes.FETCH_PROJECTS
});

export const fetchProjectsSucceeded = (payload: any) => ({
  type: IActionTypes.FETCH_PROJECTS_SUCCEEDED,
  payload
});

export const fetchProjectById = (payload: any) => ({
  type: IActionTypes.FETCH_PROJECT_BY_ID,
  payload
});

export const fetchProjectByIdSucceeded = (payload: any) => ({
  type: IActionTypes.FETCH_PROJECT_BY_ID_SUCCEEDED,
  payload
});

export const createProject = (payload: any) => ({
  type: IActionTypes.CREATE_PROJECT,
  payload
});

export const createProjectSucceeded = (payload: any) => ({
  type: IActionTypes.CREATE_PROJECT_SUCCEEDED,
  payload
});

export const updateProject = (payload: any) => ({
  type: IActionTypes.UPDATE_PROJECT,
  payload
});

export const updateProjectSucceeded = (payload: any) => ({
  type: IActionTypes.UPDATE_PROJECT_SUCCEEDED,
  payload
});

export const deleteProject = (payload: any) => ({
  type: IActionTypes.DELETE_PROJECT,
  payload
});

export const deleteProjectSucceeded = (payload: any) => ({
  type: IActionTypes.DELETE_PROJECT_SUCCEEDED,
  payload
});