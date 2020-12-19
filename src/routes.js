import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/Main';
import AddWord from './pages/AddWord';

const AppScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="AddWord" component={AddWord} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <AppScreens />
    </NavigationContainer>
  );
};

export default Routes;
