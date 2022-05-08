import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../screens/Onboarding'
import Registration from '../screens/Auth/Registration';
import PreRegistration from '../screens/Auth/PreRegistration';

export const SCREENS = {
    registration: "Registration",
    onboarding:"Onboarding",
    preregistration:"PreRegistration"
}

const Stack = createNativeStackNavigator()


const Navigation = () => {
    return(
        <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown:false}}>
            <Stack.Screen name={SCREENS.onboarding} component={Onboarding} />
            <Stack.Screen name={SCREENS.preregistration} component={PreRegistration} />
            <Stack.Screen name={SCREENS.registration} component={Registration} />
        </Stack.Navigator>
    )
}


const AppWrapper = () => {
    return(
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    )
}

export default AppWrapper