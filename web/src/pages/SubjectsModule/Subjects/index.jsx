import React, { useState, useEffect } from 'react';
import { api } from '../../../services';
import { Header, Table, Filter } from './components';

export function Subjects() {
  const [dataSource, setDataSource] = useState([]);

  async function loadSubjects(params) {
    try {
      const { data } = await api.get('subjects', { params });

      setDataSource(data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadSubjects();
  }, []);

  return (
    <div className="subjects-component">
      <Header />
      <Filter onSearch={loadSubjects} />
      <Table dataSource={dataSource} onDelete={loadSubjects} />
    </div>
  );
}
