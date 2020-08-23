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
  FormSelect,
  FormTextarea,
} from '../../../../../components';
import { FORM_LAYOUT, FORM_BUTTON_LAYOUT, FORM_MESSAGES } from './consts';
import './style.scss';

export function FormComponent({ id }) {
  const [values, setValues] = useState(null);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function loadCourses() {
      const { data } = await api.get('courses');
      setCourses(data.map((item) => ({ value: item.id, label: item.name })));
    }

    async function loadTeachers() {
      const { data } = await api.get('teachers');
      setTeachers(data.map((item) => ({ value: item.id, label: item.name })));
    }

    async function loadSubject() {
      try {
        const { data } = await api.get(`subjects/${id}`);

        setValues(data);
      } catch (err) {
        const { message } = err.response.data;

        notification.open({
          message: 'Opsss!',
          description: message,
        });
      }
    }

    loadCourses();
    loadTeachers();

    if (!!id) {
      loadSubject();
    }
  }, [id]);

  async function handleSubmit(newValues) {
    try {
      setIsLoading(true);

      let message;

      if (!!id) {
        const { data } = await api.put(`subjects/${id}`, newValues);
        message = data.message;
      } else {
        const { data } = await api.post('subjects', newValues);
        message = data.message;
      }

      notification.open({
        message: 'Sucesso!',
        description: message,
      });

      history.push(ROUTES.SUBJECTS);
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
    <div className="subject-form-component">
      <Form
        onSubmit={handleSubmit}
        initialValues={values}
        validation={FORM_MESSAGES}
        {...FORM_LAYOUT}
      >
        <FormInput name={['name']} label="Nome" rules={[{ required: true }]} />
        <FormSelect
          name={['course_id']}
          label="Curso"
          options={courses}
          rules={[{ required: true }]}
        />
        <FormSelect
          name={['teachers']}
          label="Professores"
          multiple
          options={teachers}
          rules={[{ required: true }]}
        />
        <FormTextarea
          name={['materials']}
          label="Materiais"
          rules={[{ required: true }]}
        />
        <FormTextarea
          name={['bibliography']}
          label="Bibliografia"
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
