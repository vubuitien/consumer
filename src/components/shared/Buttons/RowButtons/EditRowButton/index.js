import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RowButton } from '../../index';
import styles from './styles';
import Colors from '../../../../../constants/colors';


const EditRowButton = ({ onPress }) => {
    return (
        <RowButton onPress={onPress} bgColor={Colors.editBlue} >
            <MaterialCommunityIcons style={styles.buttonIcon} name="pencil" />
        </RowButton>
    );
};

export default EditRowButton;
