import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { PageHeader } from 'antd';
import { ROUTES } from '../../../../../res';

export function Header({ isUpdate }) {
  const history = useHistory();
  const title = isUpdate ? 'Editar turma' : 'Cadastrar turma';

  function handleBack() {
    history.push(ROUTES.CLASSES);
  }

  return <PageHeader onBack={handleBack} ghost={false} title={title} />;
}

Header.propTypes = {
  isUpdate: PropTypes.bool.isRequired,
};
