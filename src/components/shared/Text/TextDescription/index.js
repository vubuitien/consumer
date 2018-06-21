import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TextDescription extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.value}>{this.props.values}</Text>
      </View>
    );
  }
}
export default TextDescription;
