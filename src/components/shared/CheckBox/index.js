import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { styles } from './styles';

class CheckBox extends Component {
  state = {
    check: false,
  }

  checkBox() {
    this.setState({
      check: !this.state.check,
    });
  }

  render() {
    let checkbox;
    if (this.state.check === false) {
      checkbox = (
        <TouchableOpacity onPress={() => this.checkBox()} >
          <View style={styles.wrapper}>
            <View style={styles.boxCheck} />
            <Text style={styles.text}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      checkbox = (
        <TouchableOpacity onPress={() => this.checkBox()} >
          <View style={styles.wrapper}>
            <View style={styles.boxCheck1}>
              <View style={styles.childBox} />
            </View>
            <Text style={styles.text1}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {checkbox}
      </TouchableOpacity>
    );
  }
}
export default CheckBox;
