import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProjectComponent from './components';

import { setPageTitle } from '../App/actions'
import { fetchProjects, createProject, deleteProject, updateProject } from './actions';
import { IAppState } from "../../reducers/index";

const mapStateToProps = (state: IAppState) => ({
  pageTitle: state.app.pageTitle,
  projects: state.projects.projects,
});

const mapDispatchToProps = {
  setPageTitle,
  fetchProjects,
  createProject,
  deleteProject,
  updateProject
};

//@ts-ignore
const Projects = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectComponent));
export default Projects;