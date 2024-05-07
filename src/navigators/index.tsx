import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './stackMain';
import AuthStack from './stackAuth';
import AuthProvider, {AuthContext} from '../contexts/authContext';

const Navigator = () => {
  const {user} = useContext(AuthContext);
  console.log(user);

  return (
    <NavigationContainer>
      {user === undefined ? <AuthStack /> : <MyStack />}
    </NavigationContainer>
  );
};

export default Navigator;
