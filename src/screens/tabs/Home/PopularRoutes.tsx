import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import RouteCard from '../../../components/RouteCard';

const PopularRoutes = () => {
  const routes = [
    {
      id: '1',
      route: 'Hồ Chí Minh - Vĩnh Long',
      price: 'From 270.000VND',
      imageUrl:
        'https://baovinhlong.com.vn/dataimages/201905/original/images2202122_11__10_.jpg',
    },
    {
      id: '2',
      route: 'Hồ Chí Minh - Đà Lạt',
      price: 'From 900.000VND',
      imageUrl:
        'https://baovemoitruong.org.vn/wp-content/uploads/2023/06/da-lat-1-n.jpg',
    },
    {
      id: '3',
      route: 'Vĩnh Long - Hồ Chí Minh',
      price: 'From 560.000VND',
      imageUrl:
        'https://www.visithcmc.vn/uploads/0000/6/2021/08/22/hcmc-1120046774-1.jpg',
    },
    {
      id: '4',
      route: 'Đà Lạt - Nha Trang',
      price: 'From 600.000VND',
      imageUrl:
        'https://baovinhlong.com.vn/dataimages/201905/original/images2202122_11__10_.jpg',
    },
    {
      id: '5',
      route: 'Sóc Trăng - Vĩnh Long',
      price: 'From 760.000VND',
      imageUrl:
        'https://baovinhlong.com.vn/dataimages/201905/original/images2202122_11__10_.jpg',
    },
  ];

  const renderItem = ({item}: {item: RouteCard}) => <RouteCard {...item} />;
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

export default PopularRoutes;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});
