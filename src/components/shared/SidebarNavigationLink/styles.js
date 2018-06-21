import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1'
  },

  sidebarNavigationContainer: {
    flexDirection: 'row'
  },

  sidebarNavigationWithSub: {
    paddingVertical: 12,
    flex: 1,
    flexDirection: 'row',
    width: '85%',
  },

  sidebarNavigation: {
    paddingVertical: 12,
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },

  textIcon: {
    fontSize: 15,
    paddingRight: 7,
    paddingTop: 1,
    color: '#888888'
  },

  textIconFocused: {
    fontSize: 15,
    paddingRight: 7,
    paddingTop: 1,
    color: Colors.darkGrey
  },

  text: {
    fontFamily: Fonts.latoRegular,
    fontSize: 13,
    color: Colors.darkGrey
  },

  textFocused: {
    fontFamily: Fonts.latoBold,
    fontSize: 13,
    color: Colors.darkGrey
  },

  collapseIconContainer: {
    width: '15%',
  },

  collapseIconButton: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  collapseIcon: {
    color: '#888888'
  },

});

export default styles;
