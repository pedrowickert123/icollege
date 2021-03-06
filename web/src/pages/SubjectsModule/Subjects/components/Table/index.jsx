import React from 'react';
import PropTypes from 'prop-types';
import { Table as AntdTable, Modal, notification } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { api } from '../../../../../services';
import { ROUTES } from '../../../../../res';
import { Button } from '../../../../../components';

const { confirm } = Modal;
const { Column } = AntdTable;

export function Table({ dataSource, onDelete }) {
  async function handleConfirm(id) {
    try {
      const {
        data: { message },
      } = await api.delete(`courses/${id}`);

      notification.open({
        message: 'Sucesso!',
        description: message,
      });

      onDelete();
    } catch (err) {
      const { message } = err.response.data;

      notification.open({
        message: 'Sucesso!',
        description: message,
      });
    }
  }

  function handleOpenDelete(id) {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: 'Você tem certeza que deseja efetuar esta ação?',
      okText: 'Confirmar',
      cancelText: 'Cancelar',
      onOk() {
        handleConfirm(id);
      },
    });
  }

  return (
    <AntdTable dataSource={dataSource}>
      <Column title="Nome" dataIndex="name" key="name" />
      <Column
        title="Curso"
        dataIndex="course"
        key="course"
        render={(text, item) => item.course.name}
      />
      <Column
        title=""
        dataIndex="action"
        key="action"
        render={(text, item) => (
          <>
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              to={`${ROUTES.SUBJECT}/${item.id}`}
            />
            &nbsp;&nbsp;
            <Button
              type="danger"
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => handleOpenDelete(item.id)}
            />
          </>
        )}
      />
    </AntdTable>
  );
}

Table.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
