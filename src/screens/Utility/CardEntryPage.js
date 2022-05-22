import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    KeyboardAvoidingView,
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
import {getGoBackFunction, getNavigateFunction} from '../../utils/functions';

const styles = StyleSheet.create({
    scrollview: {marginHorizontal: 15, paddingBottom: 100},
    paymentIconWrapper: {
        marginTop: 19,
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
    enterPrompt: {
        marginTop: 25,
        color: '#979797',
        ...TEXTS.primary,
        fontSize: 14,
    },
    textInput: {
        flex: 1,
        height: 48,
        borderWidth: 1,
        borderColor: '#B2B2B2',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 16,
        marginBottom: 14,
    },
    saveCardPrompt: {
        flexShrink: 1,
        marginLeft: 13,
        color: COLORS.grey,
        ...TEXTS.primary,
        fontSize: 14,
    },
});
const CardEntryPage = ({navigation}) => {
    const [saveCard, setSaveCard] = useState(false);
    return (
        <Container>
            <TopBar>
                <BackButton onPress={getGoBackFunction(navigation)} />
                <Text style={[TEXTS.header2, {fontSize: 18}]}>Payment</Text>
                <NotificationButton />
            </TopBar>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollview}>
                <Text style={[STYLES.centerText, styles.enterPrompt]}>
                    Enter Card Details
                </Text>
                <View style={styles.paymentIconWrapper}>
                    <View style={styles.paymentIcon}>
                        <Image
                            source={IMAGES.cards}
                            resizeMode="contain"
                            style={styles.cards}
                        />
                    </View>
                </View>
                <View style={[{marginTop: 28.74}]}>
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor="#41BC23"
                        placeholder="300 NGN"
                        editable={false}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor="#C6C3C3"
                        placeholder="Card Number"
                        keyboardType="numeric"
                    />
                    <View style={[STYLES.spaced, STYLES.row]}>
                        <TextInput
                            style={[styles.textInput, {marginRight: 38}]}
                            placeholderTextColor="#C6C3C3"
                            placeholder="CVV"
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor="#C6C3C3"
                            placeholder="Expiry Date"
                        />
                    </View>
                    <View style={[{marginTop: 29}, STYLES.centersXY]}>
                        <View style={STYLES.row}>
                            <CheckBox
                                boxType="square"
                                value={saveCard}
                                onTintColor={'#D5D5D5'}
                                onFillColor={'#D5D5D5'}
                                onCheckColor={'#fff'}
                                onValueChange={setSaveCard}
                                style={{
                                    height: 16,
                                    width: 16,
                                    marginLeft: 25,
                                }}
                            />
                            <Text style={styles.saveCardPrompt}>
                                Save card details for automatic payment next
                                time
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={[{marginTop: 37}, STYLES.centersXY]}>
                    <View style={STYLES.centersXY}>
                        <FilledButton
                            text={'Pay'}
                            style={{width: 278}}
                            action={getNavigateFunction(
                                navigation,
                                SCREENS.paymentsuccess,
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
};

export default CardEntryPage;
