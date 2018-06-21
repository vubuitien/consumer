import {
  StyleSheet,
} from 'react-native';
import Fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 85,
    height: 40,
    marginLeft: 5,
  },
  icon: {
    fontSize: 16,
    color: '#fff',
    marginRight: 3,
  },
  containerProduct: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 265,
    height: 40,
    marginLeft: 5,
  },
  title: {
    fontSize: 14,
    marginLeft: 5,
    fontFamily: Fonts.ubuntuMedium,
    color: '#282828',
  },
  content: {
    fontSize: 11,
    marginLeft: 5,
    color: '#A9A9A9',
    fontFamily: Fonts.ubuntuItalic,
    lineHeight: 10
  }
});
