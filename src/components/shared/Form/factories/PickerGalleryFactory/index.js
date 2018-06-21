import t from 'tcomb-form-native';
import React from 'react';
import _ from 'lodash';
import { UploadCarousel } from '../../../../shared';

class PickerGalleryFactory extends t.form.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      value: _.get(props, 'options.value', [])
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const should = super.shouldComponentUpdate(nextProps, nextState);
    return (nextState.value &&
          this.state.value &&
          nextState.value.length !== this.state.value.length) ||
          should;
  }

  getTemplate() {
    return (locals) => {
      return (
        <UploadCarousel
          onAttachFile={locals.onChange}
          images={locals.value}
        />
      );
    };
  }
}

export default PickerGalleryFactory;
