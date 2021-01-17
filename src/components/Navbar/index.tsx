import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

const Navbar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Container>
      <Link to="/" className={path === '/' || '' ? 'selected' : ''}>
        signup
      </Link>
      <Link to="/admin" className={path === '/admin' ? 'selected' : ''}>
        users table
      </Link>
    </Container>
  );
};

export default Navbar;
