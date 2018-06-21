import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Image from 'react-native-remote-svg';
import { styles } from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity underlayColor='rgba(0, 0, 0, 1)' onPress={this.props.onPress}>
          <Icon name={this.props.name} style={styles.headerClose} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.image} onPress={this.props.onLogo}>
          <Image
            source={require('../../../../assets/images/closedeal_logoM.svg')}
            style={styles.imageSvg}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onNotify}>
          <Icon name={this.props.notify} style={styles.headerNotify} />
        </TouchableOpacity>
      </View>
    );
  }
}
