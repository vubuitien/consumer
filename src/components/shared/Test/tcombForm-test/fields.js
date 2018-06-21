import t from 'tcomb-form-native';
import { TextInput } from '../Form/template';

const fields = {
  username: {
    type: t.String,
    placeholder: 'Usernssame ddd',
    template: TextInput,
  },
  password: {
    type: t.String,
    placeholder: 'Password',
    secureTextEntry: true,
  },
  image: {
    type: t.String,
    placeholder: 'Image'
  }
}
export default fields;
