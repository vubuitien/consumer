import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    headerBar: {
      flexDirection: 'row',
      backgroundColor: '#012875',
    },
    header: {
      alignItems: 'center',
      flexDirection: 'column',
    },
    remember: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    alignment: {
      marginLeft: 20,
      marginRight: 20,
    },
    company: {
      flexDirection: 'row',
      borderBottomColor: '#CDCDCD',
      paddingBottom: 20,
      borderBottomWidth: 1,
    },
    formNameCompany: {
      flexDirection: 'row',
    },
    titleCompany: {
      color: '#525467',
      fontStyle: 'italic',
      fontSize: 16,
    },
    titleStore: {
      color: '#525467',
      fontStyle: 'italic',
      fontSize: 16,
      marginTop: 10,
    },
    date: {
      fontSize: 12,
      fontStyle: 'italic',
      marginLeft: '42%',
      marginTop: 5,
    },
    prefix: {
      width: 45,
      fontSize: 12,
      textAlign: 'center',
      color: '#525467',
      marginRight: 5,
      fontStyle: 'italic',
    },
    name: {
      width: 120,
      fontSize: 12,
      textAlign: 'center',
      marginRight: 5,
      color: '#525467',
      fontStyle: 'italic',
    },
    lastname: {
      width: 118,
      fontSize: 12,
      textAlign: 'center',
      marginRight: 5,
      color: '#525467',
      fontStyle: 'italic',
    },
    sufix: {
      width: 45,
      fontSize: 12,
      textAlign: 'center',
      color: '#525467',
      fontStyle: 'italic',
    },
    position: {
      width: 265,
      fontSize: 12,
      textAlign: 'center',
      color: '#525467',
      fontStyle: 'italic',
    },
    number: {
      width: 155,
      fontSize: 12,
      textAlign: 'center',
      color: '#525467',
      fontStyle: 'italic',
    },
    buttonSelect: {
      borderWidth: 1,
      marginLeft: 5,
      marginRight: 5,
      borderColor: '#0063D8',
      flexDirection: 'row',
      marginTop: 30,
      borderRadius: 5,
      marginBottom: 5,
    },
    childAddress: {
      flexDirection: 'row',
    },
    address: {
      width: '100%',
      fontSize: 12,
      color: '#525467',
      fontStyle: 'italic',
    },
    region: {
      width: 200,
      marginRight: 20,
      fontSize: 12,
      color: '#525467',
      fontStyle: 'italic',
    },
    zip: {
      width: 125,
      fontSize: 12,
      color: '#525467',
      fontStyle: 'italic',
    },
    phone: {
      width: 145,
      fontSize: 12,
      color: '#525467',
      fontStyle: 'italic',
      marginRight: 20,
    },
    mobile: {
      width: 180,
      fontSize: 12,
      color: '#525467',
      fontStyle: 'italic',
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    },
    backButton: {
      width: 150,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    nextButton: {
      width: 150,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#0063D8',
      justifyContent: 'center',
    },
    styleSelect: {
      backgroundColor: '#fff',
      borderBottomLeftRadius: 5,
      borderTopLeftRadius: 5,
      overflow: "hidden"
    },
    styleTextSelect: {
      padding: 5,
      borderRightColor: '#0063D8',
      borderRightWidth: 1,
      color: '#0063D8',
      fontSize: 11
    },
    selectTax: {
      backgroundColor: '#fff',
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5
    },
    textSelectTax: {
      padding: 5,
      color: '#0063D8',
      fontSize: 11
    },
    styleTextSelectClick: {
      padding: 5,
      borderRightColor: '#0063D8',
      borderRightWidth: 1,
      color: '#fff',
      fontSize: 11
    },
    styleSelectClick: {
      backgroundColor: '#0063D8',
      borderBottomLeftRadius: 3,
      borderTopLeftRadius: 3
    },
    selectTaxClick: {
      backgroundColor: '#0063D8',
      borderBottomRightRadius: 3,
      borderTopRightRadius: 3
    },
    textSelectClick: {
      padding: 5,
      color: '#fff',
      fontSize: 11
    },
    viewContainSelecter:{
      flex: 1,
      flexDirection: "row",
      marginLeft: -17,
      height:10,
      marginTop:10,
      marginBottom:4
    },
    selectChild:{
      flex: 1,
      marginLeft: 4,
      marginRight: 4
    },
    waitBox: {
      width: "80%",
      height: 120,
      flexDirection: 'column',
      // justifyContent: 'center',
      // alignItems: 'center',
      marginTop:"100%",
      marginLeft:"10%",
      backgroundColor: '#FAFAFA',
      borderRadius: 5,
    },
    alignmentWait: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: 'column',
  
    },
    title: {
      fontSize: 30,
      color: '#0874D7',
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    text: {
      fontSize: 15,
      lineHeight: 26,
      color: '#000',
      fontWeight: 'normal',
      marginLeft: 5,
    },
    backButtonWait: {
      width: 150,
      height: 35,
      borderRadius: 15,
      marginLeft: 140,
      marginTop: 10
    }
});
