import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class ButtonNext extends Component {
  render() {
    let show_text;
    if (this.props.hasShowText) {
        show_text = (
          <View style={styles.text1}>
            <Text style={styles.buttontext}>{this.props.title1}</Text>
            <Text style={styles.childText}>{this.props.childText1}</Text>
          </View>
        );
    } else {
        show_text = <View />;
    }

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={this.props.style}>
          <View style={styles.buttonArrow}>
            <View style={styles.iconButton}>
              <Icon
                style={styles.icon}
                name={this.props.iconName}
                size={this.props.iconSize}
                color={this.props.iconColor}
              />
            </View>
            <View style={styles.text}>
              <Text style={styles.buttontext}>{this.props.title}</Text>
              <Text style={styles.childText}>{this.props.childText}</Text>
              {show_text}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default ButtonNext;
