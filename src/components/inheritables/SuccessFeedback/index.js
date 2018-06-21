import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

//Usage: renderSuccessFeedback anywhere in the screen.
//Call showSuccessFeedback to activate.

class SuccessFeedback extends Component {
  state = {
    showingSuccessFeedback: false
  }

  showSuccessFeedback() {
    this.setState({ showingSuccessFeedback: true })
    setTimeout(() => { this.setState({ showingSuccessFeedback: false }); }, 2000)
  }

  renderSuccessFeedback() {
    return (
      <Spinner
        visible={this.state.showingSuccessFeedback}
        overlayColor='rgba(0, 0, 0, 0.30)'
      >
        <View style={styles.successContainer}>
          <View style={styles.successBox}>
            <Icon name='check' style={styles.successIcon} />
          </View>
        </View>
      </Spinner>
    );
  }
}

export default SuccessFeedback
