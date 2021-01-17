import React from 'react';

import Table from '../../components/Table';
import Navbar from '../../components/Navbar';

import Centralizer from '../../components/Centralizer';

const UsersTable: React.FC = () => {
  return (
    <Centralizer>
      <Navbar />
      <Table />
    </Centralizer>
  );
};

export default UsersTable;
