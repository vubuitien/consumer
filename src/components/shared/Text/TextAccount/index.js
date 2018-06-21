import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TextAccount extends Component {
  render() {
    return (
      <View style={styles.title}>
        <Text>
          <Text style={[styles.textBold, { color: this.props.color, fontSize: this.props.sizeBold }]}>
            {this.props.bold}
          </Text>
          <Text
            style={[styles.textChild, { fontSize: this.props.sizeChild, color: this.props.color }]}
          >
            {this.props.child}
          </Text>
        </Text>
      </View>
    );
  }
}
export default TextAccount;
