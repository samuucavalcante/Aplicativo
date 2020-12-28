import React, { useCallback, useRef, useState } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Logo, Card } from './styles';

import ValidationsErrors from '../../utils/getValidationErrors';

import logoImage from '../../assets/google-icon.svg';

import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (date) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite uma e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 caracteres '),
      });

      await schema.validate(date, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = ValidationsErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Logo>
        <img src={logoImage} alt="Google" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          doloremque sed officia? Dolorum fuga voluptatum commodi quasi
          officiis!
        </p>
      </Logo>
      <Card>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input icon={FiUser} name="email" type="text" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <button type="submit">Entrar</button>

          <a href="#sada">Esqueceu a senha</a>
          <hr />
          <button type="button">Criar nova conta</button>
        </Form>
      </Card>
    </Container>
  );
};

export default SignIn;
