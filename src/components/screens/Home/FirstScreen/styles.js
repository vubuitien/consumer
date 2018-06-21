import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Fonts from '../../../../constants/fonts';
const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    paddingTop: 100,
    paddingLeft: 15,
    paddingRight: 15
  },
  someAdditionalViewStyles: {
    width: null,
    height: '100%',
  },
  header: {
    flex: 1,
  },
  titleHeader: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 50,
    lineHeight: 54,
    fontFamily: Fonts.lobsterRegular,
  },
  contentHeader: {
    flexDirection: 'row',
    marginLeft: window.width / 3 - 20,
  },
  textEarn: {
    color: '#F9AD21',
    fontSize: 15,
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  textLocalDeal: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 3,
    fontFamily: Fonts.ubuntuRegular,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageSvg: {
    height: 150,
    right: 20,
  },
  rightFooter: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  titleFooter: {
    color: '#fff',
    fontFamily: Fonts.yellowtail,
    fontSize: 24,
    right: 110
  },
  hi: {
    color: '#fff',
    fontFamily: Fonts.yellowtail,
    fontSize: 30,
    position: 'absolute',
    top: 20,
    left: 55
  }
});
