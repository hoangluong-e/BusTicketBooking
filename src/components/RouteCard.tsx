import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';

interface RouteCard {
  id: string;
  route: string;
  price: string;
  imageUrl: string;
}

const RouteCard = (props: RouteCard) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.txt_route}>{props.route}</Text>
      <Text style={styles.txt_price}>{props.price}</Text>
    </View>
  );
};

export default RouteCard;

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginRight: 16,
    shadowColor: COLORS.black2,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    marginBottom: 4,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  txt_route: {
    width: '90%',
    padding: 8,
    fontSize: SIZES.medium,
    fontWeight: '400',
  },
  txt_price: {
    padding: 8,
    fontSize: SIZES.small,
    fontWeight: '400',
  },
});
