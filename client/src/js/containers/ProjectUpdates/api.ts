import urls from '../../config/urls';
import { handleApiError, getPostParams, getGetParams, getPutParams, getDeleteParams } from "../../utils";

export const fetchProjectUpdatesApi = () => {
  const url = urls.fetchProjectUpdates;
  return fetch(url, getGetParams())
    .then(handleApiError)
    .then(response => response.json())
}
export const fetchProjectUpdateByIdApi = ({ id }: { id: string }) => {
  const url = `${urls.fetchProjectUpdateById}/${id}`;
  return fetch(url, getGetParams())
    .then(handleApiError)
    .then(response => response.json());
}

export const createProjectUpdateApi = ({ payload }: { payload: any }) => {
  const url = urls.createProjectUpdate;
  return fetch(url, getPostParams(payload))
    .then(handleApiError)
    .then(response => response.json());
}

export const updateProjectUpdateApi = ({ payload: { id, payload } }: { id: string, payload: any }) => {
  const url = `${urls.updateProjectUpdate}/${id}`;
  return fetch(url, getPutParams(payload))
    .then(handleApiError)
    .then(response => response.json());
}

export const deleteProjectUpdateApi = ({ payload: { id } }: {payload: any}) => {
  const url = `${urls.deleteProjectUpdate}/${id}`;
  return fetch(url, getDeleteParams())
    .then(handleApiError)
    .then(response => response.json());
}