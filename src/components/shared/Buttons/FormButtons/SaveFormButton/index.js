import React from 'react';
import { FormButton } from '../../index';
import Colors from '../../../../../constants/colors';

const SaveFormButton = ({ onPress, disabled }) => {
  return (
    <FormButton onPress={onPress} label='save' bgColor={Colors.checkGreen} disabled={disabled} />
  );
};

export default SaveFormButton;
