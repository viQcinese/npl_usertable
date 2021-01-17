import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { Container } from './styles';

interface IFormData {
  name: string;
  email: string;
  cpf: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: IFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('You must enter a name'),
        email: Yup.string()
          .required('You must enter an email')
          .email('You must enter a valid email'),
        cpf: Yup.string().matches(/[0-9]{11}/, 'You must enter a valid CPF'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // To do API call

      // To do redirect
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        // eslint-disable-next-line no-unused-expressions
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  const acceptOnlyNumbers = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const newValue = value
        .split('')
        .reduce((acc, cur) => (cur.search(/[0-9]/) >= 0 ? acc + cur : acc), '');
      event.target.value = newValue;
    },
    [],
  );

  return (
    <>
      <Navbar />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>novo usuário</h1>
          <Input name="name" />
          <Input name="email" />
          <Input name="cpf" onChange={acceptOnlyNumbers} />
          <Button>Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
