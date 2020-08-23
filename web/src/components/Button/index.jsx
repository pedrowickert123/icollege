import React from 'react';
import { Link } from 'react-router-dom';
import { Button as AntdButton } from 'antd';

export function Button({ children, to, ...props }) {
  if (!!to)
    return (
      <Link to={to}>
        <AntdButton {...props}>{children}</AntdButton>
      </Link>
    );

  return <AntdButton {...props}>{children}</AntdButton>;
}

export default Button;
