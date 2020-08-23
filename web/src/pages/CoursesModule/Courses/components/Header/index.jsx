import React from 'react';
import { PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ROUTES } from '../../../../../res';
import { Button } from '../../../../../components';

export function Header() {
  return (
    <PageHeader
      ghost={false}
      title="Cursos"
      subTitle="Listagem de cursos"
      extra={[
        <Button to={ROUTES.COURSE} type="primary" icon={<PlusOutlined />}>
          Novo curso
        </Button>,
      ]}
    />
  );
}
