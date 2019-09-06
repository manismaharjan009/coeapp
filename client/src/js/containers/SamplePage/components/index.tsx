import React, { Component } from 'react';
import autoBind from 'auto-bind';

import '../styles.scss';
import { setPageTitle } from "../../App/actions";

interface IPropsFromState {

}

interface IPropsFromDispatch {
  setPageTitle: typeof setPageTitle
}

interface IState {
  title: string;
}

type AllProps = IPropsFromState & IPropsFromDispatch;


class SamplePageComponent extends Component<AllProps, IState> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
      title: 'SamplePage'
    };
    autoBind.react(this);
  }

  componentDidMount() {
    this.props.setPageTitle(this.state.title);
  }

  render() {
    return (<div>SamplePage</div>);
  }
}

export default SamplePageComponent;