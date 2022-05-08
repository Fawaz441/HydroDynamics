/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {TEXTS, COLORS, STYLES} from '../../assets/styles';

const styles = StyleSheet.create({
    filledButton: {
        height:60,
        shadowColor: '#000',
        shadowOpacity: 0.7,
        shadowRadius: 12,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        borderRadius: 99,
        elevation: 2,
        ...STYLES.centersXY
    },
    buttonText: {
        fontFamily:'Poppins-Regular',
        fontWeight: '700',
        color: COLORS.white,
        fontSize: 16,
        ...STYLES.centerText
    },
});

const FilledButton = ({action, text, fullWidth}) => {
    return (
        <TouchableWithoutFeedback onPress={action}>
            <LinearGradient
                colors={[COLORS.primary2, COLORS.primary]}
                style={[
                    styles.filledButton,
                    {alignSelf: fullWidth ? 'stretch' : 'flex-start'},
                ]}>
          
                <Text style={styles.buttonText}>{text}</Text>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

export default FilledButton;
