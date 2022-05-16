import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
} from 'react-native';
import ICONS from '../../assets/icons';
import {COLORS, STYLES} from '../../assets/styles';
import InputIcon from '../Icon';

const styles = StyleSheet.create({
    wrapper: {
        height: 48,
        backgroundColor: COLORS.grey2,
        borderRadius: 14,
        paddingHorizontal: 18,
    },
    textinput: {
        color: '#ADA4A5',
        fontFamily: 'Ambit-Regular',
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 0,
        flex: 1,
    },
    rightIconwrapper: {
        marginLeft: 10,
    },
});

const Input = ({
    placeholder,
    icon,
    rightIcon,
    type,
    style = {},
    children,
    inputStyle,
    ...rest
}) => {
    const [isSecureEntry, setisSecureEntry] = useState(!!rest.secureTextEntry);
    const toggleSecureEntry = () => setisSecureEntry(!isSecureEntry);
    return (
        <View style={[STYLES.row, STYLES.centersY, styles.wrapper, style]}>
            {children}
            {icon ? icon : null}
            <TextInput
                placeholder={placeholder}
                style={[styles.textinput, inputStyle]}
                placeholderTextColor={COLORS.grey3}
                keyboardType={type ?? 'default'}
                secureTextEntry={isSecureEntry}
                {...rest}
            />
            {rightIcon && (
                <View style={styles.rightIconwrapper}>{rightIcon}</View>
            )}
            {rest.secureTextEntry && (
                <View style={styles.rightIconwrapper}>
                    <InputIcon
                        icon={isSecureEntry ? ICONS.eye : ICONS.eye_slash}
                        width={13.87}
                        height={10.95}
                        onPress={toggleSecureEntry}
                    />
                </View>
            )}
        </View>
    );
};

export default Input;
