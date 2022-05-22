import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback,
    TextInput,
    FlatList,
} from 'react-native';
import Container from '../../components/Utils/Container';
import TopBar from '../../components/Utils/TopBar';
import {BackButton, NotificationButton} from '../../components/Buttons';
import {STYLES, TEXTS, COLORS} from '../../assets/styles';
import TimeLineSeperator from './TimeLineSeperator';
import ChatMessage from './ChatMessage';
import {getGoBackFunction} from '../../utils/functions';
import {BOTTOM_TAB_HEIGHT} from '../../utils/constants';
import Icon from '../../components/Icon';
import ICONS from '../../assets/icons';
import moment from 'moment';
import SpaceFiller from '../../components/Utils/SpaceFiller';

const styles = StyleSheet.create({
    content: {marginHorizontal: 40},
    logoSpace: {
        ...STYLES.row,
        ...STYLES.centersY,
    },
    messagesContainer: {
        marginTop: 17,
    },
    timelineSeperator: {
        ...STYLES.row,
        ...STYLES.centersY,
    },
    sendMessageBox: {
        ...STYLES.absolute,
        bottom: BOTTOM_TAB_HEIGHT,
        height: 66,
        paddingBottom: 16,
        backgroundColor: COLORS.white,
        left: 40,
        right: 40,
        ...STYLES.row,
        ...STYLES.centersY,
        zIndex: 1,
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
                <FlatList
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => (
                        <TimeLineSeperator date={'Today'} />
                    )}
                    ListFooterComponent={() => (
                        <SpaceFiller space={BOTTOM_TAB_HEIGHT + 300} />
                    )}
                    style={styles.messagesContainer}
                    // bounces={false}
                    data={messages}
                    ref={messagesRef}
                    onContentSizeChange={() =>
                        messagesRef.current?.scrollToEnd()
                    }
                    renderItem={({item}) => (
                        <ChatMessage
                            message={item.text}
                            isReply={item.is_reply}
                            timeStamp={item.timeStamp}
                            is_delivered={true}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
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
        </Container>
    );
};

export default Chat;
