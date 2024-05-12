import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import React, {memo} from 'react';
import RouteCard from '../../../components/RouteCard';
import useRoute from '../../../hooks/useRoute';
import {COLORS} from '../../../constants';

const PopularRoutes = () => {
  const {data, isLoading} = useRoute();

  const renderItem = ({item}: {item: RouteCard}) => <RouteCard {...item} />;

  if (isLoading) {
    return <ActivityIndicator size="large" color={COLORS.gray} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(PopularRoutes);

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});
