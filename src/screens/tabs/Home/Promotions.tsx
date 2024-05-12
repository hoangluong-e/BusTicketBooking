import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import PromotionCard from '../../../components/PromotionCard';
import usePromotion from '../../../hooks/usePromotion';
import {COLORS} from '../../../constants';

const Promotions = () => {
  const {data, isLoading} = usePromotion();

  const renderItem = ({item}: {item: PromotionCard}) => (
    <PromotionCard {...item} />
  );
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

export default memo(Promotions);

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});
