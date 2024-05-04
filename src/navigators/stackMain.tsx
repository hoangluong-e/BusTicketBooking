import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './bottomTabs';
import ListSeats from '../screens/main/ListSeats';
import ListTickets from '../screens/main/ListTickets';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="mainTabs" component={MyTabs} />
      <Stack.Screen name="ListSeats" component={ListSeats} />
      <Stack.Screen name="ListTickets" component={ListTickets} />
    </Stack.Navigator>
  );
};

export default MyStack;
