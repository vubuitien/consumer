import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  sidebarNavigationWithSub: {
    paddingHorizontal: 15,
    paddingLeft: 23,
    paddingVertical: 8,
  },

  text: {
    fontFamily: Fonts.latoRegular,
    fontSize: 14,
    color: '#666'
  },

  textFocused: {
    fontFamily: Fonts.latoBold,
    fontSize: 14,
    color: Colors.darkGrey
  },

});

export default styles;
