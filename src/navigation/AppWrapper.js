import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import {Registration, PreRegistration, Login} from '../screens/Auth';
import {Home} from '../screens/Main';

export const SCREENS = {
    registration: 'Registration',
    onboarding: 'Onboarding',
    preregistration: 'PreRegistration',
    login: 'Login',
    home: 'Home',
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
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
                name={SCREENS.home}
                component={Home}
                options={{gestureEnabled: false}}
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
