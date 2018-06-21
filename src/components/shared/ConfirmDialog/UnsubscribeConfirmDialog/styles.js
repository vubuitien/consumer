import { StyleSheet } from 'react-native';
import Colors from '../../../../constants/colors';
import Fonts from '../../../../constants/fonts';

const styles = StyleSheet.create({
    modalMainIconContainer: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
        borderWidth: 2.5,
        borderColor: Colors.deleteRed,
        overflow: 'hidden'
    },

    modalDescriptionText: {
        color: Colors.grey,
        fontFamily: Fonts.latoBold,
        fontSize: 18,
        marginTop: 5,
        marginBottom: 30,
        marginRight: 20,
        marginLeft: 20,
    },

    modalCancelButton: {
        backgroundColor: 'white',
        marginTop: 7,
        marginBottom: 5,
        width: 200,
        textAlign: 'center',

    },

    modalCancelButtonText: {
        color: Colors.lightGrey,
        fontFamily: Fonts.latoRegular,
        fontSize: 14,
    }
});

export default styles;
