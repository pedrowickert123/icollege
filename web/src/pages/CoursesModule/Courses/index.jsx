import React, { useState, useEffect } from 'react';
import { api } from '../../../services';
import { Header, Table } from './components';

export function Courses() {
  const [dataSource, setDataSource] = useState([]);

  async function loadCourses(params) {
    try {
      const { data } = await api.get('courses', { params });

      setDataSource(data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div className="courses-component">
      <Header />
      <Table dataSource={dataSource} onDelete={loadCourses} />
    </div>
  );
}
