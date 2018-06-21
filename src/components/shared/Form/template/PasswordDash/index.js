import React from 'react';
import { StyledTextInput } from '../../../../shared';
import {styles} from './styles';

const PasswordDash = (locals) => {
  return (
    <StyledTextInput
      label={locals.label}
      onChange={locals.onChange}
      value={locals.value}
      style={styles.textInput}
      secure
    />
  );
};
export default PasswordDash;
