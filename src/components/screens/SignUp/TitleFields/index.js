import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default class TitleFields extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.textField}>{this.props.textFields}</Text>
        <View style={styles.inputField}>
          {this.props.children}
        </View>
      </View>
    );
  }
}
