import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import IMAGES from '../../assets/images';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import {
    BackButton,
    FilledButton,
    NotificationButton,
} from '../../components/Buttons';
import Icon from '../../components/Icon';
import Container from '../../components/Utils/Container';
import TopBar from '../../components/Utils/TopBar';
import {SCREENS} from '../../navigation/screens';
import {paymentOptions} from '../../utils/constants';
import {getGoBackFunction, getNavigateFunction} from '../../utils/functions';

const styles = StyleSheet.create({
    scrollview: {marginHorizontal: 15, paddingBottom: 100},
    paymentIconWrapper: {
        marginTop: 41.51,
        ...STYLES.centersXY,
    },
    paymentIcon: {
        height: 180,
        width: 180,
        borderRadius: 90,
        backgroundColor: 'rgba(7, 59, 128, 0.13)',
        ...STYLES.centersXY,
    },
    cards: {
        width: 150,
        height: 160,
    },
    alternativeText: {
        ...STYLES.centerText,
        ...TEXTS.primary,
        fontSize: 18,
        color: '#A9A9A9',
    },
    paymentOptions: {
        ...STYLES.centersX,
        marginTop: 30,
    },
    paymentOption: {
        marginBottom: 20,
    },
    paymentOptionText: {
        marginLeft: 8,
        color: '#676767',
        ...TEXTS.primary,
        fontSize: 18,
    },
    bottomButton: {
        ...STYLES.centersXY,
        backgroundColor: COLORS.white,
        ...STYLES.absolute,
        bottom: 0,
        width: '100%',
        height: 100,
    },
});

const Payment = ({navigation}) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    return (
        <Container backgroundColor={COLORS.white}>
            <TopBar>
                <BackButton onPress={getGoBackFunction(navigation)} />
                <Text style={[TEXTS.header2, {fontSize: 18}]}>Payment</Text>
                <NotificationButton />
            </TopBar>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollview}>
                <View style={styles.paymentIconWrapper}>
                    <View style={styles.paymentIcon}>
                        <Image
                            source={IMAGES.cards}
                            resizeMode="contain"
                            style={styles.cards}
                        />
                    </View>
                </View>
                <View style={[STYLES.centersXY, {marginTop: 28.74}]}>
                    <Text style={styles.alternativeText}>
                        Alternative Payment Options
                    </Text>
                </View>
                <View style={STYLES.centersY}>
                    <View style={styles.paymentOptions}>
                        {paymentOptions.map((paymentOption, index) => (
                            <View key={index}>
                                <TouchableOpacity
                                    onPress={() =>
                                        setSelectedPaymentMethod(
                                            paymentOption.type,
                                        )
                                    }>
                                    <View
                                        style={[
                                            STYLES.row,
                                            STYLES.centersY,
                                            styles.paymentOption,
                                        ]}
                                        key={index}>
                                        <Icon
                                            icon={paymentOption.icon}
                                            width={16}
                                            height={12}
                                        />
                                        <Text style={styles.paymentOptionText}>
                                            {paymentOption.type}
                                        </Text>
                                        {selectedPaymentMethod ===
                                            paymentOption.type && (
                                            <CheckBox
                                                boxType="square"
                                                value={true}
                                                onTintColor={'#FF5151'}
                                                onFillColor={'#FF5151'}
                                                onCheckColor={'#fff'}
                                                style={{
                                                    height: 16,
                                                    width: 16,
                                                    marginLeft: 25,
                                                }}
                                            />
                                        )}
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
            {selectedPaymentMethod && (
                <View style={styles.bottomButton}>
                    <View style={STYLES.centersXY}>
                        <FilledButton
                            text={'Continue'}
                            style={{paddingHorizontal: 80}}
                            action={getNavigateFunction(
                                navigation,
                                SCREENS.cardentry,
                            )}
                        />
                    </View>
                </View>
            )}
        </Container>
    );
};

export default Payment;
