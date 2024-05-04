import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS, SIZES} from '../../../constants';
import CButton from '../../../components/Button';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {useNavigator} from '../../../hooks/core/common';

const SearchTicket = () => {
  const nav = useNavigator();
  const [date, setDate] = useState(null);
  const [isShowDatePicker, setShowDatePicker] = useState(false);
  const [isShowStartPoint, setShowStartPoint] = useState(false);
  const [iShowWhereTo, setShowWhereTo] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Departure time');
  const [selectedStartPoint, setSelectedStartPoint] = useState('Start point');
  const [selectedWhereTo, setSelectedWhereTo] = useState('Where to?');
  const [cities] = useState([
    {id: 1, name: 'City A'},
    {id: 2, name: 'City B'},
    {id: 3, name: 'City C'},
  ]);

  const handleSearchTicket = () => {
    nav.navigate('ListSeats', {eventId: '123fkfdkfgjfgk'});
  };

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleDateChange = (event: DateTimePickerEvent, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setSelectedDate(formatDate(currentDate));
    setShowDatePicker(false);
  };

  const showDatePicker = () => {
    setShowDatePicker(true);
  };

  const renderDatePicker = () => {
    return (
      <Modal
        visible={isShowDatePicker}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DateTimePicker
              value={date || new Date()}
              mode="date"
              display="inline"
              onChange={handleDateChange}
            />
          </View>
        </View>
      </Modal>
    );
  };

  const renderCityList = () => {
    return cities.map(city => (
      <TouchableOpacity key={city.id} onPress={() => handleCitySelect(city)}>
        <View style={styles.cityItem}>
          <Text>{city.name}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  const renderCityPicker = () => {
    return (
      <Modal
        visible={isShowStartPoint || iShowWhereTo}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>{renderCityList()}</View>
        </View>
      </Modal>
    );
  };

  const handleCitySelect = (city: any) => {
    if (isShowStartPoint) {
      setSelectedStartPoint(city.name);
      setShowStartPoint(false);
    } else if (iShowWhereTo) {
      setSelectedWhereTo(city.name);
      setShowWhereTo(false);
    }
  };
  return (
    <>
      <View style={styles.search}>
        <TouchableOpacity onPress={() => setShowStartPoint(true)}>
          <View style={styles.row_search}>
            <FontAwesome
              style={styles.icon}
              name="circle-o"
              size={SIZES.xLarge}
              color={COLORS.blue}
            />
            <Text style={styles.search_txt}>{selectedStartPoint}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity onPress={() => setShowWhereTo(true)}>
          <View style={styles.row_search}>
            <FontAwesome
              style={styles.icon}
              name="circle-o"
              size={SIZES.xLarge}
              color={COLORS.red}
            />
            <Text style={styles.search_txt}>{selectedWhereTo}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity onPress={showDatePicker}>
          <View style={styles.row_search}>
            <Entypo
              style={styles.icon}
              name="calendar"
              size={SIZES.xLarge}
              color={COLORS.primary}
            />
            <Text style={styles.search_txt}>{selectedDate}</Text>
          </View>
        </TouchableOpacity>
        {renderCityPicker()}
        {renderDatePicker()}
      </View>
      <CButton onPress={handleSearchTicket} title="Search" />
    </>
  );
};

export default memo(SearchTicket);

const styles = StyleSheet.create({
  search: {
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  row_search: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  search_txt: {
    color: COLORS.gray,
    fontSize: SIZES.medium,
    fontWeight: '500',
  },
  icon: {
    padding: 12,
  },
  line: {
    marginLeft: SIZES.medium,
    marginRight: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  cityItem: {
    minWidth: 280,
    paddingVertical: 12,
    borderBottomColor: COLORS.gray,
  },
});
