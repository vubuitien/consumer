import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export default class BoxInformation extends Component {
  render() {
    let trademark;
    if (this.props.hasShowTrademark) {
        trademark = (
          <View style={[styles.container, { backgroundColor: this.props.backgroundColor }]}>
            <Image source={{ uri: this.props.uri }} style={this.props.style} />
          </View>
        );
    } else {
        trademark = <View />;
    }

    let limit;
    if (this.props.hasShowLimit) {
        limit = (
          <View style={[styles.container, { backgroundColor: this.props.backgroundColor }]}>
            <Icon name={this.props.name} style={styles.icon} />
            <Text style={this.props.style}>{this.props.title}</Text>
          </View>
        );
    } else {
        limit = <View />;
    }

    let product;
    if (this.props.hasShowProduct) {
        product = (
          <View style={[styles.containerProduct, { backgroundColor: this.props.backgroundColor }]}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.content}>{this.props.content}</Text>
          </View>
        );
    } else {
        product = <View />;
    }

    return (
      <View>
        {trademark}
        {limit}
        {product}
      </View>
    );
  }
}
