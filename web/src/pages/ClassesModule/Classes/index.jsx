import React, { useState, useEffect } from 'react';
import { api } from '../../../services';
import { Header, Table, Filter } from './components';

export function Classes() {
  const [dataSource, setDataSource] = useState([]);

  async function loadClasses(params) {
    try {
      const { data } = await api.get('classes', { params });

      setDataSource(data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadClasses();
  }, []);

  return (
    <div className="classes-component">
      <Header />
      <Filter onSearch={loadClasses} />
      <Table dataSource={dataSource} onDelete={loadClasses} />
    </div>
  );
}
