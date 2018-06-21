import { StyleSheet } from 'react-native';

const errorStyles = StyleSheet.create({
  errorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 15,
    color: '#ff0000',
    textAlign: 'center',
  },
});

export default errorStyles;
