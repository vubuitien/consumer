import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  name: {
    fontSize: 13,
    color: '#fff',
    fontStyle: 'italic',
  },
  title: {
    fontSize: 14,
    color: '#fff',
    fontStyle: 'italic',
    lineHeight: 14,
    marginLeft: 3
  },
  creat: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    lineHeight: 14,
  },
  box: {
    flexDirection: 'row',
  },
  boxIcon: {
    backgroundColor: '#042978',
    width: 12,
    height: 12,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 17,
    left: '2%'
  },
  icon: {
    fontSize: 12
  },
  boxText: {
    flexDirection: 'row'
  }
});
