import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './bottomTabs';

const Navigator = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Navigator;
