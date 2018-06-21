import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TextParameter extends Component {
  render() {
    return (
      <View style={styles.title}>
        <Text style={[styles.textBold, { color: this.props.color, fontSize: this.props.sizeBold }]}>
          {this.props.bold}

        </Text>
        <Text
          style={[styles.textChild, { fontSize: this.props.sizeChild, color: this.props.color, }]}
        >
          {this.props.child}
        </Text>
      </View>
    );
  }
}
export default TextParameter;
