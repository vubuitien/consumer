import {
  StyleSheet,
} from 'react-native';
import Fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 40,
    marginLeft: 5,
  },
  number: {
    fontSize: 24,
    fontFamily: Fonts.ubuntuBold,
  }
});
