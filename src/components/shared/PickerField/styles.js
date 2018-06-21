import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../constants';

const styles = StyleSheet.create({
  nameInput: {
    height: 36,
    width: '100%'
  },
  iosValue: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },
  iosInput: {
    textAlign: 'center'
  },
  item: {

  },
  formItem: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%'
  },

  whiteItem: {
    color: 'white'
  },
  whiteIosValue: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8
  },
  whiteIosInput: {
    fontFamily: Fonts.latoBold,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    paddingLeft: 35,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginTop: 2
  },
  closeModal: {
    fontSize: 22,
    color: Colors.checkGreen
  },
  doneBtn: {
    color: Colors.checkGreen,
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default styles;
