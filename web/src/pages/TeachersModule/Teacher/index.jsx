import React from 'react';
import PropTypes from 'prop-types';
import { Header, FormComponent } from './components';

export function Teacher({
  match: {
    params: { id },
  },
}) {
  return (
    <div className="teacher-component">
      <Header isUpdate={!!id} />
      <FormComponent id={id} />
    </div>
  );
}

Teacher.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
