import React, { createContext, Component } from 'react';
import { Table, Button, Popconfirm, Form} from 'antd';
import { ColumnProps } from 'antd/es/table';

// import { EditableFormRow } from './EditableRow';
import EditableCell from './EditableCell';

export const EditableContext = createContext({ form: {} });

interface ColumnPropsEditable<T> extends ColumnProps<T> {
  editable?: boolean;
}

interface IPropsFromState {
  dataSource: [],
  columns: []
}

interface IPropsFromDispatch {
  deleteRows: any;
  updateRows: any;
}

interface IState {
  editingKey: any
}

type AllProps = IPropsFromState & IPropsFromDispatch;

class EditableTable extends Component<AllProps, IState> {
  
  private columns: Array<ColumnPropsEditable<any>>;

  constructor(props: AllProps) {
    super(props);

    this.state = {
      editingKey: ''
    }

    this.columns = [...props.columns, 
      {
        title: '',
        dataIndex: '',
        width: '100px',
        render: (text: string, record: any) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);

          return(
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <Button type="primary" size="small"
                        style={{marginRight: '10px', marginBottom: '10px'}}
                        onClick={() => this.save(form, record._id)}
                      >Save</Button>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel()}>
                    <Button type="danger" size="small">Cancel</Button>
                  </Popconfirm>
                </span>
              ): (
                <span>
                  <Button type="primary" size="small"
                    disabled={editingKey !== ''}
                    style={{ marginRight: '10px', marginBottom: '10px' }}
                    onClick={() => this.edit(record._id)}
                  >Edit</Button>
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record._id)}>
                    <Button type="danger" size="small">Delete</Button>
                  </Popconfirm>
                </span>
              )}
            </div>
          );
        }
      }
    ]
  }

  isEditing = (record: any) => record._id === this.state.editingKey;

  edit(key: any) {
    this.setState({ editingKey: key });
  }
  
  cancel() {
    this.setState({editingKey: ''})
  }

  handleDelete(id:string) {
    this.props.deleteRows({id});
  }

  save(form: any, id: any) {
    form.validateFields((error: any, row: any) => {
      if (error) {
        return;
      }
      const newData = [...this.props.dataSource];
      const index = newData.findIndex(item => id === item._id);
      if (index > -1) {
        // const item = newData[index];
        // newData.splice(index, 1, {
        //   ...item,
        //   ...row
        // });
        // this.setState({ data: newData, editingKey: '' });

        this.props.updateRows({id, payload: row})
      } else {
        // newData.push(row);
        // this.setState({ data: newData, editingKey: '' });
      }
      this.setState({ editingKey: '' });
    });
  }

  render() {
    const components = {
      body: {
        // row: EditableFormRow,
        cell: EditableCell
      }
    }
  
    const columns = this.columns.map((col:any) => {
      let element = '';

      if(!col.editable) {
        return col;
      }

      if (col.formElementAs) {
        element = col.formElementAs;
      }
      else {
        element = 'input';
      }

      return {
        ...col,
        onCell: (record: any) => ({
          record,
          // inputType: col.dataIndex === 'age' ? 'number' : 'text',
          inputType: 'text',
          element,
          selectOptions: col.selectOptions,
          optionValue: col.optionValue,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      }
    });
    // console.log(this.props.dataSource)
    return(
      <EditableContext.Provider value={this.props.form}>
        <Table 
          rowKey={record => record._id}
          components={components}
          bordered={true}
          columns={columns}
          pagination={false}
          dataSource={this.props.dataSource}
        />
      </EditableContext.Provider>
    );
  }
}

// const EditableFormTable = Form.create()(EditableTable);
export default Form.create()(EditableTable);

/* NOTE 
  http://www.codewr.com/view/NODEJS-Mongoose/example-delete-document-in-mongodb-with-nodejs-use-mongoose
*/
