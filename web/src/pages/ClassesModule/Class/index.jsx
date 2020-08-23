import React from 'react';
import PropTypes from 'prop-types';
import { Header, FormComponent } from './components';

export function Class({
  match: {
    params: { id },
  },
}) {
  return (
    <div className="class-component">
      <Header isUpdate={!!id} />
      <FormComponent id={id} />
    </div>
  );
}

Class.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
