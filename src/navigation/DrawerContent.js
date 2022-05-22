import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useDispatch} from 'react-redux';
import ICONS from '../assets/icons';
import {COLORS, STYLES, TEXTS} from '../assets/styles';
import Icon from '../components/Icon';
import useUI from '../hooks/useUI';
import {logOut} from '../store/actions/auth';
import {height} from '../utils/constants';
import {SCREENS} from './screens';

export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.primary,
        flex: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: (153 / 812) * height,
    },
    item: {
        height: 50,
        borderRadius: 12,
        maxWidth: 267,
        ...STYLES.row,
        ...STYLES.centersY,
        paddingLeft: 16.48,
        marginHorizontal: 25,
        marginBottom: 15,
    },
    label: {
        ...TEXTS.poppinsRegular,
        marginLeft: 15,
    },
    logOutContainer: {
        ...STYLES.absolute,
        bottom: 50,
        marginTop: 'auto',
        ...STYLES.row,
        ...STYLES.centersY,
        left: 25 + 16.48,
    },
    logout: {
        color: COLORS.white,
        ...TEXTS.poppinsRegular,
        marginLeft: 16,
    },
});

const getIcon = (icon, focused) => (
    <Icon
        icon={icon}
        width={24}
        height={24}
        style={{
            tintColor: focused ? COLORS.primary : COLORS.white,
            marginRight: 0,
        }}
    />
);

const getLabel = (label, focused) => {
    return (
        <Text
            style={[
                styles.label,
                {color: focused ? COLORS.primary : COLORS.white},
            ]}>
            {label}
        </Text>
    );
};

const DrawerListItem = ({focused, label, icon, action}) => (
    <TouchableWithoutFeedback onPress={action}>
        <View
            style={[
                styles.item,
                {backgroundColor: focused ? COLORS.white : 'transparent'},
            ]}>
            {getIcon(icon, focused)}
            {getLabel(label, focused)}
            {label === SCREENS.profile && (
                <Icon
                    icon={ICONS.arrow_right}
                    width={24}
                    height={24}
                    style={{
                        marginLeft: 'auto',
                        tintColor: focused ? COLORS.primary : COLORS.white,
                    }}
                />
            )}
        </View>
    </TouchableWithoutFeedback>
);

function CustomDrawerContent(props) {
    const dispatch = useDispatch();
    const {activePage, setPage} = useUI();
    const logUserOut = () => dispatch(logOut());

    const handlePage = page => {
        setPage(page);
    };

    const links = [
        {
            name: SCREENS.home,
            alias: SCREENS.home,
            icon: ICONS.home,
            onClick: () => {
                handlePage(SCREENS.home);
                props.navigation.navigate('BottomTab', {screen: 'HomeTab'});
            },
        },
        {
            name: SCREENS.profile,
            alias: SCREENS.profile,
            icon: ICONS.profile_round,
            onClick: () => {
                handlePage(SCREENS.profile);
                props.navigation.navigate('BottomTab', {screen: 'ProfileTab'});
            },
        },
        {
            name: SCREENS.history,
            alias: SCREENS.history,
            icon: ICONS.history,
            onClick: () => {
                handlePage(SCREENS.history);
                props.navigation.navigate('BottomTab', {screen: 'HistoryTab'});
            },
        },
        {
            name: SCREENS.about,
            alias: SCREENS.about,
            icon: ICONS.info_circle,
            onClick: () => props.navigation.navigate(SCREENS.about),
        },
        {
            name: SCREENS.customerservice,
            alias: SCREENS.customerservice,
            icon: ICONS.customer_service,
            onClick: () => {
                handlePage(SCREENS.customerservice);
                props.navigation.navigate('BottomTab', {screen: 'ChatTab'});
            },
        },
    ];

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props} style={styles.wrapper}>
                {links.map((link, index) => (
                    <DrawerListItem
                        key={index}
                        focused={activePage === link.alias}
                        label={link.name}
                        icon={link.icon}
                        action={link.onClick}
                    />
                ))}
            </DrawerContentScrollView>
            <TouchableWithoutFeedback onPress={logUserOut}>
                <View style={styles.logOutContainer}>
                    <Icon icon={ICONS.logout} width={24} height={24} />
                    <Text style={styles.logout}>Log out</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default CustomDrawerContent;
