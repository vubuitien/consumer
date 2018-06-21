import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Card = ({ text, required, labelContainerStyle, labelTextStyle, labelRequiredStyle, onPress }) => {
  return (
    <View style={labelContainerStyle}>
      <Text onPress={onPress} style={labelTextStyle}>{text}</Text>
      {required ?
        <Text style={labelRequiredStyle}>*</Text> : null
      }
    </View>
  );
};
Card.defaultProps = {
    labelRequiredStyle: styles.labelRequiredDefault,
    required: false,
    labelContainerStyle: styles.labelContainerDefault,
    labelTextStyle: styles.labelTextDefault,
    onPress: () => {}
};
export default Card;
