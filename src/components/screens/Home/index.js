import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions
} from 'react-native';
import Image from 'react-native-remote-svg';
import { styles } from './styles';
import {

} from '../../shared';
import I18n from '../../../I18n';
const window = Dimensions.get('window');

export class Home extends Component {
  static navigationOptions = { title: 'Home', header: null };
  render() {
    return (
      <ImageBackground
        source={require('../../../../assets/images/screen.png')}
        imageStyle={{ resizeMode: 'stretch' }}
        style={styles.someAdditionalViewStyles}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleHeader}>{I18n.t('first_screen.title_header')}</Text>
            <View style={styles.contentHeader}>
              <Text style={styles.textEarn}>{I18n.t('first_screen.text_earn')}</Text>
              <Text style={styles.textLocalDeal}>{I18n.t('first_screen.text_localDeal')}</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.hi}>{I18n.t('first_screen.hi')}</Text>
            <Image
              source={require('../../../../assets/images/pig.svg')}
              style={styles.imageSvg}
            />
            <View style={styles.rightFooter}>
              <Text style={styles.titleFooter}>{I18n.t('first_screen.title_footer')}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
