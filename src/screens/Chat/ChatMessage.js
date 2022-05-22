import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ICONS from '../../assets/icons';
import {STYLES, TEXTS} from '../../assets/styles';
import Icon from '../../components/Icon';

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
    },
    message: {
        maxWidth: '75%',
        padding: 16,
    },
    reply: {
        backgroundColor: 'rgba(66, 227, 214, 0.07)',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    sentMessage: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    },
    messageText: {
        ...TEXTS.abeezee,
        fontSize: 14,
        color: '#000',
    },
    timeStampWrapper: {marginTop: 4, ...STYLES.row},
    replyTimeStamp: {
        ...TEXTS.abeezee,
        color: 'rgba(0, 0, 0, 0.4)',
        fontSize: 12,
    },
    sentMessageTimeStamp: {
        ...TEXTS.abeezee,
        color: 'rgba(0, 0, 0, 0.4)',
        fontSize: 12,
    },
    delivered: {
        marginLeft: 4,
    },
});

const ChatMessage = ({message, isReply, timeStamp, is_delivered}) => {
    return (
        <View style={styles.wrapper}>
            <View
                style={{
                    alignItems: isReply ? 'flex-start' : 'flex-end',
                    // backgroundColor: 'orange',
                }}>
                <View
                    style={[
                        styles.message,
                        isReply ? styles.reply : styles.sentMessage,
                    ]}>
                    <Text style={styles.messageText}>{message}</Text>
                </View>
            </View>
            <View
                style={[
                    styles.timeStampWrapper,
                    {alignSelf: isReply ? 'flex-start' : 'flex-end'},
                ]}>
                <Text
                    style={[
                        isReply
                            ? styles.replyTimeStamp
                            : styles.sentMessageTimeStamp,
                    ]}>
                    {timeStamp}
                </Text>
                {is_delivered && !isReply && (
                    <Icon
                        width={16}
                        height={16}
                        style={styles.delivered}
                        icon={ICONS.delivered}
                    />
                )}
            </View>
        </View>
    );
};

export default ChatMessage;
