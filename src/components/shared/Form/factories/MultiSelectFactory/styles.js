import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'gray'
  },
  textActive: {
    color: 'green',
  },
  textError: {
    color: 'red',
  },
  btn: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 3,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  btnActive: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'green',
    padding: 3,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  btnError: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    padding: 3,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
});

export default styles;
