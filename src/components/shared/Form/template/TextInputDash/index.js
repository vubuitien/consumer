import React from 'react';
import { StyledTextInput } from '../../../../shared';
import { styles } from './styles';

const TextInputDash = (locals) => {
  const style = locals.stylesheet.default ? locals.stylesheet.default : styles.textInput;
  return (
    <StyledTextInput
      label={locals.label}
      onChange={locals.onChange}
      value={locals.value}
      style={style}
    />
  );
};
export default TextInputDash;
