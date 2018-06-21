import React, { Component } from 'react';
import { View, Picker,
  Text, Platform, TouchableHighlight } from 'react-native';
import _ from 'lodash';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../Card';
import styles from './styles';
import Colors from '../../../constants/colors';
import I18n from '../../../I18n';

class PickerFieldWithLabel extends Component {

  constructor(props) {
    super(props);
    this._renderPicker = this._renderPicker.bind(this);
    const isVertical = (this.props.longLabel) ? this.props.longLabel : false;
    this.state = {
      value: this.props.value,
      iosValue: this.props.value,
      iosVisible: false,
      isVertical,
    };
  }

  onChange(itemValue) {
    if (Platform.OS !== 'ios') {
        this.props.func(itemValue);
    }
    this.setState({ value: itemValue });
  }
  _setValue() {
    this.setState({ iosVisible: false, iosValue: this.state.value });
    this.props.func(this.state.value);
  }
  _renderPicker(options, error) {
    let placeholderStyle = styles.placeholder;
    if (this.props.error) {
      placeholderStyle = styles.placeholderError;
    }

    let formIOSStyle = styles.formIOS;
    if (this.props.hasSpecificStyle) {
      formIOSStyle = this.props.formIOSSpecific;
    }

    let formItemStyle = styles.formItem;
    if (this.props.hasSpecificStyle) {
      formItemStyle = this.props.formItemSpecificStyle;
    }

    let labelContainerStyle = styles.labelWrap;
    if (this.props.hasSpecificStyle) {
      labelContainerStyle = this.props.labelWrapSpecificStyle;
    }

    let nameInputContainerStyle = styles.nameInputContainer;
    if (this.props.hasSpecificStyle) {
      nameInputContainerStyle = this.props.nameInputContainerSpecificStyle;
    }

    if (this.props.hasLongLabel) {
      nameInputContainerStyle = [nameInputContainerStyle, styles.nameInputShort];
      labelContainerStyle = [labelContainerStyle, styles.labelLong];
    }
    if (Platform.OS === 'ios') {
      const selectedItem = this.props.data.find(item => item.id === this.state.iosValue);
      const holderText = this.props.placeholder ? this.props.placeholder : I18n.t('select');
      return (
        <View style={formIOSStyle}>
          <TouchableHighlight
            underlayColor='#A8BEC7' onPress={() => this.setState({ iosVisible: true })}
          >
            <View style={[formItemStyle, { paddingHorizontal: this.props.paddingHorizontal }]}>
              <Card
                text={this.props.title}
                required={this.props.required}
                labelRequiredStyle={styles.labelRequired}
                labelContainerStyle={labelContainerStyle}
                labelTextStyle={styles.labelText}
              />
              <View style={nameInputContainerStyle}>
                <Text
                  numberOfLines={1}
                  style={this.state.iosValue ? styles.nameInput : placeholderStyle}
                >
                  {selectedItem ? selectedItem.name : holderText}
                </Text>
              </View>

            </View>
          </TouchableHighlight>
          <Modal
            isVisible={this.state.iosVisible}
            onBackdropPress={() => this.setState({ iosVisible: false })}
            onBackButtonPress={() => this.setState({ iosVisible: false })}
            style={styles.bottomModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.navigation}>
                <TouchableHighlight
                  underlayColor='transparent'
                  onPress={() => this.setState({ iosVisible: false })}
                  style={{ width: 35 }}
                >
                  <Icon name='close' style={styles.closeModal} />
                </TouchableHighlight>
                <Text>{holderText}</Text>
                <TouchableHighlight
                  underlayColor='transparent'
                  onPress={this._setValue.bind(this)}
                >
                  <Text style={styles.doneBtn}>Done</Text>
                </TouchableHighlight>
              </View>
              <Picker
                selectedValue={this.state.value}
                onValueChange={this.onChange.bind(this)}
              >
              {options}
              </Picker>
            </View>
          </Modal>
        </View>
      );
    } else if (Platform.OS === 'android') {
      return (
        <View style={formItemStyle}>
          <Card
            text={this.props.title} required={this.props.required}
            labelRequiredStyle={styles.labelRequired}
            labelContainerStyle={labelContainerStyle}
            labelTextStyle={styles.labelText}
          />
          <Picker
            selectedValue={this.state.value}
            style={styles.pickertext}
            onValueChange={this.onChange.bind(this)}
          >
          {options}
          </Picker>
        </View>
      );
    }
  }

  render() {
    let error = <View />;
    let wapperPicker = { backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: Colors.formItemBorder };
    if (this.props.error && this.props.errorText) {
      error = <Text style={styles.errorText}> {this.props.errorText} </Text>;
      wapperPicker = { borderWidth: 1, borderColor: 'red', backgroundColor: 'white' };
    }
    const options = [];
    let key = 0;
    if (this.props.placeholder) {
      options.push(<Picker.Item key={0} label={this.props.placeholder} value={''} />);
      key = 1;
    }
    const input = _.orderBy(this.props.data, i => { return i.name; }, 'asc');
    input.map((item, index) =>
     options.push(< Picker.Item label={item.name} value={item.id} key={index + key} />)
    );

    return (
      <View style={wapperPicker}>
        { this._renderPicker(options, error) }
        {error}
      </View>
    );
  }
}

PickerFieldWithLabel.defaultProps = {
    paddingHorizontal: 12,
    placeholder: I18n.t('select'),
    hasLongLabel: false
};

export default PickerFieldWithLabel;
