import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigator, useNavigatorParams} from '../../hooks/core/common';
import {COLORS, SIZES} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {StatusBarManager} = NativeModules;

const ListSeats = () => {
  const nav = useNavigator();
  const {startPoint, whereTo, date} = useNavigatorParams<any>();

  const handleBackPress = () => {
    nav.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.row]}>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons
            style={styles.icon}
            name="arrow-back"
            size={SIZES.xLarge}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>
            {startPoint} - {whereTo}
          </Text>
          <Text style={styles.subTitle}>{date}</Text>
        </View>
      </View>
      <View style={styles.body}></View>
    </View>
  );
};

export default ListSeats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingTop: Platform.OS
      ? StatusBarManager.HEIGHT
      : StatusBar.currentHeight || 0 + 10,
    padding: 12,
    backgroundColor: COLORS.primary2,
    paddingLeft: SIZES.medium,
  },
  row: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subTitle: {
    fontSize: SIZES.small,
    marginTop: 4,
  },
  body: {
    flex: 1,
  },
  icon: {
    marginRight: SIZES.xxSmall,
  },
});
