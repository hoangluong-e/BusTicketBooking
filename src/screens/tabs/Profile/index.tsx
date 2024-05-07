import React, {useContext} from 'react';
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
import {signOut} from 'firebase/auth';
import {auth} from '../../../config/firebase';
import {AuthContext} from '../../../contexts/authContext';

const {StatusBarManager} = NativeModules;

const ProfileScreen = () => {
  const {user, removeUser} = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      removeUser();
    } catch (error) {
      console.error('An error occurred while signing out:', error);
    }
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
            source={require('../../../assets/images/bus_icon.png')}
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
          <Text style={styles.userInfoText}>Phone: 0330220012</Text>
          <View style={styles.line} />
          <Text style={styles.userInfoText}>SignUp: January 1, 2002</Text>
        </View>
        <View style={styles.button}>
          <CButton onPress={handleEditProfile} title="Edit Profile" />
          <CButton onPress={handleSignOut} title="Sign Out" />
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
    paddingTop: 44,
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
    marginTop: 60,
  },
});

export default ProfileScreen;
