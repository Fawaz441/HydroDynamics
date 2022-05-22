import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import {FakeCurrencyInput} from 'react-native-currency-input';
import ICONS from '../../assets/icons';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import {
    BackButton,
    FilledButton,
    NotificationButton,
    PrimaryButton,
} from '../../components/Buttons';
import Icon from '../../components/Icon';
import Container from '../../components/Utils/Container';
import TopBar from '../../components/Utils/TopBar';
import {SCREENS} from '../../navigation/screens';
import {getGoBackFunction, goToTablessScreen} from '../../utils/functions';
import Logs from './utils/Logs';

const styles = StyleSheet.create({
    scrollview: {marginHorizontal: 15},
    summary: {
        marginTop: 19.51,
        height: 233,
        backgroundColor: COLORS.offwhite,
        borderRadius: 25,
        paddingHorizontal: 37,
        paddingVertical: 11,
    },
    label: {
        color: COLORS.primary,
        ...TEXTS.primary,
        fontSize: 14,
    },
    valueWrapper: {
        marginTop: 6,
        ...STYLES.centersXY,
    },
    value: {
        color: '#707070',
        ...TEXTS.primary,
        fontSize: 36,
    },
    divider: {
        marginTop: 39.8,
        height: 1,
        backgroundColor: '#DDDADA',
    },
    convertIconWrapper: {
        ...STYLES.centersXY,
        height: 52,
        width: 52,
        borderRadius: 26,
        backgroundColor: COLORS.white,
        ...STYLES.absolute,
        left: '50%',
        top: '50%',
        marginLeft: -26,
        marginTop: -26,
    },
    recentPurchasesWrapper: {
        ...STYLES.mt_14,
    },
});

const BuyWater = ({navigation}) => {
    const goToPayment = goToTablessScreen(navigation, SCREENS.payment);
    const [amount, setAmount] = useState(300);
    return (
        <Container backgroundColor={COLORS.white}>
            <TopBar>
                <BackButton onPress={getGoBackFunction(navigation)} />
                <Text style={[TEXTS.header2, {fontSize: 18}]}>Buy Water</Text>
                <NotificationButton />
            </TopBar>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollview}>
                <View style={styles.summary}>
                    <Text style={styles.label}>Pay</Text>
                    <View style={styles.valueWrapper}>
                        {/* <TextInput style={styles.value} value="₦300" /> */}
                        <FakeCurrencyInput
                            value={amount}
                            onChangeValue={setAmount}
                            prefix="₦"
                            delimiter=","
                            separator="."
                            precision={0}
                            minValue={0}
                            style={styles.value}
                        />
                    </View>
                    <View style={styles.divider}>
                        <View style={styles.convertIconWrapper}>
                            <Icon icon={ICONS.swap} height={21} width={19} />
                        </View>
                    </View>
                    <Text style={[styles.label, {marginTop: 6}]}>Get</Text>
                    <View style={[styles.valueWrapper, {marginTop: 26}]}>
                        <Text style={styles.value}>2.0/m3</Text>
                    </View>
                </View>
                <View style={[STYLES.mt_16, STYLES.centersXY]}>
                    <Text style={[TEXTS.primary, {fontSize: 14}]}>
                        1 Naira = 0.0005/m3
                    </Text>
                    <View style={STYLES.mt_10}>
                        <FilledButton
                            action={goToPayment}
                            text="Buy Water credit"
                            style={{width: 200}}
                        />
                    </View>
                </View>
                <View style={styles.recentPurchasesWrapper}>
                    <Text
                        style={[
                            TEXTS.primary,
                            STYLES.centerText,
                            {fontSize: 12, color: '#070417'},
                        ]}>
                        Recent Purchases
                    </Text>
                    <Logs />
                </View>
            </ScrollView>
        </Container>
    );
};

export default BuyWater;
