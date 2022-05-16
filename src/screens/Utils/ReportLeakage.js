import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import {
    BackButton,
    FilledButton,
    NotificationButton,
} from '../../components/Buttons';
import Input from '../../components/Inputs/Input';
import Container from '../../components/Utils/Container';
import SpaceFiller from '../../components/Utils/SpaceFiller';
import TopBar from '../../components/Utils/TopBar';
import {getGoBackFunction} from '../../utils/functions';

const styles = StyleSheet.create({
    form: {marginTop: 29.51, marginHorizontal: 29},
    submitBtnWrapper: {
        marginTop: 56,
        ...STYLES.centersXY,
        alignSelf: 'center',
    },
    submitBtn: {
        width: 212,
    },
});

const ReportLeakage = ({navigation}) => {
    return (
        <Container backgroundColor={COLORS.white}>
            <TopBar>
                <BackButton onPress={getGoBackFunction(navigation)} />
                <Text
                    style={
                        (TEXTS.poppinsRegular,
                        {fontSize: 18, color: COLORS.primary})
                    }>
                    Report
                </Text>
                <NotificationButton />
            </TopBar>
            <View style={styles.form}>
                <Input
                    placeholder={'Your Location'}
                    placeholderTextColor={COLORS.primary}
                    inputStyle={{color: COLORS.primary}}
                />
                <SpaceFiller space={15} />
                <Input
                    placeholder={'Your message'}
                    multiline
                    placeholderTextColor={COLORS.primary}
                    inputStyle={{
                        height: 180,
                        width: '100%',
                        color: COLORS.primary,
                        marginTop: 12,
                    }}
                    style={{
                        height: 180,
                        flexDirection: 'column',
                        width: '100%',
                    }}
                />
                <View style={styles.submitBtnWrapper}>
                    <FilledButton
                        text="Send"
                        style={styles.submitBtn}
                        fullWidth
                    />
                </View>
            </View>
        </Container>
    );
};

export default ReportLeakage;
