import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StatusBar,
  ImageBackground,
  Image,
  Animated,
} from 'react-native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import LogoAnimate from '../../components/LogoAnimate';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';

import { Container, FormContent, TitleForm } from './styles';
import { colors, styles } from '../../styles';

import { signInRequest } from '../../store/modules/auth/actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const loading = useSelector((state) => state.auth.loading);

  async function handleSubmit(data, { reset }) {
    const { login, password } = data;

    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        login: Yup.string().required('O login é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(signInRequest(login, password));

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <ImageBackground
        source={require('../../assets/images/bg7.jpg')}
        resizeMode="cover"
        style={styles.imageLogin}>
        <LogoAnimate
          timer={450}
          src={require('../../assets/images/adekz-logo.png')}
        />
      </ImageBackground>

      <TitleForm>Login</TitleForm>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="login"
          type="login"
          placeholder="Usuário"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            formRef.current.getFieldRef('password').focus()
          }
          keyboardType="email-address"
          label="Usuário"
        />

        <Input
          name="password"
          type="password"
          placeholder="Senha"
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={() => formRef.current.submitForm()}
          label="Senha"
        />

        <View style={{ width: '100%', padding: 20 }}>
          <Button
            loading={loading}
            onPress={() => formRef.current.submitForm()}>
            Entrar
          </Button>
        </View>
      </Form>
    </Container>
  );
};

export default SignIn;
