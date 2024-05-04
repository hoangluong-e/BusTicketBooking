import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/tabs/profile';
import Home from '../screens/tabs/home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyTicket from '../screens/tabs/ticket';
import Notification from '../screens/tabs/notification';
import {COLORS, SIZES} from '../constants/theme';

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
          title: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons color={color} name="home-sharp" size={SIZES.large} />
          ),
        }}
      />
      <Tab.Screen
        name="My Ticket"
        component={MyTicket}
        options={{
          title: 'My Ticket',
          tabBarIcon: ({color}) => (
            <Ionicons color={color} name="ticket-sharp" size={SIZES.large} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: 'Notification',
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
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome color={color} name="user" size={SIZES.large} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
