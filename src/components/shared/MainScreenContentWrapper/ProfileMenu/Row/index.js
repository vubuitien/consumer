import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../../../constants/colors';
import styles from './styles';

class Row extends Component {

  render() {
    //const activity = this.props.activity;
    return (
      <TouchableOpacity
        onPress={this.props.onPress.bind(this)}
         style={styles.container}
      >
        <View style={styles.leftCol}>
          <Icon name={this.props.iconName} size={18} />
          <View style={styles.info}>
            <Text style={styles.text}>{this.props.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Row;
