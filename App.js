import React from 'react';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './app/tabs/Home';
import Settings from './app/tabs/Settings';
import Profile from './app/screens/Profile';
import Modal from './app/screens/Modal';
import Drawer from './app/components/Drawer';

const SettingsTab = StackNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: null,
        headerBackTitle: 'Back',
        //title: 'sdfgs',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        //header: null,
        title: `${navigation.state.params.user}'s Profile`,
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);

const TabNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Settings: {
    screen: SettingsTab,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

const TabsWithDrawerNavigation = DrawerNavigator(
  {
    Tabs: {
      screen: TabNavigation,
    },
  },
  {
    contentComponent: props => <Drawer {...props} />,
  },
);

export default StackNavigator(
  {
    TabsWithDrawer: {
      screen: TabsWithDrawerNavigation,
    },
    Modal: {
      screen: Modal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
