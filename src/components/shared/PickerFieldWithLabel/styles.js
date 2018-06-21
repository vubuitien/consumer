import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  errorText: {
    color: Colors.deleteRed,
    alignSelf: 'flex-end',
    paddingBottom: 10,
    paddingRight: 7,
    marginTop: -15
  },
  pickertext: {
    flex: 1,
    backgroundColor: 'white'
  },

  formVertical: {
    padding: 0
  },

  formIOS: {
  },

  formItem: {
    padding: 12,
    paddingTop: 14,
    paddingBottom: 14,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  formItemError: {
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: Colors.deleteRed
  },

  nameInputContainer: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  nameInput: {
    fontSize: 15,
    color: Colors.inputTextColor,
    fontFamily: Fonts.latoBold,
  },

  nameInputShort: {
    width: '28%',
    justifyContent: 'flex-start'
  },

  placeholder: {
    color: '#7F7F7F',
    fontSize: 15,
    fontFamily: Fonts.latoBold,
  },

  placeholderError: {
    color: Colors.deleteRed,
    fontSize: 15,
    fontFamily: Fonts.latoBold,
  },

  labelWrap: {
    width: '35%',
    flexDirection: 'row',
    alignSelf: 'center',
  },

  labelLong: {
    width: '72%',
  },

  labelText: {
    flexDirection: 'row',
    color: Colors.labelColor,
    fontSize: 14,
    fontFamily: Fonts.latoRegular,
  },

  labelRequired: {
    flexDirection: 'row',
    color: Colors.labelColor,
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
