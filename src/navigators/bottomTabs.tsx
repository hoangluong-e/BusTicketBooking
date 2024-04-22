/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/tabs/Profile';
import Home from '../screens/tabs/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyTicket from '../screens/tabs/Ticket';
import Notification from '../screens/tabs/Notification';
import {COLORS, SIZES} from '../containers/theme';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons color={color} name="home-sharp" size={SIZES.large} />
          ),
        }}
      />
      <Tab.Screen
        name="My Ticket"
        component={MyTicket}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons color={color} name="ticket-sharp" size={SIZES.large} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              color={color}
              name="notifications-sharp"
              size={SIZES.large}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome color={color} name="user" size={SIZES.large} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
