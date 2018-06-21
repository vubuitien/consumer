import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header: {
    flexDirection:'row',
    borderBottomWidth: 1,
    backgroundColor: '#113166',
    borderBottomColor: '#fff',
  },
  text:{
    flexDirection: 'row',
    flex:1,
    justifyContent:'center',
  },
  textTitle:{
    paddingTop:10,
    textAlign: 'center',
    fontSize: 17,
    paddingRight: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerClose:{
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 15,
    paddingTop:12,
    paddingBottom:10,
    fontSize: 20,
    color: '#fff'
  },
  avataIMG:{
    borderRadius: 50,
    width: 50,
    height: 50,
    marginTop: 15,
  },
  comment:{
    paddingLeft:15,
    paddingRight: 15,
  },
  user:{
    flexDirection: 'row',
  },
  username:{
    paddingLeft: 10,
    paddingTop: 16,
  },
  textUser:{
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  nameInput: {
    fontSize: 15,
    flex: 1/2,
    textAlign: 'left',
  },
  footer:{
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#a9b5c9',
    padding: 15,
  },
  boxIcon:{
    flexDirection: 'row',
  },
  icon:{
    fontSize: 26,
    color: '#44b7e5',
    marginRight: 20,
  },
  send:{
    justifyContent: 'center',
    paddingLeft: 145,
  },
  iconSend:{
    color: '#44b7e5',
    fontSize: 26,
  }
});
