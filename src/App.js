import { registerRootComponent } from 'expo';
import React from 'react';
import { SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../assets/styles';

import main from './component/Main';
import login from './component/Login';

const { width } = Dimensions.get("window");

const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Icon
          name="menu"
          size={20}
          style={{ textAlign: 'right', paddingHorizontal: 10 }}
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator({
  Main: {
    screen: main,
    navigationOptions: {
      title: 'Service'
    }
  },
  Login: {
    screen: login,
    navigationOptions: {
      title: 'Login'
    }
  }
},
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2
  });

const Main = createAppContainer(Drawer);

export default registerRootComponent(Main);