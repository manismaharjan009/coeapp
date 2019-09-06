import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { Form, Input, Button } from "antd";

import '../styles.scss';
import { setPageTitle } from "../../App/actions";
import { fetchProjects, deleteProject, createProject, updateProject } from "../actions";
import { Projects } from "../types";
import EditableFormTable from '../../Common/Table/EditableTable';


interface IPropsFromState {
  projects: Projects[];
  form: any;
}

interface IPropsFromDispatch {
  setPageTitle: typeof setPageTitle;
  createProject: typeof createProject;
  updateProject: typeof updateProject;
  fetchProjects: typeof fetchProjects;
  deleteProject: typeof deleteProject;
}

interface IState {
  title: string;
}

type AllProps = IPropsFromState & IPropsFromDispatch;

const columns = [
  {
    title: 'Title',
    dataIndex: 'name',
    editable: true
  },
  {
    title: 'Short Title',
    dataIndex: 'shortname',
    editable: true
  },
  {
    title: 'Description',
    dataIndex: 'description',
    editable: true
  }

];

const { TextArea } = Input;
const { Item: FormItem } = Form;

class ProjectComponent extends Component<AllProps, IState> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
      title: 'Projects'
    };
    autoBind.react(this);
  }

  componentDidMount() {
    this.props.setPageTitle(this.state.title);
    if (this.props.projects.length === 0) {
      this.props.fetchProjects();
    }
    // To disabled submit button at the beginning.
    // this.props.form.validateFields();
  }

  hasErrors(fieldsError: any) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit(e:any) {
    e.preventDefault();
    this.props.form.validateFields((err:any, values:any) => {
      if(!err) {
        this.props.createProject(values);
        this.props.form.resetFields();
      }
    })
  }

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    return (
    <>
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <FormItem label="Project Title">
          { getFieldDecorator('name', {
            rules:[{
              required: true,
              message: 'Title must be included'
            }]
          })(
            <Input placeholder="Project Title" />
          )}
        </FormItem>
        <FormItem label="Project Title in short">
          { getFieldDecorator('shortname', {
            rules: [{
              required: true,
              message: 'Short name must be included'
            }]
          })(
            <Input  placeholder="In Short" />
          )}
        </FormItem>
        <FormItem label="Description">
          { getFieldDecorator('description')(
            <TextArea  placeholder="Describe the project" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>Submit</Button>
        </FormItem>
      </Form>
      {/* 
        //@ts-ignore */}
      <EditableFormTable
        dataSource={this.props.projects}
        columns={columns}
        updateRows={this.props.updateProject}
        deleteRows={this.props.deleteProject}
      />
    </>
    );
  }
}

export default Form.create({ name: 'project' })(ProjectComponent);