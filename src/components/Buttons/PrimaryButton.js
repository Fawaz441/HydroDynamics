/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {TEXTS, COLORS, STYLES} from '@app/assets/styles';

const styles = StyleSheet.create({
    primaryButton: {
        shadowColor: '#000',
        shadowOpacity: 0.7,
        shadowRadius: 12,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        padding: 4,
        borderRadius: 20,
        elevation: 2,
    },
    innerButton: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 24,
        paddingVertical: 15,
        flexDirection: 'row',
        ...STYLES.centersXY,
    },
    buttonText: {
        ...TEXTS.buttonText,
        color: COLORS.primary,
        letterSpacing: 0.2,
    },
    iconWrapper: {
        marginRight: 15,
    },
});

const PrimaryButton = ({action, text, icon, fullWidth}) => {
    return (
        <TouchableWithoutFeedback onPress={action}>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#109CF1', '#28428F']}
                style={[
                    styles.primaryButton,
                    {alignSelf: fullWidth ? 'stretch' : 'flex-start'},
                ]}>
                <View style={styles.innerButton}>
                    {icon && <View style={styles.iconWrapper}>{icon}</View>}
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

export default PrimaryButton;
