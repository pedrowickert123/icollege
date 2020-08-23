import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory, Link } from 'react-router-dom';
import { notification, Collapse } from 'antd';
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

const { Panel } = Collapse;

export function FormComponent({ id }) {
  const [values, setValues] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function loadTeacher() {
      try {
        const { data } = await api.get(`teachers/${id}`);

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
      loadTeacher();
    }
  }, [id]);

  async function handleSubmit(newValues) {
    try {
      setIsLoading(true);

      let message;

      if (!!id) {
        const { data } = await api.put(`teachers/${id}`, newValues);
        message = data.message;
      } else {
        const { data } = await api.post('teachers', newValues);
        message = data.message;
      }

      notification.open({
        message: 'Sucesso!',
        description: message,
      });

      history.push(ROUTES.TEACHERS);
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
    <div className="teacher-form-component">
      <Form
        onSubmit={handleSubmit}
        initialValues={values}
        validation={FORM_MESSAGES}
        {...FORM_LAYOUT}
        className="form"
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
        <Collapse accordion className="collapse">
          <Panel header="Turmas" key="1">
            {values.classes.map((item) => (
              <p>
                <Link to={`${ROUTES.CLASS}/${item.id}`}>
                  {item.id} - {moment(item.start_date).format('DD/MM/YYYY')}
                </Link>
              </p>
            ))}
          </Panel>
          <Panel header="Disciplinas" key="2">
            {values.subjects.map((item) => (
              <p>
                <Link to={`${ROUTES.SUBJECT}/${item.id}`}>{item.name}</Link>
              </p>
            ))}
          </Panel>
        </Collapse>
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
