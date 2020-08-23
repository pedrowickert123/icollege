/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, DatePicker } from 'antd';
import 'moment/locale/pt-br';
import locale from 'antd/es/date-picker/locale/pt_BR';

const { Item } = Form;

export function FormDate({ name, label, rules, ...props }) {
  return (
    <Item name={[name]} label={label} rules={rules} {...props}>
      <DatePicker locale={locale} format="DD/MM/YYYY" placeholder="" />
    </Item>
  );
}
