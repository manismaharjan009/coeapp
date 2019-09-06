import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import autoBind from "auto-bind";
import { Spin } from "antd";

import { getViewport } from '../../../utils';
import PrivateRoute from '../../Common/PrivateRoute';
import LayoutContainer from './layout';

// app styles
import '../style.scss';

import ErrorModal from '../../Common/ErrorHandler';
import Toaster from '../../Common/Toaster';
import Login from "../../Login";
import Dashboard from "../../Dashboard";
import Members from "../../Members";
import ProjectUpdate from '../../ProjectUpdates';
import Projects from '../../Projects';
import Participate from '../../Participate';
import Activity from '../../Activity';
import { ConnectedReduxProps } from "../../../reducers";
import { logout } from "../actions";

interface IPropsFromState {
  pageTitle: string;
  authorized: boolean;
  username: string;
  isLoading: number;
}

interface IPropsFromDispatch {
  location: () => void;
  logout: typeof logout
  updateViewport: ({width, height}: {width:number, height:number}) => void;
}

interface IState{

}

type AllProps = IPropsFromState & IPropsFromDispatch & ConnectedReduxProps


class AppComponent extends Component<AllProps, IState> {

  constructor(props: AllProps) {
    super(props);
    this.state={
      // drawerOpen: false,
      // collapsed: true,
      // current: 'dashboard',
    };
    autoBind.react(this);
  }

  componentDidMount(){
    window.addEventListener('resize', this.resizeHandler, false);
    // initial call to get viewport size
    this.resizeHandler();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler, false);
  }

  updateDimension() {
    const viewport = getViewport();
    this.props.updateViewport(viewport);
  }

  resizeHandler() {
    // @ts-ignore
    clearTimeout(this.resizeTracker);
    // @ts-ignore
    this.resizeTracker = setTimeout(this.updateDimension, 16);
  }

  /* resetMenuCollapse() {
    // this.setState({ collapsed: true });
  }
  handleClick(e) {
    this.setState({ 
      current: e.key,
      // collapsed: true // TODO Uncomment this later
    })
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  openDrawer() {
    this.setState({ drawerOpen: true });
  }
  closeDrawer() {
    this.setState({ drawerOpen: false });
  } */
  
  render() {
    const { username, authorized, pageTitle, location, logout, isLoading } = this.props;
    return (      
      <Spin tip="Loading..." spinning={isLoading > 0}> 
        <LayoutContainer 
          username={username} 
          authorized={authorized} 
          pageTitle={pageTitle} 
          location={location} 
          logout={logout}
        >
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact isAuthentic={authorized} path="/" component={Dashboard} />
            <PrivateRoute exact isAuthentic={authorized} path="/members" component={Members} />
            <PrivateRoute exact isAuthentic={authorized} path="/projects" component={Projects} />
            <PrivateRoute exact isAuthentic={authorized} path="/projectupdate" component={ProjectUpdate} />
            <PrivateRoute exact isAuthentic={authorized} path="/participate" component={Participate} />
            <PrivateRoute exact isAuthentic={authorized} path="/activity" component={Activity} />
          </Switch>
          
        </LayoutContainer>
        <Toaster />
        <ErrorModal />
      </Spin>  
    );
  }
}

export default AppComponent;