import urls from '../../config/urls';
import { handleApiError, getPostParams, getGetParams, getPutParams, getDeleteParams } from "../../utils";

export const fetchParticipantsApi = () => {
  const url = urls.fetchParticipants;
  return fetch(url, getGetParams())
    .then(handleApiError)
    .then(response => response.json())
}
export const fetchParticipantByIdApi = ({ id }: { id: string }) => {
  const url = `${urls.fetchParticipantById}/${id}`;
  return fetch(url, getGetParams())
    .then(handleApiError)
    .then(response => response.json());
}

export const createParticipantApi = ({ payload }: { payload: any }) => {
  const url = urls.createParticipant;
  return fetch(url, getPostParams(payload))
    .then(handleApiError)
    .then(response => response.json());
}

export const updateParticipantApi = ({ payload: { id, payload } }: { id: string, payload: any }) => {
  const url = `${urls.updateParticipant}/${id}`;
  return fetch(url, getPutParams(payload))
    .then(handleApiError)
    .then(response => response.json());
}

export const deleteParticipantApi = ({ payload: { id } }: { payload: any }) => {
  const url = `${urls.deleteParticipant}/${id}`;
  return fetch(url, getDeleteParams())
    .then(handleApiError)
    .then(response => response.json());
}