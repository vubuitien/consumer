import Spinner from 'react-native-loading-spinner-overlay';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import styles from './styles';


export function successFeedback() {
  return (WrappedComponent) => {
    class SuccessFeedback extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          showingSuccessFeedback: false
        };
      }

      async showSuccessFeedback() {
        this.setState({ showingSuccessFeedback: true });
        await new Promise(resolve => setTimeout(() => {
          this.setState({ showingSuccessFeedback: false });
          resolve();
        }, 200));
      }

      renderSuccessFeedback() {
        return (
          <Spinner
            visible={this.state.showingSuccessFeedback}
            overlayColor='rgba(0, 0, 0, 0.30)'
            color='red'
          >
            <View style={styles.successContainer}>
              <View style={styles.successBox}>
                <Icon name='check' style={styles.successIcon} />
              </View>
            </View>
          </Spinner>
        );
      }

      render() {
        return (
          <View style={{ flex: 1 }}>
            {this.renderSuccessFeedback()}
            <WrappedComponent
              showSuccessFeedback={this.showSuccessFeedback.bind(this)}
              {...this.props}
            />
          </View>
        );
      }
    }
    return SuccessFeedback;
  };
}
