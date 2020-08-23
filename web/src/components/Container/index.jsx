import React from 'react';
import './style.scss';

export function Container({ children, noPadding }) {
  return (
    <div className={`container-component ${noPadding ? '-noPadding' : ''}`}>
      {children}
    </div>
  );
}
