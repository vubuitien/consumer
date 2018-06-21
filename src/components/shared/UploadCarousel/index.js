import path from 'path';
import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import {
  ImagesPickerCrop
} from '../../shared';
import styles from './styles';
import I18n from '../../../I18n';

class UploadCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPicker: false,
      activeSlide: 0,
      images: _.get(this.props, 'images', [])
    };
    this.onAttachFile = this.onAttachFile.bind(this);
  }

  onAttachFile(image) {
    if (image.size > 1000000) {
      Alert.alert('Notice', 'file is over size');
      return false;
    }
    const id = this.state.images.length;
    const images = _.concat(
      this.state.images,
      { id, uri: image.path, type: image.mime, name: path.basename(image.path) }
    );
    this.setState({ openPicker: false, images });
    this.props.onAttachFile(images);
  }

  _renderItemDefault(key) {
    return (
      <TouchableOpacity
        key={key}
        onPress={() => this.setState({ openPicker: true })}
        style={styles.slideStyle}
      >
          <View>
            <Icon name='camera' color='#CCCCCC' size={36} />
            <Text style={styles.slideLabel}>{I18n.t('add_photo')}</Text>
          </View>
      </TouchableOpacity>
    );
  }

  _renderImage({ uri }, index) {
    return (
      <View key={String(index)} style={{ marginHorizontal: 3 }}>
        <Image source={{ uri }} style={styles.slideStyle} />
      </View>
    );
  }

  _renderGalleryDefault() {
    const placeholder = [];
    if (!this.state.images[0]) {
      placeholder.push(this._renderItemDefault('0'));
    } else {
      placeholder.push(this._renderImage(this.state.images[0], 0));
    }

    if (!this.state.images[1]) {
      placeholder.push(this._renderItemDefault('1'));
    } else {
      placeholder.push(this._renderImage(this.state.images[1], 1));
    }
    return (
      <View style={{ flexDirection: 'row' }}>
        {placeholder}
      </View>
    );
  }

  _renderGalleryCarousel() {
    const { width } = Dimensions.get('window');
    const itemWidth = width / 3;
    const sliderWidth = itemWidth * 2;
    return (
      <Carousel
        ref={(c) => { this.slideRef = c; }}
        data={this.state.images}
        renderItem={({ item, index }) => this._renderImage(item, index)}
        onSnapToItem={(index) => this.setState({ activeSlide: index })}
        sliderWidth={sliderWidth}
        activeSlideAlignment={'start'}
        itemWidth={itemWidth}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    );
  }

  _renderGallery() {
    if (this.state.images.length <= 2) {
      return this._renderGalleryDefault();
    }
    return this._renderGalleryCarousel();
  }

  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.galleryContainer}>
          <View style={{ flex: 2 }}>
            {this._renderGallery()}
          </View>
          <View style={{ marginLeft: 12, flex: 1 }}>
            <TouchableOpacity
              style={styles.addImage}
              onPress={() => this.setState({ openPicker: true })}
            >
              <Icon name='plus' color='#CCCCCC' size={22} />
            </TouchableOpacity>
          </View>
          <ImagesPickerCrop
            onSelected={this.onAttachFile}
            onCancel={() => this.setState({ openPicker: false })}
            cropping
            visible={this.state.openPicker}
            width={400} height={400}
          />
        </View>
        {this.state.images.length > 2 &&
          <Pagination
            dotsLength={this.state.images.length}
            tappableDots={!!this.slideRef}
            carouselRef={this.slideRef}
            activeDotIndex={this.state.activeSlide}
            dotContainerStyle={{ margin: 0, padding: 0 }}
            containerStyle={styles.pagContainer}
            dotStyle={styles.pagDot}
          />
        }
      </View>

    );
  }
}

export default UploadCarousel;
