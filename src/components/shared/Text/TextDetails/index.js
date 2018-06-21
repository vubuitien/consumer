import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class TextDetails extends Component {
  render() {
    let first_text;
    if (this.props.hasFirstText) {
        first_text = (
          <Text
            style={[styles.text1, { color: this.props.color, fontSize: this.props.size }]}
          >
            {this.props.title}
          </Text>
        );
    } else {
        first_text = <View />;
    }

    let second_text;
    if (this.props.hasSecondText) {
        second_text = (
          <Text
            style={[styles.text, { color: this.props.color, fontSize: this.props.size }]}
          >
            {this.props.title}
          </Text>
        );
    } else {
        second_text = <View />;
    }
    return (
      <TouchableOpacity onPress={this.props.onPress} >
        <View style={styles.wrapper}>
          {first_text}
          <View style={[styles.boxIcon, { backgroundColor: this.props.color }]}>
            <Icon name={this.props.iconName} style={styles.icon} />
          </View>
          {second_text}
          <Text style={[styles.textBold, { color: this.props.color, fontSize: this.props.size }]}>{this.props.titleBold}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default TextDetails;
