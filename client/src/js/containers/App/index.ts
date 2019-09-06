import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AppComponent from './components';

import {
  updateViewport,
  login,
  logout
} from './actions';
import { IAppState } from "../../reducers/index";

const mapStateToProps = (state: IAppState) => ({
  isLoading: state.app.isLoading,
  pageTitle: state.app.pageTitle,
  username: state.app.username,
  authorized: state.app.authorized
});

const mapDispatchToProps = {
  updateViewport,
  login,
  logout
};

// @ts-ignore
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppComponent));
export default App;
