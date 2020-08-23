import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth';
import { Form, FormInput, FormButton } from '../../components';
import { FORM_MESSAGES } from './consts';
import './style.scss';

export function Auth() {
  const { isLoading } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();

  function handleSubmit(values) {
    const { username, password } = values;
    dispatch(signInRequest(username, password));
  }

  return (
    <div className="auth-component">
      <div className="card">
        <h4 className="title">Acessar iCollege</h4>
        <div className="form">
          <Form onSubmit={handleSubmit} validation={FORM_MESSAGES}>
            <FormInput
              name={['username']}
              placeholder="Usuário"
              rules={[{ required: true }]}
            />
            <FormInput
              type="password"
              name={['password']}
              placeholder="Senha"
              rules={[{ required: true }]}
            />
            <FormButton block loading={isLoading}>
              Salvar
            </FormButton>
          </Form>
        </div>
      </div>
    </div>
  );
}
