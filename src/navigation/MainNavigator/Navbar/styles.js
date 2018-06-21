import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';

export const navStyles = StyleSheet.create({
  navContainer: {
    padding: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 5,
    borderColor: '#f1f1f1',
    borderTopWidth: 5,

  },
  navHeader: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
    paddingBottom: 20,
  },

  navHeaderInfo: {
    marginLeft: 8,
  },

  navHeaderUserName: {
    color: Colors.darkGrey,
    fontSize: 14,
    fontFamily: Fonts.latoBold
  },

  navHeaderUserRole: {
    color: Colors.darkGrey,
    fontSize: 11,
    fontFamily: Fonts.latoRegular
  },

  navSubContainer: {
    paddingBottom: 10,
  },

  navLabel: {
    fontSize: 11,
    color: '#999',
    paddingLeft: 23,
    paddingTop: 4,
  },

  navSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    marginBottom: 6,
    marginTop: 1,
  },

  navBottom: {
    padding: 10,
    paddingHorizontal: 15,
  },

  navBottomLink: {
    paddingHorizontal: 15,
    paddingLeft: 0,
    paddingVertical: 8,

  },

  navBottomLinkText: {
      color: '#999'
  },

});
