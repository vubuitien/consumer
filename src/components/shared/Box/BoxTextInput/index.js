import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { styles } from './styles';

export default class BoxTextInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}
