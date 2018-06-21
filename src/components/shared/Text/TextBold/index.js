import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TextBold extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text>
          <Text style={[styles.titleBold, { color: this.props.color, fontSize: this.props.size }]}>{this.props.titleBold}</Text>
          <Text style={[styles.title, { color: this.props.color, fontSize: this.props.sizeChild }]}>{this.props.title}</Text>
        </Text>
      </View>
    );
  }
}
export default TextBold;
