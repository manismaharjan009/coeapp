export const enum IActionTypes {
  FETCH_PARTICIPANTS = 'FETCH_PARTICIPANTS',
  FETCH_PARTICIPANT_BY_ID = 'FETCH_PARTICIPANT_BY_ID',
  CREATE_PARTICIPANT = 'CREATE_PARTICIPANT',
  UPDATE_PARTICIPANT = 'UPDATE_PARTICIPANT',
  DELETE_PARTICIPANT = 'DELETE_PARTICIPANT',
  FETCH_PARTICIPANTS_SUCCEEDED = 'FETCH_PARTICIPANTS_SUCCEEDED',
  FETCH_PARTICIPANT_BY_ID_SUCCEEDED = 'FETCH_PARTICIPANT_BY_ID_SUCCEEDED',
  CREATE_PARTICIPANT_SUCCEEDED = 'CREATE_PARTICIPANT_SUCCEEDED',
  UPDATE_PARTICIPANT_SUCCEEDED = 'UPDATE_PARTICIPANT_SUCCEEDED',
  DELETE_PARTICIPANT_SUCCEEDED = 'DELETE_PARTICIPANT_SUCCEEDED'
}

export const fetchParticipants = () => ({
  type: IActionTypes.FETCH_PARTICIPANTS
});

export const fetchParticipantsSucceeded = (payload:any) => ({
  type: IActionTypes.FETCH_PARTICIPANTS_SUCCEEDED,
  payload
});

export const fetchParticipantById = (payload:any) => ({
  type: IActionTypes.FETCH_PARTICIPANT_BY_ID,
  payload
});

export const fetchParticipantByIdSucceeded = (payload:any) => ({
  type: IActionTypes.FETCH_PARTICIPANT_BY_ID_SUCCEEDED,
  payload
});

export const createParticipant = (payload:any) => ({
  type: IActionTypes.CREATE_PARTICIPANT,
  payload
});

export const createParticipantSucceeded = (payload:any) => ({
  type: IActionTypes.CREATE_PARTICIPANT_SUCCEEDED,
  payload
});

export const updateParticipant = (payload: any) => ({
  type: IActionTypes.UPDATE_PARTICIPANT,
  payload
});

export const updateParticipantSucceeded = (payload: any) => ({
  type: IActionTypes.UPDATE_PARTICIPANT_SUCCEEDED,
  payload
});

export const deleteParticipant = (payload:any) => ({
  type: IActionTypes.DELETE_PARTICIPANT,
  payload
});

export const deleteParticipantSucceeded = (payload:any) => ({
  type: IActionTypes.DELETE_PARTICIPANT_SUCCEEDED,
  payload
});

