import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback,
    TextInput,
    FlatList,
    ScrollView,
} from 'react-native';
import Container from '../../components/Utils/Container';
import TopBar from '../../components/Utils/TopBar';
import {BackButton, NotificationButton} from '../../components/Buttons';
import {STYLES, TEXTS, COLORS} from '../../assets/styles';
import TimeLineSeperator from './TimeLineSeperator';
import ChatMessage from './ChatMessage';
import {getGoBackFunction} from '../../utils/functions';
import {BOTTOM_TAB_HEIGHT, height} from '../../utils/constants';
import Icon from '../../components/Icon';
import ICONS from '../../assets/icons';
import moment from 'moment';
import SpaceFiller from '../../components/Utils/SpaceFiller';
import PlatformAwareKeyboardAvoidingView from '../../components/Utils/PlatformAwareKeyboardAvoidingView';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const styles = StyleSheet.create({
    content: {marginHorizontal: 40, flex: 1},
    logoSpace: {
        ...STYLES.row,
        ...STYLES.centersY,
        height: 100,
        flexBasis: 100,
    },
    messagesContainer: {
        marginTop: 17,
        paddingBottom: 100,
        // backgroundColor: 'red',
        // ...STYLES.absolute,
        // height: '100%',
        // width: '100%',
        // top: 0,
        // left: 0,
        // flex: 1,
    },
    timelineSeperator: {
        ...STYLES.row,
        ...STYLES.centersY,
    },
    sendMessageBox: {
        // ...STYLES.absolute,
        bottom: 0 + BOTTOM_TAB_HEIGHT,
        backgroundColor: COLORS.white,
        width: '100%',
        height: 66,
        paddingBottom: 16,
        ...STYLES.row,
        ...STYLES.centersY,
    },
    messageInput: {
        flex: 1,
        ...TEXTS.abeezee,
        color: 'rgba(0, 0, 0, 1)',
        padding: 0,
    },
    messageInputBox: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#E8E6EA',
        borderRadius: 15,
        height: 48,
        ...STYLES.row,
        ...STYLES.centersY,
        ...STYLES.spaced,
        flex: 1,
    },
    sendIcon: {
        height: 48,
        width: 48,
        borderWidth: 1,
        borderColor: '#E8E6EA',
        borderRadius: 15,
        marginLeft: 15,
        ...STYLES.centersXY,
    },
});

const Chat = ({navigation}) => {
    const [messages, setMessages] = useState([
        {
            text: 'Hi sir, i was unable to buy water for quiet some days now.',
            id: 1,
            is_reply: true,
            timeStamp: '2:55 PM',
        },
        {
            text: 'alright whats the error request you were receiving',
            id: 2,
            is_reply: false,
            timeStamp: '3:02 PM',
        },
        {text: 'TRansfer failed', id: 3, is_reply: true, timeStamp: '3:10PM'},
        {
            text: 'Alright i will get back to you soon, thank you.',
            id: 4,
            is_reply: false,
            timeStamp: '3:12PM',
        },
    ]);
    const [text, setText] = useState('');

    const sendMessage = () => {
        if (text.trim().length === 0) return;
        setMessages([
            ...messages,
            {
                text,
                id: messages.length + 1,
                is_reply: false,
                timeStamp: moment().format('HH:MM A'),
            },
        ]);
        setText('');
    };

    const messagesRef = React.useRef();

    return (
        <Container backgroundColor={COLORS.white}>
            <TopBar>
                <BackButton onPress={getGoBackFunction(navigation)} />
                <Text style={[TEXTS.header2, {fontSize: 18}]}>Chat</Text>
                <NotificationButton />
            </TopBar>
            <View style={styles.content}>
                <View style={styles.logoSpace}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        resizeMode="cover"
                        style={{width: 100, height: 101}}
                    />
                    <View style={STYLES.ml_10}>
                        <Text
                            style={[
                                TEXTS.header,
                                {
                                    fontSize: 18,
                                    color: '#000000',
                                    fontWeight: '400',
                                },
                            ]}>
                            Hydronamics
                        </Text>
                        <Text
                            style={[
                                TEXTS.abeezee,
                                {color: 'rgba(0, 0, 0, 0.4)'},
                            ]}>
                            Customer Care
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexBasis: height - 266 - BOTTOM_TAB_HEIGHT,
                    }}>
                    <TimeLineSeperator date={'Today'} />
                    <ScrollView
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.messagesContainer}
                        onContentSizeChange={() =>
                            messagesRef?.current?.scrollToEnd()
                        }
                        ref={messagesRef}>
                        {messages.map(item => (
                            <ChatMessage
                                message={item.text}
                                isReply={item.is_reply}
                                timeStamp={item.timeStamp}
                                is_delivered={true}
                                key={item.id}
                            />
                        ))}
                    </ScrollView>
                </View>
            </View>
            <PlatformAwareKeyboardAvoidingView
                // keyboardVerticalOffset={1000}
                style={{
                    height: 66,
                    flexBasis: 66,
                    marginHorizontal: 40,
                }}>
                <View style={styles.sendMessageBox}>
                    <View style={styles.messageInputBox}>
                        <TextInput
                            style={styles.messageInput}
                            placeholder={'Your message'}
                            placeholderTextColor={'rgba(0, 0, 0, 1)'}
                            onChangeText={setText}
                            value={text}
                        />
                        <Icon
                            icon={ICONS.plus}
                            width={16}
                            height={16}
                            style={{flexShrink: 0, marginLeft: 15}}
                        />
                    </View>
                    <TouchableWithoutFeedback onPress={sendMessage}>
                        <View style={styles.sendIcon}>
                            <Icon icon={ICONS.send} width={20} height={20} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </PlatformAwareKeyboardAvoidingView>
        </Container>
    );
};

export default Chat;
