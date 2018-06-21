import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ConfirmDialog } from '../index';
import { DeleteFormButton } from '../../';
import styles from './styles';
import Colors from '../../../../constants/colors';

const DeleteConfirmDialog = ({ modalVisible, exitFunc, confirmDialogTitle, handleDelete }) => {
    return (
        <ConfirmDialog modalVisible={modalVisible} exitFunc={exitFunc}>
            <View style={styles.modalMainIconContainer}>
                <Icon name="trash-o" size={45} color={Colors.deleteRed} />
            </View>

            <Text style={styles.modalDescriptionText}>{confirmDialogTitle}</Text>

            <View style={styles.modalButtons}>


                    <DeleteFormButton onPress={handleDelete.bind(this)} />


                <Icon
                    style={styles.modalCancelButton}
                    onPress={exitFunc}
                >
                    <Text style={styles.modalCancelButtonText}> Cancel </Text>
                </Icon>


            </View>

        </ConfirmDialog>
    );
};

DeleteConfirmDialog.defaultProps = { confirmDialogTitle: I18n.t('are_you_sure') };
export default DeleteConfirmDialog;
