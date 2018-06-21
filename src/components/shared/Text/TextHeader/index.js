import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TextHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.titleBold, { color: this.props.color, fontSize: this.props.size }]}>{this.props.titleBold}</Text>
        <Text style={[styles.title, { color: this.props.color, fontSize: this.props.sizeChild }]}>{this.props.title}</Text>
      </View>
    );
  }
}
export default TextHeader;
