import React, { Component } from 'react';
import autoBind from 'auto-bind';
import {  Input, Button, Form, Select } from 'antd';

import '../styles.scss';
import { setPageTitle } from "../../App/actions";
import EditableFormTable from '../../Common/Table/EditableTable';
import { Members } from "../../Members/types";
import { fetchMembers } from '../../Members/actions';
import { Participate } from "../types";
import { fetchParticipants, createParticipant, updateParticipant, deleteParticipant } from '../actions';

interface IPropsFromState {
  members: Members[]
  participants: Participate[]
}

interface IPropsFromDispatch {
  setPageTitle: typeof setPageTitle;
  fetchMembers: typeof fetchMembers;
  fetchParticipants: typeof fetchParticipants;
  createParticipant: typeof createParticipant;
  updateParticipant: typeof updateParticipant;
  deleteParticipant: typeof deleteParticipant;
}

interface IState {
  title: string;
}

type AllProps = IPropsFromState & IPropsFromDispatch;

const dataSource = [
  {
    key: '1',
    presenter: 'one',
    topic: 'one',
    description: 'Describe here...',
    reference: 'one',
    status: 'Requested - for user',
    submitted: '2019-08-01'
  },
  {
    key: '11',
    presenter: 'two',
    topic: 'two',
    description: 'Describe here...',
    reference: 'two',
    status: 'Picked - for admin/mod',
    submitted: '2019-08-01'
  },
  {
    key: '111',
    presenter: 'three',
    topic: 'three',
    description: 'Describe here...',
    reference: 'three',
    status: 'Presented - wont be show here',
    submitted: '2019-08-01'
  }
]

const columns = [
  {
    title:'Presenter',
    dataIndex: 'memberId',
    formElementAs: 'select'
  },
  {
    title:'Topic',
    dataIndex: 'topic',
    editable: true
  },
  {
    title:'Description',
    dataIndex: 'description',
    editable: true,
    formElementAs: 'textarea'
  },
  {
    title: 'Reference',
    dataIndex: 'reference',
    editable: true
  },
  {
    title: 'Status',
    dataIndex: 'status',
    editable: false
  },
  {
    title: 'Submitted Date',
    dataIndex: 'submitted',
    render: () => Date.now()
  }
];

const {Item:  FormItem} = Form;
const { TextArea } = Input;
const { Option } = Select;

class ParticipateComponent extends Component<AllProps, IState> {
  private columns: any;

  constructor(props: AllProps) {
    super(props);
    this.state = {
      title: 'Participation'
    };
    autoBind.react(this);
  }

  componentDidMount() {
    const { members } =this.props;
    this.props.setPageTitle(this.state.title);
    if(!!members) {
      this.props.fetchMembers()
    };
    this.props.fetchParticipants();

    this.columns = columns.map(col => {
      if (col.dataIndex == 'memberId') {
        return {
          ...col,
          render: (text: string) => {
            const member = members.find(m => m._id === text);
            return member ? member.fullname : '';
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
        values.status = 'Requested';
        this.props.createParticipant(values);
        this.props.form.resetFields();
      }
    })
  }

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const { participants, updateParticipant, deleteParticipant} = this.props;
    return(
      <>
        <Form className="participation" onSubmit={this.handleSubmit}>
          <FormItem label="Presenter">
            {getFieldDecorator('memberId', {
              rules: [{
                required: true,
                message: "Presenter is not selected"
              }]
            })(
              <Select>
                {this.props.members.map(m => (
                  <Option key={m._id} value={m._id}>{m.fullname}</Option>
                ))}
              </Select>
            )}
          </FormItem>
          <FormItem label="Topic">
            { getFieldDecorator('topic', {
              rules: [{
                required: true,
                message: "Presenter is not selected"
              }]
            })(
              <Input placeholder="Add your topic" />
            )}
          </FormItem>
          <FormItem label="Description">
            {getFieldDecorator('description', {
              rules: []
            })(
              <TextArea rows={2} />
            )}
          </FormItem>
          <FormItem label="Reference">
            {getFieldDecorator('reference', {
              rules: []
            })(
              <Input placeholder="Paste your link here"/>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>Participate</Button>
          </FormItem>
        </Form>
        
        {this.columns && (
          //@ts-ignore
          <EditableFormTable 
            columns={this.columns}
            dataSource={participants}
            updateRows={updateParticipant}
            deleteRows={deleteParticipant}
          />
        )}
      </>
    )
  }
}

export default Form.create({name: 'participate'})(ParticipateComponent);