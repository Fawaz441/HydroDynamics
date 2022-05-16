import 'react-native-gesture-handler';
import React from 'react';
import AppWrapper from './src/navigation/AppWrapper';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
    return (
        <Provider store={store}>
            <View style={{flex: 1}}>
                <AppWrapper />
            </View>
        </Provider>
    );
};

export default App;
