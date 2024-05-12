import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  NativeModules,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigator, useNavigatorParams} from '../../hooks/core/common';
import {COLORS, SIZES} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useSearchTicket from '../../hooks/useSearchTicket';
import TicketCard from '../../components/Ticket';

const {StatusBarManager} = NativeModules;

const ListTickets = () => {
  const nav = useNavigator();
  const {startPoint, whereTo, date} = useNavigatorParams<any>();

  const routeName = startPoint + ' - ' + whereTo;
  const {isLoading, data: ticketData} = useSearchTicket(date, routeName);

  const goToListSeats = (
    id: string,
    seatBooked: string,
    price: string,
    time: string,
  ) => {
    nav.navigate('ListSeats', {
      startPoint: startPoint,
      whereTo: whereTo,
      date: date,
      id: id,
      seatBooked: seatBooked,
      price: price,
      time: time,
    });
  };

  const renderItem = useCallback(
    ({item}: {item: TicketCard}) => (
      <TicketCard {...item} onPress={goToListSeats} />
    ),
    [],
  );

  const handleBackPress = () => {
    nav.goBack();
  };

  const renderIsLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.gray} />
      </View>
    );
  };

  const renderNoData = () => {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.title}>
          No tickets available for this route and date.
        </Text>
        <Text style={styles.title}>Please choose another</Text>
      </View>
    );
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
          <Text style={styles.title}>{routeName}</Text>
          <Text style={styles.subTitle}>{date}</Text>
        </View>
      </View>
      {isLoading ? (
        renderIsLoading()
      ) : ticketData ? (
        <View style={styles.body}>
          <FlatList
            style={styles.flatlist}
            data={ticketData}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
      ) : (
        renderNoData()
      )}
    </View>
  );
};

export default ListTickets;

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
    marginLeft: SIZES.medium,
    marginRight: SIZES.medium,
  },
  icon: {
    marginRight: SIZES.xxSmall,
  },
  flatlist: {
    marginBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
