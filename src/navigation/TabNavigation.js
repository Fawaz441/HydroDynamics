import React from 'react';
import {Image, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../screens/Chat';
import History from '../screens/Utility/History';
import {Home} from '../screens/Main';
import Profile from '../screens/Profile';
import {SCREENS} from './screens';
import ReportLeakage from '../screens/Utility/ReportLeakage';
import {COLORS, STYLES} from '../assets/styles';
import {FilledButton} from '../components/Buttons';
import Icon from '../components/Icon';
import ICONS from '../assets/icons';
import useUI from '../hooks/useUI';
import {BOTTOM_TAB_HEIGHT} from '../utils/constants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={SCREENS.home} component={Home} />
        </Stack.Navigator>
    );
};

const ChatStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={SCREENS.chat} component={Chat} />
        </Stack.Navigator>
    );
};

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={SCREENS.profile} component={Profile} />
        </Stack.Navigator>
    );
};

const HistoryStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={SCREENS.history} component={History} />
        </Stack.Navigator>
    );
};

const getTabBarDisplay = routeName => {
    if (routeName === SCREENS.reportleakage) {
        return 'none';
    }
    return 'flex';
};

const styles = StyleSheet.create({
    focusedTab: {
        padding: 15,
        height: 48,
    },
    tabIcon: {
        height: 19,
        width: 20,
        tintColor: COLORS.white,
    },
    tabButton: {
        height: 48,
    },
    unfocusedTabIcon: {
        tintColor: '#B9BCBE',
    },
});

const tabIcons = {
    [SCREENS.home]: ICONS.tab_home,
    [SCREENS.customerservice]: ICONS.tab_message,
    [SCREENS.profile]: ICONS.tab_profile,
    [SCREENS.history]: ICONS.tab_document,
};

const CustomTabBarButton = ({accessibilityState, onPress, name}) => {
    const isFocused = accessibilityState.selected;
    const {setPage} = useUI();
    const onPressButton = () => {
        onPress();
        setPage(name);
    };
    return (
        <TouchableWithoutFeedback onPress={onPressButton}>
            <View style={{flex: 1}}>
                {isFocused ? (
                    <View style={styles.tabButton}>
                        <FilledButton
                            style={styles.focusedTab}
                            icon={
                                <Icon
                                    icon={tabIcons[name]}
                                    style={styles.tabIcon}
                                    resizeMode="contain"
                                />
                            }
                            text={
                                name === SCREENS.customerservice ? 'Chat' : name
                            }
                            iconStyle={{marginRight: 8}}
                        />
                    </View>
                ) : (
                    <View style={{height: 48, ...STYLES.centersXY}}>
                        <Icon
                            icon={tabIcons[name]}
                            width={20}
                            height={20}
                            style={styles.unfocusedTabIcon}
                            resizeMode="contain"
                        />
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarStyle: {
                    display: getTabBarDisplay(route?.name),
                    height: BOTTOM_TAB_HEIGHT,
                    margin: 0,
                    padding: 0,
                    backgroundColor: COLORS.white,
                    paddingHorizontal: 15,
                    paddingTop: 16,
                    borderTopWidth: 0,
                    elevation: 0,
                    ...STYLES.absolute,
                    bottom: 0,
                    left: 0,
                    shadowColor: '#000',
                    shadowOpacity: 0.25,
                    shadowRadius: 5,
                    shadowOffset: {
                        height: 4,
                        width: 0,
                    },
                },
            })}>
            <Tab.Screen
                name={'HomeTab'}
                component={MainStackNavigator}
                options={{
                    tabBarButton: props => (
                        <CustomTabBarButton {...props} name={SCREENS.home} />
                    ),
                }}
            />
            <Tab.Screen
                name={'ChatTab'}
                component={ChatStackNavigator}
                options={{
                    tabBarButton: props => (
                        <CustomTabBarButton
                            {...props}
                            name={SCREENS.customerservice}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'ProfileTab'}
                component={ProfileStackNavigator}
                options={{
                    tabBarButton: props => (
                        <CustomTabBarButton {...props} name={SCREENS.profile} />
                    ),
                }}
            />
            <Tab.Screen
                name={'HistoryTab'}
                component={HistoryStackNavigator}
                options={{
                    tabBarButton: props => (
                        <CustomTabBarButton {...props} name={SCREENS.history} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name={SCREENS.reportleakage}
                component={ReportLeakage}
                options={{tabBarIcon: props => getTabIcon(props)}}
            /> */}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
