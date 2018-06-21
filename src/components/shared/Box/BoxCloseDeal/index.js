import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Image from 'react-native-remote-svg';
import { styles } from './styles';

export default class BoxInformation extends Component {
  render() {
    let coin;
    if (this.props.hasShowCoin) {
        coin = (
          <View style={[styles.container, { backgroundColor: this.props.backgroundColor }]}>
            <Image source={this.props.uri} style={this.props.style} />
            <Text style={[styles.number, { color: this.props.color }]}>{this.props.number}</Text>
          </View>
        );
    } else {
        coin = <View />;
    }

    let sales;
    if (this.props.hasShowSales) {
        sales = (
          <View style={[styles.container, { backgroundColor: this.props.backgroundColor }]}>
            <Text style={this.props.style}>
              {this.props.titleSales}
            </Text>
          </View>
        );
    } else {
        sales = <View />;
    }

    return (
      <View>
        {coin}
        {sales}
      </View>
    );
  }
}
