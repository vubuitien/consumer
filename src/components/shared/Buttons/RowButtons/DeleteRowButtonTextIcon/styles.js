import { StyleSheet } from 'react-native';

const delRowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  warning: {
    paddingTop: 8,
  },
  icon: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 2,
    overflow: 'hidden',
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  buttonText: {
    backgroundColor: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 5
  }
});

export default delRowStyles;
