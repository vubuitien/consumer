import t from 'tcomb-form-native';

export const PickerGalleryType = t.list(t.struct({
  id: t.Number,
  uri: t.String,
  type: t.String,
  name: t.String 
}));
