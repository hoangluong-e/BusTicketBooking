import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const CButton = ({onPress, title}: ButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 8,
    marginTop: SIZES.medium,
    marginBottom: SIZES.large,
  },
  buttonText: {
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
  },
});

export default CButton;
