import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SIZES} from '../../constants';
import CButton from '../../components/Button';
import {useNavigator} from '../../hooks/core/common';

const BookTicketSuccess = () => {
  const nav = useNavigator();
  const handleGoHome = () => {
    nav.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/background.png')}
        style={styles.background}
      />
      <MaterialIcons color={COLORS.blue2} name="done" size={70} />
      <Text style={styles.txt}>Your ticket has been successfully booked</Text>
      <CButton onPress={handleGoHome} title="Explore more" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    padding: 20,
    fontSize: SIZES.medium,
    fontWeight: '500',
    color: COLORS.black2,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -10,
  },
});

export default BookTicketSuccess;
