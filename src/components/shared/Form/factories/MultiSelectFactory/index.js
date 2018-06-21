import t from 'tcomb-form-native';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MultiSelectModal } from '../../../../shared';
import styles from './styles';
import { apolloForm } from '../../higher_order/ApolloForm';

@apolloForm()
class MultiSelectFactory extends t.form.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      value: this.getTransformer().format(props.value),
      visible: _.get(this.props, 'options.visible', false),
      options: _.get(this.props, 'options.options', [])
    };
  }

  onChange(value) {
    super.onChange(value);
    this.setState({ visible: false });
  }

  async fetchData(query, variables) {
    await this.props.client.query({
      query,
      variables
    }).then(({ data }) => {
      this.setState({
        options: _.get(data, this.props.options.objectPath, [])
      });
    });
  }

  componentDidMount() {
    super.componentDidMount();
    const { query, variables } = this.props.options;
    if (query) {
      this.fetchData(query, variables);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const should = super.shouldComponentUpdate(nextProps, nextState);
    return should ||
    nextState.visible !== this.state.visible ||
    nextState.options !== this.state.options;
  }

  getTemplate() {
    return (locals) => {
      const {
        title,
        subtitle,
        multiple,
        canCheckall,
        groupOptions,
        grouped,
        value,
        options,
        labelDefault,
        labelSelected,
      } = locals;
      let btnStyle;
      let textStyle;
      let label;
      if (locals.hasError) {
        btnStyle = styles.btnError;
        textStyle = styles.textError;
        label = labelDefault;
      } else if (value && value.length > 0) {
        btnStyle = styles.btnActive;
        textStyle = styles.textActive;
        label = labelSelected(value.length);
     } else {
       btnStyle = styles.btn;
       textStyle = styles.text;
       label = labelDefault;
     }
      return (
        <View>
          <MultiSelectModal
            visible={this.state.visible}
            title={title}
            subtitle={subtitle}
            selected={value}
            options={options}
            groupOptions={groupOptions}
            cancelPress={() => this.setState({ visible: false })}
            confirmPress={locals.onChange}
            multiple={multiple}
            canCheckall={canCheckall}
            grouped={grouped}
          />
          <TouchableOpacity
            style={btnStyle}
            onPress={() => this.setState({ visible: true })}
          >
            <Text style={textStyle}>{label}</Text>
            <Icon name='keyboard-arrow-down' size={20} style={textStyle} />
          </TouchableOpacity>
        </View>
      );
    };
  }

  getLocals() {
    const locals = super.getLocals();
    const {
      title,
      subtitle,
      multiple,
      canCheckall,
      groupOptions,
      grouped,
      labelDefault,
      labelSelected,
    } = this.props.options;

    locals.options = this.state.options;
    locals.title = title;
    locals.subtitle = subtitle;
    locals.multiple = multiple;
    locals.canCheckall = canCheckall;
    locals.groupOptions = groupOptions;
    locals.grouped = grouped;
    locals.labelDefault = labelDefault;
    locals.labelSelected = labelSelected;
    return locals;
  }
}

export default MultiSelectFactory;
