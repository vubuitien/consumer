import React from 'react';
import { DatePickerField } from '../../../../shared';

const DatePicker = (locals) => {
  return (
    <DatePickerField
      hasShowPickerDay
      date={locals.value}
      onChange={locals.onChange}
    />
  );
};
export default DatePicker;
