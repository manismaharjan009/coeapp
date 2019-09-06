import React, { Component } from "react";
import autoBind from 'auto-bind';
import { Form, Input, Select, Row, Col, Button } from 'antd';


import '../style.scss';
import { ConnectedReduxProps } from "../../../reducers";
import { setPageTitle } from "../../App/actions";
import { Members } from "../types";
import { fetchMembers, deleteMember, createMember, updateMember } from "../actions";
import EditableFormTable from '../../Common/Table/EditableTable';

interface IPropsFromState {
  members: Members[];
  form: any;
}

interface IPropsFromDispatch {
  setPageTitle: typeof setPageTitle;
  createMember: typeof createMember;
  updateMember: typeof updateMember;
  fetchMembers: typeof fetchMembers;
  deleteMember: typeof deleteMember;
}

interface IState {
  title: string;
}

type AllProps = IPropsFromState & IPropsFromDispatch & ConnectedReduxProps;

const Roles = [
  {
    _id: '1',
    name: 'User'
  },
  {
    _id: '2',
    name: 'Moderator'
  },
  {
    _id: '3',
    name: 'Admin'
  }
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'fullname',
    formElementAs: 'input',
    editable: true
  },
  {
    title: 'Role',
    dataIndex: 'role',
    formElementAs: 'select',
    selectOptions: Roles,
    optionValue: 'name',
    editable: true
  },
  {
    title: 'Description',
    dataIndex: 'description',
    formElementAs: 'input',
    editable: true
  }

];

const { TextArea } =  Input;
const {Item: FormItem} = Form;
const { Option } = Select;
// const { Item: ListItem } = List
// const { Meta: ListItemMeta } = List.Item

class MembersComponent extends Component<AllProps, IState> {
  private columns:any;

  constructor(props: AllProps) {
    super(props);
    this.state = {
      title: 'Members'
    };
    autoBind.react(this);
  }

  componentDidMount() {
    this.props.setPageTitle(this.state.title);
    if(this.props.members.length === 0) {
      this.props.fetchMembers();
    }

    this.columns = columns.map(col => {
      if(col.dataIndex === 'role') {
        return {
          ...col,
          render:(text:string) => {
            const role = Roles.find(r => r._id === text);
            return role ? role.name : '';
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
        this.props.createMember(values);
        this.props.form.resetFields();
      }
    })
  }

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    return(
      <>
        <Row gutter={16}>
          <Col sm={24} md={12} lg={16}>
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <FormItem label="Name">
                {getFieldDecorator('fullname', {
                  rules: [{
                    required: true,
                    message: 'Title must be included'
                  }]
                })(
                  <Input placeholder="Fullname" />
                )}
                
              </FormItem>
              {/* <FormItem label="Designation">
                <Select defaultValue="Frontend" style={{width: 120}}>
                  <Option value="Frontend">Frontend</Option>
                  <Option value="Progress">Progress</Option>
                  <Option value="Dot Net">Dot Net</Option>
                </Select>
              </FormItem> */}
              <FormItem label="Roles">
                {getFieldDecorator('role', {
                  rules: [{
                    required: true,
                    message: 'Title must be included'
                  }]
                })(
                  <Select style={{ width: 120 }}>
                    { Roles.map((option:any) => <Option key={option._id} value={option._id}>{option.name}</Option> )}
                  </Select>
                )}                
              </FormItem>
              {/* <FormItem>
                <Upload name="file" action={urls.profileUpload} listType="picture">
                  <Button icon="upload">Upload your picture</Button>
                </Upload>
              </FormItem> */}
              <FormItem>
                {getFieldDecorator('description')(
                  <TextArea placeholder="Describe yourself..." />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>Submit</Button>
              </FormItem>
            </Form>

          </Col>
          <Col sm={24} md={12} lg={8}>

            {/* <List 
              itemLayout="horizontal"
              dataSource={this.props.members}
              bordered
              header={<div>All Members</div>}
              className="member-lists"
              renderItem= { item => (
                <ListItem>
                  <ListItemMeta
                    avatar={<Avatar src={item.avatar}/>}
                    title={item.title}
                    description={item.description}
                  />
                </ListItem>
              )}
            /> */}

          </Col>
        </Row>
        {/* 
        //@ts-ignore */}
        {this.columns && (
          //@ts-ignore
          <EditableFormTable
            dataSource={this.props.members}
            columns={this.columns}
            updateRows={this.props.updateMember}
            deleteRows={this.props.deleteMember}
          />
        )}
      </>
    )
  }
}

export default Form.create({ name: 'member' })(MembersComponent);

/* TODO 
  Form to add members
  Table to show list of members

*/