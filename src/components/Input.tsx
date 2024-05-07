import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';

const CInput = (props: any) => {
  const handleChangeText = () => {
    props.onInputChanged(props.id, Text);
  };
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          autoCapitalize="none"
          onChangeText={handleChangeText}
        />
      </View>
      {props.error && (
        <>
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{props.errorText[0]}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default CInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    marginVertical: 12,
  },
  input: {
    color: COLORS.black,
    fontSize: SIZES.small,
  },
  errorContainer: {
    marginVertical: 4,
  },
  errorText: {
    color: COLORS.red,
  },
});
