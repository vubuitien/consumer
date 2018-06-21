import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Image from 'react-native-remote-svg';
import { styles } from './styles';

export default class BoxIcon extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Icon
          name={this.props.icon}
          size={this.props.sizeIcon}
          color={this.props.color}
        />
        <Image
          source={this.props.source}
          style={this.props.imageStyle}
        />
        <View>
          <Text style={[styles.number, { color: this.props.color, fontSize: this.props.sizeBold, lineHeight: this.props.lineHeight }]}>
            {this.props.number}
          </Text>
          <Text style={[styles.status, { color: this.props.color, fontStyle: this.props.fontStyle, fontSize: this.props.sizeTitle }]}>
            {this.props.status}
          </Text>
        </View>
      </View>
    );
  }
}
