import React from 'react';
import { UploadCarousel } from '../../../../shared';

const PickerUpload = (locals) => {
  return (
    <UploadCarousel
      onAttachFile={locals.onChange}
      images={locals.value}
    />
  );
};
export default PickerUpload;
