import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigators/bottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
