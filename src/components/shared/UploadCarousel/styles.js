import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const itemHeight = (width / 3);
const styles = StyleSheet.create({
  slideStyle: {
    height: itemHeight,
    width: itemHeight,
    backgroundColor: '#F5F5F5',
    marginRight: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideLabel: {
    color: '#CCCCCC',
    fontSize: 8
  },
  addImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
    backgroundColor: 'white',
    height: itemHeight,
    borderWidth: 2,
    borderColor: '#CCCCCC'
  },
  pagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 0,
    marginVertical: 0,
    padding: 0,
    paddingVertical: 8
  },
  pagDot: {
      width: 14,
      height: 14,
      borderRadius: 7,
      marginHorizontal: 0,
      borderWidth: 1,
      borderColor: 'gray',
      backgroundColor: 'gray'
  },
  galleryContainer: {
    flexDirection: 'row'
  },

});

export default styles;
