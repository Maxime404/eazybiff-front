import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import service from './Service';
import profile from './Profile';

const Stack = createStackNavigator();

export default class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#696969' },
          }}
        >
          <Stack.Screen
            name="Service"
            component={service}
            options={{
              headerTitle: "Services",
              headerLeft: () => (
                <Icon
                  name="menu"
                  size={20}
                  style={{ color: '#FFF', paddingHorizontal: 10 }}
                  onPress={() => this.props.navigation.openDrawer()}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Profil"
            component={profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
