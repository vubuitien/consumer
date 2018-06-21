import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity underlayColor='rgba(0, 0, 0, 1)' onPress={this.props.onPress}>
          <Icon name={this.props.name} style={styles.headerClose} />
        </TouchableOpacity>
        <View style={styles.text}>
          <Text style={styles.textTitle}>{this.props.title}</Text>
        </View>
        <TouchableOpacity onPress={this.props.onNotify}>
          <Icon name={this.props.notify} style={styles.headerNotify} />
        </TouchableOpacity>
      </View>
    );
  }
}
