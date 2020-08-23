import React from 'react';
import { PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ROUTES } from '../../../../../res';
import { Button } from '../../../../../components';

export function Header() {
  return (
    <PageHeader
      ghost={false}
      title="Professores"
      subTitle="Listagem de professores"
      extra={[
        <Button to={ROUTES.TEACHER} type="primary" icon={<PlusOutlined />}>
          Novo professor
        </Button>,
      ]}
    />
  );
}
