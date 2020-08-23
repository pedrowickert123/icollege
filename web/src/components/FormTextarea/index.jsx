/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, Input } from 'antd';

const { TextArea } = Input;
const { Item } = Form;

export function FormTextarea({
  name,
  label,
  type = 'text',
  placeholder,
  rules,
  ...props
}) {
  return (
    <Item name={[name]} label={label} rules={rules} {...props}>
      <TextArea type={type} rows={4} placeholder={placeholder} />
    </Item>
  );
}
