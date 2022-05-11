import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ICONS from '../../assets/icons';
import {COLORS, STYLES} from '../../assets/styles';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.lightblue,
        borderRadius: 8,
        shadowColor: '#1D1617',
        shadowRadius: 10,
        shadowOpacity: 0.07,
        shadowOffset: {
            height: 10,
            width: 0,
        },
        width: 42.27,
        height: 38.49,
        ...STYLES.centersXY,
    },
    transparentWrapper: {
        width: 42.27,
        height: 38.49,
        borderRadius: 8,
    },
    icon: {
        height: 17.32,
        width: 19.02,
    },
});

const NotificationButton = ({onPress}) => {
    const [notifications, setNotifications] = useState([1]);
    const hasNotifications = notifications.length > 0;
    return (
        <TouchableOpacity {...{onPress}}>
            <View style={styles.wrapper}>
                <Image
                    source={
                        hasNotifications
                            ? ICONS.notification
                            : ICONS.no_notification
                    }
                    style={styles.icon}
                    resizeMode="contain"
                />
            </View>
        </TouchableOpacity>
    );
};

export default NotificationButton;
