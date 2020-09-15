import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationService from './services/navigation';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

import colors from './styles/colors';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Routes = () => {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer
      ref={(navigatorRef) => NavigationService.setNavigator(navigatorRef)}>
      {signed ? (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Home2" component={Home} />
          <Drawer.Screen name="Home3" component={Home} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: colors.primary },
          }}>
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
