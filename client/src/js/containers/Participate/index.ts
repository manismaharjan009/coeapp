import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ParticipateComponent from './components';

import { IAppState } from "../../reducers/index";
import { setPageTitle } from '../App/actions'
import { fetchMembers } from "../Members/actions";
import {
  fetchParticipants,
  fetchParticipantById,
  createParticipant,
  updateParticipant,
  deleteParticipant 
} from './actions';


const mapStateToProps = (state: IAppState) => ({
  pageTitle: state.app.pageTitle,
  members: state.members.members,
  participants: state.participants.participants
});

const mapDispatchToProps = {
  setPageTitle,
  fetchMembers,
  fetchParticipants,
  fetchParticipantById,
  createParticipant,
  updateParticipant,
  deleteParticipant
};

// @ts-ignore
const Participate = withRouter(connect(mapStateToProps, mapDispatchToProps)(ParticipateComponent));
export default Participate;