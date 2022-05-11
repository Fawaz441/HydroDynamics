import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ICONS from '../../assets/icons';
import {COLORS, STYLES} from '../../assets/styles';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.lightblue,
        borderRadius: 8,
        shadowColor: '#1D1617',
        shadowRadius: 10,
        shadowOpacity: 0.07,
        shadowOffset: {
            height: 10,
            width: 0,
        },
        width: 42.27,
        height: 38.49,
        ...STYLES.centersXY,
    },
    transparentWrapper: {
        width: 42.27,
        height: 38.49,
        borderRadius: 8,
    },
    icon: {
        height: 17.25,
        width: 16.5,
    },
});

const DrawerButton = ({onPress}) => {
    return (
        <TouchableOpacity {...{onPress}}>
            <View style={styles.wrapper}>
                <Image
                    source={ICONS.category}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </View>
        </TouchableOpacity>
    );
};

export default DrawerButton;
