import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import Container from '../../components/Utils/Container';
import TopBar from '../../components/Utils/TopBar';
import {BackButton, NotificationButton} from '../../components/Buttons';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import Logs from './utils/Logs';
import {getGoBackFunction} from '../../utils/functions';

const History = ({navigation}) => {
    return (
        <Container backgroundColor={COLORS.white}>
            <TopBar>
                <BackButton onPress={getGoBackFunction(navigation)} />
                <Text style={[TEXTS.header2, {fontSize: 18}]}>History</Text>
                <NotificationButton />
            </TopBar>
            <View style={{flex: 1}}>
                <Logs style={{}} />
            </View>
        </Container>
    );
};

export default History;
