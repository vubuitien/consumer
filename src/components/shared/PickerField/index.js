import React, { Component } from 'react';
import { View, Picker, Text, Platform, TouchableHighlight } from 'react-native';
import _ from 'lodash';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import I18n from '../../../I18n';

class PickerField extends Component {
  state = {
    value: this.props.value,
    iosVisible: false,
    iosValue: this.props.value
  };
  onChange(itemValue) {
    if (Platform.OS !== 'ios') {
        this.props.onChange(itemValue);
    }
    this.setState({ value: itemValue });
  }
  _setValue() {
    this.setState({ iosVisible: false, iosValue: this.state.value });
    this.props.onChange(this.state.value);
  }
  render() {
    let error = <View />;
    if (this.props.error) {
      error = <Text> Error </Text>;
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
    const selectedItem = this.props.data.find(item => item.id === this.state.iosValue);
    const holderText = this.props.placeholder ? this.props.placeholder : I18n.t('select');

    let iosValueStyle = styles.iosValue;
    let iosInputStyle = styles.iosInput;
    let itemStyle = styles.item;
    let underlayColor = '#A8BEC7';
    let downArr = { marginLeft: 5, marginTop: 3 };
    if (this.props.whitePickerField) {
      iosValueStyle = styles.whiteIosValue;
      iosInputStyle = styles.whiteIosInput;
      itemStyle = styles.whiteItem;
      underlayColor = 'transparent';
      downArr = { color: 'white', marginLeft: 5, marginTop: 3 };
    }
    return (
      <View style={[styles.formItem, this.props.style ? this.props.style : {}]}>
        {Platform.OS === 'ios' ?
        <View>
          <TouchableHighlight
            underlayColor={underlayColor}
            onPress={() => this.setState({ iosVisible: true })}
          >
            <View style={iosValueStyle}>
              <Text numberOfLines={1} style={iosInputStyle}>
                {selectedItem ? selectedItem.name : holderText}
              </Text>
              <Icon name='menu-down' size={20} style={downArr} />
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
        :
        <Picker
          selectedValue={this.state.value}
          style={styles.nameInput}
          onValueChange={this.onChange.bind(this)}
          itemStyle={itemStyle}
        >
          {options}
        </Picker>
        }
        {error}
      </View>
    );
  }
}

export default PickerField;
