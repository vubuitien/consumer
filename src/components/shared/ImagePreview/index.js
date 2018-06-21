import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';

class ImagePreview extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          <Image source={{ uri: this.props.uri }} style={this.props.style} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default ImagePreview;
