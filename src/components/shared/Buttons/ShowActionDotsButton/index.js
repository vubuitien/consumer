import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styles from './styles';

const ShowActionDotsButton = ({ onPress, label, iconName }, context) => {

    const onActionPress = () => {
        context.onActionPressed();
        onPress();
    }

    return (
        <TouchableHighlight underlayColor='transparent' onPress={onActionPress}>
        <View style={styles.labelContainer}>
          <Icon name={iconName} style={styles.icon} />
          <Text style={styles.label}> {label}</Text>
        </View>
        </TouchableHighlight>
    );
};

ShowActionDotsButton.contextTypes = { onActionPressed: PropTypes.func }

export default ShowActionDotsButton;
