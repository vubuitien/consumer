import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

export default class SelectButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {this.props.child}
      </TouchableOpacity>
    );
  }
}
