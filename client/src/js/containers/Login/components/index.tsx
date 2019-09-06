import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import autoBind from 'auto-bind';
import { Form, Input, Button, Icon, Checkbox } from 'antd';

import '../styles.scss';
import { login } from '../../App/actions';   

interface IPropsFromState {
  authorized: boolean;
  isLoading: number;
}

interface IPropsFromDispatch {
  login: typeof login
}

interface IState {
  isSubmitted: false;
}

type AllProps = IPropsFromState & IPropsFromDispatch;

const { Item: FormItem } = Form;

class LoginComponent extends Component<AllProps, IState> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
      isSubmitted: false
    };
    autoBind.react(this);
  } 

  componentDidUpdate() {
    if (this.props.isLoading === 0 && !this.props.authorized && this.state.isSubmitted) {
      this.setState({ isSubmitted: false});
      this.props.form.resetFields();
    }
  }

  handleSubmit(e)  {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err) {
        this.props.login(values);
        this.setState({ isSubmitted: true })
        // this.props.form.resetFields();
      }
    });
  }
 
  render() {
    const { authorized } =  this.props;
    const { getFieldDecorator } =  this.props.form;
    if(authorized) {
      return <Redirect to="/" />
    }
    return (
      <div className="form-center">
        <Form onSubmit={this.handleSubmit} className="login-form" autoComplete="off">
          <h2 className="text-center">Login</h2>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{
                required: true,
                message: 'Username required.'
              }]
            })(
              <Input 
                prefix={<Icon type="user"/>}
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{
                required: true,
                message: 'Password required.'
              }]
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"               
                placeholder="Password"
              />
            )}
          </FormItem>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({name: 'login'})(LoginComponent);