import React from 'react';
import { Form, Input, Select } from 'antd';

import { EditableContext } from './EditableTable';

const {Item: FormItem} =  Form;
const { Option } = Select;
const { TextArea } = Input;

const EditableCell = (props: any) => {
  const {
    editing,
    dataIndex,
    title,
    element,
    selectOptions,
    optionValue,
    inputType,
    record,
    index,
    ...restProps
  } =  props;

  const getElement = () => {
    if (element === 'input') {
      return <Input />
    }

    if (element === 'textarea') {
      return <TextArea rows={3}/>
    }

    if (element === 'select') {
      return (
        <Select style={{width: '100%'}}>
          {/* <Option value="user">User</Option>
          <Option value="moderator">Moderator</Option>
          <Option value="admin">Admin</Option> */}
          {selectOptions.map((option:any) => <Option key={option._id} value={option._id}>{option[optionValue]}</Option>)}
        </Select>
      )
    }
  }

  return (
    <EditableContext.Consumer>
      {(form: any) => {
        const { getFieldDecorator } =  form;
        return(
          <td {...restProps}>
            {editing ? (
              <FormItem style={{margin: 0}}>
                {getFieldDecorator(dataIndex, {
                  rules:  [{
                    required: true,
                    message: `Please Input ${title}!`
                  }],
                  initialValue: record[dataIndex]
                })(getElement())}
              </FormItem>
            ): restProps.children }
          </td>
        );
      }}
    </EditableContext.Consumer>
  )
}

export default EditableCell;