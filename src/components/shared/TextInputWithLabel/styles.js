import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  nameInput: {
    fontSize: 15,
    color: Colors.inputTextColor,
    flex: 2/ 3,
    textAlign: 'right',
    fontFamily: Fonts.latoBold,
    alignSelf: 'center',
  },
  nameInputVer: {
    fontSize: 15,
    color: Colors.inputTextColor,
    fontFamily: Fonts.latoBold,
  },
  formItem: {
    padding: 10,
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.formItemBorder,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  formItemVertical: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.formItemBorder,
  },
  labelContainer: {
    flex: 1 / 3,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  labelContainerVer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
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

});

export default styles;
