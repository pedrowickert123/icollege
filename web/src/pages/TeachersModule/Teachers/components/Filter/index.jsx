import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from '../../../../../components';
import './style.scss';

export function Filter({ onSearch }) {
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');

  function handleClick() {
    onSearch({ name, document });
  }

  return (
    <div className="teachers-filter-component">
      <Input
        placeholder="Nome"
        onChange={(event) => setName(event.target.value)}
        value={name}
        className="input"
      />
      <Input
        placeholder="CPF"
        onChange={(event) => setDocument(event.target.value)}
        value={document}
        className="input"
      />
      <Button className="button" type="primary" onClick={handleClick}>
        Pesquisar
      </Button>
    </div>
  );
}

Filter.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
