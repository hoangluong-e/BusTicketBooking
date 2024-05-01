import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
  NativeModules,
  StatusBar,
} from 'react-native';
import {COLORS, SIZES} from '../../../constants';
import CButton from '../../../components/Button';

const {StatusBarManager} = NativeModules;

const ProfileScreen = () => {
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => console.log('Logout Pressed')},
    ]);
  };

  const handleEditProfile = () => {};

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/background.png')}
        style={styles.background}
      />
      <ScrollView style={styles.border}>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/images/2560px-Bus.svg.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Luong Hoang</Text>
        </View>
        <View>
          <Text style={styles.userInfoText}>Email: luonghoang@gmail.com</Text>
          <View style={styles.line} />
          <Text style={styles.userInfoText}>
            Location: Binh Duong, Viet Nam
          </Text>
          <View style={styles.line} />
          <Text style={styles.userInfoText}>Phone: 0330 220 012</Text>
          <View style={styles.line} />
          <Text style={styles.userInfoText}>Birthday: January 1, 2002</Text>
        </View>
        <View style={styles.button}>
          <CButton onPress={handleEditProfile} title="Edit Profile" />
          <CButton onPress={handleLogout} title="Log out" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -10,
  },
  border: {
    marginLeft: SIZES.medium,
    marginRight: SIZES.medium,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    marginTop: 12,
  },
  header: {
    alignItems: 'center',
    paddingTop: 36,
    marginTop: Platform.OS ? StatusBarManager.HEIGHT : StatusBar.currentHeight,
  },
  avatar: {
    width: 160,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  userInfoText: {
    fontSize: SIZES.medium,
    marginTop: 14,
    color: COLORS.black2,
  },
  button: {
    marginTop: 52,
  },
});

export default ProfileScreen;
