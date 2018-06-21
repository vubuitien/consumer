import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
      overflow: 'hidden'
    },
    buttonLoginGoogle: {
      backgroundColor: '#CD181F',
      width: 150,
      height: 40,
      justifyContent: 'center',
      borderRadius: 3,
      overflow: 'hidden'
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
});
