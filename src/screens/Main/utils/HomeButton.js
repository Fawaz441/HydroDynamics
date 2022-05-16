/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {TEXTS, COLORS, STYLES} from '@app/assets/styles';

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 10,
        height: 52,
        ...STYLES.centersXY,
    },
    innerButton: {
        height: 44,
        padding: 10,
        marginHorizontal: 4,
        borderRadius: 10,
        ...STYLES.centersXY,
        ...STYLES.row,
    },
    buttonText: {
        ...TEXTS.primary,
        color: COLORS.white,
    },
    iconWrapper: {
        marginRight: 5,
    },
});

const HomeButton = ({action, text, icon, fullWidth}) => {
    return (
        <TouchableWithoutFeedback onPress={action}>
            <LinearGradient
                colors={['#FFCE51', '#FF5151']}
                style={[styles.wrapper]}>
                <LinearGradient
                    colors={[COLORS.primary, COLORS.primary2]}
                    style={styles.innerButton}>
                    {icon && <View style={styles.iconWrapper}>{icon}</View>}
                    <Text style={styles.buttonText}>{text}</Text>
                </LinearGradient>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

export default HomeButton;
