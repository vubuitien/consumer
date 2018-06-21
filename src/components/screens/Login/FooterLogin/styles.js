import {
  StyleSheet, Platform
} from 'react-native';
import Fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0063D8',
    alignItems: 'center',
    marginTop: 30,
  },
  boxFooter: {
    width: '73%',
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCreate: {
    width: '100%',
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textChildTitle: {
    textAlign: 'center',
    fontFamily: Fonts.yellowtail,
    fontSize: 38,
    color: '#fff',
    marginBottom: 5,
  },
  textChildFirst: {
    color: '#fff',
    fontSize: 18,
    marginTop: 15,
    fontFamily: Fonts.ubuntuRegular,
  },
  offers: {
    color: '#fff',
    fontSize: 18,
    fontFamily: Fonts.ubuntuRegular,
  },
  easyAndFree: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 3,
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  textChildSecond: {
    flexDirection: 'row',
    marginLeft: 80,
  },
  textChildEnd: {
    fontSize: 13,
    color: '#fff',
    fontFamily: Fonts.ubuntuItalic,
  },
  successContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
