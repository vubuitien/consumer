import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: .3,
    height: 40,
    paddingLeft: 10,
    flex: 1,
  },
  leftCol: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  notify: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#23B813',
    marginRight: 10,
    height: 30,
    borderRadius: 4,
    overflow: 'hidden'
  },
  info: {
    paddingLeft: 10,

  },
  text: {
    fontWeight: 'bold',
    color: '#D4D4D4'
  }
});

export default styles;
