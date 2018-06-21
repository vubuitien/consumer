import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import {
  TextParameter
} from '../../../shared';

export default class BoxParameter extends Component {
  render() {
    let boxImage;
    if (this.props.hasShowImage) {
        boxImage = (
          <View
            style={[styles.container,
              { backgroundColor: this.props.backgroundColor,
                marginRight: this.props.right }
            ]}
          >
            <Image source={this.props.uri} style={this.props.styleImage} />
            <View style={styles.boxParameter}>
              <Text style={[styles.number, { color: this.props.color }]}>{this.props.number}</Text>
              <Text style={[styles.title, { color: this.props.color }]}>{this.props.title}</Text>
            </View>
          </View>
        );
    } else {
        boxImage = <View />;
    }

    let boxImageIcon;
    if (this.props.hasShowImageIcon) {
        boxImageIcon = (
          <View
            style={[styles.container,
              { backgroundColor: this.props.backgroundColor,
                marginRight: this.props.right }
            ]}
          >
            <Icon name={this.props.iconName} size={this.props.size} color={this.props.color} />
            <View style={styles.boxParameter}>
              <Text style={[styles.number, { color: this.props.color }]}>{this.props.number}</Text>
              <Text style={[styles.title, { color: this.props.color }]}>{this.props.title}</Text>
            </View>
          </View>
        );
    } else {
        boxImageIcon = <View />;
    }

    let boxIcon;
    if (this.props.hasShowIcon) {
        boxIcon = (
          <View
            style={[styles.containerBoxIcon,
              { backgroundColor: this.props.backgroundColor,
                marginRight: this.props.right }
            ]}
          >
            <Icon name={this.props.iconName} size={this.props.size} color={this.props.color} />
            <View style={styles.boxParameter}>
              <Text style={styles.number}>
                {this.props.number}
                <Text style={styles.money}>
                  {this.props.money}
                </Text>
              </Text>
              <TextParameter
                color={'#fff'}
                sizeBold={9}
                sizeChild={9}
                bold={this.props.bold}
                child={this.props.child}
              />
            </View>
          </View>
        );
    } else {
        boxIcon = <View />;
    }

    return (
      <View>
        {boxImage}
        {boxIcon}
        {boxImageIcon}
      </View>
    );
  }
}
