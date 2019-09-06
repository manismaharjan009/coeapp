import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginComponent from './components';

import {  } from './actions';
import { login } from '../App/actions';
import { IAppState } from "../../reducers/index";

const mapStateToProps = (state: IAppState) => ({
  authorized: state.app.authorized,
  isLoading: state.app.isLoading
});

const mapDispatchToProps = {
  login
};

// @ts-ignore
const Login = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));
export default Login;