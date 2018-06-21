import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TextNormal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { color: this.props.color, fontSize: this.props.size }]}>{this.props.title}</Text>
        <Text style={[styles.titleBold, { color: this.props.color, fontSize: this.props.size }]}>{this.props.titleBold}</Text>
      </View>
    );
  }
}
export default TextNormal;
