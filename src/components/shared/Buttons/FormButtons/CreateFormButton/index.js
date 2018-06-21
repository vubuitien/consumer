import React from 'react';
import { FormButton } from '../../';
import Colors from '../../../../../constants/colors';

const CreateFormButton = ({ onPress }) => {
    return (
      <FormButton onPress={onPress} label='create' bgColor={Colors.checkGreen} />
    );
};

export default CreateFormButton;

