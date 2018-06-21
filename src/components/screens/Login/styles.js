import {
    StyleSheet,
} from 'react-native';
import Fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    banner: {
      backgroundColor: '#012875',
      alignItems: 'center',
    },
    textBanner: {
      paddingTop: 15,
      paddingBottom: 15,
      fontSize: 18,
      color: '#fff',
      fontFamily: Fonts.ubuntuBold,
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
    title: {
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 20,
    },
    textInput: {
      width: 320,
      fontSize: 14,
      fontFamily: Fonts.ubuntuLightItalic,
    },
    textLogin: {
      textAlign: 'center',
      color: '#1D6ED7',
      fontSize: 17,
      fontWeight: 'bold',
      marginRight: 5,
      fontStyle: 'italic',
    },
    textChildLogin: {
      textAlign: 'center',
      color: '#1D6ED7',
      fontSize: 15,
      fontStyle: 'italic',
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
    loginButton: {
      width: '86%',
      height: 30,
      backgroundColor: '#0063D8',
      borderRadius: 30,
      marginTop: 15,
      justifyContent: 'center',
    },
    or: {
      top: 112,
      left: '45%',
      alignItems: 'center',
      position: 'absolute',
      width: 40,
      height: 30,
      backgroundColor: '#fff',
    },
    textOr: {
      color: '#000',
      position: 'absolute',
      fontSize: 16,
    },
    formLogin: {
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
      alignItems: 'center',
    },
    successContainer: {
      alignItems: 'center',
      top: '45%',
    },
    successBox: {
      width: 50,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FAFAFA',
      borderRadius: 12,
    },
    successIcon: {
      color: '#97a1b2',
      fontSize: 33,
    },
});
