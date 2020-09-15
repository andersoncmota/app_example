import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';

import Button from '../../components/Form/Button';

import { signOut } from '../../store/modules/auth/actions';

const Home = () => {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signOut());
  }
  return (
    <View>
      <Text>Logado</Text>

      <Button loading={false} onPress={handleSubmit}>
        Sair
      </Button>
    </View>
  );
};

export default Home;
