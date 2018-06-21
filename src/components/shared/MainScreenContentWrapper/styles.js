import { StyleSheet } from 'react-native';

const mainScreenContentWrapperStyles = StyleSheet.create({
  background: {
    backgroundColor: '#d8d8d8',
  },
  imageStyle: {
    height: 160,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBottomStyle: {
    height: 160,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuContainer: {
    position: 'absolute',
    top: 50,
    backgroundColor: 'white',
    flexDirection: 'column',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  }
});

export default mainScreenContentWrapperStyles;
