import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

//Text input with style
export default class Menu extends Component {

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.wrapper}>
        <View style={styles.buttonLeft}>
          <TouchableHighlight onPress={this.props.onSideBarPress}>
            <View style={styles.buttonMain}>
              <Image source={this.props.src} style={styles.avata} />
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.searchBar} >
          <Text style={styles.title}> Home </Text>
        </View>

        <View style={styles.buttonRight}>
          <TouchableHighlight
            style={{ alignSelf: 'flex-end' }}
            activeOpacity={0.6}
            onPress={this.props.onPress}
          >
            <View style={styles.buttonMain}>
              <Icon name='feather' size={24} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
