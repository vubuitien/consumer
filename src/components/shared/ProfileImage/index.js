import {
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';

import styles from './styles';

class ProfileImage extends Component {
  render() {
    let imageStyle = styles.image;
    if (this.props.hasSpecificSize) {
      imageStyle = [styles.image, { width: this.props.specificSize, height: this.props.specificSize, borderRadius: this.props.specificSize / 2 }];
    }
    if (this.props.notRoundProfileImage) {
      imageStyle = [styles.avatar, { width: this.props.specificSize, height: this.props.specificSize, borderRadius: 0 }];
    }

    let avatarStyle = styles.avatar;
    if (this.props.hasSpecificSize) {
      avatarStyle = [styles.avatar, { width: this.props.specificSize, height: this.props.specificSize, borderRadius: this.props.specificSize }];
    }
    if (this.props.notRoundProfileImage) {
      avatarStyle = [styles.avatar, { width: this.props.specificSize, height: this.props.specificSize, borderRadius: 0 }];
    }

    if (this.props.imageSource) {
			return (
				<Image
					source={{ uri: this.props.imageSource }}
					style={imageStyle}
          resizeMode="cover"
				/>
			);
		} else {
			return (
				<TouchableOpacity
					style={avatarStyle}
				>
				<Icon
					name='account' color="white" size={this.props.iconSize}
				/>
				</TouchableOpacity>
			);
		}
  }
}

ProfileImage.defaultProps = {
  iconSize: 22
};

export default ProfileImage;
