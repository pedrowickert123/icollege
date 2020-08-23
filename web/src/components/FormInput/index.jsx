/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, Input } from 'antd';

const { Item } = Form;

export function FormInput({
  name,
  label,
  type = 'text',
  placeholder,
  rules,
  ...props
}) {
  return (
    <Item name={[name]} label={label} rules={rules} {...props}>
      <Input type={type} placeholder={placeholder} />
    </Item>
  );
}
