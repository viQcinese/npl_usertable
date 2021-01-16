import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <ul className="nav nav-tabs">
        <li role="presentation" className={path === '/' || '' ? 'active' : ''}>
          <Link to="/">SignUp Form</Link>
        </li>
        <li role="presentation" className={path === '/admin' ? 'active' : ''}>
          <Link to="/admin">Admin Table</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
