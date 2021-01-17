import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
import spinner from '../../assets/loading.gif';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

const SubmitButton: React.FC<IButtonProps> = ({ isLoading, ...rest }) => {
  return (
    <Container isLoading={isLoading}>
      <button {...rest}>
        {isLoading && <img src={spinner} alt="loading spinner" />}
        <span>{isLoading ? 'Loading' : 'Submit'}</span>
      </button>
    </Container>
  );
};

export default SubmitButton;
