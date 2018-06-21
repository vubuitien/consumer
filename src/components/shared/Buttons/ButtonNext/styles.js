import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonArrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
  iconButton: {
    width: 17,
    height: 17,
    borderRadius: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
    overflow: 'hidden',
    marginTop: 2,
  },
  icon: {
    color: '#0063D8',
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  childText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#fff',
    marginLeft: 3
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
