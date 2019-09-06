import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { Modal, Button } from 'antd';

import '../style.scss';
import { IErrorData } from "../types";
import { resetError } from "../actions";

interface IPropsFromState {
  error: boolean;
  errorData: IErrorData;
}

interface IPropsFromDispatch {
  resetError: typeof resetError;
}

interface IState {
}

type AllProps = IPropsFromState & IPropsFromDispatch;

class ErrorModalComponent extends Component<AllProps, IState> {
  constructor(props:AllProps) {
    super(props);
    autoBind.react(this);
  }
  hideModal() {
    this.props.resetError();
  }

  /* toggleDetail() {
    this.setState({ showDetail: !this.state.showDetail });
  } */

  render() {
    const data = this.props.errorData;
    
    return (
      <Modal
        title={
          <span className={`modal-title ${data.type}`}>
            {/* <Icon type="close" shape="circle" /> */}
            {data.title}
          </span>
        }
        visible={this.props.error}
        onOk={this.hideModal}
        onCancel={this.hideModal}
        okText="Ok"
        className="error-modal"
        footer={[
          <Button key="back" type="primary" onClick={this.hideModal}>Ok</Button>,
        ]}
      >
        <p className="error-detail">
          {data.body}
        </p>
      </Modal>
    );
  }
}

/* ErrorModal.defaultProps = {
  error: false
} */

export default ErrorModalComponent;
