import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { Component } from 'react';
import styles from './styles';


class SidebarNavigationSubLink extends Component {

  render() {
    return (
        <View style={styles.sidebarNavigationSubContainer}>
          <TouchableOpacity
            onPress={this.props.onPress}
            style={styles.sidebarNavigationWithSub}
          >
            <Text style={this.props.focused ? styles.textFocused : styles.text}>{this.props.label}</Text>

          </TouchableOpacity>
        </View>

    );
  }
}

export default SidebarNavigationSubLink;
