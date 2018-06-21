import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class EventNotifications extends Component {
  render() {
    let even_finish;
    if (this.props.hasShowEvenFinish) {
        even_finish = (
          <View style={[styles.container, { backgroundColor: this.props.backgroundColor }]}>
            <Icon name={this.props.name} style={styles.iconFinish} />
            <View style={styles.information}>
              <Text style={styles.titleFinish}>{this.props.title}</Text>
              <Text style={styles.codeFinish}>{this.props.code}</Text>
            </View>
            <Text style={styles.timeFinish}>{this.props.time}</Text>
          </View>
        );
    } else {
        even_finish = <View />;
    }

    let even_status;
    if (this.props.hasShowEvenStatus) {
        even_status = (
          <View style={[styles.container, { backgroundColor: this.props.backgroundColor }]}>
            <Icon name={this.props.name} style={styles.iconStatus} />
            <View style={styles.information}>
              <Text style={styles.titleStatus}>{this.props.title}</Text>
              <Text style={styles.codeStatus}>{this.props.code}</Text>
            </View>
            <Text style={styles.timeStatus}>{this.props.time}</Text>
          </View>
        );
    } else {
        even_status = <View />;
    }

    return (
      <View>
        {even_finish}
        {even_status}
      </View>
    );
  }
}
export default EventNotifications;
