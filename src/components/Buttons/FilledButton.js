/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {TEXTS, COLORS, STYLES} from '../../assets/styles';

const styles = StyleSheet.create({
    filledButton: {
        height: 60,
        shadowColor: '#000',
        shadowOpacity: 0.7,
        shadowRadius: 12,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        borderRadius: 99,
        elevation: 2,
        ...STYLES.centersXY,
        ...STYLES.row,
    },
    buttonText: {
        fontFamily: 'Ambit-Bold',
        fontWeight: '700',
        color: COLORS.white,
        fontSize: 16,
        ...STYLES.centerText,
    },
    iconWrapper: {
        marginRight: 12.5,
    },
});

const FilledButton = ({action, text, fullWidth, icon, style, iconStyle}) => {
    return (
        <TouchableWithoutFeedback onPress={action}>
            <LinearGradient
                colors={[COLORS.primary2, COLORS.primary]}
                style={[
                    styles.filledButton,
                    style,
                    {alignSelf: fullWidth ? 'stretch' : 'flex-start'},
                ]}>
                {icon && (
                    <View style={[styles.iconWrapper, iconStyle]}>{icon}</View>
                )}
                <Text numberOfLines={1} style={styles.buttonText}>
                    {text}
                </Text>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

export default FilledButton;
