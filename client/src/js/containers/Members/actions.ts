export const enum IActionTypes {
  FETCH_MEMBERS = 'FETCH_MEMBERS',
  CREATE_MEMBER = 'CREATE_MEMBER',
  UPDATE_MEMBER = 'UPDATE_MEMBER',
  DELETE_MEMBER = 'DELETE_MEMBER',
  FETCH_MEMEBER_BY_ID = 'FETCH_MEMEBER_BY_ID',
  FETCH_MEMBERS_SUCCEEDED = 'FETCH_MEMBERS_SUCCEEDED',
  CREATE_MEMBER_SUCCEEDED = 'CREATE_MEMBER_SUCCEEDED',
  UPDATE_MEMBER_SUCCEEDED = 'UPDATE_MEMBER_SUCCEEDED',
  DELETE_MEMBER_SUCCEEDED = 'DELETE_MEMBER_SUCCEEDED',
  FETCH_MEMEBER_BY_ID_SUCCEEDED = 'FETCH_MEMEBER_BY_ID_SUCCEEDED',
}

export const fetchMembers = () => ({
  type: IActionTypes.FETCH_MEMBERS
});

export const fetchMembersSucceeded = (payload: any) => ({
  type: IActionTypes.FETCH_MEMBERS_SUCCEEDED,
  payload
});

export const createMember = (payload: any) => ({
  type: IActionTypes.CREATE_MEMBER,
  payload
});

export const createMemberSucceeded = (payload: any) => ({
  type: IActionTypes.CREATE_MEMBER_SUCCEEDED,
  payload
});

export const fetchMembertById = (payload: any) => ({
  type: IActionTypes.FETCH_MEMEBER_BY_ID,
  payload
});

export const fetchMemberByIdSucceeded = (payload: any) => ({
  type: IActionTypes.FETCH_MEMEBER_BY_ID_SUCCEEDED,
  payload
});

export const updateMember = (payload: any) => ({
  type: IActionTypes.UPDATE_MEMBER,
  payload
});

export const updateMemberSucceeded = (payload: any) => ({
  type: IActionTypes.UPDATE_MEMBER_SUCCEEDED,
  payload
});

export const deleteMember = (payload: any) => ({
  type: IActionTypes.DELETE_MEMBER,
  payload
});

export const deleteMemberSucceeded = (payload: any) => ({
  type: IActionTypes.DELETE_MEMBER_SUCCEEDED,
  payload
});