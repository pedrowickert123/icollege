/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form as AntdForm } from 'antd';

export function Form({ children, validation, onSubmit, ...props }) {
  function handleSubmit(values) {
    onSubmit(values);
  }

  return (
    <AntdForm onFinish={handleSubmit} validateMessages={validation} {...props}>
      {children}
    </AntdForm>
  );
}
