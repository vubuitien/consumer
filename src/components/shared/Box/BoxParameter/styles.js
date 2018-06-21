import {
  StyleSheet,
} from 'react-native';
import Fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 115,
    height: 50,
    borderRadius: 3,
    paddingLeft: '6%',
    marginBottom: 7,
    overflow: 'hidden'
  },
  containerBoxIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 237,
    height: 50,
    paddingLeft: '3%',
    borderRadius: 3,
    marginBottom: 7,
    overflow: 'hidden'
  },
  number: {
    fontSize: 16,
    color: '#fff',
    fontFamily: Fonts.ubuntuBold,
    marginLeft: '3%'
  },
  boxParameter: {
    flexDirection: 'column',
    marginLeft: '1%'
  },
  title: {
    fontSize: 10,
    fontFamily: Fonts.ubuntuBold,
    marginLeft: '3%',
  },
  money: {
    fontSize: 16,
    fontFamily: Fonts.ubuntuBold,
    color: '#00CD32',
    paddingLeft: 20
  }
});
