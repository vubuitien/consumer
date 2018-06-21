import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const BottomBarButton = ({ onPress, image, iconName, label }) => {
    let content = null
    if (image) {
      content = (
        <Image style={styles.bottomBarButtonImage}
          source={image}
        />
      )
    } else {
      content = (
        <Icon style={styles.bottomBarButtonIcon}
          name={iconName}
        />

      )

    }
    return (
      <TouchableHighlight underlayColor='transparent' onPress={onPress} >
        <View style={styles.bottomBarButtonContainer}>
          {content}
          <Text style={styles.bottomBarButtonText}>{label}</Text>
        </View>
      </TouchableHighlight>

    );
};

export default BottomBarButton;
