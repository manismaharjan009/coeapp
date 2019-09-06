import React, { Component } from 'react';
import autoBind from 'auto-bind';
import '../style.scss';
import { hideToaster } from '../actions';

interface IPropsFromState {
  type: string;
  message: string;
  visibility: boolean;
}

interface IPropsFromDispatch {
  hideToaster: typeof hideToaster;
}

interface IState {
}

type AllProps = IPropsFromState & IPropsFromDispatch;

class ToasterComponent extends Component<AllProps, IState> {
  constructor(props: AllProps) {
    super(props);
    autoBind.react(this);
    // this.toastTimer = null;
  }

  componentWillReceiveProps(nextProps:any) {
    if (nextProps.visibility) {
      /* this.toastTimer = setTimeout(() => {
        this.props.hideToaster();
      }, 3000); */
      setTimeout(() => {
        this.props.hideToaster();
      }, 3000);
    }
  }

  close() {
    this.props.hideToaster();
  }
  render() {
    const { type, message, visibility } = this.props;
    return (
      <div
        className={`toaster ${type} ${
          visibility ? 'shown' : ''
        }`}
      >
        <span className="message">{message}</span>
        <button title="Close" className="close" onClick={this.close}>
          <i className="fa fa-times" />
        </button>
      </div>
    );
  }
}

export default ToasterComponent;

/* Toaster.defaultProps = {
  message: '',
  type: 'info',
  visibility: false 
}
Toaster.propTypes = {
  hideToaster: PropTypes.func.isRequired,
  type: PropTypes.string, 
  message: PropTypes.string,
  visibility: PropTypes.bool
}; */
