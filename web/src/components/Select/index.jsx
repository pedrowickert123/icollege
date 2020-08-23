/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Select as AntdSelect } from 'antd';

const { Option } = AntdSelect;

export function Select({ name, placeholder, options, ...props }) {
  function renderOptions() {
    return options.map((item) => (
      <Option value={item.value}>{item.label}</Option>
    ));
  }

  return (
    <AntdSelect name={name} placeholder={placeholder} {...props}>
      {renderOptions()}
    </AntdSelect>
  );
}
