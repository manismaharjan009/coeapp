import React from 'react';
import { Form } from 'antd';

import { EditableContext } from './EditableTable';

const EditableRow = ({ form, index, ...props }: any) => {
  console.log(form);
  return (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>

  )
};

export const EditableFormRow = Form.create()(EditableRow);