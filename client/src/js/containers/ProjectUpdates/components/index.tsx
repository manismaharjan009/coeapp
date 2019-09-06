import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { Form, Input, Select, Button } from 'antd';

import '../styles.scss';
import { setPageTitle } from "../../App/actions";

import { Members } from '../../Members/types';
import { Projects } from '../../Projects/types';
import { ProjectUpdate } from '../../ProjectUpdates/types';
import { fetchMembers } from '../../Members/actions';
import { fetchProjects } from '../../Projects/actions';
import { createProjectUpdate, fetchProjectUpdates, updateProjectUpdate, deleteProjectUpdate } from '../actions';
import EditableFormTable from '../../Common/Table/EditableTable';

interface IPropsFromState {
  members: Members[];
  projects: Projects[];
  projectUpdates: ProjectUpdate[];
  form: any;
}

interface IPropsFromDispatch {
  setPageTitle: typeof setPageTitle
  fetchMembers: typeof fetchMembers,
  fetchProjects: typeof fetchProjects;
  fetchProjectUpdates: typeof fetchProjectUpdates;
  createProjectUpdate: typeof createProjectUpdate;
  updateProjectUpdate: typeof updateProjectUpdate;
  deleteProjectUpdate: typeof deleteProjectUpdate;
}

interface IState {
  title: string;
}

type AllProps = IPropsFromState & IPropsFromDispatch;

const { TextArea } = Input;
const { Item: FormItem } = Form;
const { Option } = Select;

const columns = [
  {
    title: 'Name',
    dataIndex: 'memberId',
    width: '100px'
    // render: (text:string) => {
    //   const member = props.members.find(m => m._id === text);
    //   return member ? member.fullname : '';
    // }
  },
  {
    title: 'Project',
    dataIndex: 'projectId',
    formElementAs: 'select',
    editable: true,
    width: '100px'
    // render: (text:string) => {
    //   const project = props.projects.find(m => m._id === text);
    //   return project ? project.name : '';
    // }
  },
  {
    title: 'Updates',
    dataIndex: 'updates',
    editable: true,
    formElementAs: 'textarea',
    width: '20%'
  },
  {
    title: 'Accomplishment',
    dataIndex: 'accomplishment',
    editable: true,
    formElementAs: 'textarea',
    width: '20%'
  },
  {
    title: 'Problems',
    dataIndex: 'problems',
    editable: true,
    formElementAs: 'textarea',
    width: '20%'
  }
];

class ProjectUpdateComponent extends Component<AllProps, IState> {
  private columns: any;
  constructor(props: AllProps) {
    super(props);
    this.state = {
      title: 'Project Update',
    };
    autoBind.react(this);

  }
  
  componentDidMount() {
    const {members, projects} = this.props;
    this.props.setPageTitle(this.state.title);
    if (!!members) this.props.fetchMembers();
    if (!!projects) this.props.fetchProjects();
    this.props.fetchProjectUpdates();

    this.columns = columns.map(col => {
      if(col.dataIndex == 'memberId') {
        return {
          ...col,
          render: (text: string) => {
            const member = members.find(m => m._id === text);
            return member ? member.fullname : '';
          }
        }
      }

      if (col.dataIndex == 'projectId') {
        return {
          ...col,
          selectOptions: projects,
          optionValue: 'name',
          render: (text: string) => {
            const project = projects.find(m => m._id === text);
            return project ? project.name : '';
          }
        }
      }


      return col;
    })
  }

  hasErrors(fieldsError: any) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.props.createProjectUpdate(values);
        this.props.form.resetFields();
      }
    });
  }

  render() {
    const { members, projects, projectUpdates, updateProjectUpdate, deleteProjectUpdate } =  this.props;
    const { getFieldDecorator, getFieldsError } = this.props.form;

    return (
      <>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <FormItem label="Member">
          { getFieldDecorator('memberId', {
              rules: [{
                required: true,
                message: 'Member must be selected'
              }]
          })(
            <Select>
              { members.map((member) => (
                <Option key={member._id} value={member._id}>{member.fullname}</Option>
              ))}
            </Select>
          )}          
          </FormItem>
          <FormItem label="Project">
            { getFieldDecorator('projectId', {
              rules: [{
                required: true,
                message: 'Project must be selected'
              }]
            })(
              <Select>
                {projects.map((project) => (
                  <Option key={project._id} value={project._id}>{project.name}-{project.shortname}</Option>
                ))}
              </Select>
            )}            
          </FormItem>
          <FormItem label="Updates">
            { getFieldDecorator('updates', {
              rules: []
            })(
              <TextArea placeholder="Biweekly Updates"></TextArea>
            )}
          </FormItem>
          <FormItem label="Accomplishment">
            {getFieldDecorator('accomplishment', {
              rules: []
            })(
              <TextArea placeholder="Accomplishment or what you discovered recently"></TextArea>
            )}
          </FormItem>
          <FormItem label="Problems">
            {getFieldDecorator('problems', {
              rules: []
            })(
              <TextArea placeholder="Problems or complication you faced"></TextArea>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>Submit</Button>
          </FormItem>
        </Form>
        
        {this.columns && (
          //@ts-ignore
          <EditableFormTable 
            columns={this.columns}
            dataSource={projectUpdates}
            updateRows={updateProjectUpdate}
            deleteRows={deleteProjectUpdate}
          />

        )}
      </>
    );
  }
}

export default Form.create({ name: 'projectUpdate' })(ProjectUpdateComponent);