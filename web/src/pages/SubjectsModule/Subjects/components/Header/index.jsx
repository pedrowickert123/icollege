import React from 'react';
import { PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ROUTES } from '../../../../../res';
import { Button } from '../../../../../components';

export function Header() {
  return (
    <PageHeader
      ghost={false}
      title="Disciplinas"
      subTitle="Listagem de disciplina"
      extra={[
        <Button to={ROUTES.SUBJECT} type="primary" icon={<PlusOutlined />}>
          Nova displina
        </Button>,
      ]}
    />
  );
}
