import { StyleSheet } from 'react-native';
import Colors from '../../../../constants/colors';
import Fonts from '../../../../constants/fonts';

const styles = StyleSheet.create({
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
    },

    label: {
      fontFamily: Fonts.latoRegular,
      color: Colors.grey,
      fontSize: 16,
    },

    icon: {
      marginTop: 4,
      paddingRight: 4,
      fontSize: 17,
      color: Colors.grey,
    },
});

export default styles;
