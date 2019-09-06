import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProjectUpdateComponent from './components';

import { fetchMembers } from '../Members/actions';
import { fetchProjects } from '../Projects/actions';
import { 
  createProjectUpdate, 
  fetchProjectUpdates, 
  updateProjectUpdate, 
  deleteProjectUpdate 
} from "./actions";
import { setPageTitle } from '../App/actions'
import { IAppState } from "../../reducers/index";

const mapStateToProps = (state: IAppState) => ({
  pageTitle: state.app.pageTitle,
  members: state.members.members,
  projects: state.projects.projects,
  projectUpdates: state.projectUpdates.projectUpdates,
});

const mapDispatchToProps = {
  setPageTitle,
  fetchMembers,
  fetchProjects,
  fetchProjectUpdates,
  createProjectUpdate,
  updateProjectUpdate,
  deleteProjectUpdate
};

// @ts-ignore
const ProjectUpdate = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectUpdateComponent));
export default ProjectUpdate;