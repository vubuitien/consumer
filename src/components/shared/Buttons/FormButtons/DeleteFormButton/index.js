import React from 'react';
import { FormButton } from '../../';
import Colors from '../../../../../constants/colors';


const DeleteFormButton = ({ onPress }) => {
    return (
        <FormButton onPress={onPress} label='delete' bgColor={Colors.deleteRed} />
    );
};

export default DeleteFormButton;
