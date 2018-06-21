import {
    StyleSheet,
} from 'react-native';
import Fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBar: {
    flexDirection: 'row',
    backgroundColor: '#012875',
  },
  finalsvg: {
    backgroundColor: '#0063D8',
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageBanner: {
    width: 95,
    height: 150,
    marginLeft: '5%'
  },
  titleBanner: {
    fontFamily: Fonts.yellowtail,
    color: '#fff',
    fontSize: 30,
    marginBottom: 5,
    marginLeft: 40
  },
  textUpload: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 19,
    marginLeft: 10
  },
  textUpload1: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 19,
    marginLeft: 45
  },
  textBrand: {
    fontSize: 22,
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginLeft: 30,
    lineHeight: 23,
  },
  loginNetwork: {
    alignItems: 'center',
    flexDirection: 'column',
    borderBottomColor: '#CDCDCD',
    borderBottomWidth: 1,
    paddingBottom: 25,
    marginLeft: 33,
    marginRight: 33,
  },
  buttonNetwork: {
    flexDirection: 'row',
  },
  buttonLoginFacebook: {
    backgroundColor: '#3B5999',
    width: 150,
    height: 40,
    justifyContent: 'center',
    borderRadius: 3,
    marginRight: 20,
  },
  buttonLoginGoogle: {
    backgroundColor: '#CD181F',
    width: 150,
    height: 40,
    justifyContent: 'center',
    borderRadius: 3,
  },
  or: {
    alignItems: 'center',
    width: 40,
    height: 30,
    backgroundColor: '#fff',
    marginLeft: '46%',
    marginTop: '-3%',
  },
  textOr: {
    color: '#000',
    position: 'absolute',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'column',
    marginLeft: 27,
    marginRight: 27,
    alignItems: 'center',
  },
  textFirst: {
    fontSize: 13.5,
    color: '#000',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  textSecond: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconFooter: {
    width: 17,
    height: 17,
    borderRadius: 50,
    backgroundColor: '#0063D8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
    marginTop: 2,
  },
  icon: {
    color: '#fff',
    fontSize: 18,
  },
  text: {
    color: '#0063D8',
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textInput: {
    width: 320,
    fontSize: 14,
  },
  formFinal: {
    // flexDirection: 'column',
    // alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  buttonCreate: {
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
    height: 40,
    backgroundColor: '#0063D8',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waitBox: {
    width: "80%",
    height: 120,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop:"100%",
    marginLeft:"10%",
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
  textWait: {
    fontSize: 15,
    lineHeight: 26,
    color: '#000',
    fontWeight: 'normal',
    marginLeft: 5,
  },
  backButtonWait: {
    width: 150,
    height: 35,
    borderRadius: 15,
    marginLeft: 140,
    marginTop: 10
  }
});
