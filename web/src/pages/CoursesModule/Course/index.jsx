import React from 'react';
import PropTypes from 'prop-types';
import { Header, FormComponent } from './components';

export function Course({
  match: {
    params: { id },
  },
}) {
  return (
    <div className="course-component">
      <Header isUpdate={!!id} />
      <FormComponent id={id} />
    </div>
  );
}

Course.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
