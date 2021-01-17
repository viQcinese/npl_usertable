import React, { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';
import { tableStyles } from './styles';
import columns from './dataColumns';

import api from '../../services/api';

const UsersTable: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows] = useState(50);
  const [perPage, setPerPage] = useState(10);

  const getUsers = async (page: number) => {
    setLoading(true);

    const response = await api.get(`/users?_page=${page}&_limit=${perPage}`);

    setData(response.data);
    setLoading(false);
  };

  const handlePageChange = (page: number) => {
    getUsers(page);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setLoading(true);

    const response = await api.get(`/users?_page=${page}&_limit=${newPerPage}`);

    setData(response.data);
    setPerPage(newPerPage);
    setLoading(false);
  };

  useEffect(() => {
    getUsers(1);
  }, []);

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        customStyles={tableStyles as any}
      />
    </>
  );
};

export default UsersTable;
