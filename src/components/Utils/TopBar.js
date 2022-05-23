/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, View} from 'react-native';
import {STYLES} from '../../assets/styles';

const TopBar = ({children}) => {
    return (
        <View
            style={[
                {
                    marginTop: 50 - StatusBar.currentHeight,
                    paddingBottom: 10,
                    paddingHorizontal: 15,
                    maxHeight: 100,
                },
                STYLES.row,
                STYLES.spaced,
                STYLES.centersY,
            ]}>
            {children}
        </View>
    );
};

export default TopBar;
