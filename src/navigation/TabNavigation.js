import React from 'react';
import {Image, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../screens/Chat';
import Documents from '../screens/Documents';
import {Home} from '../screens/Main';
import Profile from '../screens/Profile';
import {SCREENS} from './screens';
import ReportLeakage from '../screens/Utils/ReportLeakage';
import {COLORS, STYLES} from '../assets/styles';
import {FilledButton} from '../components/Buttons';
import Icon from '../components/Icon';
import ICONS from '../assets/icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={SCREENS.home} component={Home} />
            <Stack.Screen
                name={SCREENS.reportleakage}
                component={ReportLeakage}
            />
        </Stack.Navigator>
    );
};

const ChatStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Chat" component={Chat} />
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

const DocumentsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Documents" component={Documents} />
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
    [SCREENS.chat]: ICONS.tab_message,
    [SCREENS.profile]: ICONS.tab_profile,
    [SCREENS.documents]: ICONS.tab_document,
};

const CustomTabBarButton = ({accessibilityState, onPress, name}) => {
    const isFocused = accessibilityState.selected;
    return (
        <TouchableWithoutFeedback {...{onPress}}>
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
                            text={name}
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
                    height: 80,
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
                },
            })}>
            <Tab.Screen
                name={SCREENS.home}
                component={MainStackNavigator}
                options={{
                    tabBarButton: props => (
                        <CustomTabBarButton {...props} name={SCREENS.home} />
                    ),
                }}
            />
            <Tab.Screen
                name={SCREENS.chat}
                component={ChatStackNavigator}
                options={{
                    tabBarButton: props => (
                        <CustomTabBarButton {...props} name={SCREENS.chat} />
                    ),
                }}
            />
            <Tab.Screen
                name={SCREENS.profile}
                component={ProfileStackNavigator}
                options={{
                    tabBarButton: props => (
                        <CustomTabBarButton {...props} name={SCREENS.profile} />
                    ),
                }}
            />
            <Tab.Screen
                name={SCREENS.documents}
                component={DocumentsStackNavigator}
                options={{
                    tabBarButton: props => (
                        <CustomTabBarButton
                            {...props}
                            name={SCREENS.documents}
                        />
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
