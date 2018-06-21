import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

class ListCategory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name={'check'} style={styles.styleIcon} />
        <Text style={styles.category}>{this.props.name} </Text>
      </View>
    );
  }
}
export default ListCategory;
