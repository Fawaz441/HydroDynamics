import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Modal,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS, STYLES, TEXTS} from '../../assets/styles';
import {
    BackButton,
    FilledButton,
    NotificationButton,
} from '../../components/Buttons';
import Input from '../../components/Inputs/Input';
import Container from '../../components/Utils/Container';
import PlatformAwareKeyboardAvoidingView from '../../components/Utils/PlatformAwareKeyboardAvoidingView';
import SpaceFiller from '../../components/Utils/SpaceFiller';
import Success from '../../components/Utils/Success';
import TopBar from '../../components/Utils/TopBar';
import {SCREENS} from '../../navigation/screens';
import {getGoBackFunction, getNavigateFunction} from '../../utils/functions';
import {SUCCESSFUL_COMPLAINT_LOG} from '../../utils/texts';

const styles = StyleSheet.create({
    form: {
        marginTop: 29.51,
        marginHorizontal: 29,
        flex: 1,
        paddingBottom: 100,
    },
    submitBtnWrapper: {
        marginTop: 56,
        ...STYLES.centersXY,
        alignSelf: 'center',
    },
    submitBtn: {
        width: 212,
    },
    modalContent: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        ...STYLES.centersXY,
    },
    modalMainContent: {
        backgroundColor: COLORS.white,
        paddingVertical: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 12,
        shadowOffset: {
            height: 4,
            width: 0,
        },
    },
    closeSuccessBtn: {
        backgroundColor: COLORS.primary2,
        borderWidth: 3,
        borderColor: 'rgba(178, 178, 178, 1)',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 4,
    },
});

const ReportLeakage = ({navigation}) => {
    const {isAuthenticated} = useSelector(state => state.auth);
    const [showSuccess, setShowSuccess] = useState(false);
    const hideSuccessModal = () => setShowSuccess(false);
    const showSuccessModal = () => setShowSuccess(true);
    const goBackAction = getNavigateFunction(
        navigation,
        isAuthenticated ? SCREENS.home : SCREENS.onboarding,
    );
    const closePage = () => {
        hideSuccessModal();
        goBackAction();
    };
    return (
        <Container backgroundColor={COLORS.white}>
            {showSuccess && (
                <Modal visible={showSuccess} transparent>
                    <TouchableWithoutFeedback onPress={hideSuccessModal}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalMainContent}>
                                <Success text={SUCCESSFUL_COMPLAINT_LOG} />
                                <View style={[STYLES.mt_10, STYLES.centersXY]}>
                                    <TouchableOpacity
                                        onPress={closePage}
                                        style={styles.closeSuccessBtn}>
                                        <Text
                                            style={[
                                                TEXTS.buttonText,
                                                {
                                                    fontSize: 18,
                                                    color: COLORS.white,
                                                },
                                            ]}>
                                            Close
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            )}
            <TopBar>
                <BackButton onPress={goBackAction} />
                <Text
                    style={
                        (TEXTS.poppinsRegular,
                        {fontSize: 18, color: COLORS.primary})
                    }>
                    Report
                </Text>
                <NotificationButton />
            </TopBar>
            <PlatformAwareKeyboardAvoidingView style={styles.form}>
                <ScrollView style={{flex: 1, paddingBottom: 100}}>
                    {!isAuthenticated && (
                        <View>
                            <Input
                                placeholder={'Name'}
                                placeholderTextColor={COLORS.primary}
                                inputStyle={{color: COLORS.primary}}
                            />
                            <SpaceFiller space={15} />
                            <Input
                                placeholder={'Phone number'}
                                placeholderTextColor={COLORS.primary}
                                inputStyle={{color: COLORS.primary}}
                            />
                            <SpaceFiller space={15} />
                        </View>
                    )}
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
                            action={showSuccessModal}
                        />
                    </View>
                </ScrollView>
            </PlatformAwareKeyboardAvoidingView>
        </Container>
    );
};

export default ReportLeakage;
