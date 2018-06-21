import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class TextPassword extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress} >
        <View style={styles.textPass}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default TextPassword;
