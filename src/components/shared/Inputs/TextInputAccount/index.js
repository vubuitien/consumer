import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';

//Text input with style
export default class TextInputAccount extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={styles.text}
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
