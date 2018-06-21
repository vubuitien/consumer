import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: '18%',
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    overflow: 'hidden'
  },
  number: {
    fontSize: 12,
    lineHeight: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  status: {
    lineHeight: 11,
    fontSize: 11,
    color: '#fff',
    fontWeight: 'bold',
  }
});
