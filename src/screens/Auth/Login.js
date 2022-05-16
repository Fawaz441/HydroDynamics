/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useState, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import {
    View,
    Text,
    Image,
    useWindowDimensions,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import Input from '../../components/Inputs/Input';
import ICONS from '../../assets/icons';
import styles from './utils/styles';
import {BackButton, FilledButton} from '../../components/Buttons';
import InputIcon from '../../components/Icon';
import CheckBox from '@react-native-community/checkbox';
import OrText from './utils/OrText';
import {getNavigateFunction} from '../../utils/functions';
import {SCREENS} from '../../navigation/screens';
import Dropdown from '../../components/Inputs/Dropdown';

const Login = ({navigation}) => {
    const goToRegistration = useCallback(
        getNavigateFunction(navigation, SCREENS.registration),
        [],
    );
    const goToHome = getNavigateFunction(navigation, SCREENS.home);
    const loginMethods = useMemo(
        () => [
            {
                label: 'Email',
                value: 'email',
                icon: () => (
                    <InputIcon width={15} height={13.5} icon={ICONS.email} />
                ),
            },
            {
                label: 'Phone number',
                value: 'phone',
                icon: () => (
                    <InputIcon width={15} height={13.5} icon={ICONS.phone} />
                ),
            },
        ],
        [],
    );

    const [loginMethod, setLoginMethod] = useState('email');
    const [showMethodsDropdown, setShowMethodsDropdown] = useState(false);
    const selectedLoginMethod = loginMethods.find(_ => _.value === loginMethod);
    const isEmail = selectedLoginMethod.value === 'email';
    return (
        <SafeAreaView
            style={{backgroundColor: COLORS.white, flex: 1}}
            edges={['left', 'right']}>
            <View style={[{marginTop: 47}]}>
                <View style={[STYLES.centersXY, {marginTop: 20}]}>
                    <Text
                        style={[
                            TEXTS.poppinsRegular,
                            STYLES.centerText,
                            {color: COLORS.primary},
                        ]}>
                        Hey there,
                    </Text>
                    <Text
                        style={[
                            TEXTS.header,
                            STYLES.centerText,
                            {fontSize: 18, marginTop: 12},
                        ]}>
                        Welcome Back
                    </Text>
                </View>
            </View>
            <View>
                <View style={{marginTop: 13.39, marginHorizontal: 30}}>
                    <Input
                        placeholder={
                            showMethodsDropdown ? '' : selectedLoginMethod.label
                        }
                        textContentType={
                            isEmail ? 'emailAddress' : 'telephoneNumber'
                        }
                        autoComplete={isEmail ? 'email' : 'tel'}
                        keyboardType={isEmail ? 'email-address' : 'phone-pad'}
                        rightIcon={
                            <InputIcon
                                icon={ICONS.arrow_down}
                                width={9.33}
                                height={4.67}
                                onPress={() => setShowMethodsDropdown(true)}
                            />
                        }
                        icon={
                            showMethodsDropdown
                                ? null
                                : selectedLoginMethod.icon()
                        }>
                        {showMethodsDropdown && (
                            <View
                                style={[
                                    STYLES.absolute,
                                    {top: 0, right: 0, zIndex: 1000},
                                ]}>
                                <Dropdown
                                    options={loginMethods}
                                    value={loginMethod}
                                    setValue={val => {
                                        setLoginMethod(val);
                                        setShowMethodsDropdown(false);
                                    }}
                                    style={{
                                        minWidth: 200,
                                        maxWidth: 200,
                                        backgroundColor: 'transparent',
                                    }}
                                    dropDownDirection="TOP"
                                    isDefaultOpen={true}
                                />
                            </View>
                        )}
                    </Input>
                    <Input
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={STYLES.mt_16}
                        icon={
                            <InputIcon
                                icon={ICONS.padlock}
                                width={18}
                                height={18}
                            />
                        }
                    />
                    <View style={[STYLES.mt_8, STYLES.spaced, STYLES.row]}>
                        <View />
                        <Text
                            style={[
                                TEXTS.poppinsRegular,
                                {fontSize: 12, color: COLORS.primary},
                            ]}>
                            Forgot your password?
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.authButtonContainer}>
                <View>
                    <FilledButton
                        text={'Login'}
                        fullWidth
                        action={goToHome}
                        icon={
                            <InputIcon
                                width={19}
                                height={20}
                                icon={ICONS.entry}
                            />
                        }
                    />
                    <OrText />
                    <TouchableWithoutFeedback onPress={goToRegistration}>
                        <View
                            style={[
                                STYLES.mt_24,
                                STYLES.row,
                                STYLES.centersXY,
                                {marginBottom: 44},
                            ]}>
                            <Text style={TEXTS.primary}>
                                Don’t have an account yet?{' '}
                            </Text>
                            <Text
                                style={[
                                    TEXTS.primary,
                                    {color: COLORS.primary},
                                ]}>
                                Register
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
