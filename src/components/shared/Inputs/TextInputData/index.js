import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import _ from 'lodash';
import { styles } from './styles';

//Text input with style
export default class TextInputData extends Component {
  render() {
    let textStyle = styles.text;
    if (this.props.styles) {
      textStyle = _.merge(textStyle, this.props.style);
    }
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={this.props.style}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChange}
          value={this.props.value}
          underlineColorAndroid={this.props.underline}
          secureTextEntry={this.props.secure}
          placeholderTextColor={this.props.placeholderColor}
        />
      </View>
    );
  }
}
