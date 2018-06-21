import React, { Component } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import MultiSelect from '../MultiSelect';

class MultiSelectModal extends Component {
  render() {
    return (
      <Modal
        isVisible={this.props.visible}
        onBackdropPress={this.props.onBackdropPress}
        backdropOpacity={0.50}
        style={styles.container}
      >
        <View style={styles.wapper}>
          <MultiSelect
            title={this.props.title}
            subtitle={this.props.subtitle}
            selected={this.props.selected}
            options={this.props.options}
            groupOptions={this.props.groupOptions}
            grouped={this.props.grouped}
            multiple={this.props.multiple}
            canCheckall={this.props.canCheckall}
            confirmPress={this.props.confirmPress}
            cancelPress={this.props.cancelPress}
          />
        </View>
      </Modal>
    );
  }
}

export default MultiSelectModal;
