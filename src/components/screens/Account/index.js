import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import { IconTextButton, StyledTextInput, ButtonLogin, ErrorText } from '../../shared';

export class Account extends Component {
  static navigationOptions = { title: 'Account', header: null };

  render() {
    return (
      <View style={styles.container}>
        <Text>Account</Text>
      </View>
    );
}
}
