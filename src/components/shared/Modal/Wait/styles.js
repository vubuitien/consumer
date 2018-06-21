import { StyleSheet } from 'react-native';
import Fonts from '../../../../constants/fonts';

const styles = StyleSheet.create({
  waitContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waitBox: {
    width: 300,
    height: 100,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
    overflow: 'hidden'
  },
  alignment: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 30,
    color: '#0874D7',
    fontFamily: Fonts.ubuntuBoldItalic,
  },
  text: {
    fontSize: 15,
    color: '#000',
    fontFamily: Fonts.ubuntuRegular,
  },
  backButton: {
    justifyContent: 'flex-end',
    width: 150,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    overflow: 'hidden'
  }
});

export default styles;
