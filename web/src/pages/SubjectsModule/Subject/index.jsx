import React from 'react';
import PropTypes from 'prop-types';
import { Header, FormComponent } from './components';

export function Subject({
  match: {
    params: { id },
  },
}) {
  return (
    <div className="subject-component">
      <Header isUpdate={!!id} />
      <FormComponent id={id} />
    </div>
  );
}

Subject.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
