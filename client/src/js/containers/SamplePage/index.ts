import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SamplePageComponent from './components';

import {  } from './actions';
import { setPageTitle } from '../App/actions'
import { IAppState } from "../../reducers/index";

const mapStateToProps = (state: IAppState) => ({
  pageTitle: state.app.pageTitle,
});

const mapDispatchToProps = {
  setPageTitle
};

// @ts-ignore
const SamplePage = withRouter(connect(mapStateToProps, mapDispatchToProps)(SamplePageComponent));
export default SamplePage;