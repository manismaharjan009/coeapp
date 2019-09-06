import { takeLatest, all } from 'redux-saga/effects';
// import { IActionTypes as ProcessingActions} from '../containers/Processing/actions';

// import { IActionTypes } from '../containers/Members/actions';
import * as membersSaga from '../containers/Members/saga';
import * as loginSaga from '../containers/Login/saga';
import * as projectsSaga from '../containers/Projects/saga';
import * as projectUpdatesSaga from '../containers/ProjectUpdates/saga';
import * as participantSaga from '../containers/Participate/saga';

export default function* rootSaga() {
  yield all([
    takeLatest("LOGIN", loginSaga.login),

    takeLatest('FETCH_MEMBERS', membersSaga.fetchMembers),
    takeLatest('CREATE_MEMBER', membersSaga.createMember),
    takeLatest('UPDATE_MEMBER', membersSaga.updateMember),
    takeLatest('DELETE_MEMBER', membersSaga.deleteMember),

    takeLatest('FETCH_PROJECTS', projectsSaga.fetchProjects),
    takeLatest('CREATE_PROJECT', projectsSaga.createProject),
    takeLatest('UPDATE_PROJECT', projectsSaga.updateProject),
    takeLatest('DELETE_PROJECT', projectsSaga.deleteProject),

    takeLatest('FETCH_PROJECTUPDATES', projectUpdatesSaga.fetchProjectUpdates),
    takeLatest('CREATE_PROJECTUPDATE', projectUpdatesSaga.createProjectUpdate),
    takeLatest('UPDATE_PROJECTUPDATE', projectUpdatesSaga.updateProjectUpdate),
    takeLatest('DELETE_PROJECTUPDATE', projectUpdatesSaga.deleteProjectUpdate),

    takeLatest('FETCH_PARTICIPANTS', participantSaga.fetchParticipants),
    takeLatest('CREATE_PARTICIPANT', participantSaga.createParticipant),
    takeLatest('UPDATE_PARTICIPANT', participantSaga.updateParticipant),
    takeLatest('DELETE_PARTICIPANT', participantSaga.deleteParticipant),
  ]);
}

