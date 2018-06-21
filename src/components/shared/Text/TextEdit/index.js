import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class TextEdit extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} >
        <View style={styles.wrapper}>
          <View style={styles.boxIcon}>
            <Icon name={this.props.iconName} style={styles.icon} />
          </View>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default TextEdit;
