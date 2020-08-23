import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';

const { Item } = Form;

export function FormButton({ type, block, loading, ...props }) {
  return (
    <Item {...props}>
      <Button type={type} htmlType="submit" block={block} loading={loading}>
        Salvar
      </Button>
    </Item>
  );
}

FormButton.propTypes = {
  type: PropTypes.string,
  block: PropTypes.bool,
  loading: PropTypes.bool,
};

FormButton.defaultProps = {
  type: 'primary',
  block: false,
  loading: false,
};
