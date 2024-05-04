import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './stackMain';

const Navigator = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default Navigator;
