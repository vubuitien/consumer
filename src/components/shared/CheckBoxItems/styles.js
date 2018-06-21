import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  boxCheck: {
    width: 15,
    height: 15,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    borderRadius: 3,
    overflow: 'hidden'
  },
  boxCheck1: {
    width: 15,
    height: 15,
    backgroundColor: '#005ED6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    overflow: 'hidden'
  },
  icon: {
    color: '#fff',
  },
  text: {
    color: '#000',
    marginLeft: 5,
  },
  text1: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  textChild: {
    color: '#000',
    marginLeft: 2,
  },
  textChild1: {
    marginLeft: 2,
  },
  name: {
    paddingRight: '1%',
    color: '#000',
  },
  name1: {
    paddingRight: '1%',
  },
  nameChild: {
    color: '#000',
    fontWeight: 'bold',
    paddingRight: '1%',
  },
  nameChild1: {
    fontWeight: 'bold',
    paddingRight: '1%',
  },
});
