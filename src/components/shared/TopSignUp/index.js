import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import TextAccount from '../Text/TextAccount';

//Text input with style
export default class TopSignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginNetwork}>
          <TextAccount bold={this.props.bold} child={this.props.chil} />
          <View style={styles.buttonNetwork}>
            {this.props.child}
          </View>
        </View>
        <View style={styles.or}>
          <Text style={styles.textOr}>OR</Text>
        </View>
      </View>
    );
  }
}
