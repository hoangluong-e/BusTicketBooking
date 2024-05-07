import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

interface Ticket {
  startPoint: string;
  endPoint: string;
  price: string;
  time: string;
  seat: string;
  date: string;
}

const Ticket = (props: Ticket) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.txt_top}>Hồ Chí Minh</Text>
        <View style={styles.row}>
          <SimpleLineIcons
            color={COLORS.white}
            name="arrow-right"
            size={SIZES.small}
          />
          <SimpleLineIcons
            color={COLORS.white}
            name="arrow-right"
            size={SIZES.medium}
          />
          <SimpleLineIcons
            color={COLORS.white}
            name="arrow-right"
            size={SIZES.large}
          />
        </View>
        <Text style={styles.txt_top}>Vĩnh Long</Text>
      </View>
      <View style={styles.mid}>
        <View style={styles.mid_left}></View>
        <View style={styles.mid_center}>
          <View style={styles.line} />
        </View>
        <View style={styles.mid_right}></View>
      </View>
      <View style={styles.bottom}>
        <View>
          <Text style={styles.txt}>Date</Text>
          <Text style={styles.txt}>30 April</Text>
        </View>
        <View style={styles.column_center}>
          <Text style={styles.txt}>Time</Text>
          <Text style={styles.txt}>08:00</Text>
        </View>
        <View style={styles.column_right}>
          <Text style={styles.txt}>Number</Text>
          <Text style={styles.txt}>8A</Text>
        </View>
      </View>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 290,
    marginTop: 16,
  },
  top: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: COLORS.blue2,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  mid: {
    flexDirection: 'row',
    height: 16,
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  column_center: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column_right: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  mid_left: {
    width: '3%',
    backgroundColor: COLORS.white,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  mid_center: {
    width: '90%',
  },
  mid_right: {
    width: '3%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: COLORS.white,
  },
  line: {
    borderColor: COLORS.white,
    borderWidth: 1,
    marginTop: 8,
  },
  bottom: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: COLORS.primary,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt_top: {
    fontWeight: 'bold',
    color: COLORS.white,
    fontSize: SIZES.medium,
    padding: 16,
  },
  txt: {
    fontWeight: 'bold',
    color: COLORS.white,
    fontSize: SIZES.small,
    padding: 8,
  },
});
