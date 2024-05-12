import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  NativeModules,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {useNavigator, useNavigatorParams} from '../../hooks/core/common';
import {COLORS, SIZES} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CButton from '../../components/Button';
import useUpdateSeat from '../../hooks/useUpdateSeat';
import useBookTicket from '../../hooks/useBookTicket';

const {StatusBarManager} = NativeModules;

function generateRandomId() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

const convertSeatStringToArray = (seatString: string) => {
  const seatArray = seatString.split(', ');

  const resultArray = seatArray.map(seat => {
    const matchResult = seat.match(/(\d+)([A-Z])/);
    if (matchResult !== null) {
      const [numberPart, letterPart] = matchResult.slice(1);
      const row = parseInt(numberPart);
      const maxNumofRow = (row - 1) * 4;
      if (letterPart === 'A') {
        return maxNumofRow + 1;
      } else if (letterPart === 'B') {
        return maxNumofRow + 2;
      } else if (letterPart === 'C') {
        return maxNumofRow + 3;
      } else {
        return maxNumofRow + 4;
      }
    }
    return null;
  });

  return resultArray.filter(item => item !== null) as number[];
};

const convertArrayToSeatString = (seatArray: number[]) => {
  const seatStringArray = seatArray.map(seat => {
    const row = Math.ceil(seat / 4);
    const seatLetter = String.fromCharCode(((seat - 1) % 4) + 65);
    return `${row}${seatLetter}`;
  });

  return seatStringArray.join(', ');
};

const ListSeats = () => {
  const nav = useNavigator();
  const {startPoint, whereTo, date, price, time, id, seatBooked} =
    useNavigatorParams<any>();
  const [selectSeats, setSelectSeats] = useState<number[]>([]);
  const seatData = Array.from({length: 40}, (_, index) => index + 1);

  const routeName = startPoint + ' - ' + whereTo;

  const seatBookedNum = convertSeatStringToArray(seatBooked);

  const selectedSeats = useMemo(
    () => convertArrayToSeatString(selectSeats),
    [selectSeats],
  );

  const seatBookedUpdate = useMemo(() => {
    if (seatBooked) {
      return seatBooked + ', ' + selectedSeats;
    } else {
      return selectedSeats;
    }
  }, [seatBooked, selectedSeats]);

  const {mutateAsync} = useUpdateSeat();

  const {mutate} = useBookTicket();

  const data = useMemo(
    () => ({
      endPoint: whereTo,
      price: price,
      seatBooked: seatBookedUpdate,
      startPoint: startPoint,
      time: time,
    }),
    [price, seatBookedUpdate, time],
  );

  const dataT = useMemo(
    () => ({
      endPoint: whereTo,
      price: price,
      seatBooked: selectedSeats,
      startPoint: startPoint,
      date: date,
      time: time,
      status: 'upcoming',
    }),
    [price, seatBookedUpdate, time],
  );

  const isSeatBooked = (seatNumber: number) =>
    seatBookedNum.includes(seatNumber);

  const handleBackPress = () => {
    nav.goBack();
  };

  const handleSelectTicket = useCallback(
    (item: number) => {
      const isSelected = selectSeats.includes(item);

      if (isSelected) {
        setSelectSeats(selectSeats.filter((seat: number) => seat !== item));
      } else {
        setSelectSeats([...selectSeats, item]);
      }
    },
    [selectSeats],
  );

  const handleContinue = useCallback(() => {
    if (selectedSeats.length === 0) {
      Alert.alert('Please select at least one seat before continuing');
      return;
    }
    const idT = generateRandomId();
    console.log(idT);

    mutateAsync({date, routeName, id, data});
    mutate({idT, dataT});
    nav.navigate('BookTicketSuccess');
  }, [date, routeName, id, data, selectedSeats]);

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
      <View style={styles.body}>
        <View style={styles.seatContainer}>
          <View style={styles.row_body}>
            <Text style={styles.space_col}>A</Text>
            <Text style={styles.space_col}>B</Text>
            <Text style={styles.space_col}>C</Text>
            <Text style={styles.space_col}>D</Text>
          </View>
          <FlatList
            data={seatData}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.row_body}>
                <MaterialCommunityIcons
                  name="steering"
                  size={44}
                  color={COLORS.gray}
                  style={styles.space_col}
                />
                <MaterialCommunityIcons
                  name="door-sliding"
                  color={COLORS.gray2}
                  size={44}
                  style={styles.space_col}
                />
              </View>
            }
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.seats}
                disabled={isSeatBooked(item)}
                onPress={() => handleSelectTicket(item)}>
                <Image
                  source={
                    selectSeats.includes(item)
                      ? require('../../assets/images/your_seat.png')
                      : isSeatBooked(item)
                      ? require('../../assets/images/seat_booked.png')
                      : require('../../assets/images/seat_available.png')
                  }
                  style={styles.seatImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            numColumns={4}
            keyExtractor={item => item.toString()}
          />
        </View>
        <View>
          <Text style={styles.button}>Your seats: {selectedSeats}</Text>
          <CButton onPress={handleContinue} title="Continue" />
        </View>
      </View>
    </View>
  );
};

export default ListSeats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray3,
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
  row_body: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 32,
    marginRight: 32,
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
    marginLeft: SIZES.medium,
    marginRight: SIZES.medium,
  },
  icon: {
    marginRight: SIZES.xxSmall,
  },
  seatContainer: {
    marginTop: 20,
    backgroundColor: COLORS.white,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 24,
    height: '80%',
  },
  seats: {
    width: '25%',
    alignItems: 'center',
  },
  seatImage: {
    flex: 1,
    width: '50%',
    borderRadius: 16,
    padding: 16,
  },
  space_col: {
    marginTop: 16,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
  },
});
