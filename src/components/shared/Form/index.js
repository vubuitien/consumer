import t from 'tcomb-form-native';
import React, { Component } from 'react';
import { View } from 'react-native';
import _ from 'lodash';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValues
    };
  }

  getForm() {
    return this.refs.form;
  }

  render() {
    let options = {
      template: this.props.children
    }
    if (this.props.options) {
      options = _.merge(options, this.props.options);
    }
    return (
      <View style={{ flex: 1 }}>
        <t.form.Form
          ref='form'
          type={t.struct(this.props.type)}
          options={options}
          onChange={(value) => this.setState({ value })}
          value={this.state.value}
        />
      </View>
    );
  }
}

export default Form;
