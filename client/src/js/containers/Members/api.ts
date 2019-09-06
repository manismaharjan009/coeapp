import urls from '../../config/urls';
import { handleApiError, getPostParams, getGetParams, getPutParams, getDeleteParams } from "../../utils";

export const fetchMembersApi = () => {
  const url = `${urls.fetchMembers}`;
  return fetch(url, getGetParams())
    .then(handleApiError)
    .then(response => response.json());
};

export const fetchMemberByIdApi = ({ id }:{id: string}) => {
  const url = `${urls.fetchMemberById}/${id}`;
  return fetch(url, getGetParams())
    .then(handleApiError)
    .then(response => response.json());
}

export const createMemberApi = ({payload}:{payload:any}) => {
  const url = `${urls.createMember}`;
  return fetch(url, getPostParams(payload))
    .then(handleApiError)
    .then(response => response.json());
}

export const updateMemberApi = ({ payload: { id, payload } }: { id: string, payload: any }) => {
  const url = `${urls.updateMember}/${id}`;
  return fetch(url, getPutParams(payload))
    .then(handleApiError)
    .then(response => response.json());
}

export const deleteMemberApi = ({ payload: { id } }: {payload:any}) => {
  const url = `${urls.deleteMember}/${id}`;
  return fetch(url, getDeleteParams())
    .then(handleApiError)
    .then(response => response.json());
}


export const profileUploadApi = ({payload}:{payload:any}) => {
  const url = `${urls.profileUpload}`;
  return fetch(url, getPostParams({payload}))
    .then(handleApiError)
    .then(response => response.json());
}
