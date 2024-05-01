import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';

interface PromotionCard {
  id: string;
  route: string;
  imageUrl?: string;
}

const PromotionCard = (props: PromotionCard) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.txt}>{props.route}</Text>
    </View>
  );
};

export default PromotionCard;

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginRight: 16,
    shadowColor: COLORS.black2,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    marginBottom: 4,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 300,
    height: 180,
  },
  txt: {
    padding: 8,
    fontSize: SIZES.small,
    fontWeight: 'bold',
  },
});
