import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import {Registration, PreRegistration, Login} from '../screens/Auth';
import {Home} from '../screens/Main';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigation';
import {SCREENS} from './screens';
import CustomDrawerContent from './DrawerContent';
import Profile from '../screens/Profile';
import {About, CustomerService, History} from '../screens/Utils';
import ReportLeakage from '../screens/Utils/ReportLeakage';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Navigation = () => {
    const {isAuthenticated} = useSelector(state => state.auth);
    console.log(isAuthenticated);
    if (isAuthenticated) {
        return (
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    overlayColor: 'transparent',
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="HomeTab" component={BottomTabNavigator} />
                <Drawer.Screen name={SCREENS.profile} component={Profile} />
                <Drawer.Screen name={SCREENS.history} component={History} />
                <Drawer.Screen name={SCREENS.about} component={About} />
                <Drawer.Screen
                    name={SCREENS.customerservice}
                    component={CustomerService}
                />
            </Drawer.Navigator>
        );
    }
    return (
        <Stack.Navigator
            initialRouteName={SCREENS.onboarding}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name={SCREENS.onboarding} component={Onboarding} />
            <Stack.Screen
                name={SCREENS.preregistration}
                component={PreRegistration}
                options={{gestureEnabled: false}}
            />
            <Stack.Screen
                name={SCREENS.registration}
                component={Registration}
            />
            <Stack.Screen name={SCREENS.login} component={Login} />
            <Stack.Screen
                name={SCREENS.reportleakage}
                component={ReportLeakage}
            />
        </Stack.Navigator>
    );
};

const AppWrapper = () => {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    );
};

export default AppWrapper;
