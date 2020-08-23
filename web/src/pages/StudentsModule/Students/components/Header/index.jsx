import React from 'react';
import { PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ROUTES } from '../../../../../res';
import { Button } from '../../../../../components';

export function Header() {
  return (
    <PageHeader
      ghost={false}
      title="Alunos"
      subTitle="Listagem de alunos"
      extra={[
        <Button to={ROUTES.STUDENT} type="primary" icon={<PlusOutlined />}>
          Novo aluno
        </Button>,
      ]}
    />
  );
}
