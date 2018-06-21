import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';


const styles = StyleSheet.create({
  image: {
     height: 28,
     width: 28,
     borderRadius: 14,
     overflow: 'hidden',
     borderWidth: 0.5,
     borderColor: Colors.formItemBorder,
   },
   avatar: {
      height: 28,
      width: 28,
      borderRadius: 28,
      backgroundColor: Colors.avatarBackgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
});

export default styles;
