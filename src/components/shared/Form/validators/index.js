import I18n from '../../../../I18n';

export const required = (value, field) => {
  let message;
  if (field && field.label) {
    message = I18n.t('form.validators.messages.required', { label: field.label });
  } else {
    message = I18n.t('form.validators.messages.required_default');
  }
  return value ? true : message;
};

export const maxLength = (max) => (value, field) => {
  let message;
  if (field && field.label) {
    message = I18n.t('form.validators.messages.maxlength', { max, label: field.label });
  } else {
    message = I18n.t('form.validators.messages.maxlength_default', { max });
  }
  return value && value.length <= max ? true : message;
};

export const minLength = min => (value, field) => {
  let message;
  if (field && field.label) {
    message = I18n.t('form.validators.messages.minlength', { min, label: field.label });
  } else {
    message = I18n.t('form.validators.messages.minlength_default', { min });
  }
  return value && value < min ? message : true;
};

export const rangeLength = (min, max) => (value, field) => {
  let message;
  if (field && field.label) {
    message = I18n.t('form.validators.messages.rangelength', { min, max, label: field.label });
  } else {
    message = I18n.t('form.validators.messages.rangelength_default', { min, max });
  }
  return value && min <= value.length && value.length <= max ? true : message;
};
