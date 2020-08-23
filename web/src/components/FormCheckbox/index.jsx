/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, Checkbox } from 'antd';

const { Item } = Form;

export function FormCheckbox({ name, label, placeholder, rules, ...props }) {
  return (
    <Item
      name={[name]}
      label={label}
      rules={rules}
      valuePropName="checked"
      {...props}
    >
      <Checkbox />
    </Item>
  );
}
