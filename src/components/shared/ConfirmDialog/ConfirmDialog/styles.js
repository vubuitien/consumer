import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    modalContainer: {
        padding: 8,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    modalButtons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        paddingRight: 0,
    },

    modalCloseButton: {
        fontSize: 20,
    },

});

export default styles;
