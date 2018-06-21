import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBoxItems from '../CheckBoxItems';
import I18n from '../../../I18n';
import styles from './styles';

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
      groupSelected: [],
      touched: this.props.selected,
      value: this.props.selected
    };
  }

  onToogleOption(item) {
    let { touched } = this.state;
    if (_.indexOf(touched, item.id) === -1) {
      touched = _.concat(touched, item.id);
    } else {
      touched = _.pull(touched, item.id);
    }
    this.setState({ touched });
  }

  onCheckall(item) {
    let { selected, groupSelected } = this.state;
    const options = this.props.groupOptions(item);
    const childids = options.map(e => e.id);
    if (_.indexOf(groupSelected, item.id) === -1) {
      groupSelected = _.concat(groupSelected, item.id);
      selected = _.compact(_.concat(selected, _.difference(childids, selected)));
    } else {
      groupSelected = _.pull(groupSelected, item.id);
      selected = _.remove(selected, childids);
    }
    this.setState({ selected, groupSelected });
  }

  onCheckOption(item) {
    let { selected } = this.state;
    if (_.indexOf(selected, item.id) === -1) {
      selected = _.concat(selected, item.id);
    } else {
      selected = _.pull(selected, item.id);
    }
    selected = _.compact(selected);
    this.setState({ selected });
  }

  onCancel() {
    if (this.props.cancelPress) {
      this.props.cancelPress();
    }
  }

  onConfirm() {
    this.setState({ value: this.state.selected });
    if (this.props.confirmPress) {
      this.props.confirmPress(this.state.selected);
    }
  }

  renderGroupOptionTouchable(item, checked, active) {
    let iconName;
    if (checked) {
      iconName = 'check';
    } else {
      iconName = active ? 'keyboard-arrow-up' : 'keyboard-arrow-down';
    }
    const textName = checked ? styles.textActive : styles.textName;
    return (
      <View style={styles.optionGroup}>
        <TouchableOpacity onPress={() => this.onCheckall(item)}>
          <Text style={textName}>{item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onToogleOption(item)}>
          <Icon name={iconName} size={20} style={textName} />
        </TouchableOpacity>
      </View>
    );
  }

  renderGroupOptionDefault(item, checked, active) {
    let iconName;
    if (checked) {
      iconName = 'check';
    } else {
      iconName = active ? 'keyboard-arrow-up' : 'keyboard-arrow-down';
    }
    const textName = checked ? styles.textActive : styles.textName;

    return (
      <View style={styles.optionGroup}>
        <Text style={styles.textName}>{item.name}</Text>
        <TouchableOpacity onPress={() => this.onToogleOption(item)}>
          <Icon name={iconName} size={20} style={textName} />
        </TouchableOpacity>
      </View>
    );
  }

  renderOptionItem(item, checked) {
    const textName = checked ? styles.textActive : styles.textName;
    return (
      <View style={styles.optionChild}>
        <TouchableOpacity onPress={() => this.onCheckOption(item)}>
          <Text style={textName}>{item.name}</Text>
        </TouchableOpacity>

        {checked &&
          <View>
            <Icon name={'check'} size={20} style={styles.textActive} />
          </View>
        }
      </View>
    );
  }

  renderGroupOption(item) {
    const options = this.props.groupOptions(item);
    const { selected, groupSelected, touched } = this.state;
    const checked = _.indexOf(groupSelected, item.id) !== -1;
    const active = _.indexOf(touched, item.id) !== -1;
    return (
      <View style={{ flexDirection: 'column' }}>
        {options.length > 0 && this.props.canCheckall ?
          this.renderGroupOptionTouchable(item, checked, active)
          :
          this.renderGroupOptionDefault(item, checked, active)
        }
        {active && options.length > 0 &&
          <View>
            {options.map(e => {
              const optionChecked = _.indexOf(selected, e.id) !== -1;
              return this.renderOptionItem(e, optionChecked);
            })}
          </View>
        }
      </View>
    );
  }

  renderOption(item) {
    const { selected } = this.state;
    const optionChecked = _.indexOf(selected, item.id) !== -1;
    return (
      <View>
        <View style={styles.optionChild}>
          <CheckBoxItems
            title={item.name}
            onPress={() => this.onCheckOption(item)}
            checked={optionChecked}
          />
        </View>
      </View>
    );
  }

  render() {
    const { options } = this.props;
    const title = this.props.title ? this.props.title : I18n.t('select_options');
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {this.props.subtitle &&
            <Text>{this.props.subtitle}</Text>
          }
        </View>
        <ScrollView style={styles.wapper}>
            {options.map(item => (this.props.grouped ?
            this.renderGroupOption(item)
            :
            this.renderOption(item)))}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerBtn} onPress={this.onCancel.bind(this)}>
            <Text style={{ fontSize: 18 }}>{I18n.t('cancel')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtn} onPress={this.onConfirm.bind(this)}>
            <Text style={{ fontSize: 18 }}>{I18n.t('confirm')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MultiSelect;
