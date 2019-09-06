import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MembersComponent from './components';

import {
  fetchMembers,
  createMember,
  updateMember,
  deleteMember
} from './actions';
import { setPageTitle } from '../App/actions'
import { IAppState } from "../../reducers/index";

const mapStateToProps = (state: IAppState) => ({
  pageTitle: state.app.pageTitle,
  members: state.members.members,
});

const mapDispatchToProps = {
  setPageTitle,
  fetchMembers,
  createMember,
  updateMember,
  deleteMember
};

// @ts-ignore
const Members = withRouter(connect(mapStateToProps, mapDispatchToProps)(MembersComponent));
export default Members;
