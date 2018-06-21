import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import Image from 'react-native-remote-svg';
import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const LoadingState = Object.freeze({
    normal_loading: {
        state: 1,
        delay_in_ms: 0
    },
    large_request: {
        state: 2,
        delay_in_ms: 10000
    },
    bad_network: {
        state: 3,
        delay_in_ms: 20000
    }
});

class LoadingOverlay extends Component {
    state = {
        loading_state: LoadingState.normal_loading,
    }

    componentWillReceiveProps(props){
      clearTimeout(this.state.timer1ID)
      clearTimeout(this.state.timer2ID)
      if (this.props.visible) {
        this.setState({ timer1ID: setTimeout(() => {
          this.setState({
            loading_state: LoadingState.large_request.state
          });
        }, LoadingState.large_request.delay_in_ms) })
        this.setState({ timer2ID: setTimeout(() => {
          this.setState({
            loading_state: LoadingState.bad_network.state
          });
        }, LoadingState.bad_network.delay_in_ms) })
      } else {
        this.setState({
          timer1ID: null,
          timer2ID: null,
          loading_state: LoadingState.normal_loading
        })
      }
    }

    render() {
      let spinner_child;
        switch(this.state.loading_state) {
            case LoadingState.large_request.state:
                spinner_child = (
                  <View style={styles.container}>
                    <View style={styles.box}>
                      <ActivityIndicator
                        size='small'
                        color='#23394a'
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>The request is taking longer than expected this might be due to a large request or bad network</Text>
                    </View>
                  </View>

                )
                break;
            case LoadingState.bad_network.state:
                spinner_child = (
                <View style={styles.container}>
                  <View style={styles.box}>
                    <Icon name='signal-cellular-connected-no-internet-4-bar' style={styles.icon} />
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.text}>The request is taking longer than expected this might be due to bad network connection...</Text>
                  </View>
                </View>
              );
                break;
            default:
                spinner_child = (
                  <View style={styles.container}>
                    <View style={styles.box}>
                      <Image
                        source={require('../../../../assets/images/icons/puff.svg')}
                        style={styles.test}
                      />
                    </View>
                  </View>
                );
        }
        return (
            <Spinner
              visible={this.props.visible}
              overlayColor='rgba(0, 0, 0, 0.30)'
            >
                {spinner_child}
            </Spinner>

        );
    }
}

export default LoadingOverlay;
