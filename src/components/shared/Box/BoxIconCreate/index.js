import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export default class BoxIconCreate extends Component {
  render() {
    let title;
    if (this.props.hasShowTitle) {
        title = (
          <Text style={styles.title}>{this.props.title}</Text>
        );
    } else {
        title = <View />;
    }
    return (
      <TouchableOpacity onPress={this.props.onPress} >
        <View style={this.props.style}>
          <View style={styles.box}>
            {this.props.children}
            <View style={[styles.boxIcon, { backgroundColor: this.props.background }]}>
              <Icon name={this.props.iconName} style={[styles.icon, { color: this.props.color }]} />
            </View>
          </View>
          <View style={styles.boxText}>
            <Text style={styles.creat}>{this.props.create}</Text>
            {title}
          </View>
          <Text style={styles.name}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
