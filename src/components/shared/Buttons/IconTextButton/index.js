import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class IconTextButton extends Component {
  render() {
    let show_text;
    if (this.props.hasShowText) {
        show_text = (
          <View style={styles.text1}>
            <Text style={[styles.buttontext, { color: this.props.color }]}>{this.props.title1}</Text>
            <Text style={[styles.childText, { color: this.props.color }]}>{this.props.childText1}</Text>
          </View>
        );
    } else {
        show_text = <View />;
    }

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={this.props.style}>
            <View style={[styles.iconButton, { backgroundColor: this.props.background }]}>
              <Icon
                name={this.props.iconName}
                size={this.props.iconSize}
                color={this.props.iconColor}
              />
            </View>
            <View style={styles.text}>
              <Text style={[styles.buttontext, { color: this.props.color }]}>
                {this.props.title}
              </Text>
              <Text style={[styles.childText, { color: this.props.color }]}>
                {this.props.childText}
              </Text>
              {show_text}
            </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default IconTextButton;
