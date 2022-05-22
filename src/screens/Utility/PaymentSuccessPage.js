import React from 'react';
import {Text, View} from 'react-native';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import {BackButton, NotificationButton} from '../../components/Buttons';
import Container from '../../components/Utils/Container';
import Success from '../../components/Utils/Success';
import TopBar from '../../components/Utils/TopBar';
import {SCREENS} from '../../navigation/screens';
import {getNavigateFunction} from '../../utils/functions';

const PaymentSuccessPage = ({navigation}) => {
    return (
        <Container backgroundColor={COLORS.white}>
            <TopBar>
                <BackButton
                    onPress={getNavigateFunction(navigation, SCREENS.home)}
                />
                <Text style={[TEXTS.header2, {fontSize: 18}]}>Payment</Text>
                <NotificationButton />
            </TopBar>
            <View style={[{flex: 1}, STYLES.centersXY]}>
                <Success />
            </View>
        </Container>
    );
};

export default PaymentSuccessPage;
