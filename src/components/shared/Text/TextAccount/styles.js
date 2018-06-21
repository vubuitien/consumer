import { StyleSheet } from 'react-native';
import Fonts from '../../../../constants/fonts';

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    flexWrap: 'wrap'
  },
  textBold: {
    fontFamily: Fonts.ubuntuMediumItalic,
  },
  textChild: {
    fontFamily: Fonts.ubuntuLightItalic,
  },
});

export default styles;
