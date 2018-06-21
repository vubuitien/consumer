import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
  },

  labelContainerDefault: {
      flex: 1/3,
      flexDirection: 'row',
  },

  labelTextDefault: {
      flexDirection: 'row',
      color: Colors.labelColor,
      fontSize: 15,
  },

  labelRequiredDefault: {
    flexDirection: 'row',
    color: Colors.labelColor,
  },

});

export default styles;
