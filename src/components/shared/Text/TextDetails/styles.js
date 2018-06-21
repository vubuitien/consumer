import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxIcon: {
    width: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden'
  },
  icon: {
    fontSize: 10,
    color: '#fff',
  },
  text: {
    fontStyle: 'italic',
    paddingLeft: 3
  },
  text1: {
    fontStyle: 'italic',
    paddingRight: 3
  },
  textBold: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
});

export default styles;
