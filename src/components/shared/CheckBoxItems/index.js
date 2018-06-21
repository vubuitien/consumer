import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

class CheckBoxItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: this.props.checked,
    };
  }

  checkBox= async ()=> {    
    await this.props.onPress(this.state.check);
    await this.setState({
      check: !this.state.check,
    });
  }

  render() {
    let checkbox;
    if (!this.state.check && !this.props.checked || this.props.checked === false) {
      checkbox = (
        <TouchableOpacity onPress={() => this.checkBox()} >
          <View style={styles.wrapper}>
            <Text style={[styles.name, { fontSize: this.props.size, fontStyle: this.props.fontStyle }]}>{this.props.name}</Text>
            <Text style={[styles.nameChild, { fontSize: this.props.size, fontStyle: this.props.fontStyle }]}>{this.props.nameChild}</Text>
            <View style={styles.boxCheck} />
            <Text style={[styles.text, { fontSize: this.props.size }]}>{this.props.title}</Text>
            <Text style={[styles.textChild, { fontSize: this.props.size }]}>{this.props.titleChild}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      checkbox = (
        <TouchableOpacity onPress={() => this.checkBox()} >
          <View style={styles.wrapper}>
            <Text style={[styles.name1, { fontSize: this.props.size, color: this.props.color, fontStyle: this.props.fontStyle }]}>
              {this.props.name}
            </Text>
            <Text style={[styles.nameChild1, { fontSize: this.props.size, color: this.props.color, fontStyle: this.props.fontStyle }]}>
              {this.props.nameChild}
            </Text>
            <View style={[styles.boxCheck1, { backgroundColor: this.props.background }]}>
              <Icon name={'check'} style={styles.icon} />
            </View>
            <Text style={[styles.text1, { fontSize: this.props.size, color: this.props.color }]}>
              {this.props.title}
            </Text>
            <Text style={[styles.textChild1, { fontSize: this.props.size, color: this.props.color }]}>
              {this.props.titleChild}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View style={this.props.style}>
        {checkbox}
      </View>
    );
  }
}
export default CheckBoxItems;
