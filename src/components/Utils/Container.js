import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../assets/styles';
import {BOTTOM_TAB_HEIGHT} from '../../utils/constants';

const Container = ({children, backgroundColor, hasTab}) => {
    return (
        <SafeAreaView
            edges={['left', 'right']}
            style={{
                flex: 1,
                backgroundColor: backgroundColor ?? COLORS.offwhite,
                marginBottom: hasTab ? BOTTOM_TAB_HEIGHT : 0,
            }}>
            {children}
        </SafeAreaView>
    );
};

export default Container;
