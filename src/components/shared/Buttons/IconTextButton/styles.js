import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  iconButton: {
    width: 17,
    height: 17,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
    overflow: 'hidden'
  },
  buttontext: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: 3,
    marginRight: 3
  },
  childText: {
    fontSize: 15,
    marginTop: 1,
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginLeft: 2
  },
  text: {
    flexDirection: 'row'
  },
  text1: {
    flexDirection: 'row',
    marginLeft: 3
  }
});

export default styles;
