import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';

const FormButton = ({ onPress, label, bgColor, disabled }) => {
  const opacity = disabled ? 0.6 : 1
  return (
    <TouchableHighlight activeOpacity={0.6} underlayColor='transparent' onPress={onPress} disabled={disabled}>
        <View style={[styles.buttonMain, { backgroundColor: bgColor }, { opacity: opacity }]} >
          <Text style={styles.buttonText}>{label} </Text>
        </View>
    </TouchableHighlight>
  );
};

export default FormButton;
