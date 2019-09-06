import urls from '../../config/urls';
import { handleApiError, getPostParams, getGetParams, getPutParams, getDeleteParams } from "../../utils";

export const fetchProjectsApi = () => {
  const url = urls.fetchProjects;
  return  fetch(url, getGetParams())
    .then(handleApiError)
    .then(response => response.json())
}
export const fetchProjectByIdApi = ({id}: {id:string}) => {
  const url = `${urls.fetchProjectById}/${id}`;
  return fetch(url, getGetParams())
    .then(handleApiError)
    .then(response => response.json());
}

export const createProjectApi = ({payload}:{payload:any}) => {
  const url = urls.createProject;
  return fetch(url, getPostParams(payload))
    .then(handleApiError)
    .then(response => response.json());
}

export const updateProjectApi = ({ payload: { id, payload } }: { id: string, payload: any }) => {
  const url = `${urls.updateProject}/${id}`;
  return fetch(url, getPutParams(payload))
    .then(handleApiError)
    .then(response => response.json());
}

export const deleteProjectApi = ({ payload: { id } }: {payload:any}) => {
  const url = `${urls.deleteProject}/${id}`;
  return fetch(url, getDeleteParams())
    .then(handleApiError)
    .then(response => response.json());
}