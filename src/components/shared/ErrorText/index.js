import React from 'react';
import { View, Text } from 'react-native';
import errorStyles from './styles';

const ErrorText = ({ title }) => {
  return (
    <View style={errorStyles.errorContainer}>
        <Text style={errorStyles.errorText}>{title}</Text>
    </View>
  );
};

export default ErrorText;
