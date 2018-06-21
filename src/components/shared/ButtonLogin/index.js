import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class ButtonLogin extends Component {
  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        onPress={this.props.onPress}
      >
        <View style={styles.savebutton}>
          <Icon
            style={styles.icon}
            name={this.props.iconName}
            size={this.props.iconSize}
            color={this.props.iconColor}
          />
          <Text style={styles.buttontext}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default ButtonLogin;
