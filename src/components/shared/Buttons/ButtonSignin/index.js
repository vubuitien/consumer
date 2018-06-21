import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class ButtonSignin extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress} >
        <View style={styles.savebutton}>
          <Text style={[styles.buttontext, { fontSize: this.props.size }]}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default ButtonSignin;
