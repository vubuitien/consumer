import React from 'react';
import { FormButton } from '../../';
import Colors from '../../../../../constants/colors';

const GreenFormButton = ({ onPress, label }) => {
    return (
      <FormButton onPress={onPress} label={label} bgColor={Colors.checkGreen} />
    );
};

export default GreenFormButton;
