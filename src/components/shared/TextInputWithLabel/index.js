import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Card from '../Card';
import Colors from '../../../constants/colors';
import styles from './styles';

class TextInputWithLabel extends Component {
  state = {
    placeholder: this.props.placeholder
  }
  onFocus() {
    this.setState({ placeholder: ' ' });
  }
  onBlur() {
    this.setState({ placeholder: this.props.placeholder });
  }
  render() {
    let placeholderTextColor = '#7F7F7F';
    if (this.props.error) {
      placeholderTextColor = Colors.deleteRed;
    }
    const keyboardType = (this.props.keyboardType) ? this.props.keyboardType : 'default';
    const extraStyle = (this.props.extraStyle) ? this.props.extraStyle : false;
    return (
      <View style={!extraStyle ? styles.formItem : null}>
        {this.props.title ?
        <Card
          text={this.props.title} required={this.props.required}
          labelRequiredStyle={styles.labelRequired}
          labelContainerStyle={styles.labelContainer}
          labelTextStyle={styles.labelText}
          onPress={() => this.TextInput.focus()}
        /> : null}
        <TextInput
          style={!extraStyle ? styles.nameInput : this.props.style}
          value={this.props.value}
          placeholder={this.state.placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={this.props.func.bind(this)}
          autoFocus={this.props.autoFocus}
          secureTextEntry={this.props.password}
          keyboardType={keyboardType}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          ref={(r) => { this.TextInput = r; }}
        />

      </View>
    );
  }
}

export default TextInputWithLabel;
