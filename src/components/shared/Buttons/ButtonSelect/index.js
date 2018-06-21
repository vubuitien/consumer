import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ButtonSelect extends Component {
  render() {
    return (
      <View style={this.props.styleSelect}>
        <Text style={this.props.styleTextSelect}>{this.props.select}</Text>
      </View>
    );
  }
}
