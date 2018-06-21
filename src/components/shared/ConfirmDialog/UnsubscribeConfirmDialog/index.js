import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ConfirmDialog } from '../index';
import { DeleteFormButton } from '../../';
import I18n from '../../../../I18n/index';
import styles from './styles';
import Colors from '../../../../constants/colors';

const UnsubscribeConfirmDialog = ({ modalVisible, exitFunc, confirmDialogTitle, handleDelete }) => {
    return (
        <ConfirmDialog modalVisible={modalVisible} exitFunc={exitFunc}>
            <View style={styles.modalMainIconContainer}>
                <Icon name="pencil" size={45} color={Colors.deleteRed} />
            </View>

            <Text style={styles.modalDescriptionText}>{confirmDialogTitle}</Text>

            <View style={styles.modalButtons}>


                <DeleteFormButton onPress={handleDelete} />


                <Icon
                  style={styles.modalCancelButton}
                  onPress={exitFunc}
                >
                    <Text style={styles.modalCancelButtonText}> {I18n.t('cancel')}</Text>
                </Icon>


            </View>

        </ConfirmDialog>
    );
};

UnsubscribeConfirmDialog.defaultProps = { confirmDialogTitle: I18n.t('are_you_sure') };
export default UnsubscribeConfirmDialog;
