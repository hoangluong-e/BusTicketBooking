import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {COLORS, SIZES} from '../../../constants';
import CButton from '../../../components/Button';
import {useNavigator} from '../../../hooks/core/common';
import {TextInput} from 'react-native-gesture-handler';
import {auth} from '../../../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, child, set} from 'firebase/database';

const SignUp = () => {
  const nav = useNavigator();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangeName = (value: string) => {
    setName(value);
  };

  const onChangePhone = (value: string) => {
    setPhone(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const createUser = async (
    userId: any,
    name: string,
    email: string,
    phone: string,
  ) => {
    const userData = {
      name,
      email,
      phone,
      signUpDate: new Date().toISOString(),
    };
    const dbRef = ref(getDatabase());
    const childRef = child(dbRef, `users/${userId}`);
    await set(childRef, userData);
  };

  const handleSignUp = async () => {
    if (email && password) {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        const uid = result.user.uid;
        await createUser(uid, name, email, phone);
        goBack();
      } catch (err) {
        console.log('error login', err);
      }
    }
  };

  const goBack = () => {
    nav.goBack();
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/background.png')}
        style={styles.background}
      />
      <Image
        source={require('../../../assets/images/bus_icon.png')}
        style={styles.avatar}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.txt}>Sign Up</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.inputContainer}
            placeholder="Full name"
            placeholderTextColor={COLORS.gray}
            onChangeText={onChangeName}
          />
          <TextInput
            style={styles.inputContainer}
            placeholder="Email Address"
            placeholderTextColor={COLORS.gray}
            onChangeText={onChangeEmail}
          />
          <TextInput
            style={styles.inputContainer}
            placeholder="Phone"
            placeholderTextColor={COLORS.gray}
            onChangeText={onChangePhone}
          />
          <TextInput
            style={styles.inputContainer}
            placeholder="Password"
            placeholderTextColor={COLORS.gray}
            onChangeText={onChangePassword}
            secureTextEntry
          />
          <TextInput
            style={styles.inputContainer}
            placeholder="Password again"
            placeholderTextColor={COLORS.gray}
            secureTextEntry
          />
          <CButton onPress={handleSignUp} title="SIGNUP" />
        </View>
        <View style={styles.row}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={goBack}>
            <Text style={{fontWeight: 'bold'}}>Sign in now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 120,
    borderRadius: 60,
    position: 'absolute',
    marginTop: 74,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -10,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    marginVertical: 12,
  },
  txt: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.white,
  },
  bodyContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: SIZES.xxSmall,
  },
});

export default SignUp;
