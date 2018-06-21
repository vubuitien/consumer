import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

//Text input with style
export default class TextInputSearch extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={this.props.style}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChange}
          value={this.props.value}
          underlineColorAndroid={this.props.underline}
          secureTextEntry={this.props.secure}
        />
      </View>
    );
  }
}
