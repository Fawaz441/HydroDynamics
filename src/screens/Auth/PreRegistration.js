/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import {
    View,
    Text,
    Image,
    useWindowDimensions,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import Input from '../../components/Inputs/Input';
import ICONS from '../../assets/icons';
import FilledButton from '../../components/Buttons/FilledButton';
import styles from './utils/styles';
import {getNavigateFunction} from '../../utils/functions';
import {SCREENS} from '../../navigation/screens';
import InputIcon from '../../components/Icon';
import OrText from './utils/OrText';

const PreRegistration = ({navigation}) => {
    const {height} = useWindowDimensions();
    const goToRegistration = useCallback(
        getNavigateFunction(navigation, SCREENS.registration),
        [],
    );
    const goToLogin = useCallback(
        getNavigateFunction(navigation, SCREENS.login),
        [],
    );
    return (
        <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
            <ScrollView
                style={{marginTop: 80}}
                showsVerticalScrollIndicator={false}>
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
                        TEXTS.header2,
                        STYLES.centerText,
                        {marginTop: 5.13},
                    ]}>
                    Create an Account
                </Text>
                <View style={{marginTop: 14.52, ...STYLES.centersXY}}>
                    <Image
                        style={{width: 100, height: 100}}
                        resizeMode="cover"
                        source={require('../../assets/images/logo.png')}
                    />
                </View>
                <View style={{marginTop: 87, marginHorizontal: 30}}>
                    <Input
                        icon={
                            <InputIcon
                                icon={ICONS.profile}
                                height={18}
                                width={18}
                            />
                        }
                        placeholder="Meter ID"
                    />
                </View>
                <View
                    style={{
                        marginHorizontal: 30,
                        marginTop: (238 / 812) * height,
                    }}>
                    <FilledButton
                        text={'Register'}
                        fullWidth
                        action={goToRegistration}
                    />
                    <OrText />
                    <TouchableWithoutFeedback onPress={goToLogin}>
                        <View
                            style={[STYLES.mt_24, STYLES.row, STYLES.centersX]}>
                            <Text style={styles.belowText}>
                                Already have an account?
                            </Text>
                            <Text
                                style={[
                                    styles.belowText,
                                    {color: COLORS.primary},
                                ]}>
                                {' '}
                                Login
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PreRegistration;
