import { StyleSheet } from 'react-native';
import Fonts from '../../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: 20,
  },
  text: {
    fontFamily: Fonts.ubuntuMediumItalic,
  },
});

export default styles;
