import {View, Text} from 'react-native';
import React from 'react';
import {useNavigatorParams} from '../../hooks/core/common';

const ListSeats = () => {
  const {eventId} = useNavigatorParams<any>();
  return (
    <View>
      <Text>{eventId}</Text>
    </View>
  );
};

export default ListSeats;
