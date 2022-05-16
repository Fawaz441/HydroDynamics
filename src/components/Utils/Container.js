import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../assets/styles';

const Container = ({children, backgroundColor}) => {
    return (
        <SafeAreaView
            edges={['left', 'right']}
            style={{
                flex: 1,
                backgroundColor: backgroundColor ?? COLORS.offwhite,
            }}>
            {children}
        </SafeAreaView>
    );
};

export default Container;
