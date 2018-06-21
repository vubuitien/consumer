import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
      padding: 2,
      flexDirection: 'column',
      justifyContent: 'flex-end',
  },
  modalWrapAndroid: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 10
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 5
  },
  modalAndroid: {
    justifyContent: 'center',
    margin: 10,
  },
  options: {
      flexDirection: 'column',
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 10
  },
  optAndroid: {

  },
  optionsTitle: {
    padding: 20,
    color: '#B2B2B2',
    textAlign: 'center',
  },
  optTitleAndroid: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 20
  },
  action: {
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: '#D9D9D9',
      padding: 20
  },
  actionAndroid: {
    padding: 15,
  },
  btnText: {
    fontSize: 20,
    color: '#0C80FF'
  },
  btnTextAndroid: {
    fontSize: 18
  },
  cancel: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  cancelAndroid: {
    padding: 10,
    alignItems: 'flex-end',
  },
  cancelText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0C80FF'
  },
  cancelTextAndroid: {
    color: '#0C80FF',
    fontSize: 16,
  }
});

export default styles;
