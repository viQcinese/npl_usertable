import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  text?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, text, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue('oi');
      },
      clearValue(ref: any) {
        ref.setInputValue(' sd ');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container error={error} text={text}>
      <label htmlFor={name}>{label || name}</label>
      <input id={name} defaultValue={defaultValue} ref={inputRef} {...rest} />
      <span>{error || text || '_'}</span>
    </Container>
  );
};

export default Input;
