import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class ButtonCreate extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} >
        <View style={this.props.style}>
          <Icon name={this.props.iconName} style={styles.icon} />
          <Text style={styles.creat}>{this.props.create}</Text>
          <Text style={styles.name}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default ButtonCreate;
