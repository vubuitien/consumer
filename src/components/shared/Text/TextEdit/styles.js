import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  boxIcon: {
    width: 8,
    height: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CACACD',
    borderRadius: 50,
    overflow: 'hidden'
  },
  icon: {
    fontSize: 6,
    color: '#fff',
  },
  text: {
    fontSize: 8,
    marginLeft: '2%',
    color: '#CACACD',
    fontStyle: 'italic',
  }
});

export default styles;
