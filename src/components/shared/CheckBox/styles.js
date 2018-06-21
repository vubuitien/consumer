import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  boxCheck: {
    width: 13,
    height: 13,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    borderRadius: 50,
    marginRight: '5%',
    overflow: 'hidden'
  },
  boxCheck1: {
    width: 13,
    height: 13,
    backgroundColor: '#005ED6',
    borderRadius: 50,
    marginRight: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  childBox: {
    width: 4,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 50,
    overflow: 'hidden'
  },
  text: {
    color: '#000',
    fontSize: 11
  },
  text1: {
    color: '#005ED6',
    fontSize: 11,
  }
});
