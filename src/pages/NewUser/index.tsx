import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import SubmitButton from '../../components/SubmitButton';
import { Container } from './styles';
import RadioButtonGroup from '../../components/RadioButtonGroup';
import Centralizer from '../../components/Centralizer';

interface IFormData {
  name: string;
  email: string;
  cpf?: string;
  cnpj?: string;
  street: string;
  city: string;
  state: string;
  code: string;
}

const SignUp: React.FC = () => {
  const [cpfOrCnpj, setCpfOrCnpj] = useState<'cpf' | 'cnpj'>('cpf');
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const mask = useRef<any>(null);

  const handleSubmit = useCallback(
    async (data: IFormData): Promise<void> => {
      async function validateInput() {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('You must enter a name'),
          email: Yup.string()
            .required('You must enter an email')
            .email('You must enter a valid email'),
          [cpfOrCnpj]: Yup.string()
            .required(`You must enter a ${cpfOrCnpj}`)
            .matches(
              cpfOrCnpj === 'cpf'
                ? /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/
                : /[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}/,
              `You must enter a valid ${cpfOrCnpj}`,
            ),
          street: Yup.string().required(''),
          city: Yup.string().required(''),
          state: Yup.string().required(''),
          code: Yup.string().required(''),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
      }

      async function getGeolocation() {
        const { street, city, state, code } = {
          street: data.street.split(' ').join('+'),
          city: data.city.split(' ').join('+'),
          state: data.state.split(' ').join('+'),
          code: data.code.split(' ').join('+'),
        };

        const geolocation = await api.get(
          `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&street=${street}&city=${city}&state=${state}&postalCode=${code}`,
        );

        const {
          lat,
          lng: lon,
        } = geolocation.data.results[0].locations[0].latLng;

        return [lat, lon];
      }

      async function postUser([lat, lon]: string[]) {
        const { name, email, cpf, cnpj } = data;

        const userData = { name, email, lat, lon } as any;
        userData[cpfOrCnpj] = cpf || cnpj;

        await api.post('./users', userData);
      }

      function clearForm() {
        Object.keys(data).forEach(field => {
          formRef.current?.clearField(field);
        });
        mask.current.value = '';
      }

      try {
        setIsLoading(true);
        await validateInput();
        const [lat, lon] = await getGeolocation();
        // TODO - handle geolocation not found
        await postUser([lat, lon]);
        clearForm();
        window.scrollTo({ top: 0 });
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          return formRef.current?.setErrors(errors);
        }
        console.log(err);
      }
    },
    [cpfOrCnpj],
  );

  return (
    <Centralizer>
      <Navbar />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" />
          <Input name="email" />
          <InputMask
            mask={cpfOrCnpj === 'cpf' ? '999.999.999-99' : '99.999.999/9999-99'}
            ref={mask}
          >
            {() => <Input id={cpfOrCnpj} name={cpfOrCnpj} />}
          </InputMask>
          <RadioButtonGroup
            buttons={['cpf', 'cnpj']}
            selectedOption={cpfOrCnpj}
            setSelectedOption={setCpfOrCnpj}
          />
          <hr />
          <Input name="street" text="ex: 1600 Pennsylvania Ave NW" />
          <Input name="city" text="ex: Washington" />
          <Input name="state" text="ex: DC" />
          <Input label="postal code" name="code" text="ex: 20500" />

          <SubmitButton isLoading={isLoading} />
        </Form>
      </Container>
    </Centralizer>
  );
};

export default SignUp;
