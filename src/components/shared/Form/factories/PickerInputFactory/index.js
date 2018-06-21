import t from 'tcomb-form-native';
import React from 'react';
import _ from 'lodash';
import { PickerField } from '../../../../shared';

class PickerInputFactory extends t.form.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      value: this.getTransformer().format(props.value),
      data: _.get(this.props, 'options.data', [])
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const should = super.shouldComponentUpdate(nextProps, nextState);
    return should ||
    nextState.data !== this.state.data;
  }

  getTemplate() {
    return (locals) => {
      const { data } = locals;
      const optionDefault = { id: undefined, name: 'Select option' };
      return (
        <PickerField
          onChange={locals.onChange}
          data={_.concat(optionDefault, data)}
          value={locals.value}
          placeholder={locals.placeholder}
          whitePickerField={locals.whitePickerField}
        />
      );
    };
  }

  getLocals() {
    const locals = super.getLocals();
    locals.data = this.state.data;
    locals.whitePickerField = this.props.options.whitePickerField;
    return locals;
  }
}

export default PickerInputFactory;
