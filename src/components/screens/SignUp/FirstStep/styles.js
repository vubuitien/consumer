import {
    StyleSheet,
} from 'react-native';
import Fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012875',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBar: {
    flexDirection: 'row',
    backgroundColor: '#012875',
  },
  headerImg: {
    backgroundColor: '#0063D8',
    flexDirection: 'row',
    width: '100%',
    height: 200,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
  },
  imageSvg: {
     width: 120,
     marginLeft: 10,
     bottom: 10
  },
  alignment: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    flexDirection: 'column',
  },
  firstTitle: {
    flexDirection: 'row',
  },
  textSelect: {
    fontFamily: Fonts.ubuntuBoldItalic,
    fontSize: 26,
    color: '#fff',
  },
  textCategory: {
    fontFamily: Fonts.ubuntuBoldItalic,
    fontSize: 15,
    color: '#fff',
    marginTop: 10,
  },
  secondTitle: {
    fontSize: 15,
    color: '#fff',
    fontFamily: Fonts.ubuntuRegular,
    marginLeft: 50,
  },
  endTitle: {
    fontFamily: Fonts.ubuntuItalic,
    fontSize: 11,
    color: '#0070F5',
    textAlign: 'center',
    marginTop: 3,
  },
  addCategory: {
    marginLeft: 25,
    marginRight: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  texTitleCategory: {
    flexDirection: 'column',
  },
  textImprove: {
    fontSize: 30,
    fontFamily: Fonts.yellowtail,
    color: '#fff',
  },
  textExposeure: {
    fontSize: 30,
    fontFamily: Fonts.yellowtail,
    color: '#fff',
    marginLeft: 30,
  },
  buttonCategory: {
    marginLeft: 5,
    marginTop: 10,
  },
  buttonCreate: {
    width: 160,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lengthCategory: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconText: {
    color: '#0070F5',
    fontSize: 24,
  },
  textLength: {
    color: '#0070F5',
    fontSize: 18,
    marginLeft: 3,
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  checkCategory: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 16,
    marginLeft: 20,
    marginRight: 20,
    width: 340,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0070F5',
  },
  textSelectCategory: {
    fontSize: 16,
    color: '#0070F5',
    fontFamily: Fonts.ubuntuRegular,
    marginLeft: 23,
    marginBottom: 5
  },
  backButton: {
    width: 120,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 20,
  },
  textFooter: {
    marginTop: 10,
    fontSize: 11,
    color: '#fff',
    fontFamily: Fonts.ubuntuItalic,
    marginRight: 5,
  },
  categoryContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBox: {
    width: 300,
    height: 400,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
  },
  topBox: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    width: '100%',
  },
  textChoose: {
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
  scrollCategory: {
    marginLeft: 10
  },
  footerBox: {
    paddingTop: 15,
    paddingBottom: 15,
    borderTopColor: '#DCDCDC',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  clickBox: {
    textAlign: 'right',
    marginRight: 15,
    color: '#488AFF',
    fontSize: 18,
  },
  waitContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waitBox: {
    width: 300,
    height: 120,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
  },
  alignmentWait: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',

  },
  title: {
    fontSize: 30,
    color: '#0874D7',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 15,
    lineHeight: 26,
    color: '#000',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  backButtonWait: {
    width: 150,
    height: 35,
    borderRadius: 15,
    marginLeft: 140,
    marginTop: 10
  },
  hi: {
    position: 'absolute',
    top: 30,
    fontSize: 25,
    color: '#fff',
    fontFamily: Fonts.yellowtail,
    left: 77
  },
  rightBanner: {
    right: 15
  },
  titleBanner: {
    fontFamily: Fonts.yellowtail,
    color: '#fff',
    fontSize: 30,
    marginBottom: 5,
    marginLeft: 60
  },
  textUpload: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 19,
  },
  textUpload1: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 19,
    paddingLeft: 20
  },
  textBrand: {
    fontSize: 22,
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 'bold',
    lineHeight: 23,
    paddingLeft: 23
  },
  textBrand1: {
    fontSize: 22,
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 'bold',
    lineHeight: 23,
    paddingLeft: 90
  },
});
