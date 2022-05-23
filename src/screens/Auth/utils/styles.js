import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, STYLES} from '../../../assets/styles';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#DDDADA',
        height: 1,
        flex: 1,
    },
    orText: {
        marginHorizontal: 10,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#1D1617',
    },
    belowText: {
        fontFamily: 'Poppins-Regular',
        color: '#1D1617',
        fontSize: 14,
    },
    authButtonContainer: {
        maxHeight: 200,
        ...STYLES.absolute,
        width,
        bottom: 0,
        backgroundColor: COLORS.white,
        paddingHorizontal: 30,
        paddingTop: 20,
    },
});

export default styles;
