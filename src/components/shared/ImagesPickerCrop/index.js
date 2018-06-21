import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import styles from './styles';

class ImagesPickerCrop extends Component {
  onCancel() {
    this.props.onCancel();
  }
  openCamera() {
    ImagePicker.openCamera({
      width: (this.props.width ? this.props.width : 400),
      height: (this.props.height ? this.props.height : 400),
      cropping: (this.props.cropping ? this.props.cropping : false),
    }).then(image => {
      if (this.props.multiple) {
        this.props.onSelected([image]);
      } else {
        this.props.onSelected(image);
      }
    });
  }
  async openLibrary() {
    await ImagePicker.openPicker({
      width: (this.props.width ? this.props.width : 400),
      height: (this.props.height ? this.props.height : 400),
      cropping: (this.props.cropping ? this.props.cropping : false),
      multiple: (this.props.multiple ? this.props.multiple : false),
      maxFiles: 20
    }).then(image => {
      this.props.onSelected(image);
    });
  }
  render() {
    const title = this.props.title ? this.props.title : 'Select Photo';
      return (
        <Modal
          isVisible={this.props.visible}
          style={Platform.OS === 'ios' ? styles.modal : styles.modalAndroid}
        >
            <View style={Platform.OS === 'ios' ? styles.modalContainer : styles.modalWrapAndroid}>
              <View style={Platform.OS === 'ios' ? styles.options : styles.optAndroid}>
                <Text style={Platform.OS === 'ios' ? styles.optionsTitle : styles.optTitleAndroid}>
                  {title}
                </Text>
                <TouchableOpacity
                  onPress={this.openCamera.bind(this)}
                  style={Platform.OS === 'ios' ? styles.action : styles.actionAndroid}
                >
                  <Text style={Platform.OS === 'ios' ? styles.btnText : styles.btnTextAndroid}>
                    Take Photo...
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.openLibrary.bind(this)}
                  style={Platform.OS === 'ios' ? styles.action : styles.actionAndroid}
                >
                  <Text style={Platform.OS === 'ios' ? styles.btnText : styles.btnTextAndroid}>
                    Choose from Library...
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={this.onCancel.bind(this)}
                style={Platform.OS === 'ios' ? styles.cancel : styles.cancelAndroid}
              >
                <Text style={Platform.OS === 'ios' ? styles.cancelText : styles.cancelTextAndroid}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
        </Modal>
    );
  }
}

export default ImagesPickerCrop;
