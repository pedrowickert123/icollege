/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, Select } from 'antd';

const { Item } = Form;
const { Option } = Select;

export function FormSelect({
  name,
  label,
  type = 'text',
  placeholder,
  multiple,
  options,
  onChange,
  rules,
  ...props
}) {
  function renderOptions() {
    return options.map((item) => (
      <Option value={item.value}>{item.label}</Option>
    ));
  }

  return (
    <Item name={[name]} label={label} rules={rules} {...props}>
      <Select mode={multiple && 'multiple'} onChange={onChange}>
        {renderOptions()}
      </Select>
    </Item>
  );
}
