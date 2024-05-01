import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import PromotionCard from '../../../components/PromotionCard';

const Promotions = () => {
  const routes = [
    {
      id: '1',
      route:
        'List of bus operators opened for sale on the occasion of April 30 - May 1',
      imageUrl:
        'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/03/30_4-la-ngay-gi-01.jpg',
    },
    {
      id: '2',
      route: 'Hot routes promotion up to 50%',
      imageUrl:
        'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/03/30_4-la-ngay-gi-01.jpg',
    },
    {
      id: '3',
      route: 'Get x2 discont when booking round trip bus tickets',
      imageUrl:
        'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/03/30_4-la-ngay-gi-01.jpg',
    },
  ];

  const renderItem = ({item}: {item: PromotionCard}) => (
    <PromotionCard {...item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={routes}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Promotions;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});
