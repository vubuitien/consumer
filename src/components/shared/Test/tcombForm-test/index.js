import React, { Component } from 'react';
import { View, Text } from 'react-native';

import t from 'tcomb-form-native';
import { tcombForm } from '../../higher_order/tcombForm';
import { TextInput } from '../Form/template';
import fields from './fields';

@tcombForm(fields)
class Test extends Component {
  render() {
    return (
      <View>
        {this.props.inputs.username}
        <Text>12ss223</Text>
        {this.props.inputs.password}
        <Text>12ss223</Text>
        {this.props.inputs.image}
      </View>
    );
  }
}

export default Test;
