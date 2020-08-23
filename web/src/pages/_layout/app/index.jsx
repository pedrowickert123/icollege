/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { ROUTES } from '../../../res';
import { Container } from '../../../components';
import './style.scss';

const { Header, Content, Footer } = Layout;

export function AppLayout({ children }) {
  const [defaultKey, setDefaultKey] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const path = history.location.pathname.split('/')[1];

    setDefaultKey(path);
  }, []);

  function handleNavigate(route) {
    history.push(route);
  }

  if (!defaultKey) return null;

  return (
    <Layout className="app-layout-component">
      <Header>
        <Container noPadding>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultKey]}
          >
            <Menu.Item
              key={ROUTES.STUDENTS}
              onClick={() => handleNavigate(ROUTES.STUDENTS)}
            >
              Alunos
            </Menu.Item>
            <Menu.Item
              key={ROUTES.TEACHERS}
              onClick={() => handleNavigate(ROUTES.TEACHERS)}
            >
              Professores
            </Menu.Item>
            <Menu.Item
              key={ROUTES.COURSES}
              onClick={() => handleNavigate(ROUTES.COURSES)}
            >
              Cursos
            </Menu.Item>
            <Menu.Item
              key={ROUTES.SUBJECTS}
              onClick={() => handleNavigate(ROUTES.SUBJECTS)}
            >
              Disciplinas
            </Menu.Item>
            <Menu.Item
              key={ROUTES.CLASSES}
              onClick={() => handleNavigate(ROUTES.CLASSES)}
            >
              Turmas
            </Menu.Item>
          </Menu>
        </Container>
      </Header>
      <Content>
        <Container>{children}</Container>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        iCollege ©2020 Criado por Pedro Wickert
      </Footer>
    </Layout>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
