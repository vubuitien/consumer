import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { styles } from './styles';

export default class BoxListOffer extends Component {
  render() {
    return (
      <View style={[styles.wrapper, { backgroundColor: this.props.backgroundColor }]}>
        <Text style={styles.number}>{this.props.number}</Text>
        <Text style={styles.status}>{this.props.status}</Text>
      </View>
    );
  }
}
