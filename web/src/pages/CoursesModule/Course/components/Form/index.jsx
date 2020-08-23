import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import { api } from '../../../../../services';
import { ROUTES } from '../../../../../res';
import {
  Form,
  FormInput,
  FormButton,
  FormCheckbox,
} from '../../../../../components';
import { FORM_LAYOUT, FORM_BUTTON_LAYOUT, FORM_MESSAGES } from './consts';
import './style.scss';

export function FormComponent({ id }) {
  const [values, setValues] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function loadCourse() {
      try {
        const { data } = await api.get(`courses/${id}`);

        setValues(data);
      } catch (err) {
        const { message } = err.response.data;

        notification.open({
          message: 'Opsss!',
          description: message,
        });
      }
    }

    if (!!id) {
      loadCourse();
    }
  }, [id]);

  async function handleSubmit(newValues) {
    try {
      setIsLoading(true);

      let message;

      if (!!id) {
        const { data } = await api.put(`courses/${id}`, newValues);
        message = data.message;
      } else {
        const { data } = await api.post('courses', newValues);
        message = data.message;
      }

      notification.open({
        message: 'Sucesso!',
        description: message,
      });

      history.push(ROUTES.COURSES);
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
    <div className="course-form-component">
      <Form
        onSubmit={handleSubmit}
        initialValues={values}
        validation={FORM_MESSAGES}
        {...FORM_LAYOUT}
      >
        <FormInput name={['name']} label="Nome" rules={[{ required: true }]} />
        <FormInput
          type="number"
          name={['subjects_quantity']}
          label="Total de disciplinas"
          rules={[{ required: true }]}
        />
        <FormCheckbox name={['graduation']} label="Graduação" />
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
