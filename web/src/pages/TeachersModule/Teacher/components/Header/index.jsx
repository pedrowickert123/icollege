import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { PageHeader } from 'antd';
import { ROUTES } from '../../../../../res';

export function Header({ isUpdate }) {
  const history = useHistory();
  const title = isUpdate ? 'Editar professor' : 'Cadastrar professor';

  function handleBack() {
    history.push(ROUTES.TEACHERS);
  }

  return <PageHeader onBack={handleBack} ghost={false} title={title} />;
}

Header.propTypes = {
  isUpdate: PropTypes.bool.isRequired,
};
