/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Input as AntdInput } from 'antd';

export function Input({ name, label, placeholder, value, ...props }) {
  return (
    <AntdInput
      name={name}
      label={label}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
}
