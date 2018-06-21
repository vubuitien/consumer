import {
  StyleSheet,
} from 'react-native';
import Colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // justifyContent: 'space-between',
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: '#D7D7D7',
  },
  avata: {
      borderRadius: 50,
      width: 30,
      height: 30,
      marginLeft: 8,
      overflow: 'hidden'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  searchBar: {
      flexDirection: 'row',
      justifyContent: 'center',
      flex: 0.68,
      // paddingLeft: 10,
      // paddingRight: 10,
      backgroundColor: 'white',
      borderColor: Colors.coachColor
  },
  buttonLeft: {
      flex: 0.15,
      paddingLeft: 5,
  },
  buttonRight: {
      flex: 0.15,
      paddingRight: 5
  },
  iconLeft: {
      fontSize: 40
  },
  badge: {}
});
