import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class ButtonIcon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.pronPress}>
        <View style={styles.savebutton}>
          <Icon
            style={styles.icon}
            name={this.props.iconName}
            color={this.props.iconColor}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
export default ButtonIcon;
