import React, { useState, useEffect } from 'react';
import { api } from '../../../services';
import { Header, Table, Filter } from './components';
import './style.scss';

export function Students() {
  const [dataSource, setDataSource] = useState([]);

  async function loadStudents(params) {
    try {
      const { data } = await api.get('students', { params });

      setDataSource(data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="students-component">
      <Header />
      <Filter onSearch={loadStudents} />
      <Table dataSource={dataSource} onDelete={loadStudents} />
    </div>
  );
}
