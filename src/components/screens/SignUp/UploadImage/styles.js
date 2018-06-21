import {
    StyleSheet,
} from 'react-native';
import Fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
    main: {
      backgroundColor: '#ffffff',
      width: '100%',
      height: '100%'
    },
    footer: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    },
    headerBar: {
      flexDirection: 'row',
      backgroundColor: '#012875',
    },
    content: {
      flexDirection: 'column',
      marginLeft: '7%',
      marginRight: '7%'
    },
    containe: {
      flexDirection: 'row',
      borderBottomColor: '#b2b2b2',
      borderBottomWidth: 1,
      justifyContent: 'space-between',
      bottom: 10
    },
    nextButton: {
      width: 150,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#0063D8',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    editButton: {
      width: 120,
      height: 30,
      borderRadius: 3,
      backgroundColor: '#0063D8',
      justifyContent: 'center',
    },
    nameInput: {
      top: 28,
      height: 30,
      fontSize: 12,
      color: '#717171',
      fontStyle: 'italic',
    },
    inputStore: {
      width: 210,
      fontSize: 20,
      color: '#525467',
      fontWeight: 'bold',
      top: 10
    },
    inputDetail: {
      width: 210,
      fontSize: 18,
      color: '#525467',
      top: 10
    },
    detail: {
      height: 30,
      fontSize: 12,
      color: '#717171',
      fontStyle: 'italic',
      top: 28,
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
    rightBanner: {
      marginLeft: 20
    },
    titleBanner: {
      fontFamily: Fonts.yellowtail,
      color: '#fff',
      fontSize: 36,
    },
    textUpload: {
      fontSize: 18,
      color: '#fff'
    },
    textBrand: {
      fontSize: 23,
      color: '#fff',
      fontStyle: 'italic',
      fontWeight: 'bold',
      marginLeft: '8%'
    },
    editProfile: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    boxImage: {
      width: 150,
      height: 150,
      borderRadius: 100,
      overflow: 'hidden',
      backgroundColor: '#F5F5F5',
      borderWidth: 1,
      borderColor: '#CECECE',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 10
    },
    icon: {
      color: '#CECECE',
      fontSize: 85
    },
    textImage: {
      fontSize: 13,
      color: '#b2b2b2',
      bottom: 13
    },
    addProfile: {
      flexDirection: 'row'
    },
    textAdd: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#48465B'
    },
    textProfile: {
      fontSize: 16,
      color: '#48465B',
      marginLeft: 4
    },
    textChild: {
      fontSize: 12,
      color: '#b2b2b2',
      fontStyle: 'italic'
    },
    mainDisplay: {
      flexDirection: 'row',
      marginTop: 30,
      justifyContent: 'space-between'
    },
    titleMain: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    textMain: {
      fontSize: 14,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: '#48465B',
      marginRight: 3
    },
    account: {
      fontSize: 10,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: '#0063D8'
    },
});
