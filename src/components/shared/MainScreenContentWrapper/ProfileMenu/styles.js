import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    top: 50,
    backgroundColor: 'white',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent:'center',
  }, 
  menuContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  header: {
    backgroundColor: '#F3F3F3',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 14,
    fontWeight: 'bold'    
  },
  profileText: {
    fontSize: 14,
    fontWeight: 'bold'    
  },
  username: {
      paddingTop: 5,
      fontWeight: 'bold'
  }
});

export default styles;
