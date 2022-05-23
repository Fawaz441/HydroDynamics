import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

const PlatformAwareKeyboardAvoidingView = ({
    children,
    style,
    keyboardVerticalOffset = 0,
}) => {
    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={style}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {children}
        </KeyboardAvoidingView>
    );
};

export default PlatformAwareKeyboardAvoidingView;
