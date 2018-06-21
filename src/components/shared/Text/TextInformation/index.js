import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class TextInformation extends Component {
  render() {
    return (
      <View style={[styles.container, { marginLeft: this.props.left }]}>
        <Icon
          name={this.props.name}
          style={[styles.icon, { color: this.props.color }]}
        />
        <Text
          style={[styles.text, { color: this.props.color, fontSize: this.props.size }]}
        >
          {this.props.title}
        </Text>
        {this.props.children}
      </View>
    );
  }
}
export default TextInformation;
