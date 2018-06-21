import { StyleSheet } from 'react-native';
import Fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    width: '100%',
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontFamily: Fonts.ubuntuRegular,
  },
  textSecond: {
    marginTop: 5,
    fontSize: 16,
    color: '#000',
    fontFamily: Fonts.ubuntuRegular,
  },
  wapper: {
    height: 300
  },
  optionGroup: {
    height: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    paddingHorizontal: 10
  },
  textActive: {
    color: '#7700EA'
  },
  textName: {
    fontSize: 15,
    color: '#000'
  },
  optionChild: {
    paddingHorizontal: 10,
    height: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F9F9F9'
  },
  footer: {
    flexDirection: 'row',
    padding: 10
  },
  footerBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default styles;
