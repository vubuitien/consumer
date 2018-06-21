import {
    StyleSheet,
} from 'react-native';
import Fonts from '../../../../../constants/fonts';

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
  buttonStart: {
    width: '30%',
    height: 32,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#0063D8',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 14,
    color: '#fff'
  },
  wrapperText: {
    marginTop: 18,
    padding: 8,
  },
  textBoldItalic: {
    fontSize: 24,
    color: '#2A3343',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: '2%'
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A3343',
    marginLeft: '10%'
  },
  textBold1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A3343',
    marginLeft: '15%'
  },
  text: {
    fontSize: 16,
    color: '#2A3343',
    marginLeft: '14%'
  },
  text1: {
    fontSize: 16,
    color: '#2A3343',
    marginLeft: '2%'
  },
  text2: {
    fontSize: 16,
    color: '#2A3343',
    marginLeft: '2%'
  },
  textItalic: {
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#2A3343',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: '6%',
    marginRight: '6%'
  },
  nextButton: {
    width: '40%',
    marginHorizontal: '30%',
    height: 30,
    borderRadius: 15,
    backgroundColor: '#0063D8',
    justifyContent: 'center',
  },
  imageBanner: {
    width: 100,
    height: 150,
    marginLeft: '5%'
  },
  titleBanner: {
    fontFamily: Fonts.yellowtail,
    color: '#fff',
    fontSize: 34,
  },
  rightBanner: {
    marginLeft: 10
  },
  textBrand: {
    fontSize: 20,
    lineHeight: 20,
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  textBrand1: {
    fontSize: 20,
    lineHeight: 20,
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginLeft: 15
  }
});
