/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { DatePicker } from 'antd';
import 'moment/locale/pt-br';
import locale from 'antd/es/date-picker/locale/pt_BR';

export function Date({ name, label, ...props }) {
  return (
    <DatePicker locale={locale} format="DD/MM/YYYY" placeholder="" {...props} />
  );
}
