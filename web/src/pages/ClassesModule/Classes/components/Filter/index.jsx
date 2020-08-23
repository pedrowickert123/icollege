import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Date, Select } from '../../../../../components';
import './style.scss';

export function Filter({ onSearch }) {
  const [startDate, setStartDate] = useState('');
  const [id, setId] = useState('');
  const [period, setPeriod] = useState('');

  function handleClick() {
    onSearch({ startDate, id, period });
  }

  return (
    <div className="classes-filter-component">
      <Date
        onChange={(event) => setStartDate(event.format('YYYY-MM-DD'))}
        className="input"
      />
      <Input
        placeholder="Código"
        onChange={(event) => setId(event.target.value)}
        className="input"
      />
      <Select
        placeholder="Período"
        onChange={(event) => setPeriod(event)}
        options={[
          { value: 'M', label: 'Manhã' },
          { value: 'T', label: 'Tarde' },
          { value: 'N', label: 'Noite' },
        ]}
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
