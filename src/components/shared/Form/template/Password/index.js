import React from 'react';
import _ from 'lodash';
import { BoxTextInput, TextInputData } from '../../../../shared';
import styles from './styles';

const Password = (locals) => {
  let textInputStyle = styles.textInput;
  if (locals.style) {
    textInputStyle = _.merge(textInputStyle, locals.style);
  }
  return (
    <BoxTextInput>
      <TextInputData
        onChange={locals.onChange}
        placeholder={locals.placeholder}
        style={textInputStyle}
        value={locals.value}
        secureTextEntry
      />
    </BoxTextInput>
  );
};
export default Password;
