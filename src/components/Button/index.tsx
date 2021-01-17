import React from 'react';
import { Container } from './styles';

const Button: React.FC = ({ children }) => {
  return (
    <Container>
      <button>{children}</button>
    </Container>
  );
};

export default Button;
