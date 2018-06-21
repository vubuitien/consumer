import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class BottomCreateSignUp extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress} >
        <View style={styles.savebutton}>
          <Text style={[styles.creat, { color: this.props.color }]}>{this.props.create}</Text>
          <Text style={[styles.name, { color: this.props.color }]}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default BottomCreateSignUp;
