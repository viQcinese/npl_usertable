import React from 'react';

import UsersTable from '../../components/UsersTable';
import Navbar from '../../components/Navbar';

import { Container } from './styles';

const AdminDashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <UsersTable />
      </Container>
    </>
  );
};

export default AdminDashboard;
