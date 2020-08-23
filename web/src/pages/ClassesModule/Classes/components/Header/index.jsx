import React from 'react';
import { PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ROUTES } from '../../../../../res';
import { Button } from '../../../../../components';

export function Header() {
  return (
    <PageHeader
      ghost={false}
      title="Turmas"
      subTitle="Listagem de turmas"
      extra={[
        <Button to={ROUTES.CLASS} type="primary" icon={<PlusOutlined />}>
          Nova turma
        </Button>,
      ]}
    />
  );
}
