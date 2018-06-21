import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
  },
  test: {
    width: 30,
    height: 30
  },

  textContainer: {
    marginTop: 10,
    width: '75%',

  },

  text: {
    color: 'white',
    fontFamily: Fonts.latoBold,
    fontSize: 19,
    lineHeight: 25,
    textAlign: 'center'
  },

  icon: {
    color: Colors.coachColor,
    fontSize: 33,
  },
});

export default styles;
