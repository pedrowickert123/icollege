import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import { api } from '../../../../../services';
import { ROUTES } from '../../../../../res';
import {
  Form,
  FormInput,
  FormButton,
  FormDate,
  FormSelect,
} from '../../../../../components';
import { FORM_LAYOUT, FORM_BUTTON_LAYOUT, FORM_MESSAGES } from './consts';
import './style.scss';

export function FormComponent({ id }) {
  const [values, setValues] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function loadStudent() {
      try {
        const { data } = await api.get(`students/${id}`);

        setValues({
          ...data,
          birth_date: moment(data.birth_date),
        });
      } catch (err) {
        const { message } = err.response.data;

        notification.open({
          message: 'Opsss!',
          description: message,
        });
      }
    }

    if (!!id) {
      loadStudent();
    }
  }, [id]);

  async function handleSubmit(newValues) {
    try {
      setIsLoading(true);

      let message;

      if (!!id) {
        const { data } = await api.put(`students/${id}`, newValues);
        message = data.message;
      } else {
        const { data } = await api.post('students', newValues);
        message = data.message;
      }

      notification.open({
        message: 'Sucesso!',
        description: message,
      });

      history.push(ROUTES.STUDENTS);
    } catch (err) {
      notification.open({
        message: 'Opsss!',
        description: 'Houve um erro, por favor tente novamente',
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (!!id && !values) return null;

  return (
    <div className="student-form-component">
      <Form
        onSubmit={handleSubmit}
        initialValues={values}
        validation={FORM_MESSAGES}
        {...FORM_LAYOUT}
      >
        <FormInput name={['name']} label="Nome" rules={[{ required: true }]} />
        <FormInput
          name={['document']}
          label="CPF"
          rules={[{ required: true }]}
        />
        <FormDate
          name={['birth_date']}
          label="Data de nascimento"
          rules={[{ required: true }]}
        />
        <FormSelect
          name={['gender']}
          label="Sexo"
          options={[
            { value: 'M', label: 'Masculino' },
            { value: 'F', label: 'Feminino' },
          ]}
          rules={[{ required: true }]}
        />
        <FormInput
          name={['email']}
          label="E-mail"
          rules={[{ required: true }, { type: 'email' }]}
        />
        <FormInput
          name={['phone']}
          label="Telefone"
          rules={[{ required: true }]}
        />
        <FormButton {...FORM_BUTTON_LAYOUT} block loading={isLoading}>
          Salvar
        </FormButton>
      </Form>
    </div>
  );
}

FormComponent.propTypes = {
  id: PropTypes.string,
};

FormComponent.defaultProps = {
  id: null,
};
