import React from 'react';
import { FormButton } from '../../index';
import Colors from '../../../../../constants/colors';

const UpdateFormButton = ({ onPress, disabled }) => {
    return (
        <FormButton onPress={onPress} label='update' bgColor={Colors.checkGreen} disabled={disabled} />
    );
};

export default UpdateFormButton;
