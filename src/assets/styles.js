const COLORS = {
    primary: '#28428F',
    primary2: '#109CF1',
    grey: '#979797',
    white: '#FFF',
    offwhite: '#F8F8FA',
    grey2: '#F3F5F9',
    grey3: '#ADA4A5',
    lightblue: '#EDF1FA',
};

const TEXTS = {
    primary: {
        fontFamily: 'Ambit-Regular',
        fontSize: 12,
    },
    latoMedium: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: COLORS.grey,
    },
    poppinsRegular: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    header: {
        fontFamily: 'Ambit-Bold',
        fontSize: 24,
        color: COLORS.primary,
    },
    header2: {
        fontFamily: 'Ambit-Bold',
        fontSize: 20,
        color: COLORS.primary,
    },
    buttonText: {
        fontFamily: 'Ambit-SemiBold',
        fontSize: 14,
    },
    abeezee: {
        fontFamily: 'ABeeZee-Regular',
        fontSize: 14,
        color: '#000',
    },
};

const STYLES = {
    centersXY: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    centersX: {
        justifyContent: 'center',
    },
    centersY: {
        alignItems: 'center',
    },
    absolute: {
        position: 'absolute',
    },
    mt_8: {
        marginTop: 8,
    },
    mt_10: {marginTop: 10},
    mt_14: {
        marginTop: 14,
    },
    mt_16: {
        marginTop: 16,
    },
    mt_24: {
        marginTop: 24,
    },
    mt_32: {
        marginTop: 32,
    },
    mt_40: {
        marginTop: 40,
    },
    ml_10: {
        marginLeft: 10,
    },
    centerText: {
        textAlign: 'center',
    },
    spaced: {
        justifyContent: 'space-between',
    },
};

export {COLORS, TEXTS, STYLES};
