import { create } from 'apisauce';
import FormData from 'form-data';
import t from 'tcomb-form-native';
import { Configs } from '../../../constants';

function UploadException() {
   this.message = 'Upload is throw an error';
   this.toString = () => {
      return this.message;
   };
}

const uploadHelper = async (prefix, files, onUploadProgress) => {
  const validate = t.validate;
  const valid = validate(files, t.list(t.struct({
    uri: t.String,
    type: t.String,
    name: t.String
  })), { strict: false }).isValid();
  if (!Array.isArray(files) || !valid || files.length === 0) {
    return;
  }
  const api = create({
    baseURL: Configs.localUrl,
  });
  const dataForm = new FormData();
  files.forEach(item => {
    dataForm.append(prefix, {
      uri: item.uri,
      type: item.type,
      name: item.name
    });
  });
  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  const res = await api.post('/upload', dataForm, {
    onUploadProgress,
    headers
  });
  const { ok, status, data } = res;
  if (ok && status === 200 && data.success) {
    return data;
  }
  throw new UploadException();
};

export default uploadHelper;
