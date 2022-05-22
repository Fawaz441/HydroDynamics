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
import {About, CustomerService, History} from '../screens/Utility';
import ReportLeakage from '../screens/Utility/ReportLeakage';
import {useSelector} from 'react-redux';
import BuyWater from '../screens/Utility/BuyWater';
import Payment from '../screens/Utility/Payment';
import CardEntryPage from '../screens/Utility/CardEntryPage';
import PaymentSuccessPage from '../screens/Utility/PaymentSuccessPage';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const TablessPages = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={SCREENS.reportleakage}
                component={ReportLeakage}
            />
            <Stack.Screen name={SCREENS.buywater} component={BuyWater} />
            <Stack.Screen name={SCREENS.payment} component={Payment} />
            <Stack.Screen name={SCREENS.cardentry} component={CardEntryPage} />
            <Stack.Screen
                name={SCREENS.paymentsuccess}
                component={PaymentSuccessPage}
            />
        </Stack.Navigator>
    );
};

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
                <Drawer.Screen
                    name="BottomTab"
                    component={BottomTabNavigator}
                />
                <Drawer.Screen name={SCREENS.profile} component={Profile} />
                <Drawer.Screen name={SCREENS.about} component={About} />
                <Drawer.Screen name={'TablessPages'} component={TablessPages} />
                {/* <Drawer.Screen name={SCREENS.buywater} component={BuyWater} /> */}
                {/* <Drawer.Screen
                    name={SCREENS.customerservice}
                    component={CustomerService}
                /> */}
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
            <Stack.Screen name={SCREENS.buywater} component={BuyWater} />
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
