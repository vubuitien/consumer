import React, { Component } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export default class BoxAdd extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.style}>
        <Icon name={this.props.iconName} style={[styles.icon, { color: this.props.color }]} />
      </TouchableOpacity>
    );
  }
}
