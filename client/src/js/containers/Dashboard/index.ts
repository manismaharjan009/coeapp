import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DashboardComponent from './components';

import {
  
} from './actions';
import { setPageTitle } from '../App/actions'
import { IAppState } from "../../reducers/index";

const mapStateToProps = (state: IAppState) => ({
  pageTitle: state.app.pageTitle,
});

const mapDispatchToProps = {
  setPageTitle
};

// @ts-ignore
const Dashboard = withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardComponent));
export default Dashboard;
