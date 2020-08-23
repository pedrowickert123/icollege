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
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function handleSubjectChange(subjectId) {
    const { data } = await api.get(`teachers/subject/${subjectId}`);
    setTeachers(data.map((item) => ({ value: item.id, label: item.name })));
  }

  useEffect(() => {
    async function loadSubjects() {
      const { data } = await api.get('subjects');
      setSubjects(data.map((item) => ({ value: item.id, label: item.name })));
    }

    async function loadClass() {
      try {
        const { data } = await api.get(`classes/${id}`);

        setValues({
          ...data,
          start_date: moment(data.start_date),
        });

        handleSubjectChange(data.subject_id);
      } catch (err) {
        const { message } = err.response.data;

        notification.open({
          message: 'Opsss!',
          description: message,
        });
      }
    }

    loadSubjects();

    if (!!id) {
      loadClass();
    }
  }, [id]);

  async function handleSubmit(newValues) {
    try {
      setIsLoading(true);

      let message;

      if (!!id) {
        const { data } = await api.put(`classes/${id}`, newValues);
        message = data.message;
      } else {
        const { data } = await api.post('classes', newValues);
        message = data.message;
      }

      notification.open({
        message: 'Sucesso!',
        description: message,
      });

      history.push(ROUTES.CLASSES);
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
    <div className="class-form-component">
      <Form
        onSubmit={handleSubmit}
        initialValues={values}
        validation={FORM_MESSAGES}
        {...FORM_LAYOUT}
      >
        <FormDate
          name={['start_date']}
          label="Data de início"
          rules={[{ required: true }]}
        />
        <FormInput
          type="number"
          name={['registration_quantity']}
          label="Número de vagas"
          rules={[{ required: true }]}
        />
        <FormSelect
          name={['period']}
          label="Turno"
          options={[
            { value: 'M', label: 'Manhã' },
            { value: 'T', label: 'Tarde' },
            { value: 'N', label: 'Noite' },
          ]}
          rules={[{ required: true }]}
        />
        <FormSelect
          name={['subject_id']}
          label="Disciplina"
          onChange={handleSubjectChange}
          options={subjects}
          rules={[{ required: true }]}
        />
        <FormSelect
          name={['teacher_id']}
          label="Professor"
          options={teachers}
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
