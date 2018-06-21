import t from 'tcomb-form-native';
import {
  TextInputDash,
  PasswordDash
} from '../../shared/Form/template';
import I18n from '../../../I18n';

const fields = () => {
  return {
    email: {
      type: t.String,
      label: I18n.t('login.email'),
      placeholder: I18n.t('login.email'),
      value: 'merchant@closedeal.com',
      template: TextInputDash
    },
    password: {
      type: t.String,
      label: I18n.t('login.password'),
      placeholder: I18n.t('login.password'),
      value: '123456',
      template: PasswordDash
    },
  };
};
export default fields;
