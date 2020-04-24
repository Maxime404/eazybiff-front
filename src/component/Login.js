import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import signIn from './SignIn';
import signUp from './SignUp';

const Stack = createStackNavigator();

export default class Login extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="SignIn"
            component={signIn}
          />
          <Stack.Screen
            name="SignUp"
            component={signUp}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
