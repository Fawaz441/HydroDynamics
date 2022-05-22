/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
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
import {getGoBackFunction, getNavigateFunction} from '../../utils/functions';
import InputIcon from '../../components/Icon';
import CheckBox from '@react-native-community/checkbox';
import OrText from './utils/OrText';
import {SCREENS} from '../../navigation/screens';

const Registration = ({navigation}) => {
    const {height} = useWindowDimensions();
    const goBack = useCallback(getGoBackFunction(navigation), []);
    const goToLogin = useCallback(
        getNavigateFunction(navigation, SCREENS.login),
        [],
    );
    const [checkedTerms, setCheckedTerms] = useState(false);
    return (
        <SafeAreaView
            style={{backgroundColor: COLORS.white, flex: 1}}
            edges={['left', 'right']}>
            <View
                style={[
                    {marginTop: 47, marginHorizontal: 24},
                    STYLES.row,
                    STYLES.spaced,
                ]}>
                <BackButton onPress={goBack} />
                <View style={[STYLES.centersXY, {marginTop: 20}]}>
                    <Text style={[TEXTS.header, {fontSize: 18}]}>
                        Create an account
                    </Text>
                    <Text
                        style={[TEXTS.poppinsRegular, {color: COLORS.primary}]}>
                        Hey there,
                    </Text>
                </View>
                <BackButton transparent />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{paddingBottom: 300}}>
                <View style={{marginTop: 13.39, marginHorizontal: 30}}>
                    <Input
                        placeholder={'Name'}
                        icon={
                            <InputIcon
                                icon={ICONS.profile}
                                width={18}
                                height={18}
                            />
                        }
                    />
                    <Input
                        placeholder={'Email'}
                        style={STYLES.mt_16}
                        icon={
                            <InputIcon
                                icon={ICONS.email}
                                width={15}
                                height={13.5}
                            />
                        }
                    />
                    <Input
                        placeholder={'Phone'}
                        style={STYLES.mt_16}
                        icon={
                            <InputIcon
                                icon={ICONS.phone}
                                width={18}
                                height={18}
                            />
                        }
                    />
                    <Input
                        placeholder={'Home Address'}
                        style={STYLES.mt_16}
                        icon={
                            <InputIcon
                                icon={ICONS.edit}
                                width={18}
                                height={18}
                            />
                        }
                    />
                    <Input
                        placeholder={'Home Type'}
                        style={STYLES.mt_16}
                        icon={
                            <InputIcon
                                icon={ICONS.edit}
                                width={18}
                                height={18}
                            />
                        }
                    />
                    <Input
                        placeholder={'Family Size'}
                        style={STYLES.mt_16}
                        icon={
                            <InputIcon
                                icon={ICONS.edit}
                                width={18}
                                height={18}
                            />
                        }
                    />
                    <View style={[STYLES.row, STYLES.mt_16]}>
                        <Input
                            style={{marginRight: 17.5, flex: 1}}
                            placeholder="Males"
                            type="numeric"
                        />
                        <Input
                            style={{marginLeft: 17.5, flex: 1}}
                            placeholder="Females"
                            type="numeric"
                        />
                    </View>
                    <View style={[STYLES.mt_24, STYLES.row]}>
                        <CheckBox
                            boxType="square"
                            value={checkedTerms}
                            onValueChange={newValue =>
                                setCheckedTerms(newValue)
                            }
                            onTintColor={COLORS.primary}
                            style={{height: 16, width: 16}}
                        />
                        <TouchableWithoutFeedback
                            onPress={() => setCheckedTerms(!checkedTerms)}>
                            <Text
                                style={[
                                    STYLES.ml_10,
                                    TEXTS.primary,
                                    {flexShrink: 1},
                                ]}>
                                By continuing you accept our Privacy Policy and
                                Term of Use
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.authButtonContainer}>
                <View>
                    <FilledButton text={'Register'} fullWidth />
                    <OrText />
                    <TouchableWithoutFeedback onPress={goToLogin}>
                        <View
                            style={[
                                STYLES.mt_24,
                                STYLES.row,
                                STYLES.centersXY,
                                {marginBottom: 44},
                            ]}>
                            <Text style={[TEXTS.primary, {color: '#1D1617'}]}>
                                Already have an account?{' '}
                            </Text>
                            <Text
                                style={[
                                    TEXTS.primary,
                                    {color: COLORS.primary},
                                ]}>
                                Login
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Registration;
