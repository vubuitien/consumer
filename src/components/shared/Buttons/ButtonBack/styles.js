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
    width: 19,
    height: 19,
    borderRadius: 50,
    backgroundColor: '#0063D8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
    overflow: 'hidden'
  },
  icon: {
    color: '#fff',
  },
  buttontext: {
    color: '#0063D8',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  childText: {
    fontSize: 15,
    color: '#0063D8',
    marginLeft: 3,
    fontStyle: 'italic',
    marginTop: 1
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
