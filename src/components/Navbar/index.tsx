import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

const Navbar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Container>
      <Link to="/" className={path === '/' || '' ? 'selected' : ''}>
        new user
      </Link>
      <Link to="/users" className={path === '/users' ? 'selected' : ''}>
        users table
      </Link>
    </Container>
  );
};

export default Navbar;
