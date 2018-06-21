import React, { Component } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class ConfirmDialog extends Component {
    render() {
        return (
            <Modal isVisible={this.props.modalVisible} >
                <View style={styles.modalContainer}>
                    <View style={styles.modalButtons}>
                        <MaterialCommunityIcons
                            style={styles.modalCloseButton}
                            name='close' color='black' backgroundColor='white'
                            onPress={this.props.exitFunc.bind(this)}
                        />

                    </View>
                    {this.props.children}

                </View>
            </Modal>
        );
    }
}

export default ConfirmDialog;
