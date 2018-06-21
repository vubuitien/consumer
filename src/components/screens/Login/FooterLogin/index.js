import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { BottomCreateSignUp } from '../../../shared';


export default class FooterLogin extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.boxFooter}>
          <View style={{width: '100%'}}>
            <Text style={styles.textChildTitle}>New to Closdeal?</Text>
          </View>
          <BottomCreateSignUp
            style={styles.buttonCreate}
            create={'Create your'}
            name={'ClosDeal Account!'}
            color={'#0063D8'}
            onPress={this.props.onPress}
          />
          <Text style={styles.textChildFirst}>Registration and publishing</Text>
          <View style={styles.textChildSecond}>
            <Text style={styles.offers}>offers is</Text>
            <Text style={styles.easyAndFree}>EASY AND FREE</Text>
          </View>
          <Text style={styles.textChildEnd}>We do not charge to sign up or to create offers.</Text>
        </View>
      </View>
    );
  }
}
