import {StyleSheet} from 'react-native';
import {STYLES, COLORS} from '@app/assets/styles';

const styles = StyleSheet.create({
    bottomButtonContainer: {
        bottom: 0,
        height: 100,
        width: '100%',
        backgroundColor: '#fff',
    },
    bottomButtonText: {
        color: COLORS.primary,
        fontFamily: 'Ambit-Regular',
        fontSize: 24,
        marginRight: 12,
    },
    bottomButtonWrapper: {
        alignSelf: 'flex-end',
        marginRight: 30,
        ...STYLES.centersY,
    },
    button: {
        height: 60,
        width: 60,
    },
});

export default styles;
