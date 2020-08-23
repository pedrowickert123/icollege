import React from 'react';
import PropTypes from 'prop-types';
import { Header, FormComponent } from './components';

export function Student({
  match: {
    params: { id },
  },
}) {
  return (
    <div className="student-component">
      <Header isUpdate={!!id} />
      <FormComponent id={id} />
    </div>
  );
}

Student.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
