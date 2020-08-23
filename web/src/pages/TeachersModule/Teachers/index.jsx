import React, { useState, useEffect } from 'react';
import { api } from '../../../services';
import { Header, Table, Filter } from './components';

export function Teachers() {
  const [dataSource, setDataSource] = useState([]);

  async function loadTeachers(params) {
    try {
      const { data } = await api.get('teachers', { params });

      setDataSource(data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadTeachers();
  }, []);

  return (
    <div className="teachers-component">
      <Header />
      <Filter onSearch={loadTeachers} />
      <Table dataSource={dataSource} onDelete={loadTeachers} />
    </div>
  );
}
