import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';
import ButtonBack from '../../../shared';

class Wait extends Component {
  render() {
    return (
      <Spinner
        visible={this.props.visible}
        overlayColor='rgba(0, 0, 0, 0.30)'
      >
        <View style={styles.waitContainer}>
          <View style={styles.waitBox}>
            <View style={styles.alignment}>
              <Text style={styles.title}>{this.props.title}
                <Text style={styles.text}>{this.props.text}</Text>
              </Text>
              <ButtonBack
                style={styles.backButton}
                onPress={this.props.onPress}
                iconName={'arrow-right-thick'}
                iconSize={15} title={'Try'}
                childText={' Again'}
              />
            </View>
          </View>
        </View>
      </Spinner>
    );
  }
}
export default Wait;
