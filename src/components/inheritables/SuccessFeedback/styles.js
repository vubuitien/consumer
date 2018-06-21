import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
    successContainer: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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

export default styles;
