import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

//Text input with style
export default class Badge extends Component {
  render() {
    return (
      <View style={[styles.wrapper, { backgroundColor: this.props.color }]}>
        <Text style={styles.text}> {this.props.number} </Text>
      </View>
    );
  }
}
