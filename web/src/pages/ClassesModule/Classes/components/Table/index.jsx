/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
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
      } = await api.delete(`classes/${id}`);

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
      <Column title="Código" dataIndex="id" key="id" />
      <Column
        title="Data de início"
        dataIndex="start_date"
        key="start_date"
        render={(text, item) => moment(item.start_date).format('DD/MM/YYYY')}
      />
      <Column
        title="Disciplina"
        dataIndex="subject"
        key="subject"
        render={(text, item) => item.subject.name}
      />
      <Column
        title="Professor"
        dataIndex="teacher"
        key="teacher"
        render={(text, item) => item.teacher.name}
      />
      <Column
        title="Turno"
        dataIndex="period"
        key="period"
        render={(text, item) =>
          item.period === 'M'
            ? 'Manhã'
            : item.period === 'T'
            ? 'Tarde'
            : 'Noite'
        }
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
              to={`${ROUTES.CLASS}/${item.id}`}
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
