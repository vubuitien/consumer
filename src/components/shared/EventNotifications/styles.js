import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderRadius: 5,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    overflow: 'hidden'
  },
  iconStatus: {
    fontSize: 30,
    marginLeft: 15,
    color: '#fff',
    marginRight: 10,
  },
  information: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  titleStatus: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  codeStatus: {
    fontSize: 10,
    color: '#fff',
  },
  timeStatus: {
    fontSize: 12,
    color: '#fff',
    justifyContent: 'flex-end',
    marginRight: 15,
  },
  iconFinish: {
    fontSize: 30,
    marginLeft: 15,
    color: '#32384E',
    marginRight: 10,
  },
  titleFinish: {
    fontSize: 17,
    color: '#32384E',
    fontWeight: 'bold',
  },
  codeFinish: {
    fontSize: 10,
    color: '#32384E',
  },
  timeFinish: {
    fontSize: 12,
    color: '#32384E',
    justifyContent: 'flex-end',
    marginRight: 15,
  }
});

export default styles;
